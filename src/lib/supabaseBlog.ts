// ===================================
// 📝 FUNCIONES DE SUPABASE PARA BLOG
// ===================================

import { supabase } from './supabase'
import type { BlogArticle } from '../types/blog'

// ===================================
// 🔧 FUNCIONES HELPER
// ===================================

// Función para normalizar datos que vienen de la base de datos  
function parseArticleFromDB(raw: any): BlogArticle {
  // Función helper para asegurar que un campo sea un array
  const ensureArray = (value: any): any[] => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    
    // Si es string, intentar parsearlo como JSON
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return [value];
      }
    }
    
    // Si es objeto, intentar convertirlo
    if (typeof value === 'object' && value !== null) {
      const keys = Object.keys(value);
      if (keys.every(key => !isNaN(Number(key)))) {
        return keys.sort((a, b) => Number(a) - Number(b)).map(key => value[key]);
      }
      return [value];
    }
    
    return [value];
  };

  return {
    ...raw,
    additional_resources: raw.additional_resources || null,
    key_sections: ensureArray(raw.key_sections),
    faq_data: ensureArray(raw.faq_data),
    summary_points: ensureArray(raw.summary_points),
    bibliography: ensureArray(raw.bibliography),
    related_articles: ensureArray(raw.related_articles),
    external_links: ensureArray(raw.external_links),
    tags: ensureArray(raw.tags),
    recommended_products: ensureArray(raw.recommended_products),
    professional_recommendations: ensureArray(raw.professional_recommendations),
    is_featured: Boolean(raw.is_featured),
    is_trending: Boolean(raw.is_trending),
    is_professional_content: Boolean(raw.is_professional_content),
  };
}

// Helper para parsear arrays de artículos
const parseArticleArray = (data: Record<string, unknown>[]): BlogArticle[] => {
  if (!data || data.length === 0) {
    return [];
  }

  return data.map((article: Record<string, unknown>) => {
    try {
      return parseArticleFromDB(article);
    } catch (error) {
      console.error('Error parsing article:', article.id, error);
      return article; // Fallback
    }
  }) as BlogArticle[];
};

// ===================================
// 📚 FUNCIONES PARA ARTÍCULOS DEL BLOG
// ===================================

// Obtener todos los artículos publicados
export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error al obtener artículos del blog:', error)
    return []
  }

  console.log('Datos obtenidos de Supabase:', data?.length || 0, 'artículos');
  
  if (!data || data.length === 0) {
    console.warn('⚠️ No se encontraron artículos publicados');
    return [];
  }

  const parsedArticles = parseArticleArray(data);
  
  return parsedArticles;
}

// Obtener artículos por categoría
export const getBlogArticlesByCategory = async (categoria: string): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('category', categoria)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error al obtener artículos por categoría:', error)
    return []
  }

  return parseArticleArray(data || []);
}

// Obtener artículos por etiqueta
export const getBlogArticlesByTag = async (tag: string): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .contains('tags', [tag])
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error al obtener artículos por etiqueta:', error)
    return []
  }

  return parseArticleArray(data || []);
}

// Obtener un artículo específico por slug
export const getBlogArticle = async (slug: string): Promise<BlogArticle | null> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error al obtener artículo:', error)
    return null
  }

  if (!data) {
    return null;
  }

  try {
    return parseArticleFromDB(data) as BlogArticle;
  } catch (error) {
    console.error('Error parsing single article:', error);
    return data as BlogArticle; // Fallback
  }
}

// Obtener artículos relacionados
export const getRelatedBlogArticles = async (
  currentSlug: string, 
  categoria: string, 
  limit: number = 4
): Promise<BlogArticle[]> => {
  let query = supabase
    .from('blog_articles')
    .select('*')
    .neq('slug', currentSlug)
    .eq('status', 'published')

  // Priorizar artículos de la misma categoría
  if (categoria) {
    query = query.eq('category', categoria)
  }

  const { data, error } = await query
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error al obtener artículos relacionados:', error)
    return []
  }

  return parseArticleArray(data || []);
}

// Buscar artículos
export const searchBlogArticles = async (searchTerm: string): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .or(`title.ilike.%${searchTerm}%, introduction.ilike.%${searchTerm}%, meta_description.ilike.%${searchTerm}%`)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error al buscar artículos:', error)
    return []
  }

  return parseArticleArray(data || []);
}

// Obtener artículos destacados
export const getFeaturedBlogArticles = async (limit: number = 6): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('is_featured', true)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error al obtener artículos destacados:', error)
    return []
  }

  return parseArticleArray(data || []);
}

// Obtener últimos artículos
export const getLatestBlogArticles = async (limit: number = 5): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error al obtener últimos artículos:', error)
    return []
  }

  return parseArticleArray(data || []);
}

// Incrementar contador de vistas
export const incrementBlogViews = async (slug: string): Promise<boolean> => {
  try {
    const { error } = await supabase.rpc('increment_blog_views', {
      article_slug: slug
    })

    if (error) {
      console.error('Error al incrementar vistas:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error al incrementar vistas:', error)
    return false
  }
}

// ===================================
// 📊 FUNCIONES DE ESTADÍSTICAS
// ===================================

// Obtener estadísticas de artículos
export const getBlogStats = async () => {
  try {
    const { data: totalArticles, error: totalError } = await supabase
      .from('blog_articles')
      .select('id', { count: 'exact' })
      .eq('status', 'published')

    const { data: featuredArticles, error: featuredError } = await supabase
      .from('blog_articles')
      .select('id', { count: 'exact' })
      .eq('is_featured', true)
      .eq('status', 'published')

    if (totalError || featuredError) {
      console.error('Error al obtener estadísticas:', totalError || featuredError)
      return {
        totalArticles: 0,
        featuredArticles: 0
      }
    }

    return {
      totalArticles: totalArticles?.length || 0,
      featuredArticles: featuredArticles?.length || 0
    }
  } catch (error) {
    console.error('Error al obtener estadísticas:', error)
    return {
      totalArticles: 0,
      featuredArticles: 0
    }
  }
}

// ===================================
// 🏷️ FUNCIONES PARA CATEGORÍAS Y TAGS
// ===================================

// Obtener todas las categorías con conteo de artículos
export const getBlogCategories = async () => {
  try {
    const { data, error } = await supabase
      .from('blog_articles')
      .select('category')
      .eq('status', 'published')

    if (error) {
      console.error('Error al obtener categorías:', error)
      return []
    }

    // Contar artículos por categoría
    const categoryCounts = data?.reduce((acc: Record<string, number>, article) => {
      const category = article.category
      if (category) {
        acc[category] = (acc[category] || 0) + 1
      }
      return acc
    }, {})

    return Object.entries(categoryCounts || {}).map(([category, count]) => ({
      name: category,
      count
    }))
  } catch (error) {
    console.error('Error al obtener categorías:', error)
    return []
  }
}

// Obtener todos los tags con conteo de artículos
export const getBlogTags = async () => {
  try {
    const { data, error } = await supabase
      .from('blog_articles')
      .select('tags')
      .eq('status', 'published')

    if (error) {
      console.error('Error al obtener tags:', error)
      return []
    }

    // Extraer y contar todos los tags
    const tagCounts = data?.reduce((acc: Record<string, number>, article) => {
      if (article.tags && Array.isArray(article.tags)) {
        article.tags.forEach((tag: string) => {
          acc[tag] = (acc[tag] || 0) + 1
        })
      }
      return acc
    }, {})

    return Object.entries(tagCounts || {})
      .map(([tag, count]) => ({
        name: tag,
        count
      }))
      .sort((a, b) => b.count - a.count) // Ordenar por popularidad
  } catch (error) {
    console.error('Error al obtener tags:', error)
    return []
  }
}
