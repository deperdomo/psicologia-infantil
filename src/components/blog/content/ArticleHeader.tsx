// ===================================
// 🎯 HEADER DE ARTÍCULO ESTILO PSICOLOGÍA Y MENTE
// Componente optimizado para replicar el diseño profesional
// ===================================

import {
  Calendar, Share2, Clock, CheckCircle,
  Users,
  Cake,
  BookOpen,
  BookText,
  GraduationCap
} from 'lucide-react';
import type { BlogArticle } from '../../../types/blog';
import { formatText } from '../../../utils/blog/textFormatter';
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
        text: article.meta_description || article.introduction?.substring(0, 200) + '...',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 animate-fadeInUp prose-psicologia">

      {/* Category and Professional Badge */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="tag-psychology">
          {article.category ? article.category.charAt(0).toUpperCase() + article.category.slice(1) : ''}
        </span>
        {article.is_professional_content && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <CheckCircle className="w-4 h-4 mr-1" />
            Artículo revisado
          </span>
        )}

        {/* Target Audience Badge */}
        {article.target_audience && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <Users className="w-4 h-4 mr-1" />
            {article.target_audience}
          </span>
        )}

        {/* Age Range Badge */}
        {article.age_range && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
            <Cake className="w-4 h-4 mr-1" />
            {article.age_range}
          </span>
        )}

        {/* Topic Complexity Badge */}
        {article.topic_complexity && (
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${article.topic_complexity === 'beginner'
              ? 'bg-green-100 text-green-800 border-green-200'
              : article.topic_complexity === 'intermediate'
                ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                : 'bg-red-100 text-red-800 border-red-200'
            }`}>
            {article.topic_complexity === 'beginner' && (
              <>
                <BookOpen className="w-4 h-4 mr-1" />
                Básico
              </>
            )}
            {article.topic_complexity === 'intermediate' && (
              <>
                <BookText className="w-4 h-4 mr-1" />
                Intermedio
              </>
            )}
            {article.topic_complexity === 'advanced' && (
              <>
                <GraduationCap className="w-4 h-4 mr-1" />
                Avanzado
              </>
            )}
          </span>
        )}
      </div>

      {/* Main Title */}
      <h1 className="prose-h1 animate-fadeInUp-delay-2">
        {article.title}
      </h1>

      {/* Subtitle */}
      {article.subtitle && (
        <h2 className="prose-article-title animate-fadeInUp-delay-3">
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
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
              style={{ aspectRatio: '1 / 1' }}
            />
          )}
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-500">{article.author_name}</span>
            </div>
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
      {article.image_1_url && (
        <div className="mb-8">
          <img
            src={article.image_1_url}
            alt={article.image_1_alt || article.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
          />
          {article.image_1_alt && (
            <p className="text-sm text-gray-500 italic text-center mt-2">
              {article.image_1_alt}
            </p>
          )}
        </div>
      )}



      {/* Introduction */}
      {/* Introduction con párrafos múltiples */}
      {article.introduction && (
        <div className="prose prose-lg max-w-none mb-8">
          <div className="prose-p text-xl leading-relaxed font-medium">
            {formatText(article.introduction)}
          </div>
        </div>
      )}

    </header>
  );
}
