-- ===================================
-- 📚 TABLA DE RECURSOS - BIBLIOTECA EMOCIONAL
-- ===================================

-- Crear enum para tipos de recursos
CREATE TYPE resource_type AS ENUM (
  'carta', 
  'guia', 
  'cuento', 
  'ficha', 
  'libro', 
  'actividad'
);

-- Crear enum para rangos de edad
CREATE TYPE age_range AS ENUM (
  '0-3', 
  '3-6', 
  '6-12', 
  '12+', 
  'todas'
);

-- Crear enum para dificultad
CREATE TYPE difficulty_level AS ENUM (
  'basico', 
  'intermedio', 
  'avanzado'
);

-- Crear enum para categorías principales
CREATE TYPE categoria_principal AS ENUM (
  'cartas_que_curan',
  'colecciones_ayuda',
  'cuentos_terapeuticos',
  'fichas_psicoeducativas',
  'guias_padres',
  'recomendaciones_libros'
);

-- Tabla principal de recursos
CREATE TABLE recursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Información básica
  resource_id VARCHAR(100) UNIQUE NOT NULL, -- ID único para uso en la app
  title VARCHAR(255) NOT NULL,
  description TEXT,
  categoria categoria_principal NOT NULL,
  
  -- Metadatos del recurso
  resource_type resource_type NOT NULL,
  age_ranges age_range[] NOT NULL DEFAULT '{}',
  difficulty difficulty_level NOT NULL,
  tags TEXT[] DEFAULT '{}',
  
  -- Archivos
  word_file_name VARCHAR(255), -- Nombre original del archivo Word
  pdf_file_name VARCHAR(255),  -- Nombre del archivo PDF generado
  word_storage_path VARCHAR(500), -- Ruta en Supabase Storage
  pdf_storage_path VARCHAR(500),  -- Ruta en Supabase Storage
  
  -- URLs públicas (se generan automáticamente)
  word_public_url TEXT,
  pdf_public_url TEXT,
  
  -- Información de acceso
  is_premium BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  
  -- Metadatos adicionales
  file_size_word BIGINT, -- Tamaño en bytes
  file_size_pdf BIGINT,
  estimated_reading_time INTEGER, -- En minutos
  
  -- Estadísticas
  download_count INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Índices para búsqueda rápida
  CONSTRAINT valid_age_ranges CHECK (array_length(age_ranges, 1) > 0)
);

-- ===================================
-- 📊 TABLA DE DESCARGAS (Analytics)
-- ===================================

CREATE TABLE recurso_descargas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recurso_id UUID REFERENCES recursos(id) ON DELETE CASCADE,
  
  -- Información de la descarga
  file_type VARCHAR(10) NOT NULL CHECK (file_type IN ('word', 'pdf')),
  user_ip INET,
  user_agent TEXT,
  referrer TEXT,
  
  -- Información del usuario (opcional)
  user_email VARCHAR(255),
  user_location JSONB, -- País, ciudad, etc.
  
  -- Timestamp
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===================================
-- 🔍 ÍNDICES PARA OPTIMIZACIÓN
-- ===================================

-- Índices para búsquedas frecuentes
CREATE INDEX idx_recursos_categoria ON recursos(categoria);
CREATE INDEX idx_recursos_resource_type ON recursos(resource_type);
CREATE INDEX idx_recursos_is_premium ON recursos(is_premium);
CREATE INDEX idx_recursos_is_active ON recursos(is_active);
CREATE INDEX idx_recursos_tags ON recursos USING GIN(tags);
CREATE INDEX idx_recursos_age_ranges ON recursos USING GIN(age_ranges);

-- Índice compuesto para filtros comunes
CREATE INDEX idx_recursos_filter ON recursos(categoria, resource_type, is_premium, is_active);

-- Índices para analytics
CREATE INDEX idx_descargas_recurso ON recurso_descargas(recurso_id);
CREATE INDEX idx_descargas_fecha ON recurso_descargas(downloaded_at);
CREATE INDEX idx_descargas_tipo ON recurso_descargas(file_type);

-- ===================================
-- 🔧 FUNCIONES Y TRIGGERS
-- ===================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para updated_at
CREATE TRIGGER update_recursos_updated_at 
    BEFORE UPDATE ON recursos 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Función para incrementar contador de descargas
CREATE OR REPLACE FUNCTION increment_download_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE recursos 
    SET download_count = download_count + 1 
    WHERE id = NEW.recurso_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para incrementar contador
CREATE TRIGGER increment_download_count_trigger
    AFTER INSERT ON recurso_descargas
    FOR EACH ROW 
    EXECUTE FUNCTION increment_download_count();

-- Función para incrementar contador de vistas
CREATE OR REPLACE FUNCTION increment_view_count(resource_id_param VARCHAR)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    UPDATE recursos 
    SET view_count = view_count + 1 
    WHERE resource_id = resource_id_param;
END;
$$;

-- ===================================
-- 🔐 ROW LEVEL SECURITY (RLS)
-- ===================================

-- Habilitar RLS
ALTER TABLE recursos ENABLE ROW LEVEL SECURITY;
ALTER TABLE recurso_descargas ENABLE ROW LEVEL SECURITY;

-- Política para recursos: todos pueden leer recursos activos
CREATE POLICY "Recursos públicos de lectura" 
ON recursos FOR SELECT 
USING (is_active = true);

-- Política para admin: puede hacer todo
CREATE POLICY "Admin total access recursos" 
ON recursos FOR ALL 
USING (auth.jwt() ->> 'role' = 'admin');

-- Política para descargas: cualquiera puede insertar
CREATE POLICY "Insertar descargas públicas" 
ON recurso_descargas FOR INSERT 
WITH CHECK (true);

-- Política para analytics: solo admin puede leer
CREATE POLICY "Admin analytics access" 
ON recurso_descargas FOR SELECT 
USING (auth.jwt() ->> 'role' = 'admin');

-- ===================================
-- 📈 VISTAS ÚTILES
-- ===================================

-- Vista de recursos con estadísticas
CREATE VIEW recursos_con_stats AS
SELECT 
    r.*,
    COUNT(rd.id) as total_downloads,
    COUNT(CASE WHEN rd.file_type = 'pdf' THEN 1 END) as pdf_downloads,
    COUNT(CASE WHEN rd.file_type = 'word' THEN 1 END) as word_downloads,
    MAX(rd.downloaded_at) as last_download
FROM recursos r
LEFT JOIN recurso_descargas rd ON r.id = rd.recurso_id
GROUP BY r.id;

-- Vista de recursos más populares
CREATE VIEW recursos_populares AS
SELECT 
    resource_id,
    title,
    categoria,
    download_count,
    view_count,
    (download_count + view_count) as popularity_score
FROM recursos 
WHERE is_active = true
ORDER BY popularity_score DESC;

-- ===================================
-- 🎯 COMENTARIOS EN TABLAS
-- ===================================

COMMENT ON TABLE recursos IS 'Tabla principal que almacena información de todos los recursos de la biblioteca emocional';
COMMENT ON TABLE recurso_descargas IS 'Tabla de analytics para rastrear descargas de recursos';

COMMENT ON COLUMN recursos.resource_id IS 'ID único usado en la aplicación (ej: carta-hija-crece-rapido)';
COMMENT ON COLUMN recursos.word_storage_path IS 'Ruta completa en Supabase Storage para el archivo Word';
COMMENT ON COLUMN recursos.pdf_storage_path IS 'Ruta completa en Supabase Storage para el archivo PDF';
COMMENT ON COLUMN recursos.estimated_reading_time IS 'Tiempo estimado de lectura en minutos';
