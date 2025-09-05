-- Script para insertar artículos de prueba en la tabla blog_articles
-- Ejecutar estos INSERT uno por uno en Supabase para probar el blog

-- Artículo 1: Desarrollo emocional
INSERT INTO blog_articles (
  title,
  subtitle,
  slug,
  excerpt,
  introduction,
  psychological_analysis,
  practical_recommendations,
  category,
  tags,
  author_name,
  author_credentials,
  author_bio,
  reading_time_minutes,
  is_featured,
  is_trending,
  status,
  published_at,
  meta_description,
  canonical_url
) VALUES (
  'Cómo desarrollar la inteligencia emocional en niños de 3 a 6 años',
  'Estrategias prácticas para fortalecer las habilidades emocionales en la primera infancia',
  'inteligencia-emocional-ninos-3-6-anos',
  'Descubre técnicas eficaces para ayudar a tu hijo a identificar, comprender y gestionar sus emociones durante los años preescolares.',
  'La inteligencia emocional es una de las habilidades más importantes que podemos desarrollar en nuestros hijos. Entre los 3 y 6 años, el cerebro infantil está en pleno desarrollo y es el momento ideal para establecer las bases de una gestión emocional saludable.',
  'Durante esta etapa, el córtex prefrontal aún se está desarrollando, lo que explica por qué los niños pueden tener dificultades para regular sus emociones. Sin embargo, con las estrategias adecuadas, podemos ayudarles a desarrollar estas habilidades fundamentales.',
  'Valida sus emociones, enséñales vocabulario emocional, practica ejercicios de respiración y utiliza cuentos para explorar diferentes situaciones emocionales.',
  'desarrollo_infantil',
  ARRAY['inteligencia emocional', 'preescolar', 'desarrollo', 'emociones', 'crianza'],
  'Dra. María García',
  'Psicóloga Infantil, Máster en Desarrollo Temprano',
  'Especialista en psicología infantil con más de 15 años de experiencia en desarrollo emocional temprano.',
  8,
  true,
  true,
  'published',
  NOW(),
  'Aprende a desarrollar la inteligencia emocional en niños de 3 a 6 años con estrategias prácticas y profesionales.',
  'https://psicologia-infantil.com/blog/inteligencia-emocional-ninos-3-6-anos'
);

-- Artículo 2: Crianza positiva
INSERT INTO blog_articles (
  title,
  subtitle,
  slug,
  excerpt,
  introduction,
  psychological_analysis,
  practical_recommendations,
  category,
  tags,
  author_name,
  author_credentials,
  reading_time_minutes,
  is_featured,
  status,
  published_at,
  meta_description
) VALUES (
  'Límites sin gritos: Disciplina positiva para niños',
  'Cómo establecer límites claros manteniendo una relación afectuosa con tu hijo',
  'limites-sin-gritos-disciplina-positiva',
  'Aprende técnicas de disciplina positiva que fortalecen la relación con tu hijo mientras estableces límites claros y respetuosos.',
  'La disciplina positiva se basa en el respeto mutuo y la enseñanza, no en el castigo. Es posible establecer límites firmes sin recurrir a gritos o amenazas.',
  'Los niños necesitan estructura y límites para sentirse seguros. La disciplina positiva ayuda a desarrollar la autodisciplina y la responsabilidad personal.',
  'Establece reglas claras, usa consecuencias naturales, mantén la calma durante conflictos y enfócate en soluciones en lugar de castigos.',
  'crianza_positiva',
  ARRAY['disciplina positiva', 'límites', 'crianza', 'comportamiento', 'respeto'],
  'Lic. Ana Rodríguez',
  'Psicóloga Familiar, Certificada en Disciplina Positiva',
  6,
  true,
  'published',
  NOW() - INTERVAL '2 days',
  'Descubre cómo aplicar disciplina positiva para establecer límites sin gritos ni castigos.'
);

-- Artículo 3: Problemas de comportamiento
INSERT INTO blog_articles (
  title,
  subtitle,
  slug,
  excerpt,
  introduction,
  psychological_analysis,
  practical_recommendations,
  category,
  tags,
  author_name,
  author_credentials,
  reading_time_minutes,
  status,
  published_at,
  meta_description
) VALUES (
  'Rabietas en niños: Por qué ocurren y cómo manejarlas',
  'Guía completa para entender y gestionar las rabietas infantiles de forma efectiva',
  'rabietas-ninos-como-manejarlas',
  'Las rabietas son parte normal del desarrollo. Aprende por qué suceden y las mejores estrategias para manejarlas con paciencia y comprensión.',
  'Las rabietas pueden ser agotadoras para los padres, pero son una parte completamente normal del desarrollo infantil. Entender su origen nos ayuda a responder de manera más efectiva.',
  'Las rabietas ocurren cuando los niños se sienten abrumados emocionalmente y no tienen las herramientas para expresar sus necesidades de manera apropiada.',
  'Mantén la calma, valida sus sentimientos, ofrece opciones limitadas y enseña técnicas de autorregulación cuando estén calmados.',
  'problemas_comportamiento',
  ARRAY['rabietas', 'comportamiento', 'desarrollo', 'autorregulación', 'paciencia'],
  'Dr. Carlos López',
  'Psicólogo Clínico Infantil, PhD en Psicología del Desarrollo',
  7,
  'published',
  NOW() - INTERVAL '5 days',
  'Entiende por qué ocurren las rabietas infantiles y aprende estrategias efectivas para manejarlas.'
);

-- Artículo 4: Educación emocional
INSERT INTO blog_articles (
  title,
  subtitle,
  slug,
  excerpt,
  introduction,
  psychological_analysis,
  practical_recommendations,
  category,
  tags,
  author_name,
  author_credentials,
  reading_time_minutes,
  is_trending,
  status,
  published_at,
  meta_description
) VALUES (
  'El poder de la validación emocional en la crianza',
  'Cómo validar las emociones de tu hijo puede transformar su desarrollo emocional',
  'validacion-emocional-crianza-hijos',
  'La validación emocional es una herramienta poderosa que ayuda a los niños a desarrollar autoestima, confianza y habilidades de regulación emocional.',
  'Validar las emociones de nuestros hijos no significa estar de acuerdo con su comportamiento, sino reconocer y aceptar lo que están sintiendo.',
  'Cuando validamos las emociones infantiles, estamos enseñando que todos los sentimientos son válidos y que pueden ser expresados de manera apropiada.',
  'Escucha activamente, refleja sus sentimientos, evita minimizar sus emociones y ayúdales a nombrar lo que sienten.',
  'educacion_emocional',
  ARRAY['validación emocional', 'crianza', 'autoestima', 'desarrollo emocional', 'comunicación'],
  'Dra. Laura Martínez',
  'Psicóloga Infantil, Especialista en Terapia Familiar',
  5,
  true,
  'published',
  NOW() - INTERVAL '1 day',
  'Aprende el poder de la validación emocional y cómo puede transformar la relación con tu hijo.'
);

-- Artículo 5: Terapia infantil
INSERT INTO blog_articles (
  title,
  subtitle,
  slug,
  excerpt,
  introduction,
  psychological_analysis,
  practical_recommendations,
  category,
  tags,
  author_name,
  author_credentials,
  reading_time_minutes,
  status,
  published_at,
  meta_description
) VALUES (
  '¿Cuándo buscar ayuda profesional para tu hijo?',
  'Señales que indican que es momento de consultar con un psicólogo infantil',
  'cuando-buscar-ayuda-profesional-ninos',
  'Conoce las señales de alerta que indican cuándo es recomendable buscar apoyo psicológico profesional para tu hijo.',
  'Como padres, a veces nos preguntamos si ciertos comportamientos o emociones de nuestros hijos son normales o si requieren atención profesional.',
  'Es importante distinguir entre dificultades temporales del desarrollo y problemas que pueden beneficiarse de intervención profesional temprana.',
  'Observa cambios significativos en el comportamiento, dificultades académicas persistentes, problemas de sueño o alimentación, y cambios en las relaciones sociales.',
  'terapia_infantil',
  ARRAY['terapia infantil', 'ayuda profesional', 'señales de alerta', 'desarrollo', 'psicología'],
  'Dr. Roberto Silva',
  'Psicólogo Clínico Infantil, Director de Clínica de Desarrollo',
  9,
  'published',
  NOW() - INTERVAL '3 days',
  'Identifica cuándo es el momento adecuado para buscar ayuda psicológica profesional para tu hijo.'
);

-- Artículo 6: Familia y relaciones
INSERT INTO blog_articles (
  title,
  subtitle,
  slug,
  excerpt,
  introduction,
  psychological_analysis,
  practical_recommendations,
  category,
  tags,
  author_name,
  author_credentials,
  reading_time_minutes,
  status,
  published_at,
  meta_description
) VALUES (
  'Cómo fortalecer el vínculo afectivo con tu hijo adolescente',
  'Estrategias para mantener una relación cercana durante la adolescencia',
  'vinculo-afectivo-hijo-adolescente',
  'La adolescencia trae cambios importantes. Descubre cómo mantener una conexión fuerte y saludable con tu hijo durante esta etapa crucial.',
  'La adolescencia es una etapa de grandes cambios físicos, emocionales y sociales. Mantener un vínculo fuerte requiere adaptación y comprensión.',
  'Durante la adolescencia, los jóvenes buscan independencia mientras aún necesitan el apoyo y guía de sus padres.',
  'Respeta su necesidad de autonomía, mantén comunicación abierta, muestra interés genuino en sus actividades y establece límites claros pero flexibles.',
  'familia_relaciones',
  ARRAY['adolescencia', 'vínculo afectivo', 'familia', 'comunicación', 'relación padres-hijos'],
  'Lic. Carmen Delgado',
  'Psicóloga Familiar, Especialista en Adolescencia',
  10,
  'published',
  NOW() - INTERVAL '4 days',
  'Aprende a fortalecer el vínculo afectivo con tu hijo adolescente con estrategias profesionales.'
);

-- Mensaje final
SELECT 'Artículos de prueba insertados correctamente. Verifica en la aplicación.' as mensaje;
