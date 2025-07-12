import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Faltan variables de entorno necesarias');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testPublicAccess() {
  console.log('🔍 Verificando acceso público a archivos...');
  
  try {
    // Listar archivos en el bucket recursos-pdf
    const { data: files, error: listError } = await supabase
      .storage
      .from('recursos-pdf')
      .list('', { limit: 5 });

    if (listError) {
      console.error('❌ Error al listar archivos:', listError);
      return;
    }

    console.log(`✅ Acceso a bucket verificado - ${files.length} archivos encontrados`);
    
    if (files.length > 0) {
      // Probar generar URL pública para un archivo
      const testFile = files[0];
      const { data: urlData } = supabase
        .storage
        .from('recursos-pdf')
        .getPublicUrl(testFile.name);

      console.log(`📄 Archivo de prueba: ${testFile.name}`);
      console.log(`🔗 URL pública: ${urlData.publicUrl}`);
      
      // Verificar que la URL es accesible
      try {
        const response = await fetch(urlData.publicUrl, { method: 'HEAD' });
        if (response.ok) {
          console.log('✅ URL pública accesible');
        } else {
          console.log(`⚠️  URL devuelve status: ${response.status}`);
        }
      } catch (fetchError) {
        console.log('❌ Error al verificar URL:', fetchError.message);
      }
    }

    // Probar también el bucket de Word
    console.log('\n📝 Verificando bucket recursos-word...');
    const { data: wordFiles, error: wordError } = await supabase
      .storage
      .from('recursos-word')
      .list('', { limit: 3 });

    if (wordError) {
      console.error('❌ Error al acceder bucket Word:', wordError);
    } else {
      console.log(`✅ Bucket Word accesible - ${wordFiles.length} archivos`);
    }

  } catch (error) {
    console.error('❌ Error general:', error);
  }
}

testPublicAccess();
