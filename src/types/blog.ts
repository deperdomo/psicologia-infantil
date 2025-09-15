// ===================================
// 📝 TIPOS PARA EL BLOG DE PSICOLOGÍA INFANTIL
// ===================================

// Tipo para el análisis psicológico con título dinámico
export interface PsychologicalAnalysis {
  title: string;
  content: string;
}

// Tipo para la investigación actual con título dinámico
export interface CurrentDataResearch {
  title: string;
  content: string;
}

// Tipo para el cierre empático con título dinámico
export interface EmpatheticClosing {
  title: string;
  content: string;
}
// Tipo para las recomendaciones prácticas con título dinámico
export interface PracticalRecommendations {
  title: string;
  content: string;
}

export interface AnonymousCase {
  title: string;
  content: string;
}
export interface BlogArticle {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  
  // Imágenes
  image_1_alt?: string;
  image_1_url?: string;
  social_share_image?: string;
  
  // Contenido principal
  introduction: string;
  current_data_research?: CurrentDataResearch;
  reflective_question?: string;
  anonymous_case?: AnonymousCase;
  psychological_analysis: PsychologicalAnalysis;
  practical_recommendations: PracticalRecommendations;
  call_to_action?: string;
  empathetic_closing?: EmpatheticClosing;
  additional_resources?: any;
  
  // Contenido estructurado
  faq_data?: any;
  summary_points?: any;
  
  // Referencias
  bibliography?: any;
  related_articles?: any;
  
  // SEO
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  schema_markup?: any;
  
  // Categorización
  category?: string;
  subcategory?: string;
  tags?: string[];
  target_audience?: string;
  age_range?: string;
  topic_complexity?: string;
  
  // Productos y recomendaciones
  recommended_products?: any;
  professional_recommendations?: any;
  
  // Autoría
  author_name: string;
  author_email?: string;
  author_bio?: string;
  author_credentials?: string;
  author_photo_url?: string;
  author_social_links?: any;
  
  // Estado
  status?: string;
  published_at?: string;
  is_featured?: boolean;
  is_trending?: boolean;
  is_professional_content?: boolean;
  sort_order?: number;
  
  // Timestamps
  created_at?: string;
  updated_at?: string;
  
  // Métricas
  reading_time_minutes?: number;
}

// NOTA: BlogArticleWithImages eliminado - usando solo BlogArticle con image_1_url

// ===== TIPOS AUXILIARES =====

export interface KeySection {
  title: string;
  content: string;
  order: number;
  type: 'main' | 'subsection' | 'highlight';
}

export interface FAQItem {
  question: string;
  answer: string;
  order: number;
}

export interface RelatedArticle {
  title: string;
  url: string;
  relevance: 'high' | 'medium' | 'low';
  type: 'internal' | 'external';
}

export interface ExternalLink {
  title: string;
  url: string;
  description?: string;
  domain: string;
}

export interface BibliographyItem {
  title: string;
  authors?: string;
  year?: string;
  journal?: string;
  url?: string;
  doi?: string;
  type: 'article' | 'book' | 'website' | 'study';
}

export interface RecommendedProduct {
  name: string;
  url: string;
  price?: string;
  category?: string;
  description?: string;
}

export interface ProfessionalRecommendation {
  type: 'consultation' | 'therapy' | 'assessment' | 'workshop';
  title: string;
  description: string;
  contact_info?: string;
  url?: string;
}

export interface AuthorSocialLinks {
  website?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  admin_ids?: string;
}

export interface NewsletterContent {
  featured_in?: string;
  related_topics?: string[];
  cta_text?: string;
}

// ===== TIPOS PARA COMENTARIOS =====

export interface BlogComment {
  id: string;
  article_id: string;
  parent_comment_id?: string;
  
  // Datos del comentario
  author_name: string;
  author_email: string;
  author_profession?: string;
  author_website?: string;
  content: string;
  
  // Moderación
  status: 'pending' | 'approved' | 'rejected' | 'spam';
  moderation_reason?: string;
  is_professional_feedback: boolean;
  
  // Métricas
  replies_count: number;
  
  // Timestamps
  created_at: string;
  updated_at: string;
}

// ===== TIPOS PARA FILTROS Y BÚSQUEDA =====

export interface BlogFilters {
  category?: string;
  subcategory?: string;
  tags?: string[];
  target_audience?: string;
  age_range?: string;
  topic_complexity?: string;
  author_name?: string;
  is_featured?: boolean;
  is_trending?: boolean;
}

export interface BlogSearchParams extends BlogFilters {
  search_term?: string;
  sort_by?: 'published_at' | 'title';
  sort_order?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

export interface BlogSearchResult {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  category: string;
  tags: string[];
  published_at: string;
  reading_time_minutes?: number;
  image_1_url?: string;
  author_name: string;
  rank?: number;
}

// ===== TIPOS PARA VISTA SIMPLIFICADA =====

export interface BlogCardData {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  category: string;
  subcategory?: string;
  tags: string[];
  author_name: string;
  author_credentials?: string;
  published_at: string;
  reading_time_minutes?: number;
  image_1_url?: string;
  is_featured: boolean;
  is_trending: boolean;
}

// ===== TIPOS PARA ESTADÍSTICAS =====

export interface BlogStats {
  total_articles: number;
  published_articles: number;
  featured_articles: number;
  trending_articles: number;
  articles_by_category: Record<string, number>;
  top_articles: BlogCardData[];
}

// ===== CONSTANTES =====

export const BLOG_CATEGORIES = [
  'desarrollo',
  'emociones', 
  'comportamiento',
  'aprendizaje',
  'salud',
  'familia'
] as const;

export const TARGET_AUDIENCES = [
  'padres',
  'docentes', 
  'profesionales',
  'cuidadores'
] as const;

export const TOPIC_COMPLEXITIES = [
  'beginner',
  'intermediate',
  'advanced'
] as const;

export const ARTICLE_STATUSES = [
  'draft',
  'review', 
  'published',
  'archived'
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];
export type TargetAudience = typeof TARGET_AUDIENCES[number];
export type TopicComplexity = typeof TOPIC_COMPLEXITIES[number];
export type ArticleStatus = typeof ARTICLE_STATUSES[number];
