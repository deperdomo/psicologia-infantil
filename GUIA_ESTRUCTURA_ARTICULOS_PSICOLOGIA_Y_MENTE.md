# 📝 GUÍA: Cómo Estructurar Artículos como Psicología y Mente
## Usando tu Base de Datos Actual - Sin Agregar Campos

Basado en el análisis del artículo ["Cómo idealizar la maternidad puede generar culpa en las madres"](https://psicologiaymente.com/social/idealizar-maternidad-generar-culpa-en-madres) y tu estructura actual de datos.

---

## 🎯 **MAPEO DE CAMPOS: Psicología y Mente ➜ Tu Estructura**

### **1. HEADER DEL ARTÍCULO**

**Elemento de PsicologíayMente** ➜ **Tu Campo**

- **Categoría principal** ➜ `category` + `subcategory`
- **Badge "Artículo revisado"** ➜ `review_status` + `is_professional_content`
- **Título principal (H1)** ➜ `title`
- **Subtítulo descriptivo (H2)** ➜ `subtitle`
- **Información del autor** ➜ `author_name` + `author_bio` + `author_credentials` + `author_photo_url`
- **Fecha de publicación** ➜ `published_at`
- **Botones compartir** ➜ `shares_count` (para tracking)

### **2. CONTENIDO PRINCIPAL**

**Elemento de PsicologíayMente** ➜ **Tu Campo**

- **Imagen principal con crédito** ➜ `image_1_path` + `image_1_alt`
- **Introducción (2-3 párrafos)** ➜ `introduction`
- **Secciones principales con H2** ➜ `key_sections` (JSON estructurado)
- **Datos y estudios** ➜ `current_data_research`
- **Pregunta reflexiva** ➜ `reflective_question`
- **Caso anónimo** ➜ `anonymous_case`
- **Análisis psicológico** ➜ `psychological_analysis`
- **Recomendaciones prácticas** ➜ `practical_recommendations`
- **Enlaces internos** ➜ `related_articles`
- **Citas destacadas** ➜ Incluir en `key_sections` con formato especial

### **3. ELEMENTOS ESPECIALES**

**Elemento de PsicologíayMente** ➜ **Tu Campo**

- **Box de profesionales** ➜ `professional_recommendations`
- **Newsletter signup** ➜ `newsletter_mention` + `related_newsletter_content`
- **Publicidad entre secciones** ➜ `recommended_products`

### **4. FOOTER DEL ARTÍCULO**

**Elemento de PsicologíayMente** ➜ **Tu Campo**

- **Referencias bibliográficas** ➜ `bibliography`
- **Formato de citación APA** ➜ Incluir en `bibliography` con formato estándar
- **Tags del artículo** ➜ `tags`
- **Biografía expandida del autor** ➜ `author_bio` + `author_social_links`
- **Artículos relacionados** ➜ `related_articles`

---

## 🎨 **TEMPLATE DE ESTRUCTURA: Como Psicología y Mente**

### **Formato para `key_sections` (Secciones Principales)**

```json
[
  {
    "title": "Introducción al problema",
    "content": "Contenido de la sección",
    "type": "introduction",
    "order": 1,
    "word_count": 200,
    "includes_quote": false
  },
  {
    "title": "Los mitos sobre la maternidad y las madres",
    "content": "Contenido principal de la sección...",
    "type": "main_section",
    "order": 2,
    "word_count": 350,
    "includes_quote": true,
    "featured_quote": "Si las expectativas y la realidad no coinciden, el malestar que sienten las personas puede llegar a ser muy intenso",
    "internal_links": [
      {
        "text": "salud mental",
        "url": "/psicologia/salud-mental",
        "type": "internal"
      }
    ]
  },
  {
    "title": "El papel del entorno y la sociedad",
    "content": "Desarrollo sobre el contexto social...",
    "type": "main_section",
    "order": 3,
    "word_count": 300,
    "includes_professional_box": true,
    "professional_box": {
      "title": "Encuentra los mejores profesionales cerca de ti",
      "subtitle": "Accede a una amplia red de psicólogos calificados",
      "cta_text": "Encuentra profesionales"
    }
  },
  {
    "title": "La culpa como consecuencia directa",
    "content": "Análisis psicológico profundo...",
    "type": "main_section",
    "order": 4,
    "word_count": 280,
    "includes_quote": true,
    "featured_quote": "en el caso de la maternidad esta culpa suele volverse desadaptativa y disfuncional, generando un malestar abrumador"
  },
  {
    "title": "El impacto de las redes sociales",
    "content": "Último punto del análisis...",
    "type": "main_section",
    "order": 5,
    "word_count": 250,
    "includes_newsletter_signup": true,
    "newsletter_box": {
      "title": "¿Te interesa este contenido?",
      "subtitle": "¡Suscríbete a 'La vida con hijos'!",
      "description": "Nuevo newsletter de contenido exclusivo sobre crianza, educación y pareja."
    }
  }
]
```

### **Formato para `bibliography` (Como Psicología y Mente)**

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
  },
  {
    "id": "roig2022",
    "authors": ["Roig, P."],
    "year": 2022,
    "title": "Madre: Escúchate, compréndete y date lo que necesitas",
    "publisher": "Bruguera",
    "type": "book",
    "cited_in_text": false,
    "citation_format": "apa"
  }
]
```

### **Formato para `related_articles` (Artículos Relacionados)**

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
    "type": "internal"
  },
  {
    "title": "Infertilidad y emociones: el lado invisible del camino a ser madre",
    "slug": "infertilidad-y-emociones-el-lado-invisible-del-camino-a-ser-madre",
    "category": "Psicología clínica",
    "author_name": "Natalia Pérez",
    "author_image": "/authors/natalia-perez.webp",
    "image_url": "/articles/infertilidad-emociones.webp",
    "relevance": "medium",
    "type": "internal"
  }
]
```

### **Formato para `professional_recommendations` (Box de Profesionales)**

```json
[
  {
    "title": "Encuentra los mejores profesionales cerca de ti",
    "subtitle": "Accede a una amplia red de psicólogos calificados. Empatía y experiencia a tu servicio.",
    "cta_text": "Encuentra profesionales",
    "cta_url": "/directorio-profesionales",
    "professionals": [
      {
        "name": "Ana Ocaña",
        "specialties": ["Paternidad", "Autoestima"],
        "location": "Madrid",
        "rating": 5,
        "profile_url": "/psicologos/ana-ocana",
        "image_url": "/professionals/ana-ocana.webp"
      },
      {
        "name": "Psicología Devidamente",
        "specialties": ["Autoestima"],
        "location": "Madrid",
        "rating": 5,
        "profile_url": "/psicologos/psicologia-devidamente",
        "image_url": "/professionals/psicologia-devidamente.webp"
      }
    ],
    "display_type": "grid",
    "position_after_section": 2
  }
]
```

---

## 📋 **EJEMPLO PRÁCTICO: Artículo Estilo Psicología y Mente**

### **Datos que ya tienes estructurados perfectamente:**

✅ **Tu artículo "Pantallas y emociones"** ya sigue la estructura ideal:

1. **Título llamativo**: ✅ "Pantallas y emociones: ¿cómo poner límites sin gritos ni culpas?"
2. **Subtítulo descriptivo**: ✅ "Guía para padres y cuidadores sobre el acompañamiento emocional..."
3. **Introducción envolvente**: ✅ Conecta emocionalmente desde la primera línea
4. **Datos y investigación**: ✅ `current_data_research` con estadísticas de OMS
5. **Pregunta reflexiva**: ✅ "¿Te ha pasado sentirte sobrepasada/o al poner límites...?"
6. **Caso anónimo**: ✅ Testimonio de Marta, mamá de Leo
7. **Análisis psicológico**: ✅ Teoría del apego e inteligencia emocional
8. **Recomendaciones prácticas**: ✅ Array de 5 acciones concretas
9. **CTA profesional**: ✅ Invitación a terapia personalizada
10. **Cierre empático**: ✅ "No hay recetas perfectas..."

### **Mejoras Sugeridas para `key_sections`:**

<details>
<summary>📝 Click para ver la estructura JSON optimizada</summary>

```json
[
  {
    "title": "El dilema moderno de las pantallas en la crianza",
    "content": "Los límites con las pantallas suelen despertar emociones intensas y se convierten en un desafío familiar que va mucho más allá de la simple 'obediencia'.",
    "type": "introduction",
    "order": 1,
    "word_count": 180,
    "includes_quote": false
  },
  {
    "title": "Qué dice la ciencia sobre pantallas y emociones infantiles",
    "content": "Datos de la OMS y estudios recientes sobre el impacto del exceso de pantallas en la regulación emocional...",
    "type": "research_section",
    "order": 2,
    "word_count": 320,
    "includes_quote": true,
    "featured_quote": "La tecnología jamás reemplaza la presencia y el acompañamiento que ayudan a los niños a comprender y expresar lo que sienten",
    "research_citations": ["who2019", "muppalla2023", "oflu2021"]
  },
  {
    "title": "La neurociencia detrás del 'enganche' digital",
    "content": "Análisis del sistema dopaminérgico y su impacto en el desarrollo del lóbulo frontal...",
    "type": "main_section",
    "order": 3,
    "word_count": 280,
    "includes_professional_box": true,
    "professional_box": {
      "title": "¿Necesitas orientación personalizada?",
      "subtitle": "Nuestros psicólogos infantiles pueden ayudarte con estrategias específicas",
      "cta_text": "Agenda una consulta"
    }
  },
  {
    "title": "Estrategias prácticas: límites con conexión emocional",
    "content": "5 recomendaciones basadas en evidencia para poner límites sin gritos ni culpas...",
    "type": "practical_section",
    "order": 4,
    "word_count": 350,
    "includes_case_study": true,
    "case_study": {
      "name": "Marta y Leo",
      "age": "6 años",
      "situation": "Dificultades para dejar la tablet",
      "solution": "Validación emocional + límites empáticos"
    }
  },
  {
    "title": "Cuándo buscar apoyo profesional",
    "content": "Señales de alerta y beneficios de la orientación psicológica...",
    "type": "conclusion_section",
    "order": 5,
    "word_count": 200,
    "includes_newsletter_signup": true,
    "newsletter_box": {
      "title": "¿Te interesa este contenido?",
      "subtitle": "Suscríbete a nuestro newsletter",
      "description": "Contenido exclusivo sobre crianza consciente y desarrollo emocional infantil"
    }
  }
]
```

</details>

---

## 🎯 **IMPLEMENTACIÓN: Pasos Concretos**

### **1. Actualiza tu archivo `ejemplo_insert_article.sql`**

<function_calls>
<invoke name="replace_string_in_file">
<parameter name="filePath">d:\Proyectos\psicologia-infantil\ejemplo_insert_article.sql
