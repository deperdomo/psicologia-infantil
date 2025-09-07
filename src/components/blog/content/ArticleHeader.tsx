// ===================================
// 🎯 HEADER DE ARTÍCULO ESTILO PSICOLOGÍA Y MENTE
// Componente optimizado para replicar el diseño profesional
// ===================================

import { Calendar, User, Eye, Share2, Clock } from 'lucide-react';
import type { BlogArticle } from '../../../types/blog';

interface ArticleHeaderProps {
  article: BlogArticle;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.meta_description || article.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeInUp">
      {/* Breadcrumb Navigation */}
      {article.breadcrumb_data && (
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {article.breadcrumb_data.map((crumb: any, index: number) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {crumb.url ? (
                  <a 
                    href={crumb.url} 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {crumb.name}
                  </a>
                ) : (
                  <span className="text-gray-800 font-medium">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Category and Professional Badge */}
      <div className="flex items-center gap-3 mb-4 animate-fadeInUp-delay-1">
        <span className="tag-psychology">
          {article.category}
        </span>
        {article.is_professional_content && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Artículo revisado
          </span>
        )}
      </div>

      {/* Main Title */}
      <h1 className="prose-psicologia text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 animate-fadeInUp-delay-2">
        {article.title}
      </h1>

      {/* Subtitle */}
      {article.subtitle && (
        <h2 className="prose-psicologia text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium animate-fadeInUp-delay-3">
          {article.subtitle}
        </h2>
      )}

      {/* Article Meta Information */}
      <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-gray-200 mb-6">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          {article.author_photo_url && (
            <img 
              src={article.author_photo_url} 
              alt={article.author_name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-900">{article.author_name}</span>
            </div>
            {article.author_credentials && (
              <p className="text-sm text-gray-600">{article.author_credentials}</p>
            )}
          </div>
        </div>

        {/* Publication Date */}
        {article.published_at && (
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formatDate(article.published_at)}</span>
          </div>
        )}

        {/* Reading Time */}
        {article.reading_time_minutes && (
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{article.reading_time_minutes} min de lectura</span>
          </div>
        )}

        {/* Views Count */}
        {article.view_count && (
          <div className="flex items-center space-x-2 text-gray-600">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{article.view_count.toLocaleString()} vistas</span>
          </div>
        )}

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Compartir</span>
        </button>
      </div>

      {/* Featured Image */}
      {article.featured_image_url && (
        <div className="mb-8">
          <img 
            src={article.featured_image_url}
            alt={article.image_1_alt || article.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
          />
          {article.image_1_alt && (
            <p className="text-sm text-gray-600 mt-2 italic text-center">
              {article.image_1_alt}
            </p>
          )}
        </div>
      )}

      {/* Introduction */}
      {article.introduction && (
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl leading-relaxed text-gray-700 font-medium">
            {article.introduction}
          </p>
        </div>
      )}
    </header>
  );
}
