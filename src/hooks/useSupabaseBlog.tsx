import { useEffect, useState, useMemo } from 'react';
import { 
  getBlogArticles, 
  getBlogArticle, 
  searchBlogArticles
} from '../lib/supabaseBlog';
import type { 
  BlogArticle, 
  BlogSearchParams, 
  BlogSearchResult,
  BlogCardData,
  BlogFilters
} from '../types/blog';

// Hook principal para obtener artículos del blog
export const useSupabaseBlog = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getBlogArticles();
        setArticles(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar artículos');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Datos derivados útiles
  const featuredArticles = useMemo(() => 
    articles.filter(article => article.is_featured), 
    [articles]
  );

  const trendingArticles = useMemo(() => 
    articles.filter(article => article.is_trending), 
    [articles]
  );

  const categories = useMemo(() => {
    const categorySet = new Set(
      articles
        .map(article => article.category || 'sin_categoria')
        .filter(category => category !== 'sin_categoria')
    );
    return Array.from(categorySet).sort();
  }, [articles]);

  const articlesByCategory = useMemo(() => {
    return articles.reduce((acc, article) => {
      const category = article.category || 'sin_categoria';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(article);
      return acc;
    }, {} as Record<string, BlogArticle[]>);
  }, [articles]);

  return { 
    articles, 
    featuredArticles,
    trendingArticles,
    categories,
    articlesByCategory,
    loading, 
    error 
  };
};

// Hook para obtener un artículo específico por slug
export const useBlogArticle = (slug: string) => {
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await getBlogArticle(slug);
        setArticle(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Artículo no encontrado');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return { article, loading, error };
};

// Hook para búsqueda de artículos
export const useBlogSearch = () => {
  const [results, setResults] = useState<BlogSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (params: BlogSearchParams) => {
    try {
      setLoading(true);
      const searchTerm = params.search_term || '';
      const data = await searchBlogArticles(searchTerm);
      
      // Convertir BlogArticle[] a BlogSearchResult[]
      const searchResults = data.map(article => ({
        id: article.id,
        title: article.title,
        subtitle: article.subtitle,
        slug: article.slug,
        category: article.category || '', // Puede ser null en BD
        tags: article.tags || [],
        published_at: article.published_at || '',
        reading_time_minutes: article.reading_time_minutes,
        featured_image_url: article.featured_image_url,
        author_name: article.author_name
      }));
      
      setResults(searchResults);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en búsqueda');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
    setError(null);
  };

  return { results, loading, error, search, clearResults };
};

// Hook para datos de cards (vista simplificada)
export const useBlogCards = (limit?: number) => {
  const [cards, setCards] = useState<BlogCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        // Obtener solo los campos necesarios para las cards
        const articles = await getBlogArticles();
        
        const cardData: BlogCardData[] = articles
          .map((article: BlogArticle) => ({
            id: article.id,
            title: article.title,
            subtitle: article.subtitle,
            slug: article.slug,
            category: article.category || 'sin_categoria', // Fallback para category nullable
            tags: article.tags || [],
            author_name: article.author_name,
            author_credentials: article.author_credentials || '',
            published_at: article.published_at || '',
            reading_time_minutes: article.reading_time_minutes,
            featured_image_url: article.image_1_path, // Usamos image_1_path que viene de la DB
            is_featured: article.is_featured || false,
            is_trending: article.is_trending || false
          }))
          .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
          .slice(0, limit);

        setCards(cardData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar artículos');
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [limit]);

  return { cards, loading, error };
};

// Hook para filtros dinámicos
export const useBlogFilters = () => {
  const [filters, setFilters] = useState<BlogFilters>({});
  const [availableFilters] = useState({
    categories: [] as string[],
    subcategories: [] as string[],
    audiences: [] as string[],
    complexities: [] as string[],
    authors: [] as string[]
  });

  // Actualizar filtro específico
  const updateFilter = (key: keyof BlogFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Limpiar filtros
  const clearFilters = () => {
    setFilters({});
  };

  // Limpiar filtro específico
  const clearFilter = (key: keyof BlogFilters) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  return {
    filters,
    availableFilters,
    updateFilter,
    clearFilters,
    clearFilter,
    hasActiveFilters: Object.keys(filters).length > 0
  };
};
