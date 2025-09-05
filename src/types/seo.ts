// ===================================
// 🔍 TIPOS PARA SEO AVANZADO
// ===================================

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical_url: string;
  og_image?: string;
  twitter_card?: 'summary' | 'summary_large_image';
  structured_data?: SchemaMarkup;
}

export interface SchemaMarkup {
  "@context": string;
  "@type": string | string[];
  headline?: string;
  alternativeHeadline?: string;
  description?: string;
  author?: PersonSchema | PersonSchema[];
  datePublished?: string;
  dateModified?: string;
  image?: string | string[];
  publisher?: OrganizationSchema;
  mainEntityOfPage?: string;
  wordCount?: number;
  articleSection?: string;
  articleBody?: string;
  keywords?: string[];
  inLanguage?: string;
  educationalLevel?: string;
  teaches?: string;
  audience?: AudienceSchema;
  citation?: string[];
  isAccessibleForFree?: boolean;
}

export interface PersonSchema {
  "@type": "Person";
  name: string;
  jobTitle?: string;
  qualifications?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}

export interface OrganizationSchema {
  "@type": "Organization";
  name: string;
  logo?: string;
  url?: string;
  sameAs?: string[];
}

export interface AudienceSchema {
  "@type": "Audience";
  audienceType: string;
  geographicArea?: string;
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}
