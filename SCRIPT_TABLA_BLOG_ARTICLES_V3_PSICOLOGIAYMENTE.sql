-- ===================================
-- 🧠 SCRIPT OPTIMIZADO PARA ARTÍCULOS DE PSICOLOGÍA INFANTIL
-- INSPIRADO EN PSICOLOGIAYMENTE.COM
-- ===================================
-- Versión 3.0 - Adaptado para contenido académico y profesional

-- Tabla principal para artículos del blog de psicología infantil
CREATE TABLE blog_articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- ===== METADATOS BÁSICOS =====
    title VARCHAR(255) NOT NULL,
    subtitle TEXT, -- NUEVO: Subtítulo descriptivo como en PsicologíayMente
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- ===== IMÁGENES Y MULTIMEDIA =====
    image_1_path TEXT, -- Imagen principal (hero)
    image_1_alt VARCHAR(255),
    image_2_path TEXT, -- Infografía o imagen secundaria
    image_2_alt VARCHAR(255),
    image_3_path TEXT, -- Imagen adicional
    image_3_alt VARCHAR(255),
    
    -- Imágenes para SEO y redes sociales
    featured_image_url TEXT,
    social_share_image TEXT,
    
    -- ===== CONTENIDO ESTRUCTURADO =====
    introduction TEXT NOT NULL, -- Párrafo enganchador
    current_data_research TEXT, -- Datos actuales e investigaciones
    reflective_question TEXT,   -- Pregunta reflexiva
    anonymous_case TEXT,        -- Caso anónimo
    psychological_analysis TEXT NOT NULL, -- Análisis profesional
    practical_recommendations TEXT NOT NULL, -- Recomendaciones prácticas
    call_to_action TEXT,        -- CTA profesional
    empathetic_closing TEXT,    -- Cierre empático
    additional_resources TEXT,  -- Recursos complementarios
    
    -- NUEVO: Contenido académico y profesional
    key_sections JSONB, -- Secciones principales estructuradas
    FAQ_data JSONB,     -- Preguntas frecuentes
    summary_points JSONB, -- Puntos clave del artículo
    
    -- ===== REFERENCIAS Y CREDIBILIDAD =====
    bibliography JSONB, -- Referencias bibliográficas estructuradas
    /* Formato: [
        {
            "authors": ["Liu, F.", "Kromer, P."],
            "year": 2020,
            "title": "Early age education on artificial intelligence",
            "journal": "Proceedings of IITI'19",
            "pages": "696–706",
            "publisher": "Springer"
        }
    ] */
    
    related_articles JSONB, -- Artículos relacionados internos
    /* Formato: [
        {
            "title": "Psicología educativa: definición, conceptos y teorías",
            "url": "/desarrollo/psicologia-educativa",
            "relevance": "high"
        }
    ] */
    
    external_links JSONB, -- Enlaces externos de calidad
    
    -- ===== SEO Y METADATOS AVANZADOS =====
    meta_description VARCHAR(160),
    meta_keywords TEXT,
    excerpt TEXT,
    canonical_url TEXT,
    
    -- Schema markup específico para artículos académicos
    schema_markup JSONB, -- Article, BlogPosting, EducationalContent
    breadcrumb_data JSONB, -- Datos de navegación jerárquica
    
    -- ===== CATEGORIZACIÓN PROFESIONAL =====
    category VARCHAR(100), -- Categoría principal
    subcategory VARCHAR(100), -- NUEVO: Subcategoría específica
    tags TEXT[], -- Tags para filtrado
    target_audience VARCHAR(100), -- "padres", "docentes", "profesionales"
    age_range VARCHAR(50), -- Rango etario aplicable
    topic_complexity VARCHAR(20) DEFAULT 'beginner' CHECK (topic_complexity IN ('beginner', 'intermediate', 'advanced')),
    
    -- NUEVO: Clasificación profesional
    psychological_approach VARCHAR(100), -- Enfoque psicológico usado
    evidence_level VARCHAR(50), -- Nivel de evidencia científica
    
    -- ===== PRODUCTOS Y MONETIZACIÓN =====
    recommended_products JSONB,
    professional_recommendations JSONB, -- NUEVO: Recomendaciones profesionales
    
    -- ===== AUTORÍA Y CREDENCIALES =====
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255), -- Para autores externos
    author_bio TEXT, -- NUEVO: Biografía del autor
    author_credentials TEXT, -- NUEVO: Credenciales profesionales
    author_photo_url TEXT, -- NUEVO: Foto del autor
    author_social_links JSONB, -- NUEVO: Redes sociales del autor
    
    -- ===== ESTADO Y PUBLICACIÓN =====
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
    review_status VARCHAR(20) DEFAULT 'pending' CHECK (review_status IN ('pending', 'approved', 'needs_revision')),
    published_at TIMESTAMP WITH TIME ZONE,
    last_reviewed_at TIMESTAMP WITH TIME ZONE, -- NUEVO: Última revisión
    
    -- Configuración de visibilidad
    is_featured BOOLEAN DEFAULT false,
    is_trending BOOLEAN DEFAULT false, -- NUEVO: Para artículos trending
    is_professional_content BOOLEAN DEFAULT true, -- NUEVO: Contenido profesional
    sort_order INTEGER DEFAULT 0,
    
    -- ===== TIMESTAMPS =====
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- ===== MÉTRICAS Y ENGAGEMENT =====
    view_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    shares_count INTEGER DEFAULT 0, -- NUEVO: Compartidos
    reading_time_minutes INTEGER,
    
    -- Configuración de interacción
    comments_enabled BOOLEAN DEFAULT true,
    professional_feedback_enabled BOOLEAN DEFAULT true, -- NUEVO: Feedback profesional
    
    -- ===== NUEVOS CAMPOS PARA NEWSLETTER Y ENGAGEMENT =====
    newsletter_mention TEXT, -- Mención en newsletter
    related_newsletter_content JSONB -- Contenido relacionado del newsletter
);

-- ===== ÍNDICES OPTIMIZADOS =====
CREATE INDEX idx_blog_articles_status ON blog_articles(status);
CREATE INDEX idx_blog_articles_category_subcategory ON blog_articles(category, subcategory);
CREATE INDEX idx_blog_articles_published_at ON blog_articles(published_at DESC);
CREATE INDEX idx_blog_articles_tags ON blog_articles USING GIN(tags);
CREATE INDEX idx_blog_articles_slug ON blog_articles(slug);
CREATE INDEX idx_blog_articles_featured ON blog_articles(is_featured) WHERE is_featured = true;
CREATE INDEX idx_blog_articles_trending ON blog_articles(is_trending) WHERE is_trending = true;
CREATE INDEX idx_blog_articles_author ON blog_articles(author_name);
CREATE INDEX idx_blog_articles_audience ON blog_articles(target_audience);
CREATE INDEX idx_blog_articles_complexity ON blog_articles(topic_complexity);

-- ===== FUNCIONES Y TRIGGERS =====

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_articles_updated_at 
    BEFORE UPDATE ON blog_articles 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Función mejorada para generar slug desde título
CREATE OR REPLACE FUNCTION generate_professional_slug()
RETURNS TRIGGER AS $$
DECLARE
    base_slug TEXT;
    final_slug TEXT;
    counter INTEGER := 0;
BEGIN
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        -- Generar slug profesional
        base_slug := LOWER(TRIM(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\sáéíóúñü]', '', 'g')));
        base_slug := REGEXP_REPLACE(base_slug, '\s+', '-', 'g');
        base_slug := TRIM(base_slug, '-');
        
        -- Limitar longitud para SEO
        base_slug := LEFT(base_slug, 60);
        
        -- Verificar unicidad
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

CREATE TRIGGER generate_blog_professional_slug 
    BEFORE INSERT OR UPDATE ON blog_articles 
    FOR EACH ROW 
    EXECUTE FUNCTION generate_professional_slug();

-- ===== TABLA DE COMENTARIOS PROFESIONALES =====
CREATE TABLE blog_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id UUID REFERENCES blog_articles(id) ON DELETE CASCADE,
    parent_comment_id UUID REFERENCES blog_comments(id),
    
    -- Datos del comentario
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    author_profession VARCHAR(100), -- NUEVO: Profesión del comentarista
    author_website VARCHAR(255),
    content TEXT NOT NULL,
    
    -- Moderación profesional
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'spam')),
    moderation_reason TEXT,
    is_professional_feedback BOOLEAN DEFAULT false, -- NUEVO: Feedback profesional
    
    -- Métricas
    likes_count INTEGER DEFAULT 0,
    replies_count INTEGER DEFAULT 0, -- NUEVO: Contador de respuestas
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para comentarios
CREATE INDEX idx_blog_comments_article_id ON blog_comments(article_id);
CREATE INDEX idx_blog_comments_status ON blog_comments(status);
CREATE INDEX idx_blog_comments_created_at ON blog_comments(created_at DESC);
CREATE INDEX idx_blog_comments_parent ON blog_comments(parent_comment_id);
CREATE INDEX idx_blog_comments_professional ON blog_comments(is_professional_feedback) WHERE is_professional_feedback = true;

-- ===== RLS (ROW LEVEL SECURITY) =====
ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública de artículos publicados
CREATE POLICY "Anyone can read published articles" ON blog_articles
    FOR SELECT USING (status = 'published');

-- Política para gestión de artículos por autores
CREATE POLICY "Authors can manage their articles" ON blog_articles
    FOR ALL USING (
        auth.uid() IS NOT NULL AND (
            auth.email() = author_email OR
            auth.uid()::text IN (
                SELECT unnest(string_to_array(author_social_links->>'admin_ids', ','))
            )
        )
    );

-- Política para comentarios aprobados
CREATE POLICY "Anyone can read approved comments" ON blog_comments
    FOR SELECT USING (status = 'approved');

-- Política para crear comentarios
CREATE POLICY "Anyone can create comments" ON blog_comments
    FOR INSERT WITH CHECK (true);

-- ===== CONFIGURACIÓN DE STORAGE =====
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'blog-images',
    'blog-images',
    true,
    10485760, -- 10MB límite
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- ===== FUNCIÓN PARA URLs DE IMÁGENES =====
CREATE OR REPLACE FUNCTION get_blog_image_url(image_path TEXT)
RETURNS TEXT AS $$
BEGIN
    IF image_path IS NULL THEN
        RETURN NULL;
    END IF;
    RETURN CONCAT(
        current_setting('app.supabase_url', true),
        '/storage/v1/object/public/blog-images/',
        image_path
    );
EXCEPTION WHEN OTHERS THEN
    -- Fallback para desarrollo
    RETURN CONCAT(
        'https://your-project-id.supabase.co/storage/v1/object/public/blog-images/',
        image_path
    );
END;
$$ LANGUAGE plpgsql;

-- ===== VISTA OPTIMIZADA CON URLS COMPLETAS =====
CREATE OR REPLACE VIEW blog_articles_with_images AS
SELECT 
    id,
    title,
    subtitle,
    slug,
    
    -- URLs completas de imágenes
    get_blog_image_url(image_1_path) as image_1_url,
    image_1_alt,
    get_blog_image_url(image_2_path) as image_2_url,
    image_2_alt,
    get_blog_image_url(image_3_path) as image_3_url,
    image_3_alt,
    
    featured_image_url,
    social_share_image,
    
    -- Contenido
    introduction,
    current_data_research,
    reflective_question,
    anonymous_case,
    psychological_analysis,
    practical_recommendations,
    call_to_action,
    empathetic_closing,
    additional_resources,
    
    -- Contenido estructurado
    key_sections,
    FAQ_data,
    summary_points,
    
    -- Referencias
    bibliography,
    related_articles,
    external_links,
    
    -- SEO
    meta_description,
    meta_keywords,
    excerpt,
    canonical_url,
    schema_markup,
    breadcrumb_data,
    
    -- Categorización
    category,
    subcategory,
    tags,
    target_audience,
    age_range,
    topic_complexity,
    psychological_approach,
    evidence_level,
    
    -- Productos
    recommended_products,
    professional_recommendations,
    
    -- Autoría
    author_name,
    author_email,
    author_bio,
    author_credentials,
    author_photo_url,
    author_social_links,
    
    -- Estado
    status,
    review_status,
    published_at,
    last_reviewed_at,
    is_featured,
    is_trending,
    is_professional_content,
    sort_order,
    
    -- Timestamps
    created_at,
    updated_at,
    
    -- Métricas
    view_count,
    likes_count,
    shares_count,
    reading_time_minutes,
    
    -- Configuración
    comments_enabled,
    professional_feedback_enabled,
    newsletter_mention,
    related_newsletter_content
FROM blog_articles;

-- ===== VISTA PARA ARTÍCULOS DESTACADOS =====
CREATE OR REPLACE VIEW featured_articles AS
SELECT * FROM blog_articles_with_images 
WHERE status = 'published' AND is_featured = true
ORDER BY sort_order, published_at DESC;

-- ===== VISTA PARA ARTÍCULOS TRENDING =====
CREATE OR REPLACE VIEW trending_articles AS
SELECT * FROM blog_articles_with_images 
WHERE status = 'published' AND is_trending = true
ORDER BY view_count DESC, published_at DESC;

-- ===== FUNCIÓN PARA BUSCAR ARTÍCULOS =====
CREATE OR REPLACE FUNCTION search_articles(search_term TEXT, limit_count INTEGER DEFAULT 10)
RETURNS TABLE (
    id UUID,
    title VARCHAR(255),
    subtitle TEXT,
    excerpt TEXT,
    category VARCHAR(100),
    tags TEXT[],
    published_at TIMESTAMP WITH TIME ZONE,
    reading_time_minutes INTEGER,
    rank REAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        a.id,
        a.title,
        a.subtitle,
        a.excerpt,
        a.category,
        a.tags,
        a.published_at,
        a.reading_time_minutes,
        ts_rank(
            to_tsvector('spanish', a.title || ' ' || COALESCE(a.subtitle, '') || ' ' || COALESCE(a.excerpt, '')),
            plainto_tsquery('spanish', search_term)
        ) as rank
    FROM blog_articles a
    WHERE 
        a.status = 'published'
        AND (
            to_tsvector('spanish', a.title || ' ' || COALESCE(a.subtitle, '') || ' ' || COALESCE(a.excerpt, ''))
            @@ plainto_tsquery('spanish', search_term)
        )
    ORDER BY rank DESC, a.published_at DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- ===== COMENTARIOS PARA DOCUMENTACIÓN =====
COMMENT ON TABLE blog_articles IS 'Artículos del blog de psicología infantil con estructura profesional';
COMMENT ON COLUMN blog_articles.subtitle IS 'Subtítulo descriptivo como en PsicologíayMente';
COMMENT ON COLUMN blog_articles.bibliography IS 'Referencias bibliográficas en formato JSON estructurado';
COMMENT ON COLUMN blog_articles.evidence_level IS 'Nivel de evidencia científica del contenido';
COMMENT ON COLUMN blog_articles.psychological_approach IS 'Enfoque psicológico utilizado en el artículo';
COMMENT ON COLUMN blog_articles.is_professional_content IS 'Marca si es contenido profesional verificado';
