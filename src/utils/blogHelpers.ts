/**
 * Blog-related utility functions
 */

/**
 * Formats a date string to a localized Spanish format
 */
export const formatDate = (dateString: string): string => {
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

/**
 * Formats reading time in minutes to a readable string
 */
export const formatReadingTime = (minutes?: number): string => {
  if (!minutes) return 'Tiempo de lectura no especificado';
  return `${minutes} min de lectura`;
};

/**
 * Gets the appropriate Tailwind CSS classes for a category color scheme
 */
export const getCategoryColor = (category?: string): string => {
  if (!category) return 'bg-gray-100 text-gray-700 border-gray-200';
  
  const categoryColors: Record<string, string> = {
    'desarrollo_infantil': 'bg-blue-100 text-blue-700 border-blue-200',
    'educacion_emocional': 'bg-purple-100 text-purple-700 border-purple-200',
    'crianza_positiva': 'bg-pink-100 text-pink-700 border-pink-200',
    'problemas_comportamiento': 'bg-orange-100 text-orange-700 border-orange-200',
    'terapia_infantil': 'bg-green-100 text-green-700 border-green-200',
    'familia_relaciones': 'bg-yellow-100 text-yellow-700 border-yellow-200'
  };
  
  return categoryColors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
};

/**
 * Formats a category name from snake_case to Title Case
 */
export const formatCategoryName = (category: string): string => {
  return category.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
};

/**
 * Truncates text to a specified length and adds ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Creates a slug from a title string
 */
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñ\s-]/g, '') // Keep Spanish characters
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Formats view count with proper pluralization
 */
export const formatViewCount = (count: number): string => {
  if (count === 0) return 'Sin visualizaciones';
  if (count === 1) return '1 visualización';
  
  if (count >= 1000) {
    const thousands = Math.floor(count / 1000);
    const remainder = count % 1000;
    if (remainder === 0) {
      return `${thousands}k visualizaciones`;
    }
    return `${thousands}.${Math.floor(remainder / 100)}k visualizaciones`;
  }
  
  return `${count} visualizaciones`;
};

/**
 * Formats like count with proper pluralization
 */
export const formatLikeCount = (count: number): string => {
  if (count === 0) return 'Sin me gusta';
  if (count === 1) return '1 me gusta';
  return `${count} me gusta`;
};