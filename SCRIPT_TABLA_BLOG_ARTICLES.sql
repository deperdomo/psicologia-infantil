-- Tabla principal para artículos del blog de psicología infantil
CREATE TABLE blog_articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Metadatos básicos
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL, -- Para URLs amigables
    
    -- Imágenes del artículo (máximo 3 por artículo)
    image_1_path TEXT, -- Ruta en Supabase Storage
    image_1_alt VARCHAR(255),
    image_2_path TEXT, -- Ruta en Supabase Storage
    image_2_alt VARCHAR(255),
    image_3_path TEXT, -- Ruta en Supabase Storage
    image_3_alt VARCHAR(255),
    
    -- Contenido principal
    introduction TEXT NOT NULL,
    current_data_research TEXT, -- Datos actuales o investigaciones
    reflective_question TEXT,
    anonymous_case TEXT, -- Caso anónimo
    psychological_analysis TEXT NOT NULL, -- Análisis psicológico
    practical_recommendations TEXT NOT NULL, -- Recomendaciones (JSON o texto)
    call_to_action TEXT,
    empathetic_closing TEXT,
    additional_resources TEXT, -- Recursos adicionales en formato JSON o texto
    
    -- SEO y metadatos
    meta_description VARCHAR(160),
    meta_keywords TEXT,
    excerpt TEXT, -- Resumen corto para listados
    
    -- Categorización
    category VARCHAR(100), -- ej: "rabietas", "desarrollo", "emociones"
    tags TEXT[], -- Array de tags
    target_audience VARCHAR(100), -- "padres", "docentes", "cuidadores"
    age_range VARCHAR(50), -- "2-4 años", "5-8 años", etc.
    
    -- Productos recomendados (nombre y URL de compra)
    recommended_products JSONB, -- Formato: [{"nombre": "Producto X", "url": "https://tienda.com/producto"}]
    
    -- Estado y publicación
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Autor (por si tienes múltiples autores)
    author_id UUID REFERENCES auth.users(id),
    author_name VARCHAR(100),
    
    -- Métricas y engagement
    view_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    comments_enabled BOOLEAN DEFAULT true,
    
    -- Configuración adicional
    reading_time_minutes INTEGER, -- Tiempo estimado de lectura
    difficulty_level VARCHAR(20) DEFAULT 'beginner' CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced'))
);

-- Índices para mejorar rendimiento
CREATE INDEX idx_blog_articles_status ON blog_articles(status);
CREATE INDEX idx_blog_articles_category ON blog_articles(category);
CREATE INDEX idx_blog_articles_published_at ON blog_articles(published_at DESC);
CREATE INDEX idx_blog_articles_tags ON blog_articles USING GIN(tags);
CREATE INDEX idx_blog_articles_slug ON blog_articles(slug);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at
CREATE TRIGGER update_blog_articles_updated_at 
    BEFORE UPDATE ON blog_articles 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Función para generar slug automáticamente si no se proporciona
CREATE OR REPLACE FUNCTION generate_slug_from_title()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        NEW.slug := LOWER(TRIM(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\s]', '', 'g')));
        NEW.slug := REGEXP_REPLACE(NEW.slug, '\s+', '-', 'g');
        NEW.slug := TRIM(NEW.slug, '-');
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para generar slug
CREATE TRIGGER generate_blog_articles_slug 
    BEFORE INSERT OR UPDATE ON blog_articles 
    FOR EACH ROW 
    EXECUTE FUNCTION generate_slug_from_title();

-- Tabla para comentarios (opcional, si quieres implementar comentarios)
CREATE TABLE blog_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id UUID REFERENCES blog_articles(id) ON DELETE CASCADE,
    parent_comment_id UUID REFERENCES blog_comments(id), -- Para respuestas
    
    -- Datos del comentario
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    
    -- Moderación
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'spam')),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para comentarios
CREATE INDEX idx_blog_comments_article_id ON blog_comments(article_id);
CREATE INDEX idx_blog_comments_status ON blog_comments(status);
CREATE INDEX idx_blog_comments_created_at ON blog_comments(created_at DESC);

-- RLS (Row Level Security) - Opcional pero recomendado
ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Política para que cualquiera pueda leer artículos publicados
CREATE POLICY "Anyone can read published articles" ON blog_articles
    FOR SELECT USING (status = 'published');

-- Política para que solo autores autenticados puedan crear/editar
CREATE POLICY "Authors can manage their articles" ON blog_articles
    FOR ALL USING (auth.uid() = author_id);

-- CONFIGURACIÓN DEL STORAGE PARA IMÁGENES
-- Crear bucket para imágenes del blog (ejecutar en la consola de Supabase)
/*
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'blog-images',
    'blog-images',
    true,
    5242880, -- 5MB límite por imagen
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);
*/

-- Políticas de storage para las imágenes del blog
/*
-- Política para que cualquiera pueda ver las imágenes
CREATE POLICY "Anyone can view blog images" ON storage.objects
    FOR SELECT USING (bucket_id = 'blog-images');

-- Política para que usuarios autenticados puedan subir imágenes
CREATE POLICY "Authenticated users can upload blog images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'blog-images' 
        AND auth.role() = 'authenticated'
    );

-- Política para que usuarios autenticados puedan actualizar sus imágenes
CREATE POLICY "Users can update their blog images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'blog-images' 
        AND auth.role() = 'authenticated'
    );

-- Política para que usuarios autenticados puedan eliminar sus imágenes
CREATE POLICY "Users can delete their blog images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'blog-images' 
        AND auth.role() = 'authenticated'
    );
*/

-- Función para obtener URL pública de las imágenes
CREATE OR REPLACE FUNCTION get_blog_image_url(image_path TEXT)
RETURNS TEXT AS $
BEGIN
    IF image_path IS NULL THEN
        RETURN NULL;
    END IF;
    RETURN CONCAT(
        'https://your-project-id.supabase.co/storage/v1/object/public/blog-images/',
        image_path
    );
END;
$ LANGUAGE plpgsql;

-- Vista para obtener artículos con URLs completas de imágenes
CREATE OR REPLACE VIEW blog_articles_with_images AS
SELECT 
    id,
    title,
    slug,
    
    -- URLs completas de las imágenes
    get_blog_image_url(image_1_path) as image_1_url,
    image_1_alt,
    get_blog_image_url(image_2_path) as image_2_url,
    image_2_alt,
    get_blog_image_url(image_3_path) as image_3_url,
    image_3_alt,
    
    introduction,
    current_data_research,
    reflective_question,
    anonymous_case,
    psychological_analysis,
    practical_recommendations,
    call_to_action,
    empathetic_closing,
    additional_resources,
    meta_description,
    meta_keywords,
    excerpt,
    category,
    tags,
    target_audience,
    age_range,
    recommended_products,
    status,
    published_at,
    created_at,
    updated_at,
    author_id,
    author_name,
    view_count,
    likes_count,
    comments_enabled,
    reading_time_minutes,
    difficulty_level
FROM blog_articles;
-- Ejemplo de inserción de un artículo con imágenes y productos
/*
INSERT INTO blog_articles (
    title,
    image_1_path,
    image_1_alt,
    image_2_path,
    image_2_alt,
    introduction,
    current_data_research,
    reflective_question,
    anonymous_case,
    psychological_analysis,
    practical_recommendations,
    call_to_action,
    empathetic_closing,
    additional_resources,
    category,
    tags,
    target_audience,
    age_range,
    recommended_products,
    meta_description,
    status,
    author_name
) VALUES (
    'Rabietas en niños pequeños: cómo entenderlas y manejarlas con empatía',
    'articles/rabietas-ninos/imagen-principal.jpg', -- Ruta en el storage
    'Niño pequeño expresando emociones durante una rabieta',
    'articles/rabietas-ninos/infografia-emociones.png',
    'Infografía sobre el desarrollo emocional infantil',
    'Las rabietas son una parte natural del desarrollo infantil que pueden resultar desafiantes para padres y cuidadores...',
    'Según un estudio publicado en 2023 por la Asociación de Psicología Infantil, el 65% de los niños entre 2 y 4 años experimentan rabietas al menos una vez al día.',
    '¿Alguna vez has sentido que no sabes cómo actuar frente a una rabieta sin perder la calma?',
    'María, madre de un niño de 3 años, nos compartió cómo las rabietas en el supermercado la hacían sentir frustrada e impotente...',
    'Desde la perspectiva de la psicología infantil, las rabietas son una expresión normal de la frustración cuando los niños...',
    '1. Mantén la calma y valida la emoción del niño. 2. Anticípate a situaciones que suelen provocar rabietas...',
    'Si notas que las rabietas son muy frecuentes, intensas o afectan la dinámica familiar, no estás sola/o...',
    'Criar a un niño no es fácil, pero con la orientación adecuada, se vuelve una experiencia más consciente y amorosa.',
    '{"libros": ["Cuentos para trabajar la inteligencia emocional"], "videos": ["https://example.com"], "articulos_relacionados": []}',
    'rabietas',
    ARRAY['desarrollo infantil', 'emociones', 'crianza'],
    'padres',
    '2-4 años',
    '[
        {
            "nombre": "El monstruo de colores. Un libro sobre las emociones",
            "url": "https://amazon.es/dp/8408174576"
        },
        {
            "nombre": "Tarjetas de emociones para niños",
            "url": "https://amazon.es/dp/B08K2QXM4P"
        },
        {
            "nombre": "Cuentos para educar niños felices",
            "url": "https://amazon.es/dp/8417273387"
        }
    ]'::jsonb,
    'Aprende a manejar las rabietas infantiles con estrategias basadas en psicología. Consejos prácticos para padres.',
    'published',
    'Dr. Psicólogo Infantil'
);
*/

-- Ejemplo de consulta para obtener artículo con URLs de imágenes
/*
SELECT * FROM blog_articles_with_images 
WHERE slug = 'rabietas-en-ninos-pequenos-como-entenderlas-y-manejarlas-con-empatia'
AND status = 'published';
*/