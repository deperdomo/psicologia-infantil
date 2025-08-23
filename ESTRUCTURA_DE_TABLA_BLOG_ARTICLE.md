# Estructura de la tabla blog_articles - Blog de Psicología Infantil

## CONTEXTO DEL PROYECTO
Este es un blog profesional de psicología infantil donde se publican artículos especializados dirigidos a padres, docentes y cuidadores. Los artículos siguen una plantilla específica que incluye casos anónimos, análisis psicológico, recomendaciones prácticas y productos afiliados.

## TABLA PRINCIPAL: `blog_articles`

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