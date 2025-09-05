# Estructura de la tabla blog_articles v3.0 - Blog de Psicología Infantil

## 🎯 CONTEXTO DEL PROYECTO ACTUALIZADO
Este es un blog profesional de psicología infantil **inspirado en PsicologíayMente.com** donde se publican artículos especializados dirigidos a padres, docentes y cuidadores. Los artículos siguen una estructura académica que incluye referencias bibliográficas, análisis psicológico profesional, casos anónimos y recomendaciones basadas en evidencia.

### **📖 ARTÍCULO DE REFERENCIA ANALIZADO:**
- **URL:** https://psicologiaymente.com/desarrollo/habilidades-necesitan-hijos-en-epoca-de-inteligencia-artificial
- **Autora:** Nerea Moreno (Psicóloga)
- **Estructura extraída:** ✅ Completamente analizada y adaptada

## 📊 TABLA PRINCIPAL: `blog_articles` V3.0

### 🔤 CAMPOS DE CONTENIDO PROFESIONAL
- **`title`**: Título optimizado SEO (ej: "¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?")
- **`subtitle`**: **NUEVO** - Subtítulo descriptivo (ej: "Un repaso a las aptitudes fundamentales en la infancia de la era de la IA")
- **`introduction`**: Párrafo introductorio que engancha al lector profesionalmente
- **`current_data_research`**: Datos actuales, estadísticas e investigaciones recientes con fuentes
- **`reflective_question`**: Pregunta para conectar emocionalmente con el lector
- **`anonymous_case`**: Caso clínico anonimizado y generalizado como ejemplo
- **`psychological_analysis`**: Explicación técnica desde la psicología infantil con enfoque profesional
- **`practical_recommendations`**: 3-5 acciones concretas, aplicables y basadas en evidencia
- **`call_to_action`**: Invitación profesional a consulta o contacto especializado
- **`empathetic_closing`**: Cierre empático, motivador y profesional
- **`additional_resources`**: Recursos complementarios en formato JSON estructurado

### 🆕 NUEVOS CAMPOS DE CONTENIDO ESTRUCTURADO
- **`key_sections`**: **NUEVO** - Secciones principales del artículo en formato JSON
- **`FAQ_data`**: **NUEVO** - Preguntas frecuentes estructuradas para schema markup
- **`summary_points`**: **NUEVO** - Puntos clave del artículo para resúmenes rápidos

### 📚 CAMPOS DE REFERENCIAS ACADÉMICAS (NUEVOS)
- **`bibliography`**: **NUEVO** - Referencias bibliográficas estructuradas en JSON:
```json
[
  {
    "id": "liu2020",
    "authors": ["Liu, F.", "Kromer, P."],
    "year": 2020,
    "title": "Early age education on artificial intelligence",
    "journal": "Proceedings of IITI'19",
    "pages": "696–706",
    "publisher": "Springer",
    "doi": "10.1007/xxx",
    "cited_in_text": true
  }
]
```
- **`related_articles`**: **NUEVO** - Artículos relacionados internos con relevancia
- **`external_links`**: **NUEVO** - Enlaces externos de calidad con descripción

### 🖼️ CAMPOS DE IMÁGENES MEJORADOS (Storage Integration)
- **`image_1_path`**, **`image_2_path`**, **`image_3_path`**: Rutas en Supabase Storage (máximo 3 imágenes)
- **`image_1_alt`**, **`image_2_alt`**, **`image_3_alt`**: Texto alternativo profesional para cada imagen
- **`featured_image_url`**: **NUEVO** - URL de imagen destacada
- **`social_share_image`**: **NUEVO** - Imagen optimizada para redes sociales

### 🛒 CAMPOS DE PRODUCTOS Y RECOMENDACIONES
- **`recommended_products`**: Array JSON para productos afiliados:
```json
[
  {
    "nombre": "El monstruo de colores. Un libro sobre las emociones",
    "url": "https://amazon.es/dp/8408174576",
    "categoria": "libros",
    "precio_aprox": "15.95€"
  }
]
```
- **`professional_recommendations`**: **NUEVO** - Recomendaciones profesionales especializadas

### 🏷️ CAMPOS DE CATEGORIZACIÓN PROFESIONAL
- **`category`**: Categoría principal ("desarrollo", "emociones", "comportamiento", "aprendizaje")
- **`subcategory`**: **NUEVO** - Subcategoría específica ("habilidades-digitales", "inteligencia-artificial")
- **`tags`**: Array de etiquetas para filtrado avanzado
- **`target_audience`**: Público objetivo ("padres", "docentes", "profesionales", "cuidadores")
- **`age_range`**: Rango etario aplicable ("2-4 años", "5-8 años", "escolar", "adolescentes")
- **`psychological_approach`**: **NUEVO** - Enfoque psicológico utilizado en el artículo
- **`evidence_level`**: **NUEVO** - Nivel de evidencia científica del contenido
- **`topic_complexity`**: Complejidad del tema ("beginner", "intermediate", "advanced")

### 🔍 CAMPOS SEO Y METADATOS AVANZADOS
- **`slug`**: URL amigable generada automáticamente del título
- **`meta_description`**: Descripción para motores de búsqueda (máx 160 caracteres)
- **`meta_keywords`**: Palabras clave estratégicas para SEO
- **`excerpt`**: Resumen corto para listados y cards
- **`canonical_url`**: **NUEVO** - URL canónica del artículo
- **`schema_markup`**: **NUEVO** - Structured data avanzado (Article, BlogPosting, EducationalContent)
- **`breadcrumb_data`**: **NUEVO** - Datos de navegación jerárquica

### 👤 CAMPOS DE AUTORÍA PROFESIONAL MEJORADOS
- **`author_name`**: Nombre completo del autor
- **`author_email`**: Email del autor (para autores externos)
- **`author_bio`**: **NUEVO** - Biografía detallada del autor
- **`author_credentials`**: **NUEVO** - Credenciales y formación profesional
- **`author_photo_url`**: **NUEVO** - URL de foto profesional del autor
- **`author_social_links`**: **NUEVO** - Redes sociales y enlaces del autor en JSON

### 📈 CAMPOS DE ESTADO Y PUBLICACIÓN
- **`status`**: 'draft', 'review', 'published', 'archived'
- **`review_status`**: **NUEVO** - 'pending', 'approved', 'needs_revision'
- **`published_at`**: Fecha y hora de publicación
- **`last_reviewed_at`**: **NUEVO** - Fecha de última revisión profesional
- **`is_featured`**: Artículo destacado
- **`is_trending`**: **NUEVO** - Artículo en tendencia
- **`is_professional_content`**: **NUEVO** - Marca contenido verificado profesionalmente

### 📊 CAMPOS DE MÉTRICAS Y ENGAGEMENT
- **`view_count`**: Visualizaciones del artículo
- **`likes_count`**: Likes recibidos
- **`shares_count`**: **NUEVO** - Veces compartido en redes sociales
- **`comments_enabled`**: Habilitación de comentarios
- **`professional_feedback_enabled`**: **NUEVO** - Habilitación de feedback profesional
- **`reading_time_minutes`**: Tiempo estimado de lectura

### 📧 CAMPOS DE NEWSLETTER Y ENGAGEMENT (NUEVOS)
- **`newsletter_mention`**: **NUEVO** - Mención en newsletter
- **`related_newsletter_content`**: **NUEVO** - Contenido relacionado del newsletter

## 🗄️ SUPABASE STORAGE: `blog-images` MEJORADO

### CONFIGURACIÓN ACTUALIZADA
- **Bucket**: `blog-images` (público)
- **Límite**: 10MB por imagen (aumentado de 5MB)
- **Formatos**: JPEG, PNG, WebP, GIF, SVG
- **Estructura recomendada**:
```
blog-images/
├── articles/
│   ├── 2025/
│   │   ├── 09/
│   │   │   ├── habilidades-ia-ninos/
│   │   │   │   ├── hero-image.webp
│   │   │   │   ├── infografia-desarrollo.png
│   │   │   │   └── imagen-adicional.webp
│   │   │   └── otro-articulo/
│   │   └── 10/
│   └── authors/
│       ├── nerea-moreno.webp
│       └── otros-autores/
```

### ACCESO A IMÁGENES OPTIMIZADO
- **URLs públicas**: Generadas automáticamente con función mejorada
- **Vista optimizada**: `blog_articles_with_images` incluye URLs completas
- **Función helper**: `get_blog_image_url(image_path)` con fallback para desarrollo

## 💬 TABLA SECUNDARIA: `blog_comments` MEJORADA

### NUEVOS CAMPOS PROFESIONALES
- **`author_profession`**: **NUEVO** - Profesión del comentarista
- **`is_professional_feedback`**: **NUEVO** - Marca feedback profesional
- **`replies_count`**: **NUEVO** - Contador de respuestas

## ⚙️ FUNCIONALIDADES AUTOMÁTICAS MEJORADAS

### TRIGGERS Y FUNCIONES NUEVAS
1. **Auto-slug profesional**: Genera slugs SEO-optimizados con límite de 60 caracteres
2. **Auto-timestamp**: Actualiza `updated_at` en cada modificación
3. **URL Generator con fallback**: Convierte rutas de storage a URLs con manejo de errores
4. **Búsqueda semántica**: Función `search_articles()` optimizada para español

### VISTAS ESPECIALIZADAS NUEVAS
- **`featured_articles`**: Artículos destacados ordenados
- **`trending_articles`**: Artículos en tendencia por vistas
- **`blog_articles_with_images`**: Vista principal con URLs completas

### SEGURIDAD (RLS) MEJORADA
- **Lectura pública**: Solo artículos con status 'published'
- **Gestión por autores**: Basada en email y configuración social
- **Comentarios profesionales**: Políticas específicas para feedback especializado

## 🔄 FLUJO DE TRABAJO PROFESIONAL

1. **Crear artículo**: INSERT con status 'draft' y campos profesionales
2. **Agregar referencias**: Estructura JSON para bibliography y related_articles
3. **Subir imágenes**: Upload a storage con naming profesional
4. **Revisión profesional**: Cambio a review_status 'approved'
5. **Publicación**: Status 'published' con schema markup completo
6. **Monitoreo**: Tracking de métricas profesionales

## 📋 CASOS DE USO PROFESIONALES
- Blog académico con artículos basados en evidencia
- Sistema de autoría con credenciales verificadas
- Referencias bibliográficas estructuradas
- SEO optimizado para búsquedas profesionales
- Gestión de imágenes con standards profesionales
- Sistema de comentarios con feedback especializado
- Métricas de engagement académico y profesional
- Newsletter integration para contenido relacionado

Esta estructura v3.0 está específicamente diseñada para contenido profesional de psicología infantil, siguiendo los estándares de sitios especializados como PsicologíayMente.com.

### CAMPOS DE CONTENIDO
- **`title`**: Título del artículo (ej: "Rabietas en niños pequeños: cómo entenderlas y manejarlas")
- **`introduction`**: Párrafo introductorio que engancha al lector
- **`current_data_research`**: Datos actuales o investigaciones recientes con estadísticas
- **`reflective_question`**: Pregunta para conectar emocionalmente con el lector
- **`anonymous_case`**: Caso clínico anónimo y generalizado como ejemplo
- **`psychological_analysis`**: Explicación técnica desde la psicología infantil
- **`practical_recommendations`**: 3-5 acciones concretas y aplicables
- **`call_to_action`**: Invitación a consulta profesional o contacto
- **`empathetic_closing`**: Cierre empático y motivador
- **`additional_resources`**: Recursos complementarios en formato JSON

### CAMPOS DE IMÁGENES (Storage Integration)
- **`image_1_path`**, **`image_2_path`**, **`image_3_path`**: Rutas en Supabase Storage (máximo 3 imágenes por artículo)
- **`image_1_alt`**, **`image_2_alt`**, **`image_3_alt`**: Texto alternativo para cada imagen (SEO y accesibilidad)

### CAMPOS DE PRODUCTOS AFILIADOS
- **`recommended_products`**: Array JSON con formato:
```json
[
  {
    "nombre": "El monstruo de colores. Un libro sobre las emociones",
    "url": "https://amazon.es/dp/8408174576"
  },
  {
    "nombre": "Tarjetas de emociones para niños",
    "url": "https://amazon.es/dp/B08K2QXM4P"
  }
]
```

### CAMPOS DE CATEGORIZACIÓN
- **`category`**: Categoría principal (ej: "rabietas", "desarrollo", "emociones")
- **`tags`**: Array de etiquetas para filtrado
- **`target_audience`**: Público objetivo ("padres", "docentes", "cuidadores")
- **`age_range`**: Rango etario aplicable ("2-4 años", "5-8 años", etc.)

### CAMPOS SEO Y METADATOS
- **`slug`**: URL amigable generada automáticamente del título
- **`meta_description`**: Descripción para motores de búsqueda (máx 160 caracteres)
- **`meta_keywords`**: Palabras clave para SEO
- **`excerpt`**: Resumen corto para listados

### CAMPOS DE ESTADO Y PUBLICACIÓN
- **`status`**: 'draft', 'published', 'archived'
- **`published_at`**: Fecha y hora de publicación
- **`author_id`**, **`author_name`**: Información del autor
- **`view_count`**, **`likes_count`**: Métricas de engagement
- **`reading_time_minutes`**: Tiempo estimado de lectura

## SUPABASE STORAGE: `blog-images`

### CONFIGURACIÓN
- **Bucket**: `blog-images` (público)
- **Límite**: 5MB por imagen
- **Formatos**: JPEG, PNG, WebP, GIF
- **Estructura recomendada**:
```
blog-images/
├── articles/
│   ├── rabietas-ninos/
│   │   ├── imagen-principal.jpg
│   │   ├── infografia-emociones.png
│   │   └── imagen-adicional.webp
│   ├── ansiedad-infantil/
│   └── desarrollo-emocional/
```

### ACCESO A IMÁGENES
- **URLs públicas**: `https://your-project-id.supabase.co/storage/v1/object/public/blog-images/[image_path]`
- **Vista optimizada**: `blog_articles_with_images` genera URLs automáticamente
- **Función helper**: `get_blog_image_url(image_path)` convierte rutas a URLs completas

## TABLA SECUNDARIA: `blog_comments`

### PROPÓSITO
Sistema de comentarios con moderación para fomentar engagement y comunidad.

### CAMPOS PRINCIPALES
- **`article_id`**: Referencia al artículo
- **`parent_comment_id`**: Para respuestas anidadas
- **`author_name`**, **`author_email`**: Datos del comentarista
- **`content`**: Contenido del comentario
- **`status`**: 'pending', 'approved', 'rejected', 'spam'

## FUNCIONALIDADES AUTOMÁTICAS

### TRIGGERS Y FUNCIONES
1. **Auto-slug**: Genera slug automáticamente desde el título
2. **Auto-timestamp**: Actualiza `updated_at` en cada modificación
3. **URL Generator**: Convierte rutas de storage a URLs públicas

### SEGURIDAD (RLS)
- **Lectura pública**: Solo artículos con status 'published'
- **Escritura restringida**: Solo autores autenticados pueden crear/editar
- **Storage protegido**: Solo usuarios autenticados suben imágenes

## FLUJO TÍPICO DE TRABAJO

1. **Crear artículo**: INSERT con status 'draft'
2. **Subir imágenes**: Upload a storage, guardar rutas en campos image_*_path
3. **Agregar productos**: JSON array con nombre y URL
4. **Publicar**: Cambiar status a 'published' y set published_at
5. **Consultar**: SELECT desde vista blog_articles_with_images para URLs completas

## CASOS DE USO PRINCIPALES
- Blog profesional con artículos especializados
- Sistema de afiliados con productos recomendados
- SEO optimizado para búsquedas orgánicas
- Gestión de imágenes integrada
- Sistema de comentarios moderado
- Métricas de engagement y rendimiento

Esta estructura está diseñada para escalar y mantener la calidad profesional del contenido psicológico infantil.