// ===================================
// 📄 PÁGINA DE ARTÍCULO INDIVIDUAL - BLOG PROFESIONAL
// ===================================

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getBlogArticle } from '../../lib/supabaseBlog';
import { supabase } from '../../lib/supabase';
import { BlogMeta, BlogBibliography } from '../../components/blog';
import type { BlogArticle } from '../../types/blog';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) {
        setError('No se especificó el artículo');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log('🔍 Cargando artículo con slug:', slug);
        
        // Primero verificar si hay artículos en general
        const { data: allArticles, error: checkError } = await supabase
          .from('blog_articles')
          .select('id, title, slug, status')
          .limit(5);
        
        console.log('📚 Artículos disponibles:', allArticles);
        console.log('❓ Error al verificar:', checkError);
        
        const data = await getBlogArticle(slug);
        console.log('📄 Datos del artículo:', data);
        
        if (!data) {
          console.log('❌ Artículo no encontrado para slug:', slug);
          setError(`Artículo con slug "${slug}" no encontrado`);
          return;
        }

        setArticle(data);
        setError(null);
      } catch (err) {
        console.error('💥 Error al cargar artículo:', err);
        setError(`Error al cargar el artículo: ${err instanceof Error ? err.message : 'Error desconocido'}`);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug, navigate]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Fecha no disponible';
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

  const getReadingTime = (minutes?: number) => {
    if (!minutes) return 'Tiempo de lectura no especificado';
    return `${minutes} min de lectura`;
  };


  const renderContent = (content?: string | string[] | any) => {
    console.log('🎨 Renderizando contenido:', {
      type: typeof content,
      isArray: Array.isArray(content),
      length: Array.isArray(content) ? content.length : 'N/A',
      value: content
    });
    
    if (!content) return null;
    
    // Si es un array de strings (como practical_recommendations)
    if (Array.isArray(content)) {
      if (content.length === 0) {
        return (
          <div className="text-gray-500 italic">
            No hay elementos en este array.
          </div>
        );
      }
      
      return (
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            {content.map((item, index) => (
              <li key={index} className="text-gray-800">
                {typeof item === 'string' ? item : item.point || JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    // Si es string normal
    if (typeof content === 'string') {
      return (
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p className="whitespace-pre-line">{content}</p>
        </div>
      );
    }
    
    // Fallback para otros tipos
    return (
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <p>{JSON.stringify(content, null, 2)}</p>
      </div>
    );
  };

  const renderAdditionalResources = (resources?: any) => {
    if (!resources || !Array.isArray(resources)) return null;
    
    return (
      <section className="bg-indigo-50 rounded-lg p-6 border border-indigo-200 mt-8">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
          📚 Recursos Adicionales
        </h3>
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-indigo-600 font-semibold">
                {resource.tipo === 'video' ? '🎥' : resource.tipo === 'artículo' ? '📄' : '🔗'}
              </span>
              <div>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:text-indigo-900 font-semibold underline"
                >
                  {resource.titulo}
                </a>
                {resource.descripcion && (
                  <p className="text-gray-600 text-sm mt-1">{resource.descripcion}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderKeySection = (sections?: any) => {
    if (!sections || !Array.isArray(sections)) return null;
    
    return (
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          📋 Secciones Clave
        </h3>
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {section.seccion || section.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {section.contenido || section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderFAQ = (faqData?: any) => {
    if (!faqData || !Array.isArray(faqData)) return null;
    
    return (
      <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          ❓ Preguntas Frecuentes
        </h3>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.pregunta || faq.question}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {faq.respuesta || faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderSummaryPoints = (points?: any) => {
    if (!points || !Array.isArray(points)) return null;
    
    return (
      <section className="bg-teal-50 rounded-lg p-6 border border-teal-200 mt-8">
        <h3 className="text-2xl font-bold text-teal-900 mb-4">
          📝 Puntos Clave
        </h3>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-teal-600 font-bold text-lg">•</span>
              <span className="text-gray-800">
                {typeof point === 'string' ? point : point.point || JSON.stringify(point)}
              </span>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Artículo no encontrado'}
            </h1>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              ← Volver al blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <BlogMeta article={article} />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section - Similar to psicologiaymente.com */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <button
                  onClick={() => navigate('/')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  🏠 Inicio
                </button>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <button
                    onClick={() => navigate('/blog')}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Blog
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">
                    {article.title.length > 50 
                      ? `${article.title.substring(0, 50)}...` 
                      : article.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Categoría - Similar to psicologiaymente.com */}
          <div className="mb-4">
            <span className="inline-block bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
          </div>

          {/* Título principal - Similar to psicologiaymente.com */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>
            
            {article.subtitle && (
              <h2 className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal mb-6">
                {article.subtitle}
              </h2>
            )}
          </header>

          {/* Metadata del artículo - Similar to psicologiaymente.com */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img 
                  src={article.author_photo_url || 'https://via.placeholder.com/40x40?text=👤'} 
                  alt={article.author_name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{article.author_name}</p>
                  {article.author_credentials && (
                    <p className="text-xs text-gray-500">{article.author_credentials}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>{formatDate(article.published_at)}</span>
                {article.reading_time_minutes && (
                  <span>• {getReadingTime(article.reading_time_minutes)}</span>
                )}
              </div>
            </div>
          </div>


          {/* Imagen destacada */}
          {article.featured_image_url && (
            <div className="mb-8">
              <img
                src={article.featured_image_url}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Contenido del artículo - Estilo más limpio similar a psicologiaymente.com */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Contenido principal del artículo */}
            {article.introduction && (
              <div className="text-gray-800 leading-relaxed">
                {renderContent(article.introduction)}
              </div>
            )}

            {/* Secciones destacadas con estilo limpio */}
            {article.current_data_research && (
              <div className="border-l-4 border-purple-600 pl-6 my-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Investigación Actual
                </h2>
                <div className="text-gray-800 leading-relaxed">
                  {renderContent(article.current_data_research)}
                </div>
              </div>
            )}

            {/* Pregunta reflexiva */}
            {article.reflective_question && (
              <section className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  🤔 Reflexionemos
                </h3>
                {renderContent(article.reflective_question)}
              </section>
            )}

            {/* Caso anónimo */}
            {article.anonymous_case && (
              <section className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center">
                  📖 Caso de Estudio
                </h3>
                {renderContent(article.anonymous_case)}
              </section>
            )}

            {/* Análisis psicológico */}
            {article.psychological_analysis && (
              <div className="my-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Análisis Psicológico
                </h2>
                <div className="text-gray-800 leading-relaxed">
                  {renderContent(article.psychological_analysis)}
                </div>
              </div>
            )}

            {/* Recomendaciones prácticas - Destacado */}
            {article.practical_recommendations && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Recomendaciones Prácticas
                </h2>
                <div className="text-gray-800 leading-relaxed">
                  {renderContent(article.practical_recommendations)}
                </div>
              </div>
            )}

            {/* Llamada a la acción */}
            {article.call_to_action && (
              <section className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                  🚀 ¿Qué puedes hacer ahora?
                </h3>
                {renderContent(article.call_to_action)}
              </section>
            )}

            {/* Cierre empático */}
            {article.empathetic_closing && (
              <section className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-pink-900 mb-4 flex items-center">
                  💝 Mensaje Final
                </h3>
                {renderContent(article.empathetic_closing)}
              </section>
            )}

            {/* Recursos adicionales */}
            {renderAdditionalResources(article.additional_resources)}

            {/* Secciones clave */}
            {renderKeySection(article.key_sections)}

            {/* FAQ */}
            {renderFAQ(article.FAQ_data)}

            {/* Puntos resumen */}
            {renderSummaryPoints(article.summary_points)}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                🏷️ Temas relacionados:
              </h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bibliografía */}
          {article.bibliography && article.bibliography.length > 0 && (
            <div className="mt-12">
              <BlogBibliography 
                bibliography={article.bibliography}
                style="apa"
                interactive={true}
                showStyleSelector={true}
              />
            </div>
          )}

          {/* Navegación */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              ← Volver al blog
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
