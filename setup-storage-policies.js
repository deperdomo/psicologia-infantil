import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Necesario para operaciones de administración

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Faltan variables de entorno necesarias');
  console.log('VITE_SUPABASE_URL:', !!supabaseUrl);
  console.log('SUPABASE_SERVICE_ROLE_KEY:', !!supabaseServiceRoleKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function setupStoragePolicies() {
  console.log('🔐 Configurando políticas de almacenamiento...');
  
  try {
    // Configurar políticas para el bucket recursos-pdf
    console.log('📄 Configurando bucket recursos-pdf...');
    
    // Política para lectura pública de PDFs
    const { data: pdfReadPolicy, error: pdfReadError } = await supabase.rpc('create_policy', {
      policy_name: 'Allow public read access to PDF files',
      bucket_name: 'recursos-pdf',
      policy_definition: `
        CREATE POLICY "Allow public read access to PDF files" ON storage.objects
        FOR SELECT USING (bucket_id = 'recursos-pdf');
      `
    });

    if (pdfReadError) {
      console.log('⚠️  Política de lectura PDF ya existe o error:', pdfReadError.message);
    } else {
      console.log('✅ Política de lectura PDF creada');
    }

    // Configurar el bucket como público si no lo está
    const { data: bucketData, error: bucketError } = await supabase
      .storage
      .updateBucket('recursos-pdf', { public: true });

    if (bucketError) {
      console.log('⚠️  Error al actualizar bucket o ya es público:', bucketError.message);
    } else {
      console.log('✅ Bucket recursos-pdf configurado como público');
    }

    // Verificar que las políticas estén funcionando
    console.log('\n🔍 Verificando acceso a archivos...');
    
    // Listar algunos archivos para verificar acceso
    const { data: files, error: listError } = await supabase
      .storage
      .from('recursos-pdf')
      .list('', { limit: 5 });

    if (listError) {
      console.error('❌ Error al listar archivos:', listError);
    } else {
      console.log(`✅ Acceso verificado - ${files.length} archivos encontrados`);
      if (files.length > 0) {
        console.log('📄 Ejemplo de archivos:');
        files.slice(0, 3).forEach(file => {
          console.log(`   • ${file.name}`);
        });
      }
    }

    console.log('\n🎉 Configuración de políticas completada!');
    
  } catch (error) {
    console.error('❌ Error en la configuración:', error);
  }
}

setupStoragePolicies();
