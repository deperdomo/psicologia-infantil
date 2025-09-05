import type { BlogCardData } from '../../types/blog';

interface BlogCardProps {
  article: BlogCardData;
  onSelect: (article: BlogCardData) => void;
  viewMode?: 'grid' | 'list';
}

export default function BlogCard({ article, onSelect, viewMode = 'grid' }: BlogCardProps) {
  const handleClick = () => {
    onSelect(article);
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Fecha no disponible';
    }
  };

  const formatReadingTime = (minutes?: number) => {
    if (!minutes) return 'Tiempo de lectura no especificado';
    return `${minutes} min de lectura`;
  };

  const getCategoryColor = (category?: string) => {
    if (!category) return 'bg-gray-100 text-gray-700 border-gray-200';
    
    const categoryColors: Record<string, string> = {
      'desarrollo_infantil': 'bg-blue-100 text-blue-700 border-blue-200',
      'educacion_emocional': 'bg-purple-100 text-purple-700 border-purple-200',
      'crianza_positiva': 'bg-pink-100 text-pink-700 border-pink-200',
      'problemas_comportamiento': 'bg-orange-100 text-orange-700 border-orange-200',
      'terapia_infantil': 'bg-green-100 text-green-700 border-green-200',
      'familia_relaciones': 'bg-yellow-100 text-yellow-700 border-yellow-200'
    };
    
    return categoryColors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const cardClasses = viewMode === 'grid' 
    ? "group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
    : "group cursor-pointer transform transition-all duration-300 hover:scale-[1.01]";

  const layoutClasses = viewMode === 'grid' 
    ? "flex flex-col h-full"
    : "flex flex-row";

  return (
    <article onClick={handleClick} className={cardClasses}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 h-full">
        <div className={layoutClasses}>
          {/* Imagen destacada */}
          {article.image_1_url && (
            <div className={viewMode === 'grid' ? "relative h-48 overflow-hidden" : "w-1/3 h-48 overflow-hidden"}>
              <img 
                src={article.image_1_url}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {(article.is_featured || article.is_trending) && (
                <div className="absolute top-3 left-3 flex gap-2">
                  {article.is_featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Destacado
                    </span>
                  )}
                  {article.is_trending && (
                    <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      🔥 Trending
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Contenido */}
          <div className={`${viewMode === 'grid' ? 'flex-1 p-6' : 'flex-1 p-6'} flex flex-col`}>
            {/* Header con categoría y metadatos */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                {article.category && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(article.category)}`}>
                    {article.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                )}
                <span className="text-xs text-gray-500">
                  {formatDate(article.published_at)}
                </span>
              </div>
              
              {article.reading_time_minutes && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {formatReadingTime(article.reading_time_minutes)}
                </span>
              )}
            </div>

            {/* Título y subtítulo */}
            <div className="mb-3 flex-1">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-2">
                {article.title}
              </h3>
              
              {article.subtitle && (
                <h4 className="text-sm font-medium text-gray-600 line-clamp-1 mb-2">
                  {article.subtitle}
                </h4>
              )}
              
              {article.excerpt && (
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{article.tags.length - 3} más
                  </span>
                )}
              </div>
            )}

            {/* Footer con autor y estadísticas */}
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 mr-3">
                    <span className="text-white text-xs font-bold">
                      {article.author_name?.charAt(0).toUpperCase() || 'A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {article.author_name || 'Autor no especificado'}
                    </p>
                    {article.author_credentials && (
                      <p className="text-xs text-gray-500">
                        {article.author_credentials}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {article.view_count && (
                    <span className="flex items-center gap-1">
                      👁️ {article.view_count.toLocaleString()}
                    </span>
                  )}
                  {article.likes_count && (
                    <span className="flex items-center gap-1">
                      ❤️ {article.likes_count}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
