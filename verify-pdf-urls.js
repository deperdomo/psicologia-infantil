// Script para verificar que los PDFs se subieron y URLs se actualizaron
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function verifyPdfUrls() {
  console.log('🔍 Verificando URLs de PDFs en la base de datos...\n');

  try {
    const { data: recursos, error } = await supabase
      .from('recursos')
      .select('title, word_file_name, pdf_file_name, word_public_url, pdf_public_url, pdf_storage_path')
      .order('categoria', { ascending: true });

    if (error) {
      console.error('❌ Error consultando recursos:', error);
      return;
    }

    console.log(`📊 Total recursos: ${recursos.length}\n`);

    let withPdfUrl = 0;
    let withWordUrl = 0;
    let withBothUrls = 0;
    let withoutUrls = 0;

    recursos.forEach(recurso => {
      const hasPdf = !!recurso.pdf_public_url;
      const hasWord = !!recurso.word_public_url;

      if (hasPdf && hasWord) withBothUrls++;
      else if (hasPdf) withPdfUrl++;
      else if (hasWord) withWordUrl++;
      else withoutUrls++;
    });

    console.log(`📈 Estadísticas de URLs:`);
    console.log(`   Con ambas URLs (Word + PDF): ${withBothUrls}`);
    console.log(`   Solo con URL PDF: ${withPdfUrl}`);
    console.log(`   Solo con URL Word: ${withWordUrl}`);
    console.log(`   Sin URLs: ${withoutUrls}`);

    // Mostrar algunos ejemplos
    console.log(`\n📋 Ejemplos de recursos con URLs:`);
    const examples = recursos
      .filter(r => r.pdf_public_url)
      .slice(0, 3);

    examples.forEach(recurso => {
      console.log(`\n📄 ${recurso.title}`);
      console.log(`   Word: ${recurso.word_public_url ? '✅' : '❌'}`);
      console.log(`   PDF: ${recurso.pdf_public_url ? '✅' : '❌'}`);
      if (recurso.pdf_public_url) {
        console.log(`   PDF URL: ${recurso.pdf_public_url.substring(0, 80)}...`);
      }
    });

    // Verificar si algún PDF no se subió
    const missingPdfs = recursos.filter(r => !r.pdf_public_url);
    if (missingPdfs.length > 0) {
      console.log(`\n⚠️  Recursos sin URL PDF (${missingPdfs.length}):`);
      missingPdfs.forEach(r => {
        console.log(`   • ${r.title}`);
      });
    } else {
      console.log(`\n✅ Todos los recursos tienen URL PDF configurada!`);
    }

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

verifyPdfUrls();
