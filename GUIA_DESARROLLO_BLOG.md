# 📝 Guía de Desarrollo - Blog de Psicología Infantil v3.0

## 📋 Resumen Ejecutivo

Esta guía proporciona las instrucciones completas para implementar la sección de blog (`/blog`) en la aplicación de psicología infantil, inspirada en la arquitectura y estructura de contenido de **PsicologíayMente.com**. El blog seguirá el mismo patrón arquitectural que la sección de recursos, usando Supabase como backend, con un enfoque específico en contenido académico y profesional.

### 🎯 **MODELO DE REFERENCIA: PsicologíayMente.com**
Hemos analizado exhaustivamente el artículo: "¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?" para extraer las mejores prácticas en:
- ✅ Estructura de contenido académico
- ✅ Schema markup avanzado 
- ✅ Sistema de referencias bibliográficas
- ✅ Autoría con credenciales profesionales
- ✅ Categorización jerárquica
- ✅ SEO optimizado para contenido psicológico

---

## 🎯 Objetivos del Proyecto

### **Funcionalidades Principales Actualizadas**
- ✅ **Listado de artículos profesionales**: Vista principal con cards especializados
- ✅ **Vista individual académica**: Página detallada con referencias bibliográficas
- ✅ **Gestión multimedia avanzada**: Hasta 3 imágenes + imagen social vía Supabase Storage
- ✅ **SEO académico optimizado**: Schema markup para contenido educativo
- ✅ **Sistema de autoría profesional**: Credenciales, biografías y fotos de autores
- ✅ **Referencias bibliográficas**: Sistema estructurado de citas académicas
- ✅ **Comentarios profesionales**: Moderación con feedback especializado
- ✅ **Contenido trending y destacado**: Sistema de promoción de artículos
- ✅ **Búsqueda semántica**: Motor de búsqueda en español optimizado

### **Nuevas Características Inspiradas en PsicologíayMente**
- 🆕 **Subtítulos descriptivos**: Como "Un repaso a las aptitudes fundamentales..."
- 🆕 **Clasificación por evidencia**: Nivel de evidencia científica
- 🆕 **Enfoque psicológico**: Especificación del approach utilizado
- 🆕 **Newsletter integration**: Contenido relacionado del newsletter
- 🆕 **Breadcrumb profesional**: Navegación jerárquica especializada
- 🆕 **FAQ estructuradas**: Preguntas frecuentes en schema markup
- 🆕 **Feedback profesional**: Sistema de comentarios especializados

### **Patrón Arquitectural Actualizado**
- Seguir el patrón de `/recursos` con extensiones profesionales
- Hook personalizado (`useSupabaseBlog`) con búsqueda semántica
- Mapper optimizado (`supabaseBlogMapper`) para contenido académico
- Componentes especializados para contenido psicológico
- Integración con sistema de referencias y credenciales

---

## 🗄️ Estructura de Base de Datos V3.0

### **ARCHIVO PRINCIPAL: `SCRIPT_TABLA_BLOG_ARTICLES_V3_PSICOLOGIAYMENTE.sql`**

#### **🔄 MIGRACIÓN DESDE VERSIÓN ANTERIOR:**

Para actualizar la estructura existente a la nueva versión:

```sql
-- 1. Agregar nuevos campos para contenido académico
ALTER TABLE blog_articles 
    ADD COLUMN subtitle TEXT,
    ADD COLUMN key_sections JSONB,
    ADD COLUMN FAQ_data JSONB,
    ADD COLUMN summary_points JSONB;

-- 2. Agregar campos para referencias bibliográficas
ALTER TABLE blog_articles 
    ADD COLUMN bibliography JSONB,
    ADD COLUMN related_articles JSONB,
    ADD COLUMN external_links JSONB;

-- 3. Mejorar autoría profesional
ALTER TABLE blog_articles 
    ADD COLUMN author_bio TEXT,
    ADD COLUMN author_credentials TEXT,
    ADD COLUMN author_photo_url TEXT,
    ADD COLUMN author_social_links JSONB;

-- 4. Agregar clasificación profesional
ALTER TABLE blog_articles 
    ADD COLUMN subcategory VARCHAR(100),
    ADD COLUMN psychological_approach VARCHAR(100),
    ADD COLUMN evidence_level VARCHAR(50),
    ADD COLUMN is_trending BOOLEAN DEFAULT false,
    ADD COLUMN is_professional_content BOOLEAN DEFAULT true;

-- 5. Mejorar SEO académico
ALTER TABLE blog_articles 
    ADD COLUMN breadcrumb_data JSONB,
    ADD COLUMN shares_count INTEGER DEFAULT 0;
```

#### **📚 ESTRUCTURA DE REFERENCIAS BIBLIOGRÁFICAS:**

Formato JSON optimizado para citas académicas:

```json
{
  "bibliography": [
    {
      "id": "liu2020",
      "authors": ["Liu, F.", "Kromer, P."],
      "year": 2020,
      "title": "Early age education on artificial intelligence: Methods and tools",
      "journal": "Proceedings of IITI'19",
      "pages": "696–706",
      "publisher": "Springer",
      "doi": "10.1007/xxx",
      "url": "https://example.com",
      "cited_in_text": true
    },
    {
      "id": "neugnot2024",
      "authors": ["Neugnot-Cerioli, M.", "Muss Laurenty, O."],
      "year": 2024,
      "title": "The Future of Child Development in the AI Era",
      "type": "preprint",
      "journal": "arXiv",
      "date": "2024-05-29"
    }
  ]
}
```

#### **🔗 ESTRUCTURA DE ARTÍCULOS RELACIONADOS:**

```json
{
  "related_articles": [
    {
      "title": "Psicología educativa: definición, conceptos y teorías",
      "url": "/desarrollo/psicologia-educativa",
      "relevance": "high",
      "type": "internal"
    },
    {
      "title": "¿Está la IA cambiando nuestra idea de Empatía?",
      "url": "/social/esta-ia-cambiando-nuestra-empatia",
      "relevance": "medium",
      "type": "internal"
    }
  ]
}
```

### **🎨 Schema Markup Avanzado:**

```json
{
  "schema_markup": {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting", "EducationalContent"],
    "headline": "¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?",
    "alternativeHeadline": "Un repaso a las aptitudes fundamentales en la infancia de la era de la IA",
    "author": {
      "@type": "Person",
      "name": "Nerea Moreno",
      "jobTitle": "Psicóloga",
      "qualifications": "Graduada en Psicología, Máster en Psicología General Sanitaria"
    },
    "datePublished": "2025-09-04",
    "dateModified": "2025-09-04",
    "publisher": {
      "@type": "Organization",
      "name": "Psicología Infantil Pro"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://psicologia-infantil.com/blog/habilidades-ia"
    },
    "educationalLevel": "intermediate",
    "teaches": "Child development skills for AI era",
    "audience": {
      "@type": "Audience",
      "audienceType": "parents"
    }
  }
}
```

### **Configuración de Storage**

```sql
-- Bucket para imágenes del blog
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'blog-images',
    'blog-images',
    true,
    10485760, -- 10MB límite por imagen
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
);

-- Estructura recomendada:
-- blog-images/
--   ├── articles/
--   │   ├── 2025/
--   │   │   ├── 01/
--   │   │   │   ├── slug-articulo/
--   │   │   │   │   ├── imagen-principal.webp
--   │   │   │   │   ├── imagen-secundaria.webp
--   │   │   │   │   └── infografia.png
```

---

## 🏗️ Arquitectura de Componentes

### **Estructura de Directorios**

```
src/
├── components/
│   └── blog/
│       ├── index.ts                 # Barrel exports
│       ├── BlogGrid.tsx            # Grid principal de artículos
│       ├── BlogCard.tsx            # Card individual de artículo
│       ├── BlogDetail.tsx          # Vista detallada del artículo
│       ├── BlogHeader.tsx          # Header de artículo
│       ├── BlogContent.tsx         # Contenido del artículo
│       ├── BlogSidebar.tsx         # Sidebar con widgets
│       ├── BlogComments.tsx        # Sistema de comentarios
│       ├── BlogFilters.tsx         # Filtros de categoría/tags
│       ├── BlogSearch.tsx          # Búsqueda de artículos
│       ├── BlogPagination.tsx      # Paginación
│       ├── BlogMeta.tsx            # Meta tags dinámicos
│       ├── BlogShare.tsx           # Botones de compartir
│       ├── BlogRecommendations.tsx # Artículos relacionados
│       └── BlogProducts.tsx        # Productos recomendados
├── hooks/
│   ├── useSupabaseBlog.tsx         # Hook principal para blog
│   ├── useBlogArticle.tsx          # Hook para artículo individual
│   └── useBlogComments.tsx         # Hook para comentarios
├── types/
│   └── blog.ts                     # Tipos TypeScript
├── utils/
│   ├── supabaseBlogMapper.ts       # Mapper de datos
│   └── blogUtils.ts                # Utilidades del blog
└── pages/
    └── Blog/
        ├── index.tsx               # Lista de artículos
        ├── BlogArticle.tsx         # Artículo individual
        └── BlogCategory.tsx        # Vista por categoría
```

---

## 📱 Componentes Principales

### **1. BlogGrid.tsx - Lista Principal**

```tsx
interface BlogGridProps {
  articles?: BlogArticle[];
  loading?: boolean;
  error?: string | null;
}

export default function BlogGrid({ articles: propArticles }: BlogGridProps) {
  // Seguir patrón de BibliotecaGrid
  const { articles: supabaseArticles, loading, error } = useSupabaseBlog();
  
  const articles = supabaseArticles.length > 0 ? supabaseArticles : (propArticles || []);
  
  // Estados para filtros, búsqueda, paginación
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Lógica de filtrado y renderizado
}
```

### **2. BlogCard.tsx - Card de Artículo**

```tsx
interface BlogCardProps {
  article: BlogArticle;
  variant?: 'default' | 'featured' | 'compact';
}

export default function BlogCard({ article, variant = 'default' }: BlogCardProps) {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        {/* Header con imagen */}
        <div className="relative overflow-hidden">
          <img 
            src={article.image_1_url || '/img/blog-default.jpg'} 
            alt={article.image_1_alt || article.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {article.is_featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destacado
            </div>
          )}
        </div>
        
        {/* Contenido */}
        <div className="p-8">
          {/* Metadatos */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm">
              {formatDate(article.published_at)}
            </span>
          </div>
          
          {/* Título y descripción */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt || article.introduction}
          </p>
          
          {/* Footer con autor y tiempo de lectura */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {article.author_name?.[0] || 'A'}
                </span>
              </div>
              <span className="text-gray-700 font-medium text-sm">
                {article.author_name}
              </span>
            </div>
            <span className="text-gray-500 text-sm">
              {article.reading_time_minutes} min de lectura
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### **3. BlogDetail.tsx - Vista Individual**

```tsx
interface BlogDetailProps {
  slug: string;
}

export default function BlogDetail({ slug }: BlogDetailProps) {
  const { article, loading, error } = useBlogArticle(slug);
  
  if (loading) return <LoadingState />;
  if (error || !article) return <ErrorState />;
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Meta tags dinámicos */}
      <BlogMeta article={article} />
      
      {/* Header del artículo */}
      <BlogHeader article={article} />
      
      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <BlogContent article={article} />
          <BlogProducts products={article.recommended_products} />
          <BlogComments articleId={article.id} />
        </div>
        
        <div className="lg:col-span-1">
          <BlogSidebar article={article} />
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <BlogRecommendations currentArticle={article} />
    </article>
  );
}
```

---

## 🔧 Hooks y Utilidades

### **useSupabaseBlog.tsx**

```tsx
import { useEffect, useState } from 'react';
import { getBlogArticles, type BlogArticle } from '../lib/supabaseBlog';

export const useSupabaseBlog = (filters?: {
  category?: string;
  tags?: string[];
  limit?: number;
  offset?: number;
}) => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data, total: totalCount } = await getBlogArticles(filters);
        setArticles(data);
        setTotal(totalCount);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [filters]);

  return { articles, loading, error, total };
};
```

### **supabaseBlogMapper.ts**

```tsx
import { type BlogArticleRaw } from '../lib/supabaseBlog';
import type { BlogArticle } from '../types/blog';

export const mapSupabaseToBlogArticle = (raw: BlogArticleRaw): BlogArticle => {
  return {
    id: raw.id,
    title: raw.title,
    slug: raw.slug,
    
    // Imágenes con URLs completas
    image_1_url: raw.image_1_path ? getBlogImageUrl(raw.image_1_path) : null,
    image_1_alt: raw.image_1_alt,
    image_2_url: raw.image_2_path ? getBlogImageUrl(raw.image_2_path) : null,
    image_2_alt: raw.image_2_alt,
    image_3_url: raw.image_3_path ? getBlogImageUrl(raw.image_3_path) : null,
    image_3_alt: raw.image_3_alt,
    
    // Contenido
    introduction: raw.introduction,
    current_data_research: raw.current_data_research,
    reflective_question: raw.reflective_question,
    anonymous_case: raw.anonymous_case,
    psychological_analysis: raw.psychological_analysis,
    practical_recommendations: raw.practical_recommendations,
    call_to_action: raw.call_to_action,
    empathetic_closing: raw.empathetic_closing,
    additional_resources: parseJsonField(raw.additional_resources),
    
    // Metadatos
    excerpt: raw.excerpt,
    meta_description: raw.meta_description,
    meta_keywords: raw.meta_keywords?.split(',').map(k => k.trim()) || [],
    
    // Categorización
    category: raw.category,
    tags: raw.tags || [],
    target_audience: raw.target_audience,
    age_range: raw.age_range,
    
    // Productos recomendados
    recommended_products: parseJsonField(raw.recommended_products) || [],
    
    // Estado y publicación
    status: raw.status,
    published_at: raw.published_at,
    is_featured: raw.is_featured || false,
    
    // Autor
    author_name: raw.author_name,
    author_email: raw.author_email,
    
    // Métricas
    view_count: raw.view_count || 0,
    likes_count: raw.likes_count || 0,
    reading_time_minutes: raw.reading_time_minutes || estimateReadingTime(raw),
    
    // Timestamps
    created_at: raw.created_at,
    updated_at: raw.updated_at
  };
};

const getBlogImageUrl = (imagePath: string): string => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  return `${supabaseUrl}/storage/v1/object/public/blog-images/${imagePath}`;
};

const parseJsonField = (field: any) => {
  if (typeof field === 'string') {
    try {
      return JSON.parse(field);
    } catch {
      return field;
    }
  }
  return field;
};

const estimateReadingTime = (article: BlogArticleRaw): number => {
  const content = [
    article.introduction,
    article.current_data_research,
    article.psychological_analysis,
    article.practical_recommendations,
    article.empathetic_closing
  ].filter(Boolean).join(' ');
  
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200); // 200 palabras por minuto
};
```

---

## 🎨 Integración con el Sistema de Diseño

### **Aplicar Patrones Existentes**

```tsx
// Ejemplo de BlogCard siguiendo el patrón de BibliotecaCategoryCard
export default function BlogCard({ article }: BlogCardProps) {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        
        {/* Header con gradiente siguiendo el patrón */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          
          {/* Icono de categoría */}
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Metadatos */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-white/80 text-sm">
              {formatDate(article.published_at)}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-white/90 leading-relaxed font-medium line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        
        {/* Contenido */}
        <div className="p-8">
          {/* Imagen destacada */}
          {article.image_1_url && (
            <div className="mb-6 overflow-hidden rounded-xl">
              <img 
                src={article.image_1_url}
                alt={article.image_1_alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Footer con autor y tiempo de lectura */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {article.author_name?.[0] || 'A'}
                </span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">{article.author_name}</p>
                <p className="text-gray-500 text-xs">{article.reading_time_minutes} min de lectura</p>
              </div>
            </div>
            
            {/* Call to action circular */}
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 🔄 Routing y Navegación

### **Configuración de Rutas**

```tsx
// En tu router principal
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogArticle />} />
<Route path="/blog/categoria/:category" element={<BlogCategory />} />
<Route path="/blog/tag/:tag" element={<BlogTag />} />
```

### **Componente BlogArticle.tsx**

```tsx
import { useParams } from 'react-router-dom';
import BlogDetail from '../../components/blog/BlogDetail';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }
  
  return <BlogDetail slug={slug} />;
}
```

---

## 📊 SEO y Optimización

### **Meta Tags Dinámicos**

```tsx
// BlogMeta.tsx
interface BlogMetaProps {
  article: BlogArticle;
}

export default function BlogMeta({ article }: BlogMetaProps) {
  usePageTitle({
    title: article.title,
    description: article.meta_description || article.excerpt
  });
  
  return (
    <>
      {/* Open Graph */}
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={article.meta_description} />
      <meta property="og:image" content={article.image_1_url || '/img/blog-default.jpg'} />
      <meta property="og:url" content={`${window.location.origin}/blog/${article.slug}`} />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.title} />
      <meta name="twitter:description" content={article.meta_description} />
      <meta name="twitter:image" content={article.image_1_url} />
      
      {/* Article meta */}
      <meta property="article:author" content={article.author_name} />
      <meta property="article:published_time" content={article.published_at} />
      <meta property="article:section" content={article.category} />
      {article.tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.meta_description,
          "image": article.image_1_url,
          "author": {
            "@type": "Person",
            "name": article.author_name
          },
          "datePublished": article.published_at,
          "dateModified": article.updated_at,
          "publisher": {
            "@type": "Organization",
            "name": "Psicología Infantil",
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/logo.png`
            }
          }
        })}
      </script>
    </>
  );
}
```

---

## 🛠️ Funciones de Supabase

### **lib/supabaseBlog.ts**

```tsx
import { supabase } from './supabase';

export interface BlogArticleRaw {
  id: string;
  title: string;
  slug: string;
  image_1_path?: string;
  image_1_alt?: string;
  image_2_path?: string;
  image_2_alt?: string;
  image_3_path?: string;
  image_3_alt?: string;
  introduction: string;
  current_data_research?: string;
  reflective_question?: string;
  anonymous_case?: string;
  psychological_analysis: string;
  practical_recommendations: string;
  call_to_action?: string;
  empathetic_closing?: string;
  additional_resources?: any;
  meta_description?: string;
  meta_keywords?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  target_audience?: string;
  age_range?: string;
  recommended_products?: any;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
  author_id?: string;
  author_name?: string;
  author_email?: string;
  view_count?: number;
  likes_count?: number;
  comments_enabled?: boolean;
  reading_time_minutes?: number;
  difficulty_level?: 'beginner' | 'intermediate' | 'advanced';
  is_featured?: boolean;
}

// Obtener todos los artículos publicados
export const getBlogArticles = async (filters?: {
  category?: string;
  tags?: string[];
  limit?: number;
  offset?: number;
  featured?: boolean;
}): Promise<{ data: BlogArticleRaw[]; total: number }> => {
  let query = supabase
    .from('blog_articles')
    .select('*', { count: 'exact' })
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (filters?.category) {
    query = query.eq('category', filters.category);
  }

  if (filters?.tags && filters.tags.length > 0) {
    query = query.overlaps('tags', filters.tags);
  }

  if (filters?.featured) {
    query = query.eq('is_featured', true);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  if (filters?.offset) {
    query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error('Error al obtener artículos:', error);
    throw error;
  }

  return { data: data || [], total: count || 0 };
};

// Obtener artículo por slug
export const getBlogArticleBySlug = async (slug: string): Promise<BlogArticleRaw | null> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error al obtener artículo:', error);
    return null;
  }

  return data;
};

// Incrementar contador de vistas
export const incrementBlogViews = async (articleId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.rpc('increment_blog_views', {
      article_id_param: articleId
    });

    return !error;
  } catch (error) {
    console.error('Error al incrementar vistas:', error);
    return false;
  }
};

// Obtener artículos relacionados
export const getRelatedArticles = async (
  currentArticleId: string,
  category: string,
  tags: string[],
  limit = 3
): Promise<BlogArticleRaw[]> => {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('status', 'published')
    .neq('id', currentArticleId)
    .or(`category.eq.${category},tags.ov.{${tags.join(',')}}`)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error al obtener artículos relacionados:', error);
    return [];
  }

  return data || [];
};

// Subir imagen al storage
export const uploadBlogImage = async (
  file: File,
  articleSlug: string,
  imageNumber: number
): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `articles/${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, '0')}/${articleSlug}/imagen-${imageNumber}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Error al subir imagen:', error);
      return null;
    }

    return data.path;
  } catch (error) {
    console.error('Error al subir imagen:', error);
    return null;
  }
};
```

---

## 🎨 Página Principal del Blog

### **pages/Blog/index.tsx**

```tsx
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogGrid from "../../components/blog/BlogGrid";
import BlogFilters from "../../components/blog/BlogFilters";
import BlogSearch from "../../components/blog/BlogSearch";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function Blog() {
  usePageTitle({
    title: 'Blog - Psicología Infantil',
    description: 'Artículos especializados sobre psicología infantil, desarrollo emocional y crianza consciente. Consejos profesionales para padres y familias.'
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Blog de Psicología Infantil
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Artículos sobre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Desarrollo Emocional
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Descubre estrategias profesionales, casos reales y herramientas prácticas 
              para acompañar el crecimiento emocional de tu hijo.
            </p>

            {/* Barra de búsqueda */}
            <div className="max-w-2xl mx-auto">
              <BlogSearch 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <BlogFilters
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            onCategoryChange={setSelectedCategory}
            onTagsChange={setSelectedTags}
          />
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <BlogGrid
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
```

---

## 🔧 Funciones SQL Adicionales

```sql
-- Función para incrementar vistas de artículos
CREATE OR REPLACE FUNCTION increment_blog_views(article_id_param UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE blog_articles 
    SET view_count = view_count + 1
    WHERE id = article_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Vista para artículos con estadísticas
CREATE OR REPLACE VIEW blog_articles_with_stats AS
SELECT 
    ba.*,
    get_blog_image_url(ba.image_1_path) as image_1_url,
    get_blog_image_url(ba.image_2_path) as image_2_url,
    get_blog_image_url(ba.image_3_path) as image_3_url,
    COALESCE(cc.comment_count, 0) as comment_count
FROM blog_articles ba
LEFT JOIN (
    SELECT 
        article_id,
        COUNT(*) as comment_count
    FROM blog_comments 
    WHERE status = 'approved'
    GROUP BY article_id
) cc ON ba.id = cc.article_id
WHERE ba.status = 'published';

-- Función para obtener artículos relacionados
CREATE OR REPLACE FUNCTION get_related_articles(
    current_article_id UUID,
    article_category VARCHAR,
    article_tags TEXT[],
    result_limit INTEGER DEFAULT 3
)
RETURNS TABLE (
    id UUID,
    title VARCHAR,
    slug VARCHAR,
    excerpt TEXT,
    image_1_url TEXT,
    category VARCHAR,
    published_at TIMESTAMP WITH TIME ZONE,
    author_name VARCHAR,
    reading_time_minutes INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ba.id,
        ba.title,
        ba.slug,
        ba.excerpt,
        get_blog_image_url(ba.image_1_path) as image_1_url,
        ba.category,
        ba.published_at,
        ba.author_name,
        ba.reading_time_minutes
    FROM blog_articles ba
    WHERE ba.status = 'published'
        AND ba.id != current_article_id
        AND (
            ba.category = article_category 
            OR ba.tags && article_tags
        )
    ORDER BY 
        CASE WHEN ba.category = article_category THEN 1 ELSE 2 END,
        ba.published_at DESC
    LIMIT result_limit;
END;
$$ LANGUAGE plpgsql;
```

---

## 📋 Lista de Tareas de Implementación

### **Fase 1: Configuración Base**
- [ ] **Ejecutar script SQL mejorado** en Supabase
- [ ] **Configurar bucket de storage** `blog-images`
- [ ] **Configurar variables de entorno** para URLs
- [ ] **Crear tipos TypeScript** (`types/blog.ts`)

### **Fase 2: Funciones Core**
- [ ] **Crear `lib/supabaseBlog.ts`** con funciones CRUD
- [ ] **Crear `utils/supabaseBlogMapper.ts`** 
- [ ] **Crear `hooks/useSupabaseBlog.tsx`**
- [ ] **Crear `hooks/useBlogArticle.tsx`**

### **Fase 3: Componentes Base**
- [ ] **BlogCard.tsx** - Componente de tarjeta
- [ ] **BlogGrid.tsx** - Grid principal
- [ ] **BlogDetail.tsx** - Vista individual
- [ ] **BlogHeader.tsx** - Header de artículo
- [ ] **BlogContent.tsx** - Contenido del artículo

### **Fase 4: Componentes Avanzados**
- [ ] **BlogSearch.tsx** - Búsqueda
- [ ] **BlogFilters.tsx** - Filtros de categoría
- [ ] **BlogMeta.tsx** - Meta tags dinámicos
- [ ] **BlogComments.tsx** - Sistema de comentarios
- [ ] **BlogProducts.tsx** - Productos recomendados

### **Fase 5: Páginas**
- [ ] **pages/Blog/index.tsx** - Lista principal
- [ ] **pages/Blog/BlogArticle.tsx** - Artículo individual
- [ ] **Configurar rutas** en router principal

### **Fase 6: Testing y Optimización**
- [ ] **Crear artículos de prueba** 
- [ ] **Subir imágenes de prueba**
- [ ] **Testing de navegación**
- [ ] **Optimización SEO**
- [ ] **Performance testing**

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias adicionales si es necesario
npm install @supabase/supabase-js react-router-dom

# Desarrollo
npm run dev

# Testing
npm run test

# Build para producción
npm run build
```

---

## 📞 Notas Finales

### **Puntos Clave a Recordar:**
1. **Seguir el patrón existente** de recursos (hooks + mapper + componentes)
2. **Aplicar el sistema de diseño** establecido 
3. **Optimizar para SEO** desde el inicio
4. **Gestión de imágenes** eficiente con Storage
5. **Sistema escalable** para futura administración

### **Próximos Pasos:**
1. Revisar y mejorar el script SQL según sugerencias
2. Ejecutar el script en Supabase 
3. Comenzar implementación siguiendo esta guía
4. Testing incremental por fases

Esta guía proporciona la estructura completa para implementar el blog manteniendo la coherencia con el proyecto existente y siguiendo las mejores prácticas establecidas.
