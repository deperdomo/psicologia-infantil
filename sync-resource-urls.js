// Script para sincronizar URLs de archivos subidos con la base de datos
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function syncResourceUrls() {
  console.log('🔄 Sincronizando URLs de archivos con la base de datos...\n');

  try {
    // Obtener todos los archivos del bucket recursos-word
    const { data: wordFiles, error: wordError } = await supabase.storage
      .from('recursos-word')
      .list('', { limit: 100 });

    if (wordError) {
      console.error('❌ Error obteniendo archivos Word:', wordError);
      return;
    }

    // Obtener todos los archivos del bucket recursos-pdf
    const { data: pdfFiles, error: pdfError } = await supabase.storage
      .from('recursos-pdf')
      .list('', { limit: 100 });

    if (pdfError) {
      console.error('❌ Error obteniendo archivos PDF:', pdfError);
      return;
    }

    console.log(`📁 Archivos Word encontrados: ${wordFiles.length}`);
    console.log(`📁 Archivos PDF encontrados: ${pdfFiles.length}\n`);

    // Obtener todos los recursos de la BD
    const { data: recursos, error: dbError } = await supabase
      .from('recursos')
      .select('id, word_file_name, pdf_file_name, word_public_url, pdf_public_url');

    if (dbError) {
      console.error('❌ Error obteniendo recursos de BD:', dbError);
      return;
    }

    let updatedCount = 0;

    for (const recurso of recursos) {
      let needsUpdate = false;
      let updateData = {};

      // Función para encontrar archivo por similitud de nombre
      const findFile = (files, originalName) => {
        if (!originalName) return null;
        
        // Buscar por nombre exacto primero
        let found = files.find(f => f.name === originalName.toLowerCase().replace(/[^a-z0-9\.]/g, '_'));
        if (found) return found;

        // Buscar por similitud (quitando espacios y caracteres especiales)
        const cleanOriginal = originalName.toLowerCase()
          .replace(/[^a-z0-9]/g, '')
          .replace(/\.docx$|\.pdf$/i, '');

        found = files.find(f => {
          const cleanFile = f.name.toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .replace(/\.docx$|\.pdf$/i, '');
          return cleanFile.includes(cleanOriginal) || cleanOriginal.includes(cleanFile);
        });

        return found;
      };

      // Verificar archivo Word
      if (recurso.word_file_name && !recurso.word_public_url) {
        const wordFile = findFile(wordFiles, recurso.word_file_name);
        if (wordFile) {
          const { data: wordUrlData } = supabase.storage
            .from('recursos-word')
            .getPublicUrl(wordFile.name);
          
          updateData.word_public_url = wordUrlData.publicUrl;
          updateData.word_storage_path = `recursos-word/${wordFile.name}`;
          needsUpdate = true;
        }
      }

      // Verificar archivo PDF
      if (recurso.pdf_file_name && !recurso.pdf_public_url) {
        const pdfFile = findFile(pdfFiles, recurso.pdf_file_name);
        if (pdfFile) {
          const { data: pdfUrlData } = supabase.storage
            .from('recursos-pdf')
            .getPublicUrl(pdfFile.name);
          
          updateData.pdf_public_url = pdfUrlData.publicUrl;
          updateData.pdf_storage_path = `recursos-pdf/${pdfFile.name}`;
          needsUpdate = true;
        }
      }

      // Actualizar en BD si es necesario
      if (needsUpdate) {
        const { error: updateError } = await supabase
          .from('recursos')
          .update(updateData)
          .eq('id', recurso.id);

        if (updateError) {
          console.error(`❌ Error actualizando recurso ${recurso.id}:`, updateError);
        } else {
          updatedCount++;
          const wordStatus = updateData.word_public_url ? '📄' : '';
          const pdfStatus = updateData.pdf_public_url ? '📕' : '';
          console.log(`✅ Actualizado: ${wordStatus}${pdfStatus} Recurso ID ${recurso.id}`);
        }
      }
    }

    console.log(`\n🎉 Sincronización completada!`);
    console.log(`📊 Recursos actualizados: ${updatedCount}`);

    // Verificar estado final
    const { data: finalCheck } = await supabase
      .from('recursos')
      .select('word_public_url, pdf_public_url')
      .not('word_public_url', 'is', null)
      .not('pdf_public_url', 'is', null);

    console.log(`✅ Recursos con ambas URLs: ${finalCheck?.length || 0}`);

  } catch (error) {
    console.error('❌ Error general:', error);
  }
}

syncResourceUrls();
