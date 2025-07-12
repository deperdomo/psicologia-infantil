-- Script SQL para configurar políticas RLS para archivos PDF
-- Ejecutar en Supabase SQL Editor

-- Crear políticas para el bucket recursos-pdf
INSERT INTO storage.buckets (id, name, public) 
VALUES ('recursos-pdf', 'recursos-pdf', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Permitir lectura pública de archivos PDF
CREATE POLICY "Permitir lectura pública de PDFs" ON storage.objects
FOR SELECT USING (bucket_id = 'recursos-pdf');

-- Permitir subida solo a usuarios autenticados (para administración)
CREATE POLICY "Permitir subida de PDFs a admins" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'recursos-pdf' AND auth.role() = 'authenticated');

-- Permitir actualización solo a usuarios autenticados
CREATE POLICY "Permitir actualización de PDFs a admins" ON storage.objects
FOR UPDATE USING (bucket_id = 'recursos-pdf' AND auth.role() = 'authenticated');

-- Permitir borrado solo a usuarios autenticados
CREATE POLICY "Permitir borrado de PDFs a admins" ON storage.objects
FOR DELETE USING (bucket_id = 'recursos-pdf' AND auth.role() = 'authenticated');
