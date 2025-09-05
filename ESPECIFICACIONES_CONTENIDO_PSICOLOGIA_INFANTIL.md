# 📖 Especificaciones Técnicas para Contenido de Psicología Infantil

## 🎯 BASADO EN EL ANÁLISIS DE PSICOLOGIAYMENTE.COM

### **ARTÍCULO DE REFERENCIA ANALIZADO:**
- **URL:** https://psicologiaymente.com/desarrollo/habilidades-necesitan-hijos-en-epoca-de-inteligencia-artificial
- **Fecha de análisis:** 4 septiembre, 2025
- **Estructura extraída:** ✅ Completa
- **Elementos técnicos identificados:** ✅ Documentados

---

## 📋 PLANTILLA DE CONTENIDO PROFESIONAL

### **🔤 ESTRUCTURA OBLIGATORIA DE ARTÍCULOS**

#### 1. **Metadatos Principales**
```typescript
interface ArticleMetadata {
  title: string; // Máx 60 caracteres para SEO
  subtitle: string; // Descriptivo, ej: "Un repaso a las aptitudes fundamentales..."
  slug: string; // Auto-generado, URL-friendly
  author: {
    name: string;
    credentials: string; // ej: "Psicóloga, Máster en..."
    bio: string;
    photo_url?: string;
  };
  category: 'desarrollo' | 'emociones' | 'comportamiento' | 'aprendizaje';
  subcategory: string; // ej: "habilidades-digitales", "inteligencia-artificial"
  tags: string[]; // Máx 10 tags relevantes
  target_audience: 'padres' | 'docentes' | 'profesionales' | 'cuidadores';
  age_range: string; // ej: "2-6 años", "escolar", "adolescentes"
  reading_time: number; // En minutos
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
```

#### 2. **Secciones de Contenido Requeridas**
```typescript
interface ArticleContent {
  introduction: string; // Párrafo enganchador (150-200 palabras)
  current_data_research: string; // Datos actuales y estadísticas
  reflective_question: string; // Pregunta para conectar emocionalmente
  anonymous_case?: string; // Caso clínico generalizado (opcional)
  psychological_analysis: string; // Explicación técnica profesional
  key_sections: Section[]; // Secciones principales del artículo
  practical_recommendations: string; // 3-5 acciones concretas
  call_to_action: string; // Invitación profesional
  empathetic_closing: string; // Cierre motivador
  additional_resources: Resource[]; // Recursos complementarios
}

interface Section {
  title: string;
  content: string;
  order: number;
  type: 'main' | 'subsection' | 'highlight';
}
```

#### 3. **Referencias Académicas Obligatorias**
```typescript
interface Bibliography {
  bibliography: Citation[];
  related_articles: RelatedArticle[];
  external_links: ExternalLink[];
}

interface Citation {
  id: string; // Para referencias en texto
  authors: string[];
  year: number;
  title: string;
  journal?: string;
  publisher?: string;
  pages?: string;
  doi?: string;
  url?: string;
  type: 'journal' | 'book' | 'preprint' | 'website';
  cited_in_text: boolean;
}

interface RelatedArticle {
  title: string;
  url: string; // URL relativa interna
  relevance: 'high' | 'medium' | 'low';
  type: 'internal';
}
```

---

## 🎨 DISEÑO Y UI/UX ESPECIALIZADO

### **🖼️ ESPECIFICACIONES DE IMÁGENES**

#### **Imagen Principal (Hero)**
- **Dimensiones:** 1200x630px (ratio 1.91:1)
- **Formato:** WebP preferido, fallback JPG
- **Peso máximo:** 300KB optimizada
- **Alt text:** Descriptivo y específico
- **Naming:** `[slug]-hero.webp`

#### **Imagen Secundaria (Infografía)**
- **Dimensiones:** 800x600px o 1000x1000px (square)
- **Formato:** PNG para infografías, WebP para fotos
- **Peso máximo:** 500KB
- **Alt text:** Descriptivo del contenido
- **Naming:** `[slug]-infografia.png`

#### **Imagen Social Share**
- **Dimensiones:** 1200x630px (Facebook/LinkedIn)
- **Formato:** WebP/JPG
- **Peso máximo:** 200KB
- **Incluir:** Logo, título del artículo, autor

### **🎨 PALETA DE COLORES TEMÁTICA**

#### **Categorías por Color:**
```css
:root {
  /* Desarrollo */
  --desarrollo-primary: #3B82F6; /* Blue-500 */
  --desarrollo-light: #DBEAFE;   /* Blue-100 */
  --desarrollo-dark: #1E40AF;    /* Blue-800 */
  
  /* Emociones */
  --emociones-primary: #10B981;  /* Green-500 */
  --emociones-light: #D1FAE5;    /* Green-100 */
  --emociones-dark: #047857;     /* Green-800 */
  
  /* Comportamiento */
  --comportamiento-primary: #F59E0B; /* Yellow-500 */
  --comportamiento-light: #FEF3C7;   /* Yellow-100 */
  --comportamiento-dark: #D97706;    /* Yellow-700 */
  
  /* Aprendizaje */
  --aprendizaje-primary: #8B5CF6; /* Purple-500 */
  --aprendizaje-light: #EDE9FE;   /* Purple-100 */
  --aprendizaje-dark: #6D28D9;    /* Purple-700 */
}
```

---

## 🔍 SEO Y OPTIMIZACIÓN TÉCNICA

### **📊 Schema Markup Requerido**

#### **Artículo Principal**
```json
{
  "@context": "https://schema.org",
  "@type": ["Article", "BlogPosting", "EducationalContent"],
  "headline": "Título del artículo",
  "alternativeHeadline": "Subtítulo descriptivo",
  "description": "Meta descripción",
  "author": {
    "@type": "Person",
    "name": "Nombre del autor",
    "jobTitle": "Psicólogo/a",
    "qualifications": "Credenciales profesionales",
    "image": "URL de foto del autor"
  },
  "datePublished": "2025-09-04T12:00:00Z",
  "dateModified": "2025-09-04T12:00:00Z",
  "publisher": {
    "@type": "Organization",
    "name": "Psicología Infantil Pro",
    "logo": "URL del logo"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "URL canónica del artículo"
  },
  "image": "URL de imagen principal",
  "wordCount": 1500,
  "timeRequired": "PT8M",
  "educationalLevel": "intermediate",
  "teaches": "Descripción de lo que enseña",
  "audience": {
    "@type": "Audience",
    "audienceType": "parents",
    "geographicArea": "ES"
  },
  "inLanguage": "es-ES",
  "isAccessibleForFree": true,
  "citation": ["URLs de referencias"]
}
```

#### **Breadcrumb Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "@id": "https://psicologia-infantil.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "@id": "https://psicologia-infantil.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Desarrollo",
      "@id": "https://psicologia-infantil.com/blog/categoria/desarrollo"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Título del artículo"
    }
  ]
}
```

#### **FAQ Schema (cuando aplique)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿A qué edad debo empezar a enseñar sobre IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Respuesta detallada del profesional..."
      }
    }
  ]
}
```

### **🔤 PALABRAS CLAVE ESTRATÉGICAS**

#### **Primary Keywords por Categoría:**
- **Desarrollo:** desarrollo infantil, habilidades niños, crecimiento emocional
- **Emociones:** inteligencia emocional, gestión emociones, autoestima infantil
- **Comportamiento:** disciplina positiva, límites niños, rabietas infantiles
- **Aprendizaje:** métodos aprendizaje, estimulación temprana, dificultades aprender

#### **Long-tail Keywords:**
- "cómo desarrollar habilidades sociales en niños"
- "técnicas de disciplina positiva para padres"
- "señales de problemas emocionales en niños"
- "actividades para estimular el desarrollo infantil"

---

## 🔧 CONFIGURACIÓN TÉCNICA

### **⚙️ Meta Tags Requeridos**

```html
<!-- Meta básicos -->
<title>Título del Artículo | Psicología Infantil Pro</title>
<meta name="description" content="Meta descripción optimizada (máx 160 chars)">
<meta name="keywords" content="palabra1, palabra2, palabra3">
<link rel="canonical" href="URL canónica">

<!-- Open Graph -->
<meta property="og:title" content="Título para redes sociales">
<meta property="og:description" content="Descripción para redes sociales">
<meta property="og:image" content="URL imagen social 1200x630">
<meta property="og:url" content="URL canónica">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Psicología Infantil Pro">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título para Twitter">
<meta name="twitter:description" content="Descripción para Twitter">
<meta name="twitter:image" content="URL imagen social">

<!-- Artículo específico -->
<meta property="article:author" content="Nombre del autor">
<meta property="article:published_time" content="2025-09-04T12:00:00Z">
<meta property="article:modified_time" content="2025-09-04T12:00:00Z">
<meta property="article:section" content="Desarrollo">
<meta property="article:tag" content="tag1">
```

### **📱 Performance y Accesibilidad**

#### **Core Web Vitals Objetivos:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

#### **Accesibilidad (WCAG 2.1 AA):**
- Contraste mínimo 4.5:1
- Alt text descriptivo en todas las imágenes
- Estructura de headings jerárquica (H1 > H2 > H3)
- Navegación por teclado funcional
- Texto legible (mín 16px en móvil)

---

## 📈 MÉTRICAS Y KPIs

### **📊 Métricas de Contenido:**
- **Tiempo de lectura promedio:** 5-8 minutos
- **Bounce rate objetivo:** < 60%
- **Engagement rate:** > 3% (likes, shares, comentarios)
- **CTR orgánico:** > 2%

### **🎯 Objetivos por Tipo de Artículo:**
- **Educativo:** Alta retención (>70%), bajo bounce rate
- **Casos prácticos:** Alto engagement, muchos comentarios
- **Guías:** Altas conversiones a contacto profesional
- **Investigación:** Muchas citaciones y referencias

---

## ✅ CHECKLIST DE CALIDAD

### **📝 Antes de Publicar:**
- [ ] Título optimizado para SEO (45-60 caracteres)
- [ ] Subtítulo descriptivo añadido
- [ ] Meta descripción única (150-160 caracteres)
- [ ] Al menos 3 referencias bibliográficas
- [ ] Imagen principal optimizada (WebP < 300KB)
- [ ] Alt text en todas las imágenes
- [ ] Schema markup implementado
- [ ] Enlaces internos añadidos (2-3 mínimo)
- [ ] Credenciales del autor verificadas
- [ ] Lectura de prueba completada
- [ ] Tiempo de lectura calculado
- [ ] Tags categorizados correctamente
- [ ] Call-to-action profesional incluido

### **🔍 SEO Técnico:**
- [ ] URL amigable generada
- [ ] Canonical URL configurada
- [ ] Open Graph tags completos
- [ ] Twitter Cards configuradas
- [ ] Breadcrumb markup añadido
- [ ] Estructura de headings correcta (H1-H6)
- [ ] Densidad de keywords < 3%
- [ ] Enlaces externos con rel="nofollow" (cuando corresponde)

### **💼 Calidad Profesional:**
- [ ] Contenido revisado por profesional
- [ ] Términos técnicos explicados
- [ ] Casos anonimizados adecuadamente
- [ ] Recomendaciones prácticas incluidas
- [ ] Disclaimer profesional añadido
- [ ] Referencias actualizadas (últimos 5 años preferido)
- [ ] Tono empático y profesional mantenido
