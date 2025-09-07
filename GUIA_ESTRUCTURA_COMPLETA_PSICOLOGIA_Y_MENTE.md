# 🎯 GUÍA DEFINITIVA: Estructura de Artículos Estilo Psicología y Mente
## Usando ÚNICAMENTE tus campos existentes

---

## 📊 **RESUMEN EJECUTIVO**

✅ **BUENAS NOTICIAS**: Tu estructura actual de base de datos es **PERFECTA** para replicar el estilo de Psicología y Mente.

✅ **NO NECESITAS AGREGAR CAMPOS**: Todos los elementos del artículo analizado se pueden crear con tus campos existentes.

✅ **YA TIENES TODO**: Solo necesitas optimizar cómo organizas los datos JSON.

---

## 🎨 **MAPEO COMPLETO: Psicología y Mente ➜ Tu Estructura**

### **1. HEADER DEL ARTÍCULO**
| Elemento de PsicologíayMente | Tu Campo | Ejemplo |
|------------------------------|----------|---------|
| **Categoría principal** | `category` | "desarrollo" |
| **Subcategoría** | `subcategory` | "autoestima-infantil" |
| **Badge "Artículo revisado"** | `is_professional_content` + `review_status` | `true` + "approved" |
| **Título principal (H1)** | `title` | "Cómo la presión social afecta la autoestima..." |
| **Subtítulo descriptivo (H2)** | `subtitle` | "Estrategias para proteger el bienestar..." |
| **Información del autor** | `author_name` + `author_credentials` + `author_photo_url` | Ver ejemplo completo abajo |
| **Fecha de publicación** | `published_at` | "2025-09-06T10:00:00Z" |
| **Botones compartir** | `shares_count` | Para tracking de compartidos |

### **2. CONTENIDO PRINCIPAL**
| Elemento de PsicologíayMente | Tu Campo | Uso Optimizado |
|------------------------------|----------|----------------|
| **Imagen principal con crédito** | `image_1_path` + `image_1_alt` | Imagen hero con descripción SEO |
| **Introducción (2-3 párrafos)** | `introduction` | Texto enganchador y contextual |
| **Secciones principales con H2** | `key_sections` (JSON) | Estructura completa con metadata |
| **Datos y estudios** | `current_data_research` | Estadísticas y referencias |
| **Pregunta reflexiva** | `reflective_question` | Conecta emocionalmente |
| **Caso anónimo** | `anonymous_case` | Testimonio real estructurado |
| **Análisis psicológico** | `psychological_analysis` | Contenido técnico profesional |
| **Recomendaciones prácticas** | `practical_recommendations` | Array de acciones concretas |
| **Enlaces internos** | `related_articles` | Con metadata completa |
| **Citas destacadas** | Dentro de `key_sections` | Con formato especial |

### **3. ELEMENTOS ESPECIALES**
| Elemento de PsicologíayMente | Tu Campo | Implementación |
|------------------------------|----------|----------------|
| **Box de profesionales** | `professional_recommendations` | Grid de especialistas |
| **Newsletter signup** | `newsletter_mention` + `related_newsletter_content` | CTA y contenido relacionado |
| **Publicidad entre secciones** | `recommended_products` | Productos contextualmente relevantes |

### **4. FOOTER DEL ARTÍCULO**
| Elemento de PsicologíayMente | Tu Campo | Formato |
|------------------------------|----------|---------|
| **Referencias bibliográficas** | `bibliography` | JSON con formato APA |
| **Tags del artículo** | `tags` | Array de términos relevantes |
| **Biografía expandida del autor** | `author_bio` + `author_social_links` | Información completa |
| **Artículos relacionados** | `related_articles` | Con imágenes y metadatos |

---

## 🎨 **TEMPLATES DE ESTRUCTURA JSON**

### **1. `key_sections` - Secciones Principales**

```json
[
  {
    "title": "Título de la sección (H2)",
    "content": "Contenido resumido de la sección",
    "type": "introduction|research_section|main_section|practical_section|conclusion_section",
    "order": 1,
    "word_count": 250,
    "includes_quote": true,
    "featured_quote": "Cita destacada exacta del artículo original",
    "includes_professional_box": true,
    "professional_box": {
      "title": "Título del box de profesionales",
      "subtitle": "Descripción del servicio",
      "cta_text": "Texto del botón",
      "cta_url": "/url-destino"
    },
    "includes_newsletter_signup": true,
    "newsletter_box": {
      "title": "¿Te interesa este contenido?",
      "subtitle": "¡Suscríbete a nuestro newsletter!",
      "description": "Contenido exclusivo sobre crianza y desarrollo."
    },
    "includes_case_study": true,
    "case_study": {
      "name": "Nombre del caso",
      "age": "Edad",
      "situation": "Situación problemática",
      "intervention": "Intervención aplicada",
      "outcome": "Resultado obtenido"
    },
    "research_citations": ["id1", "id2", "id3"],
    "internal_links": [
      {
        "text": "texto del enlace",
        "url": "/url-interna",
        "type": "internal"
      }
    ]
  }
]
```

### **2. `professional_recommendations` - Box de Profesionales**

```json
[
  {
    "title": "Encuentra los mejores profesionales cerca de ti",
    "subtitle": "Accede a una amplia red de psicólogos calificados. Empatía y experiencia a tu servicio.",
    "cta_text": "Encuentra profesionales",
    "cta_url": "/directorio-profesionales",
    "display_type": "professional_grid",
    "position_after_section": "El papel del entorno y la sociedad",
    "professionals": [
      {
        "name": "Ana Ocaña",
        "specialties": ["Paternidad", "Autoestima"],
        "location": "Madrid",
        "rating": 5,
        "profile_url": "/psicologos/ana-ocana",
        "image_url": "/professionals/ana-ocana.webp",
        "verified": true,
        "experience_years": 10
      },
      {
        "name": "Psicología Devidamente",
        "specialties": ["Autoestima"],
        "location": "Madrid",
        "rating": 5,
        "profile_url": "/psicologos/psicologia-devidamente",
        "image_url": "/professionals/psicologia-devidamente.webp",
        "verified": true
      }
    ]
  },
  {
    "title": "Empieza hoy tu viaje de bienestar",
    "subtitle": "Apoyo especializado para toda la familia",
    "cta_text": "Solicitar consulta",
    "cta_url": "/contacto",
    "display_type": "cta_box",
    "position_after_section": "Estrategias prácticas",
    "background_color": "#e8f4f8",
    "text_color": "#2c3e50"
  }
]
```

### **3. `related_articles` - Artículos Relacionados**

```json
[
  {
    "title": "¿Por qué cada vez hay más mujeres que deciden no ser madre?",
    "slug": "por-que-cada-vez-hay-mas-mujeres-que-deciden-no-ser-madre",
    "category": "Psicología social y relaciones personales",
    "author_name": "Sara Martínez",
    "author_image": "/authors/sara-martinez.webp",
    "image_url": "/articles/mujeres-no-ser-madre.webp",
    "relevance": "high",
    "type": "internal",
    "description": "Análisis de las decisiones reproductivas en la sociedad actual"
  },
  {
    "title": "Infertilidad y emociones: el lado invisible del camino a ser madre",
    "slug": "infertilidad-y-emociones-el-lado-invisible-del-camino-a-ser-madre",
    "category": "Psicología clínica",
    "author_name": "Natalia Pérez",
    "author_image": "/authors/natalia-perez.webp",
    "image_url": "/articles/infertilidad-emociones.webp",
    "relevance": "medium",
    "type": "internal",
    "description": "Apoyo emocional en procesos de fertilidad"
  }
]
```

### **4. `bibliography` - Referencias Académicas**

```json
[
  {
    "id": "henderson2016",
    "authors": ["Henderson, A. C.", "Harmon, S. M.", "Newman, H."],
    "year": 2016,
    "title": "The price mothers pay, even when they are not buying it: Mental health consequences of idealized motherhood",
    "journal": "Sex Roles",
    "volume": "74",
    "pages": "512–526",
    "doi": "10.1007/s11199-015-0534-5",
    "type": "journal_article",
    "cited_in_text": true,
    "citation_format": "apa"
  },
  {
    "id": "egmose2022",
    "authors": ["Egmose, I.", "Krogh, M. T.", "Stuart, A. C.", "Haase, T. W."],
    "year": 2022,
    "title": "How are mothers negatively affected and supported by following parenting-related Instagram profiles? A mixed-methods study",
    "journal": "Acta Psychologica",
    "volume": "227",
    "pages": "103593",
    "type": "journal_article",
    "cited_in_text": true,
    "citation_format": "apa"
  }
]
```

---

## 📋 **CHECKLIST: Artículo Estilo Psicología y Mente**

### ✅ **Header Completo**
- [ ] `title` - Título llamativo y optimizado SEO
- [ ] `subtitle` - Subtítulo descriptivo que explica el enfoque
- [ ] `category` + `subcategory` - Categorización clara
- [ ] `is_professional_content: true` - Badge de contenido revisado
- [ ] `author_name` + `author_credentials` + `author_bio` - Información completa del autor
- [ ] `published_at` - Fecha de publicación
- [ ] `tags` - Array de términos relevantes

### ✅ **Contenido Principal**
- [ ] `introduction` - 2-3 párrafos enganchadores
- [ ] `current_data_research` - Datos, estadísticas y estudios
- [ ] `reflective_question` - Pregunta que conecta emocionalmente
- [ ] `anonymous_case` - Testimonio o caso real
- [ ] `psychological_analysis` - Análisis técnico profesional
- [ ] `practical_recommendations` - Array de 3-5 acciones concretas
- [ ] `call_to_action` - Invitación a consulta profesional
- [ ] `empathetic_closing` - Cierre empático y motivador

### ✅ **Estructura JSON Optimizada**
- [ ] `key_sections` - Secciones con metadatos completos
- [ ] `professional_recommendations` - Box de profesionales
- [ ] `related_articles` - Artículos con información completa
- [ ] `bibliography` - Referencias en formato APA
- [ ] `FAQ_data` - Preguntas frecuentes estructuradas
- [ ] `summary_points` - Puntos clave resumidos

### ✅ **SEO y Metadatos**
- [ ] `meta_description` - Descripción optimizada
- [ ] `meta_keywords` - Palabras clave relevantes
- [ ] `excerpt` - Resumen del artículo
- [ ] `canonical_url` - URL canónica
- [ ] `schema_markup` - Datos estructurados JSON-LD
- [ ] `breadcrumb_data` - Navegación jerárquica

### ✅ **Engagement y Newsletter**
- [ ] `newsletter_mention` - Mención del newsletter
- [ ] `related_newsletter_content` - Contenido relacionado
- [ ] `recommended_products` - Productos contextualmente relevantes
- [ ] `reading_time_minutes` - Tiempo estimado de lectura

---

## 🎯 **EJEMPLO PRÁCTICO APLICADO**

He actualizado tu archivo `ejemplo_insert_article.sql` con la estructura optimizada y creado un nuevo archivo `EJEMPLO_ARTICULO_ESTILO_PSICOLOGIA_Y_MENTE.sql` que muestra:

1. **Estructura JSON mejorada** para `key_sections`
2. **Box de profesionales** como en Psicología y Mente
3. **Artículos relacionados** con información completa
4. **Referencias bibliográficas** en formato académico
5. **Newsletter y CTA** integrados naturalmente

---

## 🚀 **RESULTADO FINAL**

Con esta estructura, tus artículos tendrán:

✅ **Header profesional** con badge de artículo revisado
✅ **Secciones estructuradas** con títulos H2 como Psicología y Mente
✅ **Citas destacadas** integradas en el contenido
✅ **Box de profesionales** con grid de especialistas
✅ **Newsletter signup** contextualizado
✅ **Referencias académicas** desplegables
✅ **Artículos relacionados** con metadatos completos
✅ **Biografía del autor** expandida
✅ **SEO optimizado** con datos estructurados

**¡Tu base de datos actual es perfecta para replicar el estilo de Psicología y Mente!** 🎉

No necesitas agregar ningún campo nuevo, solo optimizar cómo organizas los datos JSON en los campos existentes.
