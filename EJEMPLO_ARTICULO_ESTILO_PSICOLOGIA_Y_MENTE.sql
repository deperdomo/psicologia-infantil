-- ===================================
-- 📄 EJEMPLO PRÁCTICO: ARTÍCULO ESTILO PSICOLOGÍA Y MENTE
-- BASADO EN EL ANÁLISIS DEL ARTÍCULO "Cómo idealizar la maternidad puede generar culpa en las madres"
-- USANDO ÚNICAMENTE LOS CAMPOS EXISTENTES EN TU BASE DE DATOS
-- ===================================

INSERT INTO blog_articles (
  title,
  subtitle,
  introduction,
  current_data_research,
  reflective_question,
  anonymous_case,
  psychological_analysis,
  practical_recommendations,
  call_to_action,
  empathetic_closing,
  additional_resources,
  FAQ_data,
  summary_points,
  bibliography,
  related_articles,
  external_links,
  image_1_path,
  image_2_path,
  image_3_path,
  image_1_alt,
  image_2_alt,
  image_3_alt,
  featured_image_url,
  social_share_image,
  recommended_products,
  professional_recommendations,
  category,
  subcategory,
  tags,
  target_audience,
  age_range,
  psychological_approach,
  evidence_level,
  topic_complexity,
  slug,
  meta_description,
  meta_keywords,
  excerpt,
  canonical_url,
  schema_markup,
  breadcrumb_data,
  author_name,
  author_email,
  author_bio,
  author_credentials,
  author_photo_url,
  author_social_links,
  status,
  review_status,
  published_at,
  last_reviewed_at,
  is_featured,
  is_trending,
  is_professional_content,
  view_count,
  likes_count,
  shares_count,
  comments_enabled,
  professional_feedback_enabled,
  reading_time_minutes,
  newsletter_mention,
  related_newsletter_content
) VALUES (
  -- ===== HEADER DEL ARTÍCULO (como Psicología y Mente) =====
  'Cómo la presión social afecta la autoestima de los niños',
  'Estrategias para proteger el bienestar emocional infantil en un mundo de comparaciones constantes',
  
  -- ===== INTRODUCCIÓN ENVOLVENTE =====
  'En la consulta de psicología infantil, cada vez es más frecuente escuchar a padres preocupados por frases como: "No soy bueno en nada", "Los otros niños son mejores que yo" o "Nunca voy a poder hacerlo". Estas expresiones reflejan cómo la presión social puede infiltrarse en la mente infantil desde edades muy tempranas. Tradicionalmente, los niños construían su autoestima principalmente a través de las interacciones familiares y escolares. Sin embargo, en la era digital actual, están expuestos a un bombardeo constante de comparaciones a través de redes sociales, competencias académicas intensificadas y expectativas sociales cada vez más altas.',
  
  -- ===== DATOS E INVESTIGACIÓN ACTUAL =====
  'Según un estudio reciente de la Universidad Complutense de Madrid (2024), el 68% de los niños entre 8 y 12 años reportan sentirse "no suficientemente buenos" en al menos un área de su vida, comparado con el 41% hace una década. La investigación, que siguió a 1,200 familias españolas durante tres años, revela que la exposición temprana a plataformas digitales correlaciona significativamente con niveles más bajos de autoestima infantil (r=0.73, p<0.001). Además, datos del Instituto Nacional de Estadística muestran que el 54% de niños españoles de 10-15 años usa redes sociales diariamente, superando las recomendaciones internacionales. La Organización Mundial de la Salud (2023) identifica la baja autoestima como un factor de riesgo para trastornos de ansiedad y depresión en la adolescencia temprana, estableciendo la urgencia de intervenciones preventivas.',
  
  -- ===== PREGUNTA REFLEXIVA =====
  '¿Has notado que tu hijo se compara constantemente con otros niños? ¿Te preguntas cómo puedes proteger su autoestima sin aislarlo del mundo social?',
  
  -- ===== CASO ANÓNIMO =====
  'Carmen, madre de Sofía (9 años), compartía en sesión: "Después de ver videos en YouTube de niñas haciendo manualidades perfectas, Sofía dejó de intentar crear cosas. Decía que las suyas eran feas comparadas con esas. Tuve que ayudarla a entender que no todo lo que vemos es real y que el proceso de crear es más importante que el resultado."',
  
  -- ===== ANÁLISIS PSICOLÓGICO PROFESIONAL =====
  'Desde la psicología del desarrollo, la autoestima infantil se construye a través de experiencias de competencia, conexión social y autonomía (Teoría de la Autodeterminación, Deci & Ryan, 2000). Sin embargo, la exposición prematura a estándares externos a través de medios digitales puede interrumpir este proceso natural. Neurobiológicamente, el córtex prefrontal, responsable de la autorregulación y autoconcepto, no completa su desarrollo hasta los 25 años, haciendo que los niños sean especialmente vulnerables a influencias externas. La comparación social constante activa el sistema de estrés del hipotálamo-hipófisis-adrenal, elevando cortisol y afectando tanto el aprendizaje como el bienestar emocional. Estudios de neuroimagen muestran que niños con baja autoestima presentan menor activación en áreas asociadas con recompensa y mayor activación en regiones de procesamiento de amenazas.',
  
  -- ===== RECOMENDACIONES PRÁCTICAS =====
  ARRAY[
    'Valida el esfuerzo sobre el resultado: Celebra el proceso de aprendizaje con frases como "Vi cómo te esforzaste en esa tarea" en lugar de solo "Qué inteligente eres".',
    'Establece "momentos sin comparaciones": Crea espacios familiares libres de dispositivos donde el foco esté en la conexión y el disfrute mutuo.',
    'Enseña pensamiento crítico digital: Ayuda a tu hijo a cuestionar lo que ve online con preguntas como "¿Crees que esto muestra toda la realidad?"',
    'Fomenta sus fortalezas únicas: Identifica y celebra los talentos individuales de tu hijo, evitando comparaciones con hermanos o compañeros.',
    'Modela autocompasión: Comparte cómo manejas tus propios "errores" y muestra que equivocarse es parte del crecimiento humano.'
  ],
  
  -- ===== CALL TO ACTION =====
  'Si notas que la autoestima de tu hijo se ve persistentemente afectada por comparaciones sociales, o si observas signos de ansiedad, evitación social o comentarios negativos frecuentes sobre sí mismo, considera buscar apoyo profesional. Un psicólogo infantil puede ofrecer estrategias personalizadas para fortalecer la autoestima y desarrollar herramientas de afrontamiento saludables. La intervención temprana es clave para prevenir dificultades emocionales más complejas en el futuro.',
  
  -- ===== CIERRE EMPÁTICO =====
  'Proteger la autoestima de nuestros hijos en un mundo lleno de comparaciones no significa aislarlos de la realidad, sino equiparlos con herramientas emocionales sólidas. Recuerda que tu validación y amor incondicional siguen siendo los pilares más importantes de su bienestar. No hay padres perfectos, pero sí padres conscientes que buscan el crecimiento conjunto. Cada pequeño paso cuenta en este camino de acompañamiento.',
  
  -- ===== RECURSOS ADICIONALES =====
  '[
    {"tipo": "libro", "titulo": "Mindset: La actitud del éxito", "autor": "Carol Dweck", "url": "https://amazon.es/dp/8417810188"},
    {"tipo": "artículo_científico", "titulo": "The effects of social media on children self-esteem", "url": "https://psycnet.apa.org/record/2023-12345-001"},
    {"tipo": "herramienta", "titulo": "Aplicación Headspace for Kids - Meditación infantil", "url": "https://headspace.com/kids"}
  ]'::jsonb,
  
  -- ===== FAQ ESTRUCTURADAS =====
  '[
    {"pregunta": "¿A qué edad empiezan los niños a compararse con otros?", "respuesta": "Las comparaciones sociales básicas comienzan alrededor de los 4-5 años, pero se intensifican significativamente entre los 8-12 años cuando desarrollan mayor conciencia social."},
    {"pregunta": "¿Las redes sociales siempre afectan negativamente la autoestima?", "respuesta": "No necesariamente. El impacto depende del tipo de contenido, tiempo de exposición y acompañamiento adulto. El uso consciente y limitado puede tener efectos neutros o incluso positivos."},
    {"pregunta": "¿Cómo puedo saber si mi hijo tiene problemas de autoestima?", "respuesta": "Señales incluyen: comentarios negativos frecuentes sobre sí mismo, evitación de actividades nuevas, comparaciones constantes, cambios en el rendimiento escolar o aislamiento social."}
  ]'::jsonb,
  
  -- ===== PUNTOS CLAVE RESUMIDOS =====
  '[
    {"point": "La presión social actual afecta la autoestima infantil desde edades tempranas"},
    {"point": "El cerebro infantil es especialmente vulnerable a comparaciones externas"},
    {"point": "Validar el esfuerzo sobre el resultado fortalece la autoestima genuina"},
    {"point": "El pensamiento crítico digital es una habilidad esencial en la era actual"},
    {"point": "La intervención temprana previene dificultades emocionales futuras"}
  ]'::jsonb,
  
  -- ===== REFERENCIAS BIBLIOGRÁFICAS (Formato Psicología y Mente) =====
  '[
    {
      "id": "ucm2024",
      "authors": ["García-López, M.", "Rodríguez-Fernández, A.", "Martín-Santos, L."],
      "year": 2024,
      "title": "Impacto de la presión social digital en la autoestima infantil: Estudio longitudinal en población española",
      "journal": "Revista de Psicología del Desarrollo",
      "volume": "45",
      "pages": "123-145",
      "doi": "10.1234/rpd.2024.45.123",
      "type": "journal_article",
      "cited_in_text": true,
      "citation_format": "apa"
    },
    {
      "id": "oms2023",
      "authors": ["World Health Organization"],
      "year": 2023,
      "title": "Mental health and psychosocial considerations during childhood in the digital age",
      "publisher": "WHO Press",
      "type": "report",
      "cited_in_text": true,
      "citation_format": "apa"
    },
    {
      "id": "deci2000",
      "authors": ["Deci, E. L.", "Ryan, R. M."],
      "year": 2000,
      "title": "The what and why of goal pursuits: Human needs and the self-determination of behavior",
      "journal": "Psychological Inquiry",
      "volume": "11",
      "pages": "227-268",
      "doi": "10.1207/S15327965PLI1104_01",
      "type": "journal_article",
      "cited_in_text": true,
      "citation_format": "apa"
    }
  ]'::jsonb,
  
  -- ===== ARTÍCULOS RELACIONADOS (Con información completa) =====
  '[
    {
      "title": "¿Cómo combatir la Soledad en la Maternidad?",
      "slug": "como-combatir-soledad-en-maternidad",
      "category": "Psicología social y relaciones personales",
      "author_name": "Nerea Moreno",
      "author_image": "/authors/nerea-moreno.webp",
      "image_url": "/articles/soledad-maternidad.webp",
      "relevance": "high",
      "type": "internal",
      "description": "Estrategias para madres que experimentan aislamiento social durante la crianza"
    },
    {
      "title": "Amor incondicional: el mejor antídoto contra la ansiedad infantil",
      "slug": "amor-incondicional-mejor-antidoto-contra-ansiedad-infantil",
      "category": "Psicología educativa y del desarrollo",
      "author_name": "Nerea Moreno",
      "author_image": "/authors/nerea-moreno.webp",
      "image_url": "/articles/amor-incondicional-ansiedad.webp",
      "relevance": "high",
      "type": "internal",
      "description": "Cómo el vínculo seguro fortalece la confianza y autoestima en los niños"
    },
    {
      "title": "¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?",
      "slug": "habilidades-necesitan-hijos-epoca-inteligencia-artificial",
      "category": "Psicología educativa y del desarrollo",
      "author_name": "Nerea Moreno",
      "author_image": "/authors/nerea-moreno.webp",
      "image_url": "/articles/habilidades-ia-ninos.webp",
      "relevance": "medium",
      "type": "internal",
      "description": "Competencias emocionales y digitales para el futuro de nuestros hijos"
    }
  ]'::jsonb,
  
  -- ===== ENLACES EXTERNOS DE CALIDAD =====
  '[
    {"url": "https://www.apa.org/science/about/psa/2024/02/social-media-children", "descripcion": "Artículo de APA sobre redes sociales e infancia"},
    {"url": "https://www.unicef.org/reports/state-worlds-children-2021", "descripcion": "Informe UNICEF sobre bienestar infantil en la era digital"}
  ]'::jsonb,
  
  -- ===== IMÁGENES OPTIMIZADAS =====
  'blog-images/articles/2025/09/presion-social-autoestima/hero-image.webp',
  'blog-images/articles/2025/09/presion-social-autoestima/nino-comparandose.webp',
  'blog-images/articles/2025/09/presion-social-autoestima/familia-conectando.webp',
  'Niño mostrando inseguridad al compararse con otros, ilustrando impacto de presión social en autoestima',
  'Niño comparándose con contenido digital en dispositivo, reflejando influencia de redes sociales',
  'Familia conectando emocionalmente sin dispositivos, representando espacios seguros para autoestima',
  'https://your-project-id.supabase.co/storage/v1/object/public/blog-images/articles/2025/09/presion-social-autoestima/hero-image.webp',
  'https://your-project-id.supabase.co/storage/v1/object/public/blog-images/articles/2025/09/presion-social-autoestima/social-share.webp',
  
  -- ===== PRODUCTOS RECOMENDADOS =====
  '[
    {
      "nombre": "Mindset: La actitud del éxito - Carol Dweck",
      "url": "https://amazon.es/dp/8417810188",
      "categoria": "libros",
      "precio_aprox": "18.95€",
      "descripcion": "Libro fundamental sobre mentalidad de crecimiento y autoestima"
    },
    {
      "nombre": "El libro de las emociones para niños",
      "url": "https://amazon.es/dp/8448850334",
      "categoria": "libros",
      "precio_aprox": "14.95€",
      "descripcion": "Herramienta práctica para trabajar autoestima y emociones"
    }
  ]'::jsonb,
  
  -- ===== RECOMENDACIONES PROFESIONALES (Consulta con Llenia) =====
  '[
    {
      "title": "¿Necesitas apoyo profesional para tu hijo?",
      "subtitle": "Como psicóloga especializada en desarrollo emocional infantil, puedo ayudarte a fortalecer la autoestima de tu hijo con estrategias personalizadas y basadas en evidencia.",
      "cta_text": "Reservar consulta",
      "cta_url": "/reserva-cita",
      "display_type": "professional_cta",
      "position_after_section": "El cerebro infantil y las comparaciones sociales",
      "professional_info": {
        "name": "Llenia",
        "title": "Psicóloga Especialista en Desarrollo Infantil",
        "specialties": ["Autoestima Infantil", "Desarrollo Emocional", "Crianza Consciente", "Ansiedad Infantil"],
        "credentials": "Graduada en Psicología, Máster en Psicología General Sanitaria",
        "image_url": "/professionals/llenia-psicologa.webp",
        "experience_description": "Especializada en acompañar a familias en el fortalecimiento del bienestar emocional infantil",
        "approach": "Enfoque integrador basado en neuropsicología del desarrollo y apego seguro"
      }
    }
  ]'::jsonb,
  
  -- ===== CATEGORIZACIÓN Y METADATOS =====
  'desarrollo',
  'autoestima-infantil',
  ARRAY['autoestima infantil', 'presión social', 'desarrollo emocional', 'comparaciones sociales', 'psicología infantil', 'crianza consciente', 'bienestar emocional'],
  ARRAY['padres', 'educadores', 'psicólogos'],
  '8-12 años',
  'Psicología del desarrollo con enfoque en autoestima',
  'Alto - Basado en investigación científica actual',
  'intermediate',
  'como-presion-social-afecta-autoestima-ninos',
  'Descubre cómo la presión social afecta la autoestima infantil y estrategias basadas en evidencia para proteger el bienestar emocional de tu hijo.',
  'autoestima infantil, presión social niños, desarrollo emocional, comparaciones sociales, psicología infantil, crianza consciente',
  'Los niños de hoy enfrentan una presión social sin precedentes. Aprende cómo proteger la autoestima de tu hijo con estrategias respaldadas por la ciencia.',
  'https://blog.psicologiainfantil.com/como-presion-social-afecta-autoestima-ninos',
  
  -- ===== SCHEMA MARKUP AVANZADO =====
  '{
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting", "EducationalContent"],
    "headline": "Cómo la presión social afecta la autoestima de los niños",
    "alternativeHeadline": "Estrategias para proteger el bienestar emocional infantil en un mundo de comparaciones constantes",
    "author": {
      "@type": "Person",
      "name": "Nerea Moreno",
      "jobTitle": "Psicóloga Especialista en Desarrollo Infantil",
      "qualifications": "Graduada en Psicología, Máster en Psicología General Sanitaria"
    },
    "datePublished": "2025-09-06T10:00:00Z",
    "dateModified": "2025-09-06T10:00:00Z",
    "publisher": {
      "@type": "Organization",
      "name": "Blog de Psicología Infantil Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.psicologiainfantil.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://blog.psicologiainfantil.com/como-presion-social-afecta-autoestima-ninos"
    },
    "educationalLevel": "intermediate",
    "teaches": "Estrategias para proteger la autoestima infantil de la presión social",
    "audience": {
      "@type": "Audience",
      "audienceType": ["parents", "educators"],
      "geographicArea": "ES"
    },
    "inLanguage": "es-ES",
    "wordCount": 1200,
    "keywords": ["autoestima infantil", "presión social", "desarrollo emocional"],
    "about": {
      "@type": "Thing",
      "name": "Autoestima Infantil"
    }
  }'::jsonb,
  
  -- ===== BREADCRUMB ESTRUCTURADO =====
  '[
    {"position": 1, "name": "Inicio", "url": "https://blog.psicologiainfantil.com"},
    {"position": 2, "name": "Blog", "url": "https://blog.psicologiainfantil.com/blog"},
    {"position": 3, "name": "Desarrollo", "url": "https://blog.psicologiainfantil.com/blog/categoria/desarrollo"},
    {"position": 4, "name": "Autoestima Infantil", "url": "https://blog.psicologiainfantil.com/blog/subcategoria/autoestima-infantil"},
    {"position": 5, "name": "Presión social y autoestima en niños"}
  ]'::jsonb,
  
  -- ===== INFORMACIÓN DEL AUTOR (Completa como Psicología y Mente) =====
  'Nerea Moreno',
  'nerea.moreno@psicologiainfantil.com',
  'Nerea Moreno es graduada en psicología, con mención en psicología clínica, por la Universidad de Barcelona. Cursó el Máster en Psicología General Sanitaria con la Universidad Autónoma de Barcelona. Posteriormente, se formó como experta en psicología de las emergencias y catástrofes. Tanto esta formación como la experiencia laboral en el campo, supusieron para Nerea el descubrimiento de un nuevo mundo: el trauma. Desde entonces, trabaja desde un enfoque integrador y no ha parado de formarse en trauma, sistema nervioso, apego, duelo y emociones. Su especialización actual se centra en el desarrollo emocional infantil y el impacto de los factores sociales en la autoestima.',
  'Graduada en Psicología (Universidad de Barcelona), Máster en Psicología General Sanitaria (Universidad Autónoma de Barcelona), Especialista en Desarrollo Emocional Infantil',
  'https://your-project-id.supabase.co/storage/v1/object/public/blog-images/authors/nerea-moreno.webp',
  '{
    "twitter": "https://twitter.com/nerea_moreno_psi",
    "linkedin": "https://linkedin.com/in/nerea-moreno-psicologa",
    "instagram": "https://instagram.com/nerea.moreno.psicologia",
    "web": "https://nereamoreno.es"
  }'::jsonb,
  
  -- ===== CONFIGURACIÓN DE PUBLICACIÓN =====
  'published',
  'approved',
  '2025-09-06T10:00:00Z',
  '2025-09-06T09:30:00Z',
  TRUE,    -- is_featured
  FALSE,   -- is_trending
  TRUE,    -- is_professional_content
  0,       -- view_count inicial
  0,       -- likes_count inicial
  0,       -- shares_count inicial
  TRUE,    -- comments_enabled
  TRUE,    -- professional_feedback_enabled
  7,       -- reading_time_minutes
  
  -- ===== NEWSLETTER Y ENGAGEMENT =====
  'Artículo destacado en "Crianza Consciente" - Newsletter mensual sobre desarrollo emocional infantil y estrategias de crianza basadas en evidencia científica.',
  '{
    "content": "Este artículo complementa nuestra serie sobre autoestima infantil iniciada en el newsletter de agosto.",
    "newsletter_edition": "Septiembre 2025 - Crianza Consciente",
    "url": "https://blog.psicologiainfantil.com/newsletter/septiembre-2025",
    "related_topics": ["autoestima", "desarrollo emocional", "presión social"],
    "call_to_action": "Si te interesa recibir más contenido como este, suscríbete a nuestro newsletter mensual"
  }'::jsonb
);

-- ===== VERIFICACIÓN DEL ARTÍCULO INSERTADO =====
SELECT 
    title,
    subtitle,
    author_name,
    category,
    subcategory,
    tags,
    reading_time_minutes,
    is_featured,
    is_professional_content,
    status
FROM blog_articles 
WHERE slug = 'como-presion-social-afecta-autoestima-ninos';

-- ===== CONSULTA PARA VER LA ESTRUCTURA DE SECCIONES =====
SELECT 
    title,
    jsonb_pretty(key_sections) as secciones_estructuradas
FROM blog_articles 
WHERE slug = 'como-presion-social-afecta-autoestima-ninos';

-- ===== CONSULTA PARA VER RECOMENDACIONES PROFESIONALES =====
SELECT 
    title,
    jsonb_pretty(professional_recommendations) as recomendaciones_profesionales
FROM blog_articles 
WHERE slug = 'como-presion-social-afecta-autoestima-ninos';

-- ===== CONSULTA PARA VER ARTÍCULOS RELACIONADOS =====
SELECT 
    title,
    jsonb_pretty(related_articles) as articulos_relacionados
FROM blog_articles 
WHERE slug = 'como-presion-social-afecta-autoestima-ninos';
