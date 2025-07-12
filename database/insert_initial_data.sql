-- ===================================
-- 📥 MIGRACIÓN DE DATOS EXISTENTES
-- ===================================

-- Insertar datos basados en la estructura actual de bibliotecaEmocional.ts

-- CARTAS QUE CURAN
INSERT INTO recursos (
  resource_id, title, description, categoria, resource_type, 
  age_ranges, difficulty, tags, is_premium, 
  word_file_name, pdf_file_name, estimated_reading_time
) VALUES 
-- Carta a mi hija que crece rápido
(
  'carta-hija-crece-rapido',
  'A mi hija que crece rápido',
  'Una carta emotiva para madres que sienten que el tiempo pasa muy rápido con sus hijas.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['3-6', '6-12']::age_range[],
  'basico'::difficulty_level,
  ARRAY['madre-hija', 'crecimiento', 'tiempo', 'vínculo'],
  false,
  'A mi hija que crece rápido.docx',
  'A mi hija que crece rápido.pdf',
  5
),

-- Carta a mi niño interior
(
  'carta-nino-interior',
  'A mi niño interior',
  'Carta de sanación dirigida al niño interior para procesar heridas de la infancia.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['todas']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['niño interior', 'sanación', 'autocuidado', 'heridas'],
  false,
  'A mi niño interior.docx',
  'A mi niño interior.pdf',
  8
),

-- Carta a un padre que está aprendiendo
(
  'carta-padre-aprendiendo',
  'Carta a un padre que está aprendiendo',
  'Reflexiones y apoyo para padres que están en proceso de aprendizaje en la crianza.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['todas']::age_range[],
  'basico'::difficulty_level,
  ARRAY['paternidad', 'aprendizaje', 'crianza', 'apoyo'],
  false,
  'Carta a un padre que está aprendiendo.docx',
  'Carta a un padre que está aprendiendo.pdf',
  6
),

-- Cuando una madre quiere llorar
(
  'carta-madre-llorar',
  'Cuando una madre quiere llorar',
  'Carta de validación emocional para madres que necesitan expresar sus sentimientos.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['todas']::age_range[],
  'basico'::difficulty_level,
  ARRAY['maternidad', 'emociones', 'llanto', 'validación'],
  false,
  'Cuando una madre quiere llorar.docx',
  'Cuando una madre quiere llorar.pdf',
  7
),

-- El beso que no di, el que no recibí
(
  'carta-beso-no-di',
  'El beso que no di, el que no recibí',
  'Carta sobre afecto no expresado y la importancia del contacto físico en las relaciones.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['todas']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['afecto', 'contacto', 'amor', 'expresión'],
  false,
  'El beso que no di, el que no recibí.docx',
  'El beso que no di, el que no recibí.pdf',
  5
),

-- El día que no supe acompañarte
(
  'carta-no-supe-acompanar',
  'El día que no supe acompañarte',
  'Reflexión sobre momentos difíciles en los que no supimos cómo acompañar a nuestros hijos.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['todas']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['acompañamiento', 'dificultades', 'reflexión', 'crianza'],
  false,
  'El día que no supe acompañarte.docx',
  'El día que no supe acompañarte.pdf',
  6
),

-- Perdóname por gritarte
(
  'carta-perdoname-gritar',
  'Perdóname por gritarte',
  'Carta de disculpas y reflexión sobre los momentos en que perdimos la paciencia.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['3-6', '6-12']::age_range[],
  'basico'::difficulty_level,
  ARRAY['disculpas', 'gritos', 'paciencia', 'perdón'],
  false,
  'Perdóname por gritarte.docx',
  'Perdóname por gritarte.pdf',
  4
),

-- Una madre a su hijo con TDAH
(
  'carta-madre-hijo-tdah',
  'Una madre a su hijo con TDAH',
  'Carta de amor y comprensión de una madre hacia su hijo con TDAH.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['6-12']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['TDAH', 'comprensión', 'amor incondicional', 'neurodivergencia'],
  false,
  'Una madre a su hijo con TDAH.docx',
  'Una madre a su hijo con TDAH.pdf',
  7
),

-- Una madre separada de su hijo pequeño
(
  'carta-madre-separada',
  'Una madre separada de su hijo pequeño',
  'Carta emotiva para madres que han tenido que separarse temporalmente de sus hijos.',
  'cartas_que_curan'::categoria_principal,
  'carta'::resource_type,
  ARRAY['0-3', '3-6']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['separación', 'añoranza', 'vínculo', 'distancia'],
  false,
  'Una madre separada de su hijo pequeño.docx',
  'Una madre separada de su hijo pequeño.pdf',
  6
);

-- COLECCIONES DE AYUDA POR TEMAS
INSERT INTO recursos (
  resource_id, title, description, categoria, resource_type, 
  age_ranges, difficulty, tags, is_premium, 
  word_file_name, pdf_file_name, estimated_reading_time
) VALUES 
(
  'coleccion-autoestima-infantil',
  'Autoestima Infantil',
  'Colección completa de estrategias y actividades para fortalecer la autoestima en niños.',
  'colecciones_ayuda'::categoria_principal,
  'guia'::resource_type,
  ARRAY['3-6', '6-12']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['autoestima', 'confianza', 'actividades', 'estrategias'],
  true,
  'Autoestima Infantil.docx',
  'Autoestima Infantil.pdf',
  25
),

(
  'coleccion-ninos-se-pegan',
  'Cuando los Niños Se Pegan',
  'Guía completa para entender y manejar la agresividad física en niños.',
  'colecciones_ayuda'::categoria_principal,
  'guia'::resource_type,
  ARRAY['3-6', '6-12']::age_range[],
  'avanzado'::difficulty_level,
  ARRAY['agresividad', 'golpes', 'manejo', 'comportamiento'],
  true,
  'Cuando lo Niños Se Pegan.docx',
  'Cuando lo Niños Se Pegan.pdf',
  30
),

(
  'coleccion-pantallas-vinculo',
  'Pantallas Y Vínculo',
  'Análisis del impacto de las pantallas en el desarrollo del vínculo familiar.',
  'colecciones_ayuda'::categoria_principal,
  'guia'::resource_type,
  ARRAY['todas']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['tecnología', 'pantallas', 'vínculo', 'familia'],
  true,
  'Pantallas Y Vínculo.docx',
  'Pantallas Y Vínculo.pdf',
  20
),

(
  'coleccion-rabietas-tormentas',
  'Rabietas Y Tormentas Emocionales',
  'Guía completa para comprender y acompañar las crisis emocionales infantiles.',
  'colecciones_ayuda'::categoria_principal,
  'guia'::resource_type,
  ARRAY['0-3', '3-6', '6-12']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['rabietas', 'emociones', 'crisis', 'acompañamiento'],
  true,
  'Rabietas Y Tormentas Emocionales.docx',
  'Rabietas Y Tormentas Emocionales.pdf',
  35
),

(
  'coleccion-separacion-divorcio',
  'Separación Y Divorcio',
  'Recursos integrales para acompañar a los niños durante procesos de separación.',
  'colecciones_ayuda'::categoria_principal,
  'guia'::resource_type,
  ARRAY['3-6', '6-12', '12+']::age_range[],
  'avanzado'::difficulty_level,
  ARRAY['separación', 'divorcio', 'familia', 'transición'],
  true,
  'Separación  Y Divorcio.docx',
  'Separación  Y Divorcio.pdf',
  40
),

(
  'coleccion-tdah-conductas',
  'TDAH Y Conductas Desafiantes',
  'Manual especializado para entender y manejar conductas desafiantes en niños con TDAH.',
  'colecciones_ayuda'::categoria_principal,
  'guia'::resource_type,
  ARRAY['6-12', '12+']::age_range[],
  'avanzado'::difficulty_level,
  ARRAY['TDAH', 'conductas desafiantes', 'neurodivergencia', 'estrategias'],
  true,
  'TDAH Y Conductas Desafiantes.docx',
  'TDAH Y Conductas Desafiantes.pdf',
  45
);

-- CUENTOS TERAPÉUTICOS
INSERT INTO recursos (
  resource_id, title, description, categoria, resource_type, 
  age_ranges, difficulty, tags, is_premium, 
  word_file_name, pdf_file_name, estimated_reading_time
) VALUES 
(
  'cuento-botella-capitan-nico',
  'La botella del Capitán Nico (Llegada de un hermano)',
  'Cuento terapéutico para preparar a los niños para la llegada de un hermano.',
  'cuentos_terapeuticos'::categoria_principal,
  'cuento'::resource_type,
  ARRAY['3-6']::age_range[],
  'basico'::difficulty_level,
  ARRAY['hermanos', 'celos', 'familia', 'adaptación'],
  false,
  'Cuento La botella del Capitán Nico (Llegada de un hermano).docx',
  'Cuento La botella del Capitán Nico (Llegada de un hermano).pdf',
  10
),

(
  'cuento-capucha-invisible-bruno',
  'La capucha invisible de Bruno (Bullying escolar)',
  'Cuento que aborda el tema del acoso escolar y cómo enfrentarlo.',
  'cuentos_terapeuticos'::categoria_principal,
  'cuento'::resource_type,
  ARRAY['6-12']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['bullying', 'escuela', 'autodefensa', 'confianza'],
  false,
  'Cuento La capucha invisible de Bruno (Bullying escolar) .docx',
  'Cuento La capucha invisible de Bruno (Bullying escolar) .pdf',
  12
),

(
  'cuento-luz-corazon',
  'La luz que vivía en su corazón (Miedo - Inseguridad)',
  'Historia sobre superar miedos e inseguridades internas.',
  'cuentos_terapeuticos'::categoria_principal,
  'cuento'::resource_type,
  ARRAY['3-6', '6-12']::age_range[],
  'basico'::difficulty_level,
  ARRAY['miedos', 'inseguridad', 'valentía', 'autoconfianza'],
  false,
  'Cuento La luz que vivía en su corazón (Miedo- Inseguridad).docx',
  'Cuento La luz que vivía en su corazón (Miedo- Inseguridad).pdf',
  8
),

(
  'cuento-alas-leo',
  'Las alas de Leo (Sobreprotección)',
  'Cuento que aborda los efectos de la sobreprotección en el desarrollo infantil.',
  'cuentos_terapeuticos'::categoria_principal,
  'cuento'::resource_type,
  ARRAY['6-12']::age_range[],
  'intermedio'::difficulty_level,
  ARRAY['sobreprotección', 'autonomía', 'independencia', 'crecimiento'],
  false,
  'Cuento Las alas de Leo (Sobreprotección).docx',
  'Cuento Las alas de Leo (Sobreprotección).pdf',
  11
);

-- Continúa con más inserts según necesites...

-- ===================================
-- 🔄 ACTUALIZAR RUTAS DE STORAGE
-- ===================================

-- Una vez subidos los archivos, actualizar las rutas:
-- UPDATE recursos SET 
--   word_storage_path = CONCAT(resource_id, '/', word_file_name),
--   pdf_storage_path = CONCAT(resource_id, '/', pdf_file_name)
-- WHERE word_file_name IS NOT NULL;
