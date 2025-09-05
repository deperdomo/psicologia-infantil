// ===================================
// 🔍 COMPONENTE DE META TAGS Y SEO
// ===================================

import { useEffect } from 'react';
import type { BlogArticle } from '../../../types/blog';
import { generateSEOConfig, generateArticleSchema } from '../../../utils/blog/seoUtils';

interface BlogMetaProps {
  article: BlogArticle;
  baseUrl?: string;
  siteName?: string;
}

export default function BlogMeta({ 
  article, 
  baseUrl = 'https://psicologia-infantil.com',
  siteName = 'Psicología Infantil Pro'
}: BlogMetaProps) {
  
  useEffect(() => {
    const seoConfig = generateSEOConfig(article);
    const schema = generateArticleSchema(article);
    
    // Actualizar título
    document.title = seoConfig.title;
    
    // Función helper para actualizar o crear meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (isProperty) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', property);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.content = content;
    };
    
    // Función helper para actualizar link tags
    const updateLinkTag = (rel: string, href: string) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.rel = rel;
        document.head.appendChild(linkTag);
      }
      
      linkTag.href = href;
    };
    
    // Meta tags básicos
    updateMetaTag('description', seoConfig.description);
    updateMetaTag('keywords', seoConfig.keywords.join(', '));
    updateMetaTag('author', article.author_name);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'es-ES');
    
    // Open Graph
    updateMetaTag('og:title', seoConfig.title, true);
    updateMetaTag('og:description', seoConfig.description, true);
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:url', seoConfig.canonical_url, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', 'es_ES', true);
    
    if (seoConfig.og_image) {
      updateMetaTag('og:image', seoConfig.og_image, true);
      updateMetaTag('og:image:alt', `Imagen del artículo: ${article.title}`, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
    }
    
    // Open Graph - Article específico
    updateMetaTag('article:author', article.author_name, true);
    updateMetaTag('article:published_time', article.published_at || '', true);
    if (article.updated_at) {
      updateMetaTag('article:modified_time', article.updated_at, true);
    }
    updateMetaTag('article:section', article.category, true);
    
    // Tags del artículo
    if (article.tags) {
      // Remover tags anteriores
      document.querySelectorAll('meta[property="article:tag"]').forEach(tag => tag.remove());
      
      // Agregar nuevos tags
      article.tags.forEach(tag => {
        updateMetaTag('article:tag', tag, true);
      });
    }
    
    // Twitter Card
    updateMetaTag('twitter:card', seoConfig.twitter_card || 'summary_large_image');
    updateMetaTag('twitter:title', seoConfig.title);
    updateMetaTag('twitter:description', seoConfig.description);
    if (seoConfig.og_image) {
      updateMetaTag('twitter:image', seoConfig.og_image);
    }
    
    // Meta tags específicos para contenido educativo
    updateMetaTag('educational-level', article.topic_complexity || 'intermediate');
    
    // Verificar que target_audience es un array antes de usar join
    const targetAudienceStr = Array.isArray(article.target_audience) 
      ? article.target_audience.join(', ') 
      : (article.target_audience || '');
    updateMetaTag('target-audience', targetAudienceStr);
    
    if (article.age_range) {
      updateMetaTag('age-range', article.age_range);
    }
    
    // Meta tags para profesionales
    updateMetaTag('content-type', 'educational-article');
    updateMetaTag('specialty', 'child-psychology');
    if (article.evidence_level) {
      updateMetaTag('evidence-level', article.evidence_level);
    }
    
    // Canonical URL
    updateLinkTag('canonical', seoConfig.canonical_url);
    
    // Actualizar o crear schema markup
    let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema, null, 2);
    
    // Breadcrumb schema si existe
    if (article.breadcrumb_data && article.breadcrumb_data.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": article.breadcrumb_data.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": seoConfig.canonical_url
        }))
      };
      
      let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]') as HTMLScriptElement;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.type = 'application/ld+json';
        breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema, null, 2);
    }
    
    // Cleanup function para remover meta tags al desmontar
    return () => {
      // Solo limpiar en desarrollo, en producción los meta tags deben persistir
      if (process.env.NODE_ENV === 'development') {
        // Se puede agregar lógica de limpieza si es necesario
      }
    };
  }, [article, baseUrl, siteName]);

  // Este componente no renderiza nada visible
  return null;
}
