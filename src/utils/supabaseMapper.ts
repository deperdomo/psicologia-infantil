import { type Recurso } from '../lib/supabase';
import type { BibliotecaCategory, AgeRange } from '../types/recursos';
import { IoHeart, IoBookOutline, IoBook, IoSchool, IoPersonAdd, IoBookmark } from 'react-icons/io5';

// Función para mapear age ranges de Supabase a nuestro tipo AgeRange
const mapAgeRanges = (ageRanges: string[]): AgeRange[] => {
  const mapping: { [key: string]: AgeRange } = {
    '0-3': '0-3',
    '3-6': '3-6', 
    '6-12': '6-12',
    '12+': '12+',
    'todas': 'todas',
    'todas_edades': 'todas',
    'infantil': '3-6',
    'adolescente': '12+',
    'adulto': '12+',
    // Fallbacks
    'bebe': '0-3',
    'nino': '3-6'
  };

  return ageRanges.map(range => mapping[range] || 'todas');
};

// Mapeo de categorías de Supabase a BibliotecaCategory
export const mapSupabaseToCategories = (recursos: Recurso[]): BibliotecaCategory[] => {
  // Definición de categorías con sus configuraciones
  const categoryConfigs = {
    cartas_que_curan: {
      id: 'cartas-que-curan',
      title: 'Cartas que Curan',
      description: 'Cartas terapéuticas para sanar heridas emocionales y fortalecer vínculos familiares',
      icon: IoHeart,
      folderPath: 'CARTAS QUE CURAN',
      color: 'bg-rose-50 border-rose-200'
    },
    colecciones_ayuda: {
      id: 'colecciones-ayuda', 
      title: 'Colecciones de Ayuda por Temas',
      description: 'Guías especializadas organizadas por temáticas específicas',
      icon: IoBookOutline,
      folderPath: 'COLECCIONES DE AYUDA POR TEMAS',
      color: 'bg-blue-50 border-blue-200'
    },
    cuentos_terapeuticos: {
      id: 'cuentos-terapeuticos',
      title: 'Cuentos Terapéuticos', 
      description: 'Historias que ayudan a los niños a entender y gestionar sus emociones',
      icon: IoBook,
      folderPath: 'CUENTOS TERAPÉUTICOS',
      color: 'bg-purple-50 border-purple-200'
    },
    fichas_psicoeducativas: {
      id: 'fichas-psicoeducativas',
      title: 'Fichas Psicoeducativas',
      description: 'Material educativo sobre conceptos psicológicos fundamentales',
      icon: IoSchool,
      folderPath: 'FICHAS PSICOEDUCATIVAS TEMÁTICAS',
      color: 'bg-green-50 border-green-200'
    },
    guias_breves: {
      id: 'guias-breves',
      title: 'Guías Breves para Padres', 
      description: 'Consejos prácticos y estrategias para la crianza consciente',
      icon: IoPersonAdd,
      folderPath: 'GUÍAS BREVES PARA PADRES',
      color: 'bg-amber-50 border-amber-200'
    },
    recomendaciones_libros: {
      id: 'recomendaciones-libros',
      title: 'Recomendaciones de Libros',
      description: 'Selección curada de libros con perspectiva clínica',
      icon: IoBookmark,
      folderPath: 'RECOMENDACIONES DE LIBROS CON MIRADA CLÍNICA',
      color: 'bg-indigo-50 border-indigo-200'
    }
  };

  // Agrupar recursos por categoría
  const groupedCategories: { [key: string]: BibliotecaCategory } = {};

  // Inicializar categorías vacías
  Object.entries(categoryConfigs).forEach(([key, config]) => {
    groupedCategories[key] = {
      ...config,
      resources: []
    };
  });

  // Mapear cada recurso a su categoría
  recursos.forEach(recurso => {
    const categoryKey = recurso.categoria;
    const category = groupedCategories[categoryKey];
    
    if (category) {
      // Mapear recurso de Supabase al formato Resource
      const mappedResource = {
        id: recurso.resource_id,
        title: recurso.title,
        description: recurso.description || '',
        fileName: recurso.word_file_name || recurso.pdf_file_name || 'document',
        type: recurso.is_premium ? 'premium' as const : 'gratuito' as const,
        resourceType: recurso.resource_type,
        ageRange: mapAgeRanges(recurso.age_ranges || []),
        difficulty: recurso.difficulty,
        estimatedTime: `${recurso.estimated_reading_time || 5} min`,
        tags: recurso.tags || [],
        downloadUrl: recurso.word_public_url || recurso.pdf_public_url || '', // Legacy
        wordFileUrl: recurso.word_public_url || undefined,
        pdfFileUrl: recurso.pdf_public_url || undefined,
        preview: recurso.description
      };

      category.resources.push(mappedResource);
    }
  });

  // Retornar solo categorías que tienen recursos
  return Object.values(groupedCategories).filter(category => category.resources.length > 0);
};
