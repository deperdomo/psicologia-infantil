// Script para insertar los últimos 2 recursos de guías breves
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const GUIAS_BREVES_RESOURCES = [
  {
    title: 'CÓMO ACOMPAÑAR EN LA REGULACIÓN EMOCIONAL DE LOS HIJOS',
    description: 'Estrategias prácticas para ayudar a los hijos en su regulación emocional.',
    tags: ['regulación emocional', 'acompañamiento', 'crianza'],
    age_ranges: ['todas'],
    difficulty: 'basico'
  },
  {
    title: 'CÓMO ACOMPAÑAR UNA RABIETA SIN CASTIGAR',
    description: 'Técnicas de acompañamiento respetuoso durante las rabietas.',
    tags: ['rabietas', 'crianza respetuosa', 'acompañamiento'],
    age_ranges: ['0-3', '3-6'],
    difficulty: 'basico'
  }
];

function generateResourceId(title) {
  return title
    .toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

async function insertGuiasBreves() {
  console.log('🔄 Insertando las últimas 2 guías breves...\n');

  try {
    let inserted = 0;

    for (const resource of GUIAS_BREVES_RESOURCES) {
      const resourceId = generateResourceId(resource.title);

      // Verificar si ya existe
      const { data: existing } = await supabase
        .from('recursos')
        .select('resource_id')
        .eq('resource_id', resourceId)
        .single();

      if (existing) {
        console.log(`⚠️  Ya existe: ${resource.title}`);
        continue;
      }

      // Insertar como colecciones_ayuda tipo guia
      const { error } = await supabase
        .from('recursos')
        .insert({
          resource_id: resourceId,
          title: resource.title,
          description: resource.description,
          categoria: 'colecciones_ayuda', // Usar categoría existente
          resource_type: 'guia',
          age_ranges: resource.age_ranges,
          difficulty: resource.difficulty,
          tags: resource.tags,
          word_file_name: `${resource.title}.docx`,
          pdf_file_name: `${resource.title}.pdf`,
          is_premium: false,
          is_active: true,
          estimated_reading_time: 5
        });

      if (error) {
        console.log(`❌ Error: ${error.message}`);
      } else {
        console.log(`✅ Insertado: ${resource.title}`);
        inserted++;
      }
    }

    console.log(`\n📊 Insertados: ${inserted} recursos`);

    // Verificar total final
    const { count } = await supabase
      .from('recursos')
      .select('*', { count: 'exact', head: true });

    console.log(`📋 Total en BD: ${count} recursos`);

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

insertGuiasBreves();
