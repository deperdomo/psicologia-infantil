import { useState, useMemo } from 'react';
import type { BlogCardData } from '../../types/blog';
import BlogCard from './core/BlogCard';
import LoadingState from '../../pages/Recursos/LoadingState';
import ErrorState from '../../pages/Recursos/ErrorState';
import EmptyState from '../../pages/Recursos/EmptyState';
import { useSupabaseBlog, useBlogCards, useBlogSearch } from '../../hooks/useSupabaseBlog';

interface BlogGridProps {
  initialCategory?: string;
  showSearch?: boolean;
  showFilters?: boolean;
  maxItems?: number;
  viewMode?: 'grid' | 'list';
  title?: string;
}

export default function BlogGrid({
  initialCategory,
  showSearch = false,
  showFilters = false,
  maxItems,
  viewMode: propViewMode = 'grid',
  title = 'Blog de Psicología Infantil'
}: BlogGridProps) {
  // Estados locales
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || '');
  const [selectedArticle, setSelectedArticle] = useState<BlogCardData | null>(null);
  const [currentViewMode, setCurrentViewMode] = useState<'grid' | 'list'>(propViewMode);

  // Hooks
  const { articles, categories, loading: articlesLoading, error: articlesError } = useSupabaseBlog();
  const { cards, loading: cardsLoading, error: cardsError } = useBlogCards(maxItems);
  const { 
    results: searchResults, 
    loading: searchLoading, 
    error: searchError,
    search: performSearch 
  } = useBlogSearch();

  // Estados derivados
  const isLoading = articlesLoading || cardsLoading || searchLoading;
  const hasError = articlesError || cardsError || searchError;

  // Determinar qué datos mostrar
  const displayData: BlogCardData[] = useMemo(() => {
    if (searchTerm) {
      // Convertir resultados de búsqueda a formato BlogCardData
      return searchResults.map(result => ({
        id: result.id,
        title: result.title,
        subtitle: result.subtitle,
        excerpt: result.excerpt,
        slug: result.slug,
        category: result.category,
        tags: result.tags,
        author_name: result.author_name,
        author_credentials: '',
        published_at: result.published_at,
        reading_time_minutes: result.reading_time_minutes,
        image_1_url: result.hero_image_url,
        is_featured: false,
        is_trending: false,
        view_count: 0,
        likes_count: 0
      }));
    }
    
    if (selectedCategory) {
      return cards.filter(card => card.category === selectedCategory);
    }
    
    return maxItems ? cards : articles.map(article => ({
      id: article.id,
      title: article.title,
      subtitle: article.subtitle,
      excerpt: article.excerpt,
      slug: article.slug,
      category: article.category,
      tags: article.tags || [],
      author_name: article.author_name,
      author_credentials: article.author_credentials,
      published_at: article.published_at || '',
      reading_time_minutes: article.reading_time_minutes,
      image_1_url: article.image_1_path,
      is_featured: article.is_featured,
      is_trending: article.is_trending,
      view_count: article.view_count,
      likes_count: article.likes_count
    }));
  }, [searchTerm, searchResults, selectedCategory, cards, maxItems, articles]);

  // Handlers
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      performSearch({ search_term: term });
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setSearchTerm(''); // Limpiar búsqueda al filtrar por categoría
  };

  const formatCategoryName = (category: string) => {
    return category.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
  };

  // Renderizado condicional
  if (isLoading) {
    return <LoadingState message="Cargando artículos del blog..." />;
  }

  if (hasError) {
    return (
      <ErrorState 
        error="Error al cargar los artículos del blog"
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (displayData.length === 0 && !searchTerm && !selectedCategory) {
    return (
      <EmptyState 
        title="No hay artículos publicados aún"
        subtitle="Próximamente encontrarás contenido valioso sobre psicología infantil"
      />
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        
        {/* Búsqueda y controles */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Búsqueda */}
          {showSearch && (
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
          )}

          {/* Controles de vista */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentViewMode('grid')}
              className={`p-2 rounded-md ${
                currentViewMode === 'grid'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="text-lg">⊞</span>
            </button>
            <button
              onClick={() => setCurrentViewMode('list')}
              className={`p-2 rounded-md ${
                currentViewMode === 'list'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="text-lg">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filtros de categoría */}
      {showFilters && categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryFilter('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === ''
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todas las categorías
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {formatCategoryName(category)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Resultados */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          {searchTerm ? (
            `${displayData.length} resultado${displayData.length !== 1 ? 's' : ''} para "${searchTerm}"`
          ) : selectedCategory ? (
            `${displayData.length} artículo${displayData.length !== 1 ? 's' : ''} en ${formatCategoryName(selectedCategory)}`
          ) : (
            `${displayData.length} artículo${displayData.length !== 1 ? 's' : ''} disponible${displayData.length !== 1 ? 's' : ''}`
          )}
        </p>
      </div>

      {/* Grid/List de artículos */}
      {displayData.length === 0 ? (
        <EmptyState 
          title="No se encontraron artículos"
          subtitle={searchTerm ? 'Prueba con otros términos de búsqueda' : 'No hay artículos en esta categoría'}
        />
      ) : (
        <div className={`
          ${currentViewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
          }
        `}>
          {displayData.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              viewMode={currentViewMode}
            />
          ))}
        </div>
      )}

      {/* Modal de artículo (si es necesario) */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{selectedArticle.title}</h3>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedArticle.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Por {selectedArticle.author_name}</span>
                <span className="mx-2">•</span>
                <span>{new Date(selectedArticle.published_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
