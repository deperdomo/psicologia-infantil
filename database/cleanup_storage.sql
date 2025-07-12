-- ===================================
-- 🧹 LIMPIEZA COMPLETA DE STORAGE
-- ===================================
-- ⚠️  ADVERTENCIA: Este script eliminará TODOS los buckets y archivos
-- Solo ejecutar si quieres empezar completamente de nuevo

-- ===================================
-- 🗑️ ELIMINAR POLÍTICAS EXISTENTES
-- ===================================

-- Eliminar todas las políticas de storage relacionadas con nuestros buckets
DROP POLICY IF EXISTS "Admin puede subir Word files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede actualizar Word files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede eliminar Word files" ON storage.objects;
DROP POLICY IF EXISTS "Acceso controlado a Word files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede subir PDF files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede actualizar PDF files" ON storage.objects;
DROP POLICY IF EXISTS "Admin puede eliminar PDF files" ON storage.objects;
DROP POLICY IF EXISTS "Acceso público a PDF files" ON storage.objects;

-- ===================================
-- 🗑️ ELIMINAR OBJETOS Y BUCKETS
-- ===================================

-- Eliminar todos los objetos de los buckets (si existen)
DELETE FROM storage.objects WHERE bucket_id IN ('recursos-word', 'recursos-pdf');

-- Eliminar los buckets (si existen)
DELETE FROM storage.buckets WHERE id IN ('recursos-word', 'recursos-pdf');

-- ===================================
-- 🗑️ ELIMINAR FUNCIONES PERSONALIZADAS
-- ===================================

-- Eliminar funciones si existen
DROP FUNCTION IF EXISTS get_signed_word_url(TEXT, INTEGER);
DROP FUNCTION IF EXISTS get_public_pdf_url(TEXT);
DROP FUNCTION IF EXISTS storage_file_exists(TEXT, TEXT);
DROP FUNCTION IF EXISTS get_file_info(TEXT, TEXT);
DROP FUNCTION IF EXISTS sync_resource_urls();
DROP FUNCTION IF EXISTS update_resource_urls_trigger();
DROP FUNCTION IF EXISTS cleanup_orphaned_files();
DROP FUNCTION IF EXISTS get_storage_stats();

-- ===================================
-- 🗑️ ELIMINAR TRIGGERS
-- ===================================

-- Eliminar trigger si existe
DROP TRIGGER IF EXISTS update_resource_urls_on_change ON recursos;

-- ===================================
-- ✅ MENSAJE DE CONFIRMACIÓN
-- ===================================

DO $$
BEGIN
    RAISE NOTICE '🧹 Limpieza completa de storage realizada exitosamente';
    RAISE NOTICE '📋 Ahora puedes ejecutar setup_storage.sql sin conflictos';
END $$;
