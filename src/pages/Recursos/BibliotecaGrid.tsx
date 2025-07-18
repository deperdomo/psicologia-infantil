import { useState, useMemo } from 'react';
import type { BibliotecaCategory, Resource, AgeRange, ResourceType } from '../../types/recursos';
import BibliotecaCategoryCard from './BibliotecaCategoryCard';
import FilterPanel from './FilterPanel';
import CategoryHeader from './CategoryHeader';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';
import ResourceModal from './ResourceModal';
import SearchBar from './SearchBar';
import ResourceCard from './ResourceCard';
import ResourceListItem from './ResourceListItem';
import SubcategorySection from './SubcategorySection';
import LoadingState from './LoadingState';
import { useSupabaseRecursos } from '../../hooks/useSupabaseRecursos';

interface BibliotecaGridProps {
  categories?: BibliotecaCategory[]; // Hacer opcional para compatibilidad
}

export default function BibliotecaGrid({ categories: propCategories }: BibliotecaGridProps) {
  // Hook de Supabase para obtener categorías
  const { categories: supabaseCategories, loading: supabaseLoading, error: supabaseError } = useSupabaseRecursos();
  
  // Usar categorías de Supabase si están disponibles, sino usar las pasadas como props
  const categories = supabaseCategories.length > 0 ? supabaseCategories : (propCategories || []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  
  // Filtros
  const [selectedAges, setSelectedAges] = useState<AgeRange[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Obtener todos los recursos para búsqueda global
  const allResources = useMemo(() => {
    return categories.flatMap(category => {
      // Recursos de la categoría principal
      const mainResources = category.resources.map(resource => ({
        ...resource,
        categoryTitle: category.title,
        categoryId: category.id
      }));
      
      // Recursos de las subcategorías
      const subResources = category.subcategories?.flatMap(subcategory => 
        subcategory.resources.map(resource => ({
          ...resource,
          categoryTitle: category.title,
          categoryId: category.id,
          subcategoryTitle: subcategory.title,
          subcategoryId: subcategory.id
        }))
      ) || [];
      
      return [...mainResources, ...subResources];
    });
  }, [categories]);

  // Filtrar recursos
  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      // Búsqueda por texto
      const matchesSearch = searchTerm === '' || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Filtro por edad
      const matchesAge = selectedAges.length === 0 || 
        selectedAges.some(age => resource.ageRange.includes(age)) ||
        resource.ageRange.includes('todas');

      // Filtro por tipo de recurso
      const matchesType = selectedTypes.length === 0 || 
        selectedTypes.includes(resource.resourceType);

      // Filtro por tags
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => resource.tags.includes(tag));

      return matchesSearch && matchesAge && matchesType && matchesTags;
    });
  }, [allResources, searchTerm, selectedAges, selectedTypes, selectedTags]);

  // Obtener todos los tags únicos
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    categories.forEach(category => {
      // Tags de recursos principales
      category.resources.forEach(resource => {
        resource.tags.forEach(tag => tags.add(tag));
      });
      
      // Tags de recursos de subcategorías
      category.subcategories?.forEach(subcategory => {
        subcategory.resources.forEach(resource => {
          resource.tags.forEach(tag => tags.add(tag));
        });
      });
    });
    return Array.from(tags).sort();
  }, [categories]);

  // Funciones de evento
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleResourceSelect = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const clearFilters = () => {
    setSelectedAges([]);
    setSelectedTypes([]);
    setSelectedTags([]);
    setSearchTerm('');
  };

  const activeFiltersCount = selectedAges.length + selectedTypes.length + selectedTags.length;

  // Si está cargando, mostrar loading
  if (supabaseLoading) {
    return <LoadingState />;
  }

  // Si hay error y no hay categorías, mostrar error
  if (supabaseError && categories.length === 0) {
    return <ErrorState error={supabaseError} onRetry={() => window.location.reload()} />;
  }

  // Si no hay categorías, mostrar mensaje
  if (!categories || categories.length === 0) {
    return (
      <EmptyState 
        title="No hay recursos disponibles en este momento"
        subtitle="Por favor, inténtelo más tarde"
      />
    );
  }

  // Vista de categoría específica
  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return null;

    // Calcular total de recursos (principal + subcategorías)
    const totalResources = category.resources.length + 
      (category.subcategories?.reduce((sum, sub) => sum + sub.resources.length, 0) || 0);

    return (
      <div className="space-y-8">
        {/* Header de categoría */}
        <CategoryHeader 
          category={category}
          totalResources={totalResources}
          onBack={() => setSelectedCategory(null)}
        />

        {/* Lista de recursos de la categoría */}
        <div className="space-y-8">
          {/* Recursos principales */}
          {category.resources.length > 0 && (
            <div className="grid gap-6">
              {category.resources.map((resource) => (
                <ResourceListItem
                  key={resource.id}
                  resource={resource}
                  onSelect={handleResourceSelect}
                />
              ))}
            </div>
          )}

          {/* Subcategorías */}
          {category.subcategories?.map((subcategory) => (
            <SubcategorySection
              key={subcategory.id}
              subcategory={subcategory}
              onResourceSelect={handleResourceSelect}
            />
          ))}
        </div>

        {/* Modal de recurso para vista de categoría */}
        {selectedResource && (
          <ResourceModal
            resource={selectedResource}
            onClose={() => setSelectedResource(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Barra de búsqueda y filtros */}
      <div>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          viewMode={viewMode}
          setViewMode={setViewMode}
          activeFiltersCount={activeFiltersCount}
          filteredResourcesCount={filteredResources.length}
        />

        {/* Panel de filtros */}
        {showFilters && (
          <FilterPanel
            selectedAges={selectedAges}
            setSelectedAges={setSelectedAges}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            allTags={allTags}
            onClearFilters={clearFilters}
          />
        )}
      </div>

      {/* Vista de búsqueda global */}
      {(searchTerm || activeFiltersCount > 0) && filteredResources.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Resultados de búsqueda</h2>
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredResources.map((resource) => (
              viewMode === 'grid' ? (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onSelect={handleResourceSelect}
                  viewMode={viewMode}
                />
              ) : (
                <ResourceListItem
                  key={resource.id}
                  resource={resource}
                  onSelect={handleResourceSelect}
                />
              )
            ))}
          </div>
        </div>
      ) : (searchTerm || activeFiltersCount > 0) && filteredResources.length === 0 ? (
        <EmptyState onClearFilters={clearFilters} />
      ) : (
        /* Vista de categorías */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {categories.map((category) => (
            <BibliotecaCategoryCard
              key={category.id}
              category={category}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>
      )}

      {/* Modal de recurso */}
      {selectedResource && (
        <ResourceModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
}

// Export both default and named for compatibility
export { BibliotecaGrid };
