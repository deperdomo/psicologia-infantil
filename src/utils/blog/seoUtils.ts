// ===================================
// 🔍 UTILIDADES PARA SEO AVANZADO
// ===================================

import type { BlogArticle } from '../../types/blog';
import type { SchemaMarkup, SEOConfig } from '../../types/seo';

/**
 * Genera Schema Markup automático para artículos de blog
 */
export function generateArticleSchema(article: BlogArticle): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting", "EducationalContent"],
    headline: article.title,
    alternativeHeadline: article.subtitle || article.title,
    description: article.meta_description || article.introduction?.substring(0, 160) + '...' || '',
    author: {
      "@type": "Person",
      name: article.author_name,
      jobTitle: "Psicólogo/a Especialista",
      qualifications: article.author_credentials || "Especialista en Psicología Infantil",
      image: article.author_photo_url
    },
    publisher: {
      "@type": "Organization",
      name: "Psicología Infantil Pro",
      logo: "https://psicologia-infantil.com/logo.png",
      url: "https://psicologia-infantil.com"
    },
    datePublished: article.published_at,
    dateModified: article.updated_at || article.published_at,
    image: [
      article.featured_image_url,
      article.social_share_image
    ].filter(Boolean) as string[],
    mainEntityOfPage: article.canonical_url || `https://psicologia-infantil.com/blog/${article.slug}`,
    educationalLevel: article.topic_complexity || 'intermediate',
    teaches: article.introduction,
    audience: {
      "@type": "Audience",
      audienceType: Array.isArray(article.target_audience)
        ? article.target_audience.join(', ')
        : article.target_audience || 'parents'
    },
    inLanguage: "es-ES",
    wordCount: calculateWordCount(article),
    articleSection: article.category,
    keywords: article.meta_keywords ? article.meta_keywords.split(',').map(k => k.trim()) : article.tags,
    citation: article.bibliography?.map((ref: { url: string }) => ref.url).filter(Boolean) as string[] || [],
    isAccessibleForFree: true
  };
}

/**
 * Genera configuración SEO completa para un artículo
 */
export function generateSEOConfig(article: BlogArticle): SEOConfig {
  const baseUrl = 'https://psicologia-infantil.com';
  
  return {
    title: `${article.title} | Psicología Infantil Pro`,
    description: article.meta_description || generateAutoDescription(article),
    keywords: article.meta_keywords ? article.meta_keywords.split(',').map(k => k.trim()) : article.tags || [],
    canonical_url: article.canonical_url || `${baseUrl}/blog/${article.slug}`,
    og_image: article.social_share_image || article.featured_image_url,
    twitter_card: 'summary_large_image',
    structured_data: generateArticleSchema(article)
  };
}

/**
 * Calcula el número de palabras en el artículo
 */
function calculateWordCount(article: BlogArticle): number {
  const textContent = [
    article.introduction,
    article.current_data_research,
    article.psychological_analysis,
    article.practical_recommendations,
    article.empathetic_closing
  ].filter(Boolean).join(' ');
  
  return textContent.split(/\s+/).length;
}

/**
 * Genera descripción automática si no existe
 */
function generateAutoDescription(article: BlogArticle): string {
  const intro = article.introduction || '';
  const words = intro.split(' ').slice(0, 25).join(' ');
  return words.length > 0 ? `${words}...` : 'Artículo especializado sobre psicología infantil y desarrollo emocional.';
}

/**
 * Optimiza keywords para SEO
 */
export function optimizeKeywords(keywords: string[]): string[] {
  return keywords
    .map(k => k.toLowerCase().trim())
    .filter((k, index, arr) => arr.indexOf(k) === index) // Eliminar duplicados
    .slice(0, 10); // Máximo 10 keywords
}

/**
 * Genera URL canónica
 */
export function generateCanonicalUrl(slug: string): string {
  return `https://psicologia-infantil.com/blog/${slug}`;
}

/**
 * Valida estructura de URL para SEO
 */
export function validateSlugSEO(slug: string): boolean {
  // Debe tener entre 3 y 60 caracteres
  if (slug.length < 3 || slug.length > 60) return false;
  
  // Solo letras, números y guiones
  if (!/^[a-z0-9-]+$/.test(slug)) return false;
  
  // No debe empezar o terminar con guión
  if (slug.startsWith('-') || slug.endsWith('-')) return false;
  
  // No debe tener guiones consecutivos
  if (slug.includes('--')) return false;
  
  return true;
}
