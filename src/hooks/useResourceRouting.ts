import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { BibliotecaCategory, Resource } from '../types/recursos';
import { findCategoryBySlug, getCategorySlug } from '../utils/slugUtils';

interface UseResourceRoutingReturn {
  selectedCategory: BibliotecaCategory | null;
  selectedCategoryId: string | null;
  categorySlug: string | null;
  selectedResource: Resource | null;
  selectedResourceId: string | null;
  navigateToCategory: (category: BibliotecaCategory) => void;
  navigateToCategories: () => void;
  navigateToResource: (resource: Resource, category?: BibliotecaCategory) => void;
  closeResource: () => void;
}

/**
 * Hook personalizado para manejar la navegación entre categorías y recursos usando rutas
 */
export function useResourceRouting(categories: BibliotecaCategory[]): UseResourceRoutingReturn {
  const { slug, resourceId } = useParams<{ slug?: string; resourceId?: string }>();
  const navigate = useNavigate();

  // Encontrar la categoría actual basada en el slug
  const selectedCategory = useMemo(() => {
    if (!slug || !categories.length) return null;
    return findCategoryBySlug(categories, slug);
  }, [slug, categories]);

  // Encontrar el recurso actual basado en el resourceId
  const selectedResource = useMemo(() => {
    if (!resourceId || !categories.length) return null;
    
    // Buscar en todas las categorías y subcategorías
    for (const category of categories) {
      // Buscar en recursos principales de la categoría
      const resource = category.resources.find(r => r.id === resourceId);
      if (resource) return resource;
      
      // Buscar en subcategorías
      if (category.subcategories) {
        for (const subcategory of category.subcategories) {
          const subResource = subcategory.resources.find(r => r.id === resourceId);
          if (subResource) return subResource;
        }
      }
    }
    
    return null;
  }, [resourceId, categories]);

  const selectedCategoryId = selectedCategory?.id || null;
  const categorySlug = slug || null;
  const selectedResourceId = resourceId || null;

  // Navegar a una categoría específica
  const navigateToCategory = (category: BibliotecaCategory) => {
    const slug = getCategorySlug(category.id, category.title);
    navigate(`/recursos/categoria/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegar de vuelta a la vista de todas las categorías
  const navigateToCategories = () => {
    navigate('/recursos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegar a un recurso específico
  const navigateToResource = (resource: Resource, category?: BibliotecaCategory) => {
    if (category) {
      // Si tenemos categoría, navegar dentro de la categoría
      const slug = getCategorySlug(category.id, category.title);
      navigate(`/recursos/categoria/${slug}/${resource.id}`);
    } else if (selectedCategory) {
      // Si ya estamos en una categoría, mantenerla
      const slug = getCategorySlug(selectedCategory.id, selectedCategory.title);
      navigate(`/recursos/categoria/${slug}/${resource.id}`);
    } else {
      // Si no hay categoría, navegar directamente al recurso
      navigate(`/recursos/${resource.id}`);
    }
  };

  // Cerrar el recurso (volver a la vista anterior)
  const closeResource = () => {
    if (selectedCategory) {
      // Si estamos en una categoría, volver a la categoría
      const slug = getCategorySlug(selectedCategory.id, selectedCategory.title);
      navigate(`/recursos/categoria/${slug}`);
    } else {
      // Si no hay categoría, volver a la vista principal
      navigate('/recursos');
    }
  };

  return {
    selectedCategory,
    selectedCategoryId,
    categorySlug,
    selectedResource,
    selectedResourceId,
    navigateToCategory,
    navigateToCategories,
    navigateToResource,
    closeResource
  };
}