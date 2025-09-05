// ===================================
// 📝 TIPOS ESPECÍFICOS PARA DATOS JSONB DEL BLOG
// ===================================

// Tipos para los campos JSONB que vienen de la base de datos

export interface KeySectionDB {
  seccion: string;
  contenido: string;
}

export interface FAQItemDB {
  pregunta: string;
  respuesta: string;
}

export interface SummaryPointDB {
  point: string;
}

export interface BibliographyItemDB {
  id: string;
  authors: string[];
  year: number;
  title: string;
  journal?: string;
  publisher?: string;
  pages?: string;
  doi?: string;
  cited_in_text: boolean;
}

export interface RelatedArticleDB {
  titulo: string;
  slug: string;
  relevancia: string;
}

export interface ExternalLinkDB {
  url: string;
  descripcion: string;
}

export interface AdditionalResourceDB {
  tipo: string;
  titulo: string;
  url: string;
}

export interface RecommendedProductDB {
  nombre: string;
  url: string;
  categoria: string;
  precio_aprox: string;
}

export interface ProfessionalRecommendationDB {
  recommendation: string;
  description: string;
}

export interface AuthorSocialLinksDB {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface NewsletterContentDB {
  content: string;
  newsletter_edition: string;
  url: string;
}

export interface SchemaMarkupDB {
  "@type": string;
  headline: string;
  author: {
    "@type": string;
    name: string;
  };
  datePublished: string;
  publisher: {
    "@type": string;
    name: string;
  };
}

export interface BreadcrumbItemDB {
  name: string;
  url: string;
}

// Tipo para parsear los datos que vienen de la base de datos
export interface BlogArticleRaw {
  id: string;
  title: string;
  subtitle?: string;
  introduction: string;
  current_data_research?: string;
  reflective_question?: string;
  anonymous_case?: string;
  psychological_analysis: string;
  practical_recommendations: string[]; // Array de strings en DB
  call_to_action?: string;
  empathetic_closing?: string;
  additional_resources?: AdditionalResourceDB[]; // Array JSONB
  key_sections?: KeySectionDB[]; // Array JSONB
  FAQ_data?: FAQItemDB[]; // Array JSONB
  summary_points?: SummaryPointDB[]; // Array JSONB
  bibliography?: BibliographyItemDB[]; // Array JSONB
  related_articles?: RelatedArticleDB[]; // Array JSONB
  external_links?: ExternalLinkDB[]; // Array JSONB
  image_1_path?: string;
  image_2_path?: string;
  image_3_path?: string;
  image_1_alt?: string;
  image_2_alt?: string;
  image_3_alt?: string;
  featured_image_url?: string;
  social_share_image?: string;
  recommended_products?: RecommendedProductDB[]; // Array JSONB
  professional_recommendations?: ProfessionalRecommendationDB[]; // Array JSONB
  category: string;
  subcategory?: string;
  tags?: string[]; // Array en DB
  target_audience?: string[]; // Array en DB
  age_range?: string;
  psychological_approach?: string;
  evidence_level?: string;
  topic_complexity: string;
  slug: string;
  meta_description?: string;
  meta_keywords?: string;
  excerpt?: string;
  canonical_url?: string;
  schema_markup?: SchemaMarkupDB; // Object JSONB
  breadcrumb_data?: BreadcrumbItemDB[]; // Array JSONB
  author_name: string;
  author_email?: string;
  author_bio?: string;
  author_credentials?: string;
  author_photo_url?: string;
  author_social_links?: AuthorSocialLinksDB; // Object JSONB
  status: string;
  review_status: string;
  published_at?: string;
  last_reviewed_at?: string;
  is_featured: boolean;
  is_trending: boolean;
  is_professional_content: boolean;
  view_count: number;
  likes_count: number;
  shares_count: number;
  comments_enabled: boolean;
  professional_feedback_enabled: boolean;
  reading_time_minutes?: number;
  newsletter_mention?: string;
  related_newsletter_content?: NewsletterContentDB; // Object JSONB
  created_at?: string;
  updated_at?: string;
}

// Función de utilidad para convertir datos raw de DB a formato de la app
export function parseArticleFromDB(raw: any): BlogArticleRaw {
  // Función helper para convertir practical_recommendations
  const parsePracticalRecommendations = (value: any): string[] => {
    if (!value) return [];
    
    // Si ya es un array, retornarlo
    if (Array.isArray(value)) {
      return value;
    }
    
    // Si es un objeto con llaves numéricas (problema común)
    if (typeof value === 'object' && value !== null) {
      const keys = Object.keys(value);
      if (keys.every(key => !isNaN(Number(key)))) {
        // Es un objeto con índices numéricos, convertir a array
        const converted = keys.sort((a, b) => Number(a) - Number(b)).map(key => value[key]);
        return converted;
      }
    }
    
    // Si es string, intentar parsearlo como JSON
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        return parsePracticalRecommendations(parsed); // Recursión
      } catch {
        // Si falla el parse, retornar como array de un elemento
        return [value];
      }
    }
    
    // Fallback
    return [];
  };

  // Función helper general para asegurar que un campo sea un array
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
    practical_recommendations: parsePracticalRecommendations(raw.practical_recommendations),
    additional_resources: ensureArray(raw.additional_resources),
    key_sections: ensureArray(raw.key_sections),
    FAQ_data: ensureArray(raw.FAQ_data),
    summary_points: ensureArray(raw.summary_points),
    bibliography: ensureArray(raw.bibliography),
    related_articles: ensureArray(raw.related_articles),
    external_links: ensureArray(raw.external_links),
    tags: ensureArray(raw.tags),
    target_audience: ensureArray(raw.target_audience),
    recommended_products: ensureArray(raw.recommended_products),
    professional_recommendations: ensureArray(raw.professional_recommendations),
    breadcrumb_data: ensureArray(raw.breadcrumb_data),
    view_count: raw.view_count || 0,
    likes_count: raw.likes_count || 0,
    shares_count: raw.shares_count || 0,
    is_featured: Boolean(raw.is_featured),
    is_trending: Boolean(raw.is_trending),
    is_professional_content: Boolean(raw.is_professional_content),
    comments_enabled: Boolean(raw.comments_enabled),
    professional_feedback_enabled: Boolean(raw.professional_feedback_enabled),
  };
}
