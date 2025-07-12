-- ===================================
-- 📁 CONFIGURACIÓN DE STORAGE BUCKETS
-- ===================================

-- Crear bucket para archivos Word (privado) - Solo si no existe
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'recursos-word', 
  'recursos-word', 
  false,
  52428800, -- 50MB límite
  ARRAY['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword']
)
ON CONFLICT (id) DO UPDATE SET
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Crear bucket para archivos PDF (público) - Solo si no existe
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'recursos-pdf', 
  'recursos-pdf', 
  true,
  52428800, -- 50MB límite
  ARRAY['application/pdf']
)
ON CONFLICT (id) DO UPDATE SET
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- ===================================
-- 🔐 POLÍTICAS DE STORAGE
-- ===================================

-- Eliminar políticas existentes si existen (para evitar conflictos)
DROP POLICY IF EXISTS "Admin puede subir Word files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede actualizar Word files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede eliminar Word files" ON storage.objects;
DROP POLICY IF EXISTS "Acceso controlado a Word files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede subir PDF files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede actualizar PDF files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede eliminar PDF files" ON storage.objects;
DROP POLICY IF EXISTS "Acceso público a PDF files" ON storage.objects;

-- Política para subir archivos Word (solo admin)
CREATE POLICY "Admin puede subir Word files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'recursos-word' 
  AND auth.jwt() ->> 'role' = 'admin'
);

-- Política para actualizar archivos Word (solo admin)
CREATE POLICY "Admin puede actualizar Word files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'recursos-word' 
  AND auth.jwt() ->> 'role' = 'admin'
);

-- Política para eliminar archivos Word (solo admin)
CREATE POLICY "Admin puede eliminar Word files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'recursos-word' 
  AND auth.jwt() ->> 'role' = 'admin'
);

-- Política para leer archivos Word (acceso controlado)
CREATE POLICY "Acceso controlado a Word files"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'recursos-word'
  AND (
    auth.role() = 'authenticated'
    OR auth.jwt() ->> 'download_token' IS NOT NULL
    OR auth.jwt() ->> 'role' = 'admin'
  )
);

-- Política para subir archivos PDF (solo admin)
CREATE POLICY "Admin puede subir PDF files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'recursos-pdf' 
  AND auth.jwt() ->> 'role' = 'admin'
);

-- Política para actualizar archivos PDF (solo admin)
CREATE POLICY "Admin puede actualizar PDF files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'recursos-pdf' 
  AND auth.jwt() ->> 'role' = 'admin'
);

-- Política para eliminar archivos PDF (solo admin)
CREATE POLICY "Admin puede eliminar PDF files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'recursos-pdf' 
  AND auth.jwt() ->> 'role' = 'admin'
);

-- Política para leer archivos PDF (acceso público)
CREATE POLICY "Acceso público a PDF files"
ON storage.objects FOR SELECT
USING (bucket_id = 'recursos-pdf');

-- ===================================
-- 🔧 FUNCIONES AUXILIARES PARA STORAGE
-- ===================================

-- Función para generar URL firmada para archivos Word
CREATE OR REPLACE FUNCTION get_signed_word_url(
  resource_path TEXT,
  expires_in INTEGER DEFAULT 3600
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  signed_url TEXT;
BEGIN
  -- Verificar que el archivo existe
  IF NOT EXISTS (
    SELECT 1 FROM storage.objects 
    WHERE bucket_id = 'recursos-word' 
    AND name = resource_path
  ) THEN
    RETURN NULL;
  END IF;

  -- Generar URL firmada válida por el tiempo especificado
  SELECT url INTO signed_url
  FROM storage.create_signed_url('recursos-word', resource_path, expires_in);
  
  RETURN signed_url;
EXCEPTION
  WHEN OTHERS THEN
    RETURN NULL;
END;
$$;

-- Función para obtener URL pública de PDF
CREATE OR REPLACE FUNCTION get_public_pdf_url(resource_path TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  public_url TEXT;
  project_url TEXT;
BEGIN
  -- Verificar que el archivo existe
  IF NOT EXISTS (
    SELECT 1 FROM storage.objects 
    WHERE bucket_id = 'recursos-pdf' 
    AND name = resource_path
  ) THEN
    RETURN NULL;
  END IF;

  -- Obtener la URL base del proyecto desde la configuración
  SELECT COALESCE(
    current_setting('app.supabase_url', true),
    'https://tu-proyecto.supabase.co'
  ) INTO project_url;
  
  -- Construir URL pública para PDF
  public_url := project_url || '/storage/v1/object/public/recursos-pdf/' || resource_path;
  
  RETURN public_url;
EXCEPTION
  WHEN OTHERS THEN
    RETURN NULL;
END;
$$;

-- Función para verificar si un archivo existe en storage
CREATE OR REPLACE FUNCTION storage_file_exists(
  bucket_name TEXT,
  file_path TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM storage.objects 
    WHERE bucket_id = bucket_name 
    AND name = file_path
  );
END;
$$;

-- Función para obtener información de un archivo
CREATE OR REPLACE FUNCTION get_file_info(
  bucket_name TEXT,
  file_path TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  file_info JSON;
BEGIN
  SELECT json_build_object(
    'name', name,
    'bucket_id', bucket_id,
    'size', metadata->>'size',
    'mimetype', metadata->>'mimetype',
    'created_at', created_at,
    'updated_at', updated_at
  ) INTO file_info
  FROM storage.objects
  WHERE bucket_id = bucket_name 
  AND name = file_path;
  
  RETURN COALESCE(file_info, '{}'::json);
END;
$$;

-- ===================================
-- 🔄 FUNCIONES DE SINCRONIZACIÓN
-- ===================================

-- Función para sincronizar URLs en la tabla recursos después de subir archivos
-- NOTA: Solo funciona si la tabla 'recursos' ya existe
CREATE OR REPLACE FUNCTION sync_resource_urls()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  recurso_record RECORD;
  word_url TEXT;
  pdf_url TEXT;
BEGIN
  -- Verificar si la tabla recursos existe
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'recursos') THEN
    RAISE NOTICE 'La tabla recursos no existe. Ejecuta create_recursos_table.sql primero.';
    RETURN;
  END IF;

  -- Iterar sobre todos los recursos activos
  FOR recurso_record IN 
    SELECT id, resource_id, word_storage_path, pdf_storage_path
    FROM recursos 
    WHERE is_active = true
  LOOP
    -- Actualizar URL de Word si existe el archivo
    IF recurso_record.word_storage_path IS NOT NULL THEN
      IF storage_file_exists('recursos-word', recurso_record.word_storage_path) THEN
        word_url := get_signed_word_url(recurso_record.word_storage_path);
        UPDATE recursos 
        SET word_public_url = word_url 
        WHERE id = recurso_record.id;
      END IF;
    END IF;

    -- Actualizar URL de PDF si existe el archivo
    IF recurso_record.pdf_storage_path IS NOT NULL THEN
      IF storage_file_exists('recursos-pdf', recurso_record.pdf_storage_path) THEN
        pdf_url := get_public_pdf_url(recurso_record.pdf_storage_path);
        UPDATE recursos 
        SET pdf_public_url = pdf_url 
        WHERE id = recurso_record.id;
      END IF;
    END IF;
  END LOOP;
  
  RAISE NOTICE 'URLs sincronizadas correctamente';
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error al sincronizar URLs: %', SQLERRM;
END;
$$;

-- ===================================
-- 🎯 TRIGGERS PARA MANTENER URLS ACTUALIZADAS
-- ===================================

-- Función trigger para actualizar URLs cuando se modifica un recurso
-- NOTA: Solo se puede crear si la tabla 'recursos' existe
CREATE OR REPLACE FUNCTION update_resource_urls_trigger()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Si cambió la ruta de Word, actualizar URL
  IF NEW.word_storage_path IS DISTINCT FROM OLD.word_storage_path THEN
    IF NEW.word_storage_path IS NOT NULL THEN
      NEW.word_public_url := get_signed_word_url(NEW.word_storage_path);
    ELSE
      NEW.word_public_url := NULL;
    END IF;
  END IF;

  -- Si cambió la ruta de PDF, actualizar URL
  IF NEW.pdf_storage_path IS DISTINCT FROM OLD.pdf_storage_path THEN
    IF NEW.pdf_storage_path IS NOT NULL THEN
      NEW.pdf_public_url := get_public_pdf_url(NEW.pdf_storage_path);
    ELSE
      NEW.pdf_public_url := NULL;
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

-- Crear trigger solo si la tabla recursos existe
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'recursos') THEN
    DROP TRIGGER IF EXISTS update_resource_urls_on_change ON recursos;
    CREATE TRIGGER update_resource_urls_on_change
      BEFORE UPDATE ON recursos
      FOR EACH ROW
      EXECUTE FUNCTION update_resource_urls_trigger();
    RAISE NOTICE 'Trigger creado para tabla recursos';
  ELSE
    RAISE NOTICE 'Tabla recursos no existe. El trigger se creará cuando ejecutes create_recursos_table.sql';
  END IF;
END $$;

-- ===================================
-- 🧹 FUNCIONES DE LIMPIEZA Y MANTENIMIENTO
-- ===================================

-- Función para limpiar archivos huérfanos (sin referencia en la tabla recursos)
-- NOTA: Solo funciona si la tabla 'recursos' existe
CREATE OR REPLACE FUNCTION cleanup_orphaned_files()
RETURNS TABLE(bucket TEXT, file_path TEXT, action TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Verificar si la tabla recursos existe
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'recursos') THEN
    RAISE NOTICE 'La tabla recursos no existe. Ejecuta create_recursos_table.sql primero.';
    RETURN;
  END IF;

  -- Retornar archivos Word huérfanos
  RETURN QUERY
  SELECT 
    'recursos-word'::TEXT as bucket,
    so.name as file_path,
    'orphaned_word'::TEXT as action
  FROM storage.objects so
  WHERE so.bucket_id = 'recursos-word'
  AND NOT EXISTS (
    SELECT 1 FROM recursos r 
    WHERE r.word_storage_path = so.name
  );

  -- Retornar archivos PDF huérfanos
  RETURN QUERY
  SELECT 
    'recursos-pdf'::TEXT as bucket,
    so.name as file_path,
    'orphaned_pdf'::TEXT as action
  FROM storage.objects so
  WHERE so.bucket_id = 'recursos-pdf'
  AND NOT EXISTS (
    SELECT 1 FROM recursos r 
    WHERE r.pdf_storage_path = so.name
  );
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error al buscar archivos huérfanos: %', SQLERRM;
    RETURN;
END;
$$;

-- ===================================
-- 📊 FUNCIONES DE ESTADÍSTICAS DE STORAGE
-- ===================================

-- Función para obtener estadísticas de uso de storage
CREATE OR REPLACE FUNCTION get_storage_stats()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  stats JSON;
BEGIN
  SELECT json_build_object(
    'word_bucket', json_build_object(
      'total_files', (SELECT COUNT(*) FROM storage.objects WHERE bucket_id = 'recursos-word'),
      'total_size_mb', ROUND((SELECT COALESCE(SUM((metadata->>'size')::bigint), 0) FROM storage.objects WHERE bucket_id = 'recursos-word') / 1024.0 / 1024.0, 2)
    ),
    'pdf_bucket', json_build_object(
      'total_files', (SELECT COUNT(*) FROM storage.objects WHERE bucket_id = 'recursos-pdf'),
      'total_size_mb', ROUND((SELECT COALESCE(SUM((metadata->>'size')::bigint), 0) FROM storage.objects WHERE bucket_id = 'recursos-pdf') / 1024.0 / 1024.0, 2)
    ),
    'generated_at', NOW()
  ) INTO stats;
  
  RETURN stats;
END;
$$;

-- ===================================
-- 💡 COMENTARIOS Y DOCUMENTACIÓN
-- ===================================

COMMENT ON FUNCTION get_signed_word_url(TEXT, INTEGER) IS 'Genera URL firmada para descarga de archivos Word con tiempo de expiración configurable';
COMMENT ON FUNCTION get_public_pdf_url(TEXT) IS 'Genera URL pública para archivos PDF';
COMMENT ON FUNCTION storage_file_exists(TEXT, TEXT) IS 'Verifica si un archivo existe en el bucket especificado';
COMMENT ON FUNCTION sync_resource_urls() IS 'Sincroniza todas las URLs de recursos con los archivos existentes en storage';
COMMENT ON FUNCTION cleanup_orphaned_files() IS 'Identifica archivos en storage que no tienen referencia en la tabla recursos';
COMMENT ON FUNCTION get_storage_stats() IS 'Retorna estadísticas de uso de los buckets de storage';

-- ===================================
-- 🚀 SCRIPT DE INICIALIZACIÓN FINAL
-- ===================================

-- Ejecutar sincronización inicial de URLs (ejecutar después de subir archivos)
-- SELECT sync_resource_urls();

-- Mostrar estadísticas iniciales
-- SELECT get_storage_stats();
