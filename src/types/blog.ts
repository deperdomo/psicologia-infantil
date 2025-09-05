// ===================================
// 📝 TIPOS PARA EL BLOG DE PSICOLOGÍA INFANTIL
// ===================================

export interface BlogArticle {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  excerpt?: string;
  
  // Contenido principal
  introduction: string;
  current_data_research?: string;
  reflective_question?: string;
  anonymous_case?: string;
  psychological_analysis: string;
  practical_recommendations: string[] | string; // Array en DB, pero puede venir como string
  call_to_action?: string;
  empathetic_closing?: string;
  additional_resources?: any; // JSONB en DB
  
  // Contenido estructurado (JSONB en la DB)
  key_sections?: any; // JSONB
  FAQ_data?: any; // JSONB 
  summary_points?: any; // JSONB
  
  // Referencias (JSONB en la DB)
  bibliography?: any; // JSONB
  related_articles?: any; // JSONB
  external_links?: any; // JSONB
  
  // Imágenes
  image_1_path?: string;
  image_1_alt?: string;
  image_2_path?: string;
  image_2_alt?: string;
  image_3_path?: string;
  image_3_alt?: string;
  featured_image_url?: string;
  social_share_image?: string;
  
  // Productos y recomendaciones (JSONB en la DB)
  recommended_products?: any; // JSONB
  professional_recommendations?: any; // JSONB
  
  // SEO
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  schema_markup?: any; // JSONB
  breadcrumb_data?: any; // JSONB
  
  // Categorización
  category: string;
  subcategory?: string;
  tags?: string[]; // Array en DB
  target_audience?: string[]; // Array en DB
  age_range?: string;
  topic_complexity: string; // enum en DB
  psychological_approach?: string;
  evidence_level?: string;
  
  // Autoría
  author_name: string;
  author_email?: string;
  author_bio?: string;
  author_credentials?: string;
  author_photo_url?: string;
  author_social_links?: any; // JSONB
  
  // Estado
  status: string; // enum en DB
  review_status: string; // enum en DB
  published_at?: string;
  last_reviewed_at?: string;
  is_featured: boolean;
  is_trending: boolean;
  is_professional_content: boolean;
  
  // Timestamps
  created_at?: string;
  updated_at?: string;
  
  // Métricas
  view_count: number;
  likes_count: number;
  shares_count: number;
  reading_time_minutes?: number;
  
  // Configuración
  comments_enabled: boolean;
  professional_feedback_enabled: boolean;
  newsletter_mention?: string;
  related_newsletter_content?: any; // JSONB
}

// Tipo simplificado con URLs de imágenes generadas
export interface BlogArticleWithImages extends Omit<BlogArticle, 'image_1_path' | 'image_2_path' | 'image_3_path'> {
  image_1_url?: string;
  image_2_url?: string;
  image_3_url?: string;
}

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
  likes_count: number;
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
  sort_by?: 'published_at' | 'view_count' | 'likes_count' | 'title';
  sort_order?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

export interface BlogSearchResult {
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  slug: string;
  category: string;
  tags: string[];
  published_at: string;
  reading_time_minutes?: number;
  hero_image_url?: string;
  author_name: string;
  rank?: number;
}

// ===== TIPOS PARA VISTA SIMPLIFICADA =====

export interface BlogCardData {
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  slug: string;
  category: string;
  tags: string[];
  author_name: string;
  author_credentials?: string;
  published_at: string;
  reading_time_minutes?: number;
  image_1_url?: string;
  is_featured: boolean;
  is_trending: boolean;
  view_count: number;
  likes_count: number;
}

// ===== TIPOS PARA ESTADÍSTICAS =====

export interface BlogStats {
  total_articles: number;
  published_articles: number;
  featured_articles: number;
  trending_articles: number;
  total_views: number;
  total_likes: number;
  total_comments: number;
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
