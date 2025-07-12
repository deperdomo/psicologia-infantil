#!/usr/bin/env tsx
/**
 * 📥 SCRIPT DE MIGRACIÓN DE ARCHIVOS A SUPABASE
 * 
 * Este script sube todos los documentos de la biblioteca emocional
 * desde public/biblioteca_emocional/ a Supabase Storage
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Configuración de Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables de entorno de Supabase no configuradas');
  console.error('Asegúrate de tener VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Configuración de rutas
const projectRoot = process.cwd();
const bibliotecaPath = join(projectRoot, 'public', 'biblioteca_emocional');

interface FileToUpload {
  localPath: string;
  fileName: string;
  bucket: 'recursos-word' | 'recursos-pdf';
  storagePath: string;
  resourceId: string;
}

/**
 * 🗂️ Mapeo de carpetas a resource_ids y categorías
 */
const FOLDER_MAPPING = {
  'CARTAS QUE CURAN': {
    categoria: 'cartas_que_curan',
    files: {
      'A mi hija que crece rápido.docx': 'carta-hija-crece-rapido',
      'A mi niño interior.docx': 'carta-nino-interior',
      'Carta a un padre que está aprendiendo.docx': 'carta-padre-aprendiendo',
      'Cuando una madre quiere llorar.docx': 'carta-madre-llorar',
      'El beso que no di, el que no recibí.docx': 'carta-beso-no-di',
      'El día que no supe acompañarte.docx': 'carta-no-supe-acompanar',
      'Perdóname por gritarte.docx': 'carta-perdoname-gritar',
      'Una madre a su hijo con TDAH.docx': 'carta-madre-hijo-tdah',
      'Una madre separada de su hijo pequeño.docx': 'carta-madre-separada'
    }
  },
  'COLECCIONES DE AYUDA POR TEMAS': {
    categoria: 'colecciones_ayuda',
    files: {
      'Autoestima Infantil.docx': 'coleccion-autoestima-infantil',
      'Cuando lo Niños Se Pegan.docx': 'coleccion-ninos-se-pegan',
      'Pantallas Y Vínculo.docx': 'coleccion-pantallas-vinculo',
      'Rabietas Y Tormentas Emocionales.docx': 'coleccion-rabietas-tormentas',
      'Separación  Y Divorcio.docx': 'coleccion-separacion-divorcio',
      'TDAH Y Conductas Desafiantes.docx': 'coleccion-tdah-conductas'
    }
  },
  'CUENTOS TERAPÉUTICOS': {
    categoria: 'cuentos_terapeuticos',
    files: {
      'Cuento La botella del Capitán Nico (Llegada de un hermano).docx': 'cuento-botella-capitan-nico',
      'Cuento La capucha invisible de Bruno (Bullying escolar) .docx': 'cuento-capucha-invisible-bruno',
      'Cuento La luz que vivía en su corazón (Miedo- Inseguridad).docx': 'cuento-luz-corazon',
      'Cuento Las alas de Leo (Sobreprotección).docx': 'cuento-alas-leo'
    }
  }
};

/**
 * 📁 Escanear directorio y encontrar archivos
 */
function scanDirectory(dirPath: string): FileToUpload[] {
  const filesToUpload: FileToUpload[] = [];

  try {
    const folders = readdirSync(dirPath);
    
    for (const folder of folders) {
      const folderPath = join(dirPath, folder);
      
      if (!statSync(folderPath).isDirectory()) continue;
      
      const mapping = FOLDER_MAPPING[folder as keyof typeof FOLDER_MAPPING];
      if (!mapping) {
        console.warn(`⚠️ Carpeta no mapeada: ${folder}`);
        continue;
      }

      const files = readdirSync(folderPath);
      
      for (const file of files) {
        const filePath = join(folderPath, file);
        if (!statSync(filePath).isFile()) continue;

        const resourceId = mapping.files[file as keyof typeof mapping.files];
        if (!resourceId) {
          console.warn(`⚠️ Archivo no mapeado: ${file}`);
          continue;
        }

        const ext = extname(file).toLowerCase();
        const bucket = ext === '.docx' ? 'recursos-word' : 'recursos-pdf';
        const storagePath = `${resourceId}/${file}`;

        filesToUpload.push({
          localPath: filePath,
          fileName: file,
          bucket,
          storagePath,
          resourceId
        });
      }
    }
  } catch (error) {
    console.error('❌ Error escaneando directorio:', error);
  }

  return filesToUpload;
}

/**
 * ⬆️ Subir archivo a Supabase Storage
 */
async function uploadFile(file: FileToUpload): Promise<boolean> {
  try {
    console.log(`📤 Subiendo: ${file.fileName} → ${file.bucket}/${file.storagePath}`);
    
    const fileBuffer = readFileSync(file.localPath);
    
    const { data, error } = await supabase.storage
      .from(file.bucket)
      .upload(file.storagePath, fileBuffer, {
        contentType: file.bucket === 'recursos-word' 
          ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          : 'application/pdf',
        upsert: true // Sobrescribir si ya existe
      });

    if (error) {
      console.error(`❌ Error subiendo ${file.fileName}:`, error.message);
      return false;
    }

    console.log(`✅ Subido: ${file.fileName}`);
    return true;

  } catch (error) {
    console.error(`❌ Error procesando ${file.fileName}:`, error);
    return false;
  }
}

/**
 * 🔄 Actualizar URLs en la base de datos
 */
async function updateResourceUrls(): Promise<void> {
  console.log('\n🔄 Actualizando URLs en la base de datos...');
  
  try {
    const { data, error } = await supabase.rpc('sync_resource_urls');
    
    if (error) {
      console.error('❌ Error actualizando URLs:', error.message);
      return;
    }
    
    console.log('✅ URLs actualizadas correctamente');
  } catch (error) {
    console.error('❌ Error en sync_resource_urls:', error);
  }
}

/**
 * 📊 Mostrar estadísticas finales
 */
async function showStats(): Promise<void> {
  console.log('\n📊 Estadísticas de Storage:');
  
  try {
    const { data, error } = await supabase.rpc('get_storage_stats');
    
    if (error) {
      console.error('❌ Error obteniendo estadísticas:', error.message);
      return;
    }
    
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Error mostrando estadísticas:', error);
  }
}

/**
 * 🚀 Función principal
 */
async function main(): Promise<void> {
  console.log('🚀 Iniciando migración de archivos a Supabase Storage...\n');

  // Verificar que existe el directorio
  try {
    statSync(bibliotecaPath);
  } catch {
    console.error(`❌ No se encontró el directorio: ${bibliotecaPath}`);
    process.exit(1);
  }

  // Escanear archivos
  console.log('🔍 Escaneando archivos...');
  const filesToUpload = scanDirectory(bibliotecaPath);
  
  if (filesToUpload.length === 0) {
    console.log('⚠️ No se encontraron archivos para subir');
    return;
  }

  console.log(`📋 Encontrados ${filesToUpload.length} archivos para subir\n`);

  // Subir archivos
  let uploadedCount = 0;
  let errorCount = 0;

  for (const file of filesToUpload) {
    const success = await uploadFile(file);
    if (success) {
      uploadedCount++;
    } else {
      errorCount++;
    }
    
    // Pequeña pausa para no saturar la API
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`\n📈 Resumen de migración:`);
  console.log(`✅ Archivos subidos: ${uploadedCount}`);
  console.log(`❌ Errores: ${errorCount}`);

  // Actualizar URLs en la base de datos
  if (uploadedCount > 0) {
    await updateResourceUrls();
    await showStats();
  }

  console.log('\n🎉 Migración completada!');
}

// Ejecutar script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main as migrateFiles };
