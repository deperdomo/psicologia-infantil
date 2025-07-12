/**
 * 📥 SCRIPT DE MIGRACIÓN - VERSIÓN SIMPLE PARA NODE.JS
 * 
 * Ejecutar con: node scripts/migrate-files.js
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Configuración
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables de entorno no configuradas');
  process.exit(1);
}

// Usar service key si está disponible, sino usar anon key
const supabaseKey = supabaseServiceKey || supabaseAnonKey;
const usingServiceKey = !!supabaseServiceKey;

console.log(`🔑 Usando ${usingServiceKey ? 'SERVICE' : 'ANON'} key para autenticación`);

if (!usingServiceKey) {
  console.warn('⚠️ Usando ANON key. Si hay errores de permisos, agrega SUPABASE_SERVICE_KEY al .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Mapeo de archivos
const FILE_MAPPING = {
  // CARTAS QUE CURAN
  'A mi hija que crece rápido.docx': 'carta-hija-crece-rapido',
  'A mi hija que crece rápido.pdf': 'carta-hija-crece-rapido',
  'A mi niño interior.docx': 'carta-nino-interior',
  'A mi niño interior.pdf': 'carta-nino-interior',
  'Carta a un padre que está aprendiendo.docx': 'carta-padre-aprendiendo',
  'Carta a un padre que está aprendiendo.pdf': 'carta-padre-aprendiendo',
  'Cuando una madre quiere llorar.docx': 'carta-madre-llorar',
  'Cuando una madre quiere llorar.pdf': 'carta-madre-llorar',
  'El beso que no di, el que no recibí.docx': 'carta-beso-no-di',
  'El beso que no di, el que no recibí.pdf': 'carta-beso-no-di',
  'El día que no supe acompañarte.docx': 'carta-no-supe-acompanar',
  'El día que no supe acompañarte.pdf': 'carta-no-supe-acompanar',
  'Perdóname por gritarte.docx': 'carta-perdoname-gritar',
  'Perdóname por gritarte.pdf': 'carta-perdoname-gritar',
  'Una madre a su hijo con TDAH.docx': 'carta-madre-hijo-tdah',
  'Una madre a su hijo con TDAH.pdf': 'carta-madre-hijo-tdah',
  'Una madre separada de su hijo pequeño.docx': 'carta-madre-separada',
  'Una madre separada de su hijo pequeño.pdf': 'carta-madre-separada',

  // COLECCIONES DE AYUDA
  'Autoestima Infantil.docx': 'coleccion-autoestima-infantil',
  'Autoestima Infantil.pdf': 'coleccion-autoestima-infantil',
  'Cuando lo Niños Se Pegan.docx': 'coleccion-ninos-se-pegan',
  'Cuando lo Niños Se Pegan.pdf': 'coleccion-ninos-se-pegan',
  'Pantallas Y Vínculo.docx': 'coleccion-pantallas-vinculo',
  'Pantallas Y Vínculo.pdf': 'coleccion-pantallas-vinculo',
  'Rabietas Y Tormentas Emocionales.docx': 'coleccion-rabietas-tormentas',
  'Rabietas Y Tormentas Emocionales.pdf': 'coleccion-rabietas-tormentas',
  'Separación  Y Divorcio.docx': 'coleccion-separacion-divorcio',
  'Separación  Y Divorcio.pdf': 'coleccion-separacion-divorcio',
  'TDAH Y Conductas Desafiantes.docx': 'coleccion-tdah-conductas',
  'TDAH Y Conductas Desafiantes.pdf': 'coleccion-tdah-conductas',

  // CUENTOS TERAPÉUTICOS
  'Cuento La botella del Capitán Nico (Llegada de un hermano).docx': 'cuento-botella-capitan-nico',
  'Cuento La botella del Capitán Nico (Llegada de un hermano).pdf': 'cuento-botella-capitan-nico',
  'Cuento La capucha invisible de Bruno (Bullying escolar) .docx': 'cuento-capucha-invisible-bruno',
  'Cuento La capucha invisible de Bruno (Bullying escolar) .pdf': 'cuento-capucha-invisible-bruno',
  'Cuento La luz que vivía en su corazón (Miedo- Inseguridad).docx': 'cuento-luz-corazon',
  'Cuento La luz que vivía en su corazón (Miedo- Inseguridad).pdf': 'cuento-luz-corazon',
  'Cuento Las alas de Leo (Sobreprotección).docx': 'cuento-alas-leo',
  'Cuento Las alas de Leo (Sobreprotección).pdf': 'cuento-alas-leo'
};

/**
 * 📁 Buscar archivos recursivamente
 */
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.docx' || ext === '.pdf') {
        fileList.push({
          path: filePath,
          name: file,
          extension: ext
        });
      }
    }
  });
  
  return fileList;
}

/**
 * ⬆️ Subir archivo
 */
async function uploadFile(file) {
  const resourceId = FILE_MAPPING[file.name];
  
  if (!resourceId) {
    console.warn(`⚠️ Archivo no mapeado: ${file.name}`);
    return false;
  }

  const bucket = file.extension === '.docx' ? 'recursos-word' : 'recursos-pdf';
  
  // Sanitizar nombre de archivo para Supabase Storage
  const sanitizedName = file.name
    .replace(/[^a-zA-Z0-9.-]/g, '_') // Reemplazar caracteres especiales
    .replace(/_{2,}/g, '_') // Múltiples guiones bajos por uno
    .replace(/^_|_$/g, ''); // Remover guiones al inicio/final
  
  const storagePath = `${resourceId}/${sanitizedName}`;
  
  try {
    console.log(`📤 Subiendo: ${file.name} → ${bucket}/${storagePath}`);
    
    const fileBuffer = fs.readFileSync(file.path);
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(storagePath, fileBuffer, {
        contentType: file.extension === '.docx' 
          ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          : 'application/pdf',
        upsert: true
      });

    if (error) {
      console.error(`❌ Error: ${error.message}`);
      return false;
    }

    console.log(`✅ Subido: ${sanitizedName}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error procesando ${file.name}:`, error.message);
    return false;
  }
}

/**
 * 🔄 Actualizar URLs
 */
async function updateUrls() {
  console.log('\n🔄 Actualizando URLs...');
  
  try {
    const { error } = await supabase.rpc('sync_resource_urls');
    
    if (error) {
      console.error('❌ Error:', error.message);
      return;
    }
    
    console.log('✅ URLs actualizadas');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

/**
 * 🚀 Función principal
 */
async function main() {
  console.log('🚀 Iniciando migración...\n');
  
  const bibliotecaPath = path.join(process.cwd(), 'public', 'biblioteca_emocional');
  
  if (!fs.existsSync(bibliotecaPath)) {
    console.error(`❌ No existe: ${bibliotecaPath}`);
    return;
  }

  const files = findFiles(bibliotecaPath);
  console.log(`📋 Encontrados ${files.length} archivos\n`);

  let success = 0;
  let errors = 0;

  for (const file of files) {
    const uploaded = await uploadFile(file);
    if (uploaded) {
      success++;
    } else {
      errors++;
    }
    
    // Pausa pequeña
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log(`\n📈 Resumen:`);
  console.log(`✅ Subidos: ${success}`);
  console.log(`❌ Errores: ${errors}`);

  if (success > 0) {
    await updateUrls();
  }

  console.log('\n🎉 Migración completada!');
}

main().catch(console.error);
