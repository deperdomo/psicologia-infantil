/**
 * Convierte un título en un slug URL-amigable
 * Ejemplo: "Manejo de Emociones" -> "manejo-de-emociones"
 */
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    // Reemplazar caracteres especiales del español
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/ç/g, 'c')
    // Reemplazar espacios y caracteres especiales con guiones
    .replace(/[^a-z0-9]/g, '-')
    // Eliminar guiones múltiples
    .replace(/-+/g, '-')
    // Eliminar guiones al inicio y final
    .replace(/^-|-$/g, '');
}

/**
 * Convierte un slug de vuelta a un formato legible
 * Ejemplo: "manejo-de-emociones" -> "Manejo de Emociones"
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Mapa de slugs personalizados para categorías específicas
 * Permite tener URLs más específicas y amigables para SEO
 */
export const CATEGORY_SLUG_MAP: Record<string, string> = {
  'manejo-de-emociones': 'manejo-de-emociones',
  'habilidades-sociales': 'habilidades-sociales',
  'autoestima-y-confianza': 'autoestima-y-confianza',
  'ansiedad-y-miedos': 'ansiedad-y-miedos',
  'separacion-y-divorcio': 'separacion-y-divorcio',
  'duelo-y-perdida': 'duelo-y-perdida',
  'tecnicas-de-relajacion': 'tecnicas-de-relajacion',
  'comunicacion-familiar': 'comunicacion-familiar',
};

/**
 * Obtiene el slug correcto para una categoría
 */
export function getCategorySlug(categoryId: string, categoryTitle: string): string {
  const customSlug = CATEGORY_SLUG_MAP[categoryId];
  if (customSlug) {
    return customSlug;
  }
  
  return createSlug(categoryTitle);
}

/**
 * Encuentra una categoría por su slug
 */
export function findCategoryBySlug(categories: any[], slug: string): any | null {
  return categories.find(category => {
    const categorySlug = getCategorySlug(category.id, category.title);
    return categorySlug === slug;
  }) || null;
}
