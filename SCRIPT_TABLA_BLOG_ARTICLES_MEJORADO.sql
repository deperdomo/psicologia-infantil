-- ===================================
-- 🔧 SCRIPT MEJORADO PARA BLOG_ARTICLES
-- ===================================
-- Este script incluye las mejoras recomendadas para una implementación más robusta

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
    
    -- NUEVO: Imágenes adicionales para SEO y redes sociales
    featured_image_url TEXT, -- URL de imagen destacada
    social_share_image TEXT,  -- Imagen para redes sociales
    
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
    
    -- SEO y metadatos MEJORADOS
    meta_description VARCHAR(160),
    meta_keywords TEXT,
    excerpt TEXT, -- Resumen corto para listados
    canonical_url TEXT,       -- URL canónica
    schema_markup JSONB,      -- Structured data
    
    -- Categorización
    category VARCHAR(100), -- ej: "rabietas", "desarrollo", "emociones"
    tags TEXT[], -- Array de tags
    target_audience VARCHAR(100), -- "padres", "docentes", "cuidadores"
    age_range VARCHAR(50), -- "2-4 años", "5-8 años", etc.
    
    -- Productos recomendados (nombre y URL de compra)
    recommended_products JSONB, -- Formato: [{"nombre": "Producto X", "url": "https://tienda.com/producto"}]
    
    -- Estado y publicación MEJORADOS
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE,
    is_featured BOOLEAN DEFAULT false, -- NUEVO: Para artículos destacados
    sort_order INTEGER DEFAULT 0,      -- NUEVO: Para ordenamiento manual
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
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
CREATE INDEX idx_blog_articles_featured ON blog_articles(is_featured) WHERE is_featured = true;
CREATE INDEX idx_blog_articles_author ON blog_articles(author_name);

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

-- Función MEJORADA para generar slug automáticamente
CREATE OR REPLACE FUNCTION generate_slug_from_title()
RETURNS TRIGGER AS $$
DECLARE
    base_slug TEXT;
    final_slug TEXT;
    counter INTEGER := 0;
BEGIN
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        -- Generar slug base
        base_slug := LOWER(TRIM(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\sáéíóúñü]', '', 'g')));
        base_slug := REGEXP_REPLACE(base_slug, '\s+', '-', 'g');
        base_slug := TRIM(base_slug, '-');
        
        -- Verificar unicidad y agregar contador si es necesario
        final_slug := base_slug;
        WHILE EXISTS (SELECT 1 FROM blog_articles WHERE slug = final_slug AND id != COALESCE(NEW.id, gen_random_uuid())) LOOP
            counter := counter + 1;
            final_slug := base_slug || '-' || counter;
        END LOOP;
        
        NEW.slug := final_slug;
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para generar slug
CREATE TRIGGER generate_blog_articles_slug 
    BEFORE INSERT OR UPDATE ON blog_articles 
    FOR EACH ROW 
    EXECUTE FUNCTION generate_slug_from_title();

-- Tabla para comentarios (mejorada)
CREATE TABLE blog_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id UUID REFERENCES blog_articles(id) ON DELETE CASCADE,
    parent_comment_id UUID REFERENCES blog_comments(id), -- Para respuestas
    
    -- Datos del comentario
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    author_website VARCHAR(255), -- NUEVO: Sitio web del autor
    content TEXT NOT NULL,
    
    -- Moderación MEJORADA
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'spam')),
    moderation_reason TEXT, -- NUEVO: Razón de moderación
    
    -- Métricas
    likes_count INTEGER DEFAULT 0, -- NUEVO: Likes en comentarios
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para comentarios
CREATE INDEX idx_blog_comments_article_id ON blog_comments(article_id);
CREATE INDEX idx_blog_comments_status ON blog_comments(status);
CREATE INDEX idx_blog_comments_created_at ON blog_comments(created_at DESC);
CREATE INDEX idx_blog_comments_parent ON blog_comments(parent_comment_id);

-- RLS (Row Level Security)
ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Política para que cualquiera pueda leer artículos publicados
CREATE POLICY "Anyone can read published articles" ON blog_articles
    FOR SELECT USING (status = 'published');

-- Política MEJORADA para autores (sin dependencia estricta de auth.users)
CREATE POLICY "Authors can manage their articles" ON blog_articles
    FOR ALL USING (
        auth.uid() IS NOT NULL AND (
            auth.uid()::text = author_id::text OR 
            auth.email() = author_email
        )
    );

-- Política para comentarios públicos
CREATE POLICY "Anyone can read approved comments" ON blog_comments
    FOR SELECT USING (status = 'approved');

-- Política para crear comentarios
CREATE POLICY "Anyone can create comments" ON blog_comments
    FOR INSERT WITH CHECK (true);

-- CONFIGURACIÓN DEL STORAGE PARA IMÁGENES MEJORADA
-- Crear bucket para imágenes del blog (ejecutar en la consola de Supabase)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'blog-images',
    'blog-images',
    true,
    10485760, -- 10MB límite por imagen (aumentado de 5MB)
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- Políticas de storage para las imágenes del blog MEJORADAS
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

-- Función MEJORADA para obtener URL pública de las imágenes
CREATE OR REPLACE FUNCTION get_blog_image_url(image_path TEXT)
RETURNS TEXT AS $$
DECLARE
    supabase_url TEXT;
BEGIN
    IF image_path IS NULL THEN
        RETURN NULL;
    END IF;
    
    -- Intentar obtener la URL desde configuración, sino usar valor por defecto
    BEGIN
        supabase_url := current_setting('app.supabase_url');
    EXCEPTION
        WHEN OTHERS THEN
            -- Valor por defecto - CAMBIAR POR TU PROJECT ID
            supabase_url := 'https://eabqgmhadverstykzcrr.supabase.co';
    END;
    
    RETURN CONCAT(
        supabase_url,
        '/storage/v1/object/public/blog-images/',
        image_path
    );
END;
$$ LANGUAGE plpgsql;

-- Vista MEJORADA para obtener artículos con URLs completas y estadísticas
CREATE OR REPLACE VIEW blog_articles_with_images AS
SELECT 
    ba.id,
    ba.title,
    ba.slug,
    
    -- URLs completas de las imágenes
    get_blog_image_url(ba.image_1_path) as image_1_url,
    ba.image_1_alt,
    get_blog_image_url(ba.image_2_path) as image_2_url,
    ba.image_2_alt,
    get_blog_image_url(ba.image_3_path) as image_3_url,
    ba.image_3_alt,
    
    -- Contenido
    ba.introduction,
    ba.current_data_research,
    ba.reflective_question,
    ba.anonymous_case,
    ba.psychological_analysis,
    ba.practical_recommendations,
    ba.call_to_action,
    ba.empathetic_closing,
    ba.additional_resources,
    
    -- SEO
    ba.meta_description,
    ba.meta_keywords,
    ba.excerpt,
    ba.canonical_url,
    ba.schema_markup,
    
    -- Categorización
    ba.category,
    ba.tags,
    ba.target_audience,
    ba.age_range,
    ba.recommended_products,
    
    -- Estado
    ba.status,
    ba.published_at,
    ba.is_featured,
    ba.sort_order,
    
    -- Timestamps
    ba.created_at,
    ba.updated_at,
    
    -- Métricas
    ba.view_count,
    ba.likes_count,
    ba.comments_enabled,
    ba.reading_time_minutes,
    ba.difficulty_level,
    
    -- Estadísticas calculadas
    COALESCE(cc.comment_count, 0) as comment_count,
    COALESCE(cc.approved_comment_count, 0) as approved_comment_count
    
FROM blog_articles ba
LEFT JOIN (
    SELECT 
        article_id,
        COUNT(*) as comment_count,
        COUNT(*) FILTER (WHERE status = 'approved') as approved_comment_count
    FROM blog_comments 
    GROUP BY article_id
) cc ON ba.id = cc.article_id;

-- ===================================
-- 📊 FUNCIONES ADICIONALES
-- ===================================

-- Función para incrementar vistas de artículos
CREATE OR REPLACE FUNCTION increment_blog_views(article_id_param UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE blog_articles 
    SET view_count = view_count + 1
    WHERE id = article_id_param AND status = 'published';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función para obtener artículos relacionados MEJORADA
CREATE OR REPLACE FUNCTION get_related_articles(
    current_article_id UUID,
    article_category VARCHAR DEFAULT NULL,
    article_tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    result_limit INTEGER DEFAULT 3
)
RETURNS TABLE (
    id UUID,
    title VARCHAR,
    slug VARCHAR,
    excerpt TEXT,
    image_1_url TEXT,
    category VARCHAR,
    published_at TIMESTAMP WITH TIME ZONE,
    author_name VARCHAR,
    reading_time_minutes INTEGER,
    view_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ba.id,
        ba.title,
        ba.slug,
        ba.excerpt,
        get_blog_image_url(ba.image_1_path) as image_1_url,
        ba.category,
        ba.published_at,
        ba.author_name,
        ba.reading_time_minutes,
        ba.view_count
    FROM blog_articles ba
    WHERE ba.status = 'published'
        AND ba.id != current_article_id
        AND (
            (article_category IS NOT NULL AND ba.category = article_category) OR
            (array_length(article_tags, 1) > 0 AND ba.tags && article_tags)
        )
    ORDER BY 
        -- Priorizar artículos de la misma categoría
        CASE WHEN ba.category = article_category THEN 1 ELSE 2 END,
        -- Luego por número de tags coincidentes
        CASE WHEN ba.tags && article_tags THEN array_length(ba.tags & article_tags, 1) ELSE 0 END DESC,
        -- Finalmente por fecha de publicación
        ba.published_at DESC
    LIMIT result_limit;
END;
$$ LANGUAGE plpgsql;

-- Función para buscar artículos MEJORADA
CREATE OR REPLACE FUNCTION search_blog_articles(
    search_term TEXT DEFAULT '',
    category_filter VARCHAR DEFAULT NULL,
    tags_filter TEXT[] DEFAULT ARRAY[]::TEXT[],
    author_filter VARCHAR DEFAULT NULL,
    limit_results INTEGER DEFAULT 10,
    offset_results INTEGER DEFAULT 0
)
RETURNS TABLE (
    id UUID,
    title VARCHAR,
    slug VARCHAR,
    excerpt TEXT,
    image_1_url TEXT,
    category VARCHAR,
    tags TEXT[],
    author_name VARCHAR,
    published_at TIMESTAMP WITH TIME ZONE,
    reading_time_minutes INTEGER,
    view_count INTEGER,
    comment_count BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ba.id,
        ba.title,
        ba.slug,
        ba.excerpt,
        get_blog_image_url(ba.image_1_path) as image_1_url,
        ba.category,
        ba.tags,
        ba.author_name,
        ba.published_at,
        ba.reading_time_minutes,
        ba.view_count,
        COALESCE(cc.comment_count, 0) as comment_count
    FROM blog_articles ba
    LEFT JOIN (
        SELECT article_id, COUNT(*) as comment_count
        FROM blog_comments 
        WHERE status = 'approved'
        GROUP BY article_id
    ) cc ON ba.id = cc.article_id
    WHERE ba.status = 'published'
        AND (
            search_term = '' OR 
            ba.title ILIKE '%' || search_term || '%' OR
            ba.excerpt ILIKE '%' || search_term || '%' OR
            ba.introduction ILIKE '%' || search_term || '%'
        )
        AND (category_filter IS NULL OR ba.category = category_filter)
        AND (array_length(tags_filter, 1) IS NULL OR ba.tags && tags_filter)
        AND (author_filter IS NULL OR ba.author_name ILIKE '%' || author_filter || '%')
    ORDER BY 
        -- Priorizar coincidencias exactas en el título
        CASE WHEN ba.title ILIKE '%' || search_term || '%' THEN 1 ELSE 2 END,
        ba.published_at DESC
    LIMIT limit_results
    OFFSET offset_results;
END;
$$ LANGUAGE plpgsql;

-- ===================================
-- 📈 VISTAS PARA ESTADÍSTICAS
-- ===================================

-- Vista para artículos más populares
CREATE OR REPLACE VIEW blog_popular_articles AS
SELECT 
    id,
    title,
    slug,
    get_blog_image_url(image_1_path) as image_1_url,
    category,
    author_name,
    published_at,
    view_count,
    likes_count,
    reading_time_minutes
FROM blog_articles
WHERE status = 'published'
ORDER BY view_count DESC, likes_count DESC
LIMIT 10;

-- Vista para artículos recientes
CREATE OR REPLACE VIEW blog_recent_articles AS
SELECT 
    id,
    title,
    slug,
    excerpt,
    get_blog_image_url(image_1_path) as image_1_url,
    category,
    tags,
    author_name,
    published_at,
    reading_time_minutes
FROM blog_articles
WHERE status = 'published'
ORDER BY published_at DESC
LIMIT 10;

-- ===================================
-- 📝 DATOS DE EJEMPLO MEJORADOS
-- ===================================

-- Inserción de artículo de ejemplo con todas las mejoras
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
    excerpt,
    status,
    author_name,
    author_email,
    is_featured,
    reading_time_minutes,
    schema_markup
) VALUES (
    'Rabietas en niños pequeños: cómo entenderlas y manejarlas con empatía',
    'articles/2025/01/rabietas-ninos/imagen-principal.webp',
    'Niño pequeño expresando emociones durante una rabieta mientras su madre lo acompaña',
    'articles/2025/01/rabietas-ninos/infografia-emociones.png',
    'Infografía sobre el desarrollo emocional infantil y las rabietas',
    
    'Las rabietas son una parte natural del desarrollo infantil que pueden resultar desafiantes para padres y cuidadores. En este artículo, exploraremos estrategias profesionales basadas en evidencia para comprender y manejar estas intensas expresiones emocionales de nuestros pequeños.',
    
    'Según un estudio publicado en 2024 por la Asociación Española de Psicología Infantil, el 65% de los niños entre 2 y 4 años experimentan rabietas al menos una vez al día. La investigación también revela que los padres que implementan estrategias de acompañamiento emocional reducen la frecuencia e intensidad de las rabietas en un 40% en un período de 3 meses.',
    
    '¿Alguna vez has sentido que no sabes cómo actuar frente a una rabieta sin perder la calma? ¿Te has preguntado si estás haciendo lo correcto cuando tu hijo se encuentra en plena explosión emocional?',
    
    'María, madre de Alejandro de 3 años, nos compartió cómo las rabietas en el supermercado la hacían sentir frustrada e impotente. "Sentía las miradas de juicio de otros padres y no sabía si ceder o mantenerme firme. Mi hijo gritaba y yo solo quería desaparecer", nos cuenta. Después de aplicar las estrategias que trabajamos en consulta, María describe: "Ahora entiendo que Alejandro no me está desafiando, sino expresando una emoción que aún no sabe gestionar. Mi rol cambió de controlar la rabieta a acompañar su emoción".',
    
    'Desde la perspectiva de la psicología infantil, las rabietas son una expresión normal de la frustración cuando los niños enfrentan una discrepancia entre lo que desean y lo que pueden conseguir o controlar. El cerebro infantil, específicamente la corteza prefrontal responsable de la autorregulación, no se desarrolla completamente hasta los 25 años. Esto significa que los niños pequeños literalmente no tienen la capacidad neurológica para gestionar emociones intensas como lo haría un adulto. Las rabietas, por tanto, no son manipulación sino una comunicación de una necesidad emocional no satisfecha.',
    
    '1. **Mantén la calma y valida la emoción**: "Veo que estás muy enojado porque querías seguir jugando." 2. **Anticípate cuando sea posible**: Establece rutinas claras y avisa sobre transiciones. 3. **Acompaña sin juzgar**: Permanece cerca físicamente sin intentar detener inmediatamente la emoción. 4. **Enseña vocabulario emocional**: Ayuda a nombrar lo que siente cuando esté calmado. 5. **Cuida tu propia regulación**: Un adulto regulado puede ayudar a un niño a regularse.',
    
    'Si notas que las rabietas son excesivamente frecuentes (más de 3-4 por día), muy intensas (duran más de 20 minutos regularmente), o afectan significativamente la dinámica familiar, puede ser útil buscar acompañamiento profesional. Como psicóloga infantil, puedo ayudarte a desarrollar estrategias personalizadas para tu familia.',
    
    'Criar a un niño no es fácil, pero con comprensión, paciencia y las herramientas adecuadas, las rabietas pueden convertirse en oportunidades de conexión y crecimiento emocional. Recuerda: no estás sola/o en este camino, y cada rabieta acompañada con amor es un paso hacia el desarrollo emocional saludable de tu hijo.',
    
    '{"libros": ["El cerebro del niño explicado a los padres - Álvaro Bilbao", "Cuentos para trabajar la inteligencia emocional"], "videos": ["https://youtube.com/watch?v=ejemplo"], "articulos_relacionados": ["manejo-ansiedad-infantil", "desarrollo-emocional-2-4-anos"], "recursos_descargables": ["guia-rabietas-pdf", "infografia-emociones"]}'::jsonb,
    
    'rabietas',
    ARRAY['desarrollo infantil', 'emociones', 'crianza', 'psicología infantil', 'autorregulación'],
    'padres',
    '2-4 años',
    
    '[
        {
            "nombre": "El monstruo de colores. Un libro sobre las emociones",
            "url": "https://amazon.es/dp/8408174576",
            "precio": "15.20€",
            "descripcion": "Libro ilustrado perfecto para trabajar emociones básicas"
        },
        {
            "nombre": "Tarjetas de emociones para niños",
            "url": "https://amazon.es/dp/B08K2QXM4P",
            "precio": "12.99€",
            "descripcion": "Material didáctico para enseñar vocabulario emocional"
        },
        {
            "nombre": "Cuentos para educar niños felices",
            "url": "https://amazon.es/dp/8417273387",
            "precio": "18.95€",
            "descripcion": "Colección de cuentos terapéuticos para desarrollo emocional"
        }
    ]'::jsonb,
    
    'Aprende a manejar las rabietas infantiles con estrategias basadas en psicología. Consejos prácticos y empáticos para padres.',
    'Las rabietas son normales en el desarrollo infantil. Descubre estrategias profesionales para acompañar estas emociones intensas con empatía y comprensión.',
    'published',
    'Dr. Psicólogo Infantil',
    'psicologo@ejemplo.com',
    true,
    8,
    
    '{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Rabietas en niños pequeños: cómo entenderlas y manejarlas con empatía",
        "description": "Aprende a manejar las rabietas infantiles con estrategias basadas en psicología",
        "author": {
            "@type": "Person",
            "name": "Dr. Psicólogo Infantil"
        },
        "datePublished": "2025-01-13",
        "articleSection": "Psicología Infantil",
        "keywords": ["rabietas", "desarrollo infantil", "emociones", "crianza"],
        "publisher": {
            "@type": "Organization",
            "name": "Psicología Infantil"
        }
    }'::jsonb
);

-- ===================================
-- 🔚 FIN DEL SCRIPT MEJORADO
-- ===================================

-- Comandos finales para verificar la instalación
SELECT 'Blog articles table created successfully' as status;
SELECT COUNT(*) as sample_articles FROM blog_articles;
SELECT COUNT(*) as total_functions FROM pg_proc WHERE proname LIKE '%blog%';
