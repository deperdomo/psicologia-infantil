/**
 * 🧪 SCRIPT DE PRUEBA - SUBIR UN ARCHIVO
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables de entorno no configuradas');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testUpload() {
  console.log('🧪 Probando subida de archivo...');
  
  // Intentar con un archivo PDF de prueba (crear contenido binario válido)
  const testFileName = 'test-file.pdf';
  
  // PDF mínimo válido (header básico)
  const pdfHeader = Buffer.from('%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Pages\n/Kids [3 0 R]\n/Count 1\n>>\nendobj\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n>>\nendobj\nxref\n0 4\n0000000000 65535 f \n0000000010 00000 n \n0000000053 00000 n \n0000000089 00000 n \ntrailer\n<<\n/Size 4\n/Root 1 0 R\n>>\nstartxref\n149\n%%EOF');
  
  try {
    // Probar con bucket recursos-pdf y un PDF válido
    console.log('📤 Subiendo archivo de prueba PDF...');
    
    const { data, error } = await supabase.storage
      .from('recursos-pdf')
      .upload(`test/${testFileName}`, pdfHeader, {
        contentType: 'application/pdf',
        upsert: true
      });

    if (error) {
      console.error('❌ Error de Storage:', error);
      
      // Intentar con bucket word y archivo docx simulado
      console.log('\n� Probando con bucket word...');
      
      const { data: wordData, error: wordError } = await supabase.storage
        .from('recursos-word')
        .upload('test/test-file.docx', pdfHeader, {
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          upsert: true
        });
        
      if (wordError) {
        console.error('❌ Error con Word también:', wordError);
        console.log('\n🔍 Información de debug:');
        console.log('URL:', supabaseUrl);
        console.log('Key preview:', supabaseAnonKey.substring(0, 20) + '...');
        return;
      }
      
      console.log('✅ Word bucket funciona:', wordData);
      return;
    }

    console.log('✅ PDF subido correctamente:', data);
    
  } catch (error) {
    console.error('❌ Error general:', error);
  }
}

testUpload();
