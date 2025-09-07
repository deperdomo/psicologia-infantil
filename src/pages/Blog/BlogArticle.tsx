// ===================================
// 📄 PÁGINA DE ARTÍCULO INDIVIDUAL - BLOG PROFESIONAL ESTILO PSICOLOGÍA Y MENTE
// ===================================

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getBlogArticle } from '../../lib/supabaseBlog';
import { supabase } from '../../lib/supabase';
import { BlogMeta } from '../../components/blog';
import { 
  ArticleHeader, 
  ArticleContent, 
  ProfessionalRecommendations, 
  Bibliography, 
  RelatedArticles 
} from '../../components/blog/content';
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
        
        {/* Header del artículo estilo Psicología y Mente */}
        <ArticleHeader article={article} />
        
        {/* Contenido principal del artículo */}
        <ArticleContent article={article} />
        
        {/* Recomendaciones profesionales */}
        <ProfessionalRecommendations article={article} />
        
        {/* Referencias bibliográficas */}
        <Bibliography article={article} />
        
        {/* Artículos relacionados */}
        <RelatedArticles article={article} />
      </div>
    </>
  );
}
