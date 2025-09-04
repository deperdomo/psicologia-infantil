import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { BibliotecaCategory } from '../types/recursos';
import { findCategoryBySlug, getCategorySlug } from '../utils/slugUtils';

interface UseCategoryRoutingReturn {
  selectedCategory: BibliotecaCategory | null;
  selectedCategoryId: string | null;
  categorySlug: string | null;
  navigateToCategory: (category: BibliotecaCategory) => void;
  navigateToCategories: () => void;
}

/**
 * Hook personalizado para manejar la navegación entre categorías usando rutas
 */
export function useCategoryRouting(categories: BibliotecaCategory[]): UseCategoryRoutingReturn {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  // Encontrar la categoría actual basada en el slug
  const selectedCategory = useMemo(() => {
    if (!slug || !categories.length) return null;
    return findCategoryBySlug(categories, slug);
  }, [slug, categories]);

  const selectedCategoryId = selectedCategory?.id || null;
  const categorySlug = slug || null;

  // Navegar a una categoría específica
  const navigateToCategory = (category: BibliotecaCategory) => {
    const slug = getCategorySlug(category.id, category.title);
    navigate(`/recursos/categoria/${slug}`);
    // Scroll to top cuando navegamos a una categoría
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegar de vuelta a la vista de todas las categorías
  const navigateToCategories = () => {
    navigate('/recursos');
    // Scroll to top cuando volvemos a la vista de categorías
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    selectedCategory,
    selectedCategoryId,
    categorySlug,
    navigateToCategory,
    navigateToCategories
  };
}
