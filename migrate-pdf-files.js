// Script para migrar archivos PDF a Supabase Storage
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Faltan variables de entorno');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Mapeo de carpetas a buckets
const FOLDER_MAPPINGS = {
  'CARTAS QUE CURAN': 'recursos-pdf',
  'COLECCIONES DE AYUDA POR TEMAS': 'recursos-pdf',
  'CUENTOS TERAPÉUTICOS': 'recursos-pdf',
  'FICHAS PSICOEDUCATIVAS TEMÁTICAS': 'recursos-pdf',
  'GUÍAS BREVES PARA PADRES': 'recursos-pdf',
  'RECOMENDACIONES DE LIBROS CON MIRADA CLÍNICA': 'recursos-pdf'
};

// Función para sanitizar nombres de archivo
function sanitizeFileName(fileName) {
  return fileName
    .replace(/[^a-zA-Z0-9\s\-\.]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '_') // Espacios a guiones bajos
    .toLowerCase();
}

// Función para subir un archivo PDF
async function uploadPdfFile(filePath, bucketName, sanitizedName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(sanitizedName, fileBuffer, {
        contentType: 'application/pdf',
        upsert: true
      });

    if (error) {
      console.error(`❌ Error subiendo ${sanitizedName}:`, error.message);
      return null;
    }

    // Obtener URL pública
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(sanitizedName);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return null;
  }
}

// Función para actualizar la base de datos con la URL del PDF
async function updateResourcePdfUrl(fileName, publicUrl, storagePath) {
  try {
    const { error } = await supabase
      .from('recursos')
      .update({
        pdf_public_url: publicUrl,
        pdf_storage_path: storagePath
      })
      .eq('pdf_file_name', fileName);

    if (error) {
      console.error(`❌ Error actualizando BD para ${fileName}:`, error.message);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`❌ Error en actualización BD:`, error.message);
    return false;
  }
}

async function migratePdfFiles() {
  console.log('🚀 Iniciando migración de archivos PDF a Supabase...\n');

  let totalFiles = 0;
  let uploadedFiles = 0;
  let errors = 0;

  for (const [folderName, bucketName] of Object.entries(FOLDER_MAPPINGS)) {
    console.log(`📁 Procesando: ${folderName}`);
    
    const folderPath = path.join('public', 'biblioteca_emocional', folderName);
    
    if (!fs.existsSync(folderPath)) {
      console.log(`   ⚠️  Carpeta no encontrada: ${folderPath}`);
      continue;
    }

    const files = fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.pdf'));

    console.log(`   📄 Archivos PDF encontrados: ${files.length}`);
    totalFiles += files.length;

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const sanitizedName = sanitizeFileName(file);
      
      console.log(`   📤 Subiendo: ${file} -> ${sanitizedName}`);

      // Subir archivo
      const publicUrl = await uploadPdfFile(filePath, bucketName, sanitizedName);
      
      if (publicUrl) {
        // Actualizar base de datos
        const updated = await updateResourcePdfUrl(
          file, 
          publicUrl, 
          `${bucketName}/${sanitizedName}`
        );
        
        if (updated) {
          console.log(`   ✅ Subido y actualizado: ${file}`);
          uploadedFiles++;
        } else {
          console.log(`   ⚠️  Subido pero no actualizado en BD: ${file}`);
          errors++;
        }
      } else {
        console.log(`   ❌ Error subiendo: ${file}`);
        errors++;
      }
    }
    console.log('');
  }

  console.log(`\n🎉 Migración de PDFs completada!`);
  console.log(`📊 Resumen:`);
  console.log(`   Total archivos PDF: ${totalFiles}`);
  console.log(`   Subidos exitosamente: ${uploadedFiles}`);
  console.log(`   Errores: ${errors}`);
  
  if (uploadedFiles > 0) {
    console.log(`\n✅ ${uploadedFiles} archivos PDF disponibles en Supabase Storage`);
  }
}

migratePdfFiles();
