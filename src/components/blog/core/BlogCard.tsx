import { useNavigate } from 'react-router-dom';
import type { BlogCardData } from '../../../types/blog';

interface BlogCardProps {
  article: BlogCardData;
  viewMode?: 'grid' | 'list';
  onSelect?: (article: BlogCardData) => void;
}

export default function BlogCard({ article, viewMode = 'grid', onSelect }: BlogCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onSelect) {
      onSelect(article);
    } else {
      navigate(`/blog/${article.slug}`);
    }
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

  const cardClasses = viewMode === 'grid' 
    ? "group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
    : "group cursor-pointer transform transition-all duration-300 hover:scale-[1.01]";

  const layoutClasses = viewMode === 'grid' 
    ? "flex flex-col h-full"
    : "flex flex-row";

  return (
    <article onClick={handleClick} className={cardClasses}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
        <div className={layoutClasses}>
          {/* Imagen destacada */}
          {article.image_1_url && (
            <div className={viewMode === 'grid' ? "relative h-52 overflow-hidden" : "w-1/3 h-48 overflow-hidden"}>
              <img 
                src={article.image_1_url}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {(article.is_featured || article.is_trending) && (
                <div className="absolute top-3 left-3 flex gap-2">
                  {article.is_featured && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Destacado
                    </span>
                  )}
                  {article.is_trending && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Contenido */}
          <div className={`${viewMode === 'grid' ? 'flex-1 p-6' : 'flex-1 p-6'} flex flex-col`}>
            {/* Header con categoría */}
            <div className="mb-3">
              {article.category && (
                <span className="inline-block px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                  {article.category.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                </span>
              )}
            </div>

            {/* Título y subtítulo */}
            <div className="mb-4 flex-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-3 leading-tight">
                {article.title}
              </h3>
              
              {article.subtitle && (
                <h4 className="text-base font-medium text-gray-600 line-clamp-2 mb-3">
                  {article.subtitle}
                </h4>
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 2).map((tag: string, index: number) => (
                  <span 
                    key={index}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {article.tags.length > 2 && (
                  <span className="text-xs text-gray-500">
                    +{article.tags.length - 2}
                  </span>
                )}
              </div>
            )}

            {/* Footer con autor y estadísticas */}
            <div className="border-t border-gray-100 pt-3 mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">
                      {article.author_name?.charAt(0).toUpperCase() || 'A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {article.author_name || 'Autor'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatReadingTime(article.reading_time_minutes)}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  {formatDate(article.published_at)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
