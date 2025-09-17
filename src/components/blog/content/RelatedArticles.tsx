// ===================================
// 🔗 ARTÍCULOS RELACIONADOS ESTILO PSICOLOGÍA Y MENTE
// Grid de artículos con información completa y diseño optimizado
// ===================================

import { ArrowRight, Clock } from 'lucide-react';
import type { BlogArticle } from '../../../types/blog';

interface RelatedArticlesProps {
  article: BlogArticle;
}

export default function RelatedArticles({ article }: RelatedArticlesProps) {
  if (!article.related_articles || !Array.isArray(article.related_articles) || article.related_articles.length === 0) {
    return null;
  }

  const relatedArticles = article.related_articles;

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRelevanceText = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'Muy relacionado';
      case 'medium': return 'Relacionado';
      case 'low': return 'Algo relacionado';
      default: return 'Relacionado';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="prose-h3">
            📚 Artículos relacionados
          </h3>
          <p className="prose-p">
            Continúa profundizando en estos temas relacionados
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((relatedArticle, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden article-card-hover shadow-soft group"
            >
              {/* Imagen del artículo */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={relatedArticle.image_url}
                  alt={relatedArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge de relevancia */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getRelevanceColor(relatedArticle.relevance)}`}>
                    {getRelevanceText(relatedArticle.relevance)}
                  </span>
                </div>
                {/* Badge de categoría */}
                <div className="absolute top-3 right-3">
                  <span className="tag-psychology text-xs">
                    {relatedArticle.category}
                  </span>
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="p-6">
                {/* Título */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {relatedArticle.title}
                </h4>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {relatedArticle.description}
                </p>

                {/* Meta información */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    {/* Autor */}
                    <div className="flex items-center space-x-2">
                      <img
                        src={relatedArticle.author_image}
                        alt={relatedArticle.author_name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>{relatedArticle.author_name}</span>
                    </div>
                    
                    {/* Tiempo de lectura */}
                    {relatedArticle.reading_time && (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{relatedArticle.reading_time} min</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Botón de leer más */}
                <a
                  href={relatedArticle.type === 'internal' 
                    ? `/blog/${relatedArticle.slug}` 
                    : relatedArticle.slug
                  }
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group-hover:underline transition-colors"
                  target={relatedArticle.type === 'external' ? '_blank' : '_self'}
                  rel={relatedArticle.type === 'external' ? 'noopener noreferrer' : ''}
                >
                  Leer artículo
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer con CTA */}
        <div className="text-center mt-8 pt-6 border-t border-blue-200">
          <p className="text-gray-700 mb-4">
            ¿Te gustó este contenido? Explora más artículos en nuestro blog
          </p>
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver todos los artículos
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
