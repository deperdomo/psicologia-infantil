-- ===================================
-- 📄 EJEMPLO PRÁCTICO: INSERCIÓN DEL ARTÍCULO DE PSICOLOGIAYMENTE
-- Artículo: "¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?"
-- ===================================

-- Inserción del artículo analizado como ejemplo de implementación
INSERT INTO blog_articles (
    title,
    subtitle,
    slug,
    
    -- Imágenes
    image_1_path,
    image_1_alt,
    featured_image_url,
    social_share_image,
    
    -- Contenido estructurado
    introduction,
    current_data_research,
    reflective_question,
    psychological_analysis,
    practical_recommendations,
    call_to_action,
    empathetic_closing,
    
    -- Secciones principales estructuradas
    key_sections,
    
    -- Referencias bibliográficas
    bibliography,
    
    -- Artículos relacionados
    related_articles,
    
    -- SEO avanzado
    meta_description,
    meta_keywords,
    excerpt,
    canonical_url,
    schema_markup,
    breadcrumb_data,
    
    -- Categorización profesional
    category,
    subcategory,
    tags,
    target_audience,
    age_range,
    psychological_approach,
    evidence_level,
    topic_complexity,
    
    -- Autoría profesional
    author_name,
    author_bio,
    author_credentials,
    author_photo_url,
    
    -- Estado y configuración
    status,
    is_featured,
    is_trending,
    is_professional_content,
    published_at,
    reading_time_minutes,
    
    -- Productos recomendados
    recommended_products,
    
    -- Newsletter y engagement
    newsletter_mention
    
) VALUES (
    -- Título y subtítulo
    '¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?',
    'Un repaso a las aptitudes fundamentales en la infancia de la era de la IA y la digitalización',
    'habilidades-necesitan-hijos-epoca-inteligencia-artificial',
    
    -- Imágenes
    'articles/2025/09/habilidades-ia-ninos/hero-image.webp',
    'Niños utilizando tecnología de inteligencia artificial de forma educativa',
    'https://pymstatic.com/154285/conversions/habilidades-necesitan-hijos-en-epoca-de-inteligencia-artificial-wide_webp.webp',
    'https://psicologia-infantil.com/img/social/habilidades-ia-ninos-social.webp',
    
    -- Contenido principal
    'Ver a un niño usando una tablet o pidiéndole al asistente de voz del teléfono de sus padres que le ponga una canción concreta ya no son cosas extraordinarias. La inteligencia artificial está en los juguetes, en las redes sociales, en la educación y en muchos otros ámbitos que están directamente relacionados con los niños. Sin duda, nuestros hijos crecen en un mundo muy diferente al que nosotros experimentamos en nuestra infancia. Por ello, van a necesitar herramientas y habilidades diferentes de las que nosotros necesitamos.',
    
    'La inteligencia artificial está presente en nuestro día a día y, como consecuencia, en el de nuestros hijos. Desde los videojuegos hasta los filtros en las redes sociales, pasando también por los asistentes virtuales y los algoritmos que ayudan a personalizar las recomendaciones. Es cierto que la inteligencia artificial puede suponer un gran apoyo de cara al aprendizaje ya que permite una adaptación personalizada en base a las necesidades de cada persona.',
    
    '¿Alguna vez has reflexionado sobre cómo preparar a tus hijos para un futuro donde la inteligencia artificial será omnipresente?',
    
    'Desde la perspectiva de la psicología infantil, las habilidades que necesitan desarrollar nuestros hijos en la era de la IA van más allá del conocimiento técnico. Es fundamental que desarrollen pensamiento crítico para distinguir entre fuentes fiables y no fiables, habilidades socioemocionales para mantener relaciones humanas auténticas, autoconocimiento y resiliencia para adaptarse a los cambios constantes, competencias digitales para usar la tecnología de forma ética y responsable, y creatividad para resolver problemas de manera innovadora.',
    
    'Para fomentar estas habilidades, los padres pueden: 1) Mantener espacios de diálogo familiar sobre el contenido digital que consumen, 2) Plantear preguntas reflexivas que fomenten el pensamiento crítico, 3) Modelar un uso responsable de la tecnología, 4) Facilitar experiencias en primera persona que desarrollen la curiosidad natural, 5) Establecer límites saludables con las pantallas para preservar la creatividad.',
    
    'Si notas que tu hijo tiene dificultades para desarrollar estas habilidades o que el uso de la tecnología está afectando su desarrollo socioemocional, no dudes en buscar orientación profesional. Un psicólogo infantil puede proporcionarte estrategias específicas adaptadas a las necesidades individuales de tu hijo.',
    
    'Preparar a nuestros hijos para la era de la inteligencia artificial no significa convertirlos en expertos en tecnología, sino ayudarles a desarrollar las habilidades humanas fundamentales que les permitirán navegar y prosperar en un mundo en constante cambio, manteniendo su esencia humana y su capacidad de conexión auténtica.',
    
    -- Secciones principales estructuradas
    '[
        {
            "title": "La inteligencia artificial y la infancia: oportunidades y riesgos",
            "content": "La IA presenta grandes oportunidades de aprendizaje personalizado pero también riesgos como la dependencia tecnológica y la reducción de habilidades sociales.",
            "order": 1,
            "type": "main"
        },
        {
            "title": "Habilidades cognitivas clave para el futuro",
            "content": "Pensamiento crítico, resolución autónoma de problemas y flexibilidad cognitiva son fundamentales para adaptarse al ritmo de cambio tecnológico.",
            "order": 2,
            "type": "main"
        },
        {
            "title": "Habilidades socioemocionales y éticas",
            "content": "Las relaciones humanas seguirán siendo irreemplazables. Empatía, comunicación asertiva y respeto por la diversidad son cruciales.",
            "order": 3,
            "type": "main"
        },
        {
            "title": "Autoconocimiento y resiliencia",
            "content": "Conocerse a sí mismo, tolerar la frustración y confiar en las propias capacidades son formas de resiliencia necesarias.",
            "order": 4,
            "type": "main"
        },
        {
            "title": "Competencias digitales y tecnológicas",
            "content": "Entender algoritmos, distinguir fuentes fiables, proteger datos personales y comportarse éticamente en entornos virtuales.",
            "order": 5,
            "type": "main"
        },
        {
            "title": "Creatividad, curiosidad y aprendizaje continuo",
            "content": "La creatividad es necesaria para la resolución de conflictos. La curiosidad es motor de aprendizaje y las experiencias en primera persona generan aprendizaje profundo.",
            "order": 6,
            "type": "main"
        }
    ]'::jsonb,
    
    -- Referencias bibliográficas
    '[
        {
            "id": "liu2020",
            "authors": ["Liu, F.", "Kromer, P."],
            "year": 2020,
            "title": "Early age education on artificial intelligence: Methods and tools",
            "journal": "Proceedings of the 4th International Scientific Conference on Intelligent Information Technologies for Industry (IITI''19)",
            "pages": "696–706",
            "publisher": "Springer",
            "type": "journal",
            "cited_in_text": true
        },
        {
            "id": "neugnot2024",
            "authors": ["Neugnot-Cerioli, M.", "Muss Laurenty, O."],
            "year": 2024,
            "title": "The Future of Child Development in the AI Era. Cross-Disciplinary Perspectives Between AI and Child Development Experts",
            "journal": "arXiv",
            "type": "preprint",
            "date": "2024-05-29",
            "cited_in_text": true
        }
    ]'::jsonb,
    
    -- Artículos relacionados
    '[
        {
            "title": "Psicología educativa: definición, conceptos y teorías",
            "url": "/blog/desarrollo/psicologia-educativa",
            "relevance": "high",
            "type": "internal"
        },
        {
            "title": "¿Está la IA cambiando nuestra idea de Empatía?",
            "url": "/blog/social/esta-ia-cambiando-nuestra-empatia",
            "relevance": "medium",
            "type": "internal"
        }
    ]'::jsonb,
    
    -- SEO avanzado
    'Aprende qué habilidades necesitan los niños para la era de la IA. Consejos de psicología infantil para padres sobre desarrollo en la era digital.',
    'habilidades niños inteligencia artificial, desarrollo infantil era digital, psicología infantil IA, educación niños tecnología, competencias digitales infantiles',
    'Los niños de hoy crecen rodeados de inteligencia artificial. Descubre qué habilidades cognitivas, socioemocionales y digitales necesitan desarrollar para prosperar en esta nueva era.',
    'https://psicologia-infantil.com/blog/habilidades-necesitan-hijos-epoca-inteligencia-artificial',
    
    -- Schema markup
    '{
        "@context": "https://schema.org",
        "@type": ["Article", "BlogPosting", "EducationalContent"],
        "headline": "¿Qué habilidades necesitan mis hijos en la época de la inteligencia artificial?",
        "alternativeHeadline": "Un repaso a las aptitudes fundamentales en la infancia de la era de la IA y la digitalización",
        "author": {
            "@type": "Person",
            "name": "Nerea Moreno",
            "jobTitle": "Psicóloga",
            "qualifications": "Graduada en Psicología, Máster en Psicología General Sanitaria"
        },
        "datePublished": "2025-09-04T12:00:00Z",
        "dateModified": "2025-09-04T12:00:00Z",
        "publisher": {
            "@type": "Organization",
            "name": "Psicología Infantil Pro"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://psicologia-infantil.com/blog/habilidades-necesitan-hijos-epoca-inteligencia-artificial"
        },
        "educationalLevel": "intermediate",
        "teaches": "Habilidades necesarias para niños en la era de la inteligencia artificial",
        "audience": {
            "@type": "Audience",
            "audienceType": "parents",
            "geographicArea": "ES"
        },
        "inLanguage": "es-ES"
    }'::jsonb,
    
    -- Breadcrumb data
    '[
        {
            "position": 1,
            "name": "Inicio",
            "url": "/"
        },
        {
            "position": 2,
            "name": "Blog",
            "url": "/blog"
        },
        {
            "position": 3,
            "name": "Desarrollo",
            "url": "/blog/categoria/desarrollo"
        },
        {
            "position": 4,
            "name": "Habilidades en la era de la IA"
        }
    ]'::jsonb,
    
    -- Categorización profesional
    'desarrollo',
    'habilidades-digitales',
    ARRAY['inteligencia artificial', 'desarrollo infantil', 'habilidades digitales', 'educación', 'tecnología', 'psicología infantil', 'crianza moderna'],
    'padres',
    'todas las edades',
    'psicología del desarrollo',
    'investigación científica',
    'intermediate',
    
    -- Autoría profesional
    'Nerea Moreno',
    'Nerea Moreno es graduada en psicología, con mención en psicología clínica, por la Universidad de Barcelona. Cursó el Máster en Psicología General Sanitaria con la Universidad Autónoma de Barcelona. Posteriormente, se formó como experta en psicología de las emergencias y catástrofes. Desde entonces, trabaja desde un enfoque integrador y no ha parado de formarse en trauma, sistema nervioso, apego, duelo y emociones.',
    'Graduada en Psicología (Universidad de Barcelona), Máster en Psicología General Sanitaria (Universidad Autónoma de Barcelona), Experta en Psicología de Emergencias y Catástrofes',
    'https://psicologia-infantil.com/img/authors/nerea-moreno.webp',
    
    -- Estado y configuración
    'published',
    true, -- is_featured
    true, -- is_trending
    true, -- is_professional_content
    '2025-09-04 12:00:00+00'::timestamp with time zone,
    8, -- reading_time_minutes
    
    -- Productos recomendados específicos para el tema
    '[
        {
            "nombre": "El monstruo de colores. Un libro sobre las emociones",
            "url": "https://amazon.es/dp/8408174576",
            "categoria": "libros",
            "precio_aprox": "15.95€",
            "descripcion": "Libro educativo para trabajar inteligencia emocional en niños"
        },
        {
            "nombre": "Juego de cartas de emociones para niños",
            "url": "https://amazon.es/dp/B08K2QXM4P",
            "categoria": "juegos educativos",
            "precio_aprox": "12.95€",
            "descripcion": "Herramienta práctica para desarrollar vocabulario emocional"
        },
        {
            "nombre": "Cuentos para educar niños felices",
            "url": "https://amazon.es/dp/8417273387",
            "categoria": "libros",
            "precio_aprox": "18.95€",
            "descripcion": "Colección de cuentos para trabajar valores y habilidades sociales"
        }
    ]'::jsonb,
    
    -- Newsletter mention
    'Artículo destacado en "La vida con hijos" - Newsletter de contenido exclusivo sobre crianza y educación'
);

-- Insertar algunos comentarios de ejemplo para demostrar el sistema
INSERT INTO blog_comments (
    article_id,
    author_name,
    author_email,
    author_profession,
    content,
    status,
    is_professional_feedback
) VALUES 
(
    (SELECT id FROM blog_articles WHERE slug = 'habilidades-necesitan-hijos-epoca-inteligencia-artificial'),
    'Dr. María González',
    'maria.gonzalez@email.com',
    'Psicóloga Infantil',
    'Excelente artículo que aborda de manera integral las habilidades necesarias para la era digital. Como profesional, me parece especialmente acertado el enfoque en el pensamiento crítico y las habilidades socioemocionales. La tecnología puede ser una herramienta poderosa cuando se usa conscientemente.',
    'approved',
    true
),
(
    (SELECT id FROM blog_articles WHERE slug = 'habilidades-necesitan-hijos-epoca-inteligencia-artificial'),
    'Carmen Rodríguez',
    'carmen.rodriguez@email.com',
    'Madre de familia',
    'Me ha resultado muy útil este artículo. Tengo dos hijos de 6 y 9 años y a veces me siento perdida sobre cómo manejar el tema de la tecnología en casa. Las recomendaciones prácticas son muy claras y aplicables. ¡Gracias!',
    'approved',
    false
),
(
    (SELECT id FROM blog_articles WHERE slug = 'habilidades-necesitan-hijos-epoca-inteligencia-artificial'),
    'Prof. Luis Martín',
    'luis.martin@colegio.edu',
    'Docente de Primaria',
    'Como educador, veo a diario la importancia de estos temas en el aula. El artículo refleja perfectamente los desafíos que enfrentamos. Sería interesante profundizar en estrategias específicas para el ámbito educativo.',
    'approved',
    true
);

-- Verificar la inserción
SELECT 
    title,
    subtitle,
    author_name,
    category,
    subcategory,
    status,
    is_featured,
    reading_time_minutes,
    published_at
FROM blog_articles 
WHERE slug = 'habilidades-necesitan-hijos-epoca-inteligencia-artificial';

-- Verificar la vista con URLs de imágenes
SELECT 
    title,
    image_1_url,
    featured_image_url,
    author_credentials,
    evidence_level
FROM blog_articles_with_images 
WHERE slug = 'habilidades-necesitan-hijos-epoca-inteligencia-artificial';

-- Verificar comentarios
SELECT 
    author_name,
    author_profession,
    is_professional_feedback,
    LEFT(content, 100) || '...' as content_preview,
    status
FROM blog_comments 
WHERE article_id = (
    SELECT id FROM blog_articles 
    WHERE slug = 'habilidades-necesitan-hijos-epoca-inteligencia-artificial'
);

-- Probar la función de búsqueda
SELECT * FROM search_articles('inteligencia artificial niños', 5);
