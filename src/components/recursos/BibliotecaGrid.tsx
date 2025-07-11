import { useState, useMemo } from 'react';
import type { BibliotecaCategory, Resource, AgeRange, ResourceType } from '../../types/recursos';
import { IoSearch, IoFilter, IoGrid, IoList } from 'react-icons/io5';
import { BibliotecaCategoryCard, FilterPanel, ResourceModal } from './index';

interface BibliotecaGridProps {
  categories: BibliotecaCategory[];
}

export default function BibliotecaGrid({ categories }: BibliotecaGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Filtros
  const [selectedAges, setSelectedAges] = useState<AgeRange[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [onlyFree, setOnlyFree] = useState(false);

  // Obtener todos los recursos para búsqueda global
  const allResources = useMemo(() => {
    return categories.flatMap(category => 
      category.resources.map(resource => ({
        ...resource,
        categoryTitle: category.title,
        categoryId: category.id
      }))
    );
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

      // Filtro por recursos gratuitos
      const matchesFree = !onlyFree || resource.type === 'gratuito';

      return matchesSearch && matchesAge && matchesType && matchesTags && matchesFree;
    });
  }, [allResources, searchTerm, selectedAges, selectedTypes, selectedTags, onlyFree]);

  // Obtener todos los tags únicos
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    categories.forEach(category => {
      category.resources.forEach(resource => {
        resource.tags.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags).sort();
  }, [categories]);

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
    setOnlyFree(false);
    setSearchTerm('');
  };

  const activeFiltersCount = selectedAges.length + selectedTypes.length + selectedTags.length + (onlyFree ? 1 : 0);

  // Vista de categoría específica
  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return null;

    return (
      <div className="space-y-8">
        {/* Header de categoría */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--border-light)]">
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-[var(--card-text-hover)] hover:text-[var(--button-hover)] mb-4 flex items-center gap-2 font-medium transition-colors"
          >
            ← Volver a categorías
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
              <category.icon className="w-8 h-8 text-[var(--text-on-gradient)]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--text)]">{category.title}</h2>
              <p className="text-[var(--muted-text)] font-medium">{category.description}</p>
            </div>
          </div>
          <div className="text-sm text-[var(--muted-text)] font-medium">
            {category.resources.length} recursos disponibles
          </div>
        </div>

        {/* Lista de recursos de la categoría */}
        <div className="grid gap-6">
          {category.resources.map((resource) => (
            <div
              key={resource.id}
              onClick={() => handleResourceSelect(resource)}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-light)] hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[var(--text)] group-hover:text-[var(--card-text-hover)] transition-colors">
                  {resource.title}
                </h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    resource.type === 'gratuito' 
                      ? 'bg-green-50 text-green-800 border-green-200' 
                      : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    {resource.type === 'gratuito' ? 'Gratuito' : 'Premium'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-50 text-gray-800 border border-gray-200">
                    {resource.estimatedTime}
                  </span>
                </div>
              </div>
              <p className="text-[var(--muted-text)] mb-4 font-medium leading-relaxed">{resource.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {resource.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[var(--card-text-hover)]/15 text-[var(--card-text-hover)] rounded-lg text-xs font-medium border border-[var(--card-text-hover)]/20"
                  >
                    {tag}
                  </span>
                ))}
                {resource.tags.length > 3 && (
                  <span className="text-xs text-[var(--muted-text)]">
                    +{resource.tags.length - 3} más
                  </span>
                )}
              </div>
              <div className="text-sm text-[var(--muted-text)] font-medium">
                Edades: {resource.ageRange.join(', ')} | Dificultad: {resource.difficulty}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Barra de búsqueda y filtros */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-light)]">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1 relative">
            <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--muted-text)] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar recursos por tema, palabra clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 transition-colors"
            />
          </div>

          {/* Controles */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors font-medium ${
                showFilters 
                  ? 'bg-[var(--card-text-hover)] text-white border-[var(--card-text-hover)]' 
                  : 'border-[var(--border-light)] hover:border-[var(--card-text-hover)] hover:text-[var(--card-text-hover)]'
              }`}
            >
              <IoFilter className="w-5 h-5" />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="flex border border-[var(--border-light)] rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[var(--card-text-hover)] text-white' 
                    : 'hover:bg-gray-50 hover:text-[var(--card-text-hover)]'
                }`}
              >
                <IoGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[var(--card-text-hover)] text-white' 
                    : 'hover:bg-gray-50 hover:text-[var(--card-text-hover)]'
                }`}
              >
                <IoList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Panel de filtros */}
        {showFilters && (
          <FilterPanel
            selectedAges={selectedAges}
            setSelectedAges={setSelectedAges}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            onlyFree={onlyFree}
            setOnlyFree={setOnlyFree}
            allTags={allTags}
            onClearFilters={clearFilters}
          />
        )}

        {/* Resultados de búsqueda */}
        {searchTerm && (
          <div className="mt-4 pt-4 border-t border-[var(--border-light)]">
            <p className="text-sm text-[var(--muted-text)]">
              {filteredResources.length} resultados encontrados para "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* Vista de búsqueda global */}
      {(searchTerm || activeFiltersCount > 0) && filteredResources.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--text)]">Resultados de búsqueda</h2>
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                onClick={() => handleResourceSelect(resource)}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-light)] hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-[var(--card-text-hover)] font-bold">
                    {resource.categoryTitle}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                    resource.type === 'gratuito' 
                      ? 'bg-green-50 text-green-800 border-green-200' 
                      : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    {resource.type === 'gratuito' ? 'Gratuito' : 'Premium'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--card-text-hover)] transition-colors mb-2">
                  {resource.title}
                </h3>
                <p className="text-[var(--muted-text)] text-sm mb-3 line-clamp-2">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {resource.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[var(--card-text-hover)]/15 text-[var(--card-text-hover)] rounded-lg text-xs font-medium border border-[var(--card-text-hover)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-[var(--muted-text)]">
                  {resource.estimatedTime} | {resource.ageRange.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (searchTerm || activeFiltersCount > 0) && filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[var(--muted-text)] text-lg">
            No se encontraron recursos que coincidan con tu búsqueda.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 text-[var(--card-text-hover)] hover:text-[var(--button-hover)] transition-colors font-medium"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        /* Vista de categorías */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
