// Script final para insertar solo los recursos que realmente faltan
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

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

// Recursos que sabemos que faltan (los que NO estaban en el primer insert)
const REMAINING_RESOURCES = [
  // Cartas que curan faltantes
  {
    title: 'Cuando una madre quiere llorar',
    categoria: 'cartas_que_curan',
    resource_type: 'carta',
    description: 'Carta de apoyo para madres que necesitan expresar sus emociones y vulnerabilidades.',
    tags: ['maternidad', 'emociones', 'llorar', 'apoyo'],
    age_ranges: ['todas'],
    difficulty: 'basico'
  },
  {
    title: 'El beso que no di, el que no recibí',
    categoria: 'cartas_que_curan',
    resource_type: 'carta',
    description: 'Reflexión sobre los gestos de amor no expresados y su sanación.',
    tags: ['amor', 'afecto', 'arrepentimiento', 'sanación'],
    age_ranges: ['todas'],
    difficulty: 'intermedio'
  },
  {
    title: 'El día que no supe acompañarte',
    categoria: 'cartas_que_curan',
    resource_type: 'carta',
    description: 'Carta de disculpa y aprendizaje para momentos de desconexión parental.',
    tags: ['acompañamiento', 'disculpas', 'conexión', 'aprendizaje'],
    age_ranges: ['todas'],
    difficulty: 'basico'
  },
  {
    title: 'Perdóname por gritarte',
    categoria: 'cartas_que_curan',
    resource_type: 'carta',
    description: 'Carta de disculpa por momentos de desregulación parental.',
    tags: ['disculpas', 'gritos', 'autorregulación', 'perdón'],
    age_ranges: ['todas'],
    difficulty: 'basico'
  },
  {
    title: 'Una madre a su hijo con TDAH',
    categoria: 'cartas_que_curan',
    resource_type: 'carta',
    description: 'Carta de amor y comprensión dirigida a niños con TDAH.',
    tags: ['TDAH', 'neurodivergencia', 'amor incondicional', 'comprensión'],
    age_ranges: ['6-12', '12+'],
    difficulty: 'intermedio'
  },
  {
    title: 'Una madre separada de su hijo pequeño',
    categoria: 'cartas_que_curan',
    resource_type: 'carta',
    description: 'Carta para procesar la separación temporal de los hijos.',
    tags: ['separación', 'distancia', 'amor', 'conexión'],
    age_ranges: ['todas'],
    difficulty: 'intermedio'
  }
];

async function insertFinalResources() {
  console.log('🔄 Insertando recursos realmente faltantes...\n');

  try {
    // Obtener todos los recursos existentes por título
    const { data: existingResources } = await supabase
      .from('recursos')
      .select('title, resource_id');

    const existingTitles = new Set(existingResources.map(r => r.title));
    
    console.log(`📊 Recursos existentes en BD: ${existingResources.length}`);
    console.log(`🔍 Verificando ${REMAINING_RESOURCES.length} recursos...\n`);

    let inserted = 0;

    for (const resource of REMAINING_RESOURCES) {
      if (existingTitles.has(resource.title)) {
        console.log(`⚠️  Ya existe: ${resource.title}`);
        continue;
      }

      const resourceId = generateResourceId(resource.title);

      const { error } = await supabase
        .from('recursos')
        .insert({
          resource_id: resourceId,
          title: resource.title,
          description: resource.description,
          categoria: resource.categoria,
          resource_type: resource.resource_type,
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
        console.log(`❌ Error insertando "${resource.title}": ${error.message}`);
      } else {
        console.log(`✅ Insertado: ${resource.title}`);
        inserted++;
      }
    }

    console.log(`\n🎉 Proceso completado!`);
    console.log(`📊 Recursos insertados: ${inserted}`);

    // Verificar total final
    const { count } = await supabase
      .from('recursos')
      .select('*', { count: 'exact', head: true });

    console.log(`📋 Total final en BD: ${count} recursos`);

    // Mostrar resumen por categoría
    console.log(`\n📂 Resumen por categorías:`);
    const { data: categories } = await supabase
      .from('recursos')
      .select('categoria')
      .eq('is_active', true);

    const categoryCount = {};
    categories.forEach(r => {
      categoryCount[r.categoria] = (categoryCount[r.categoria] || 0) + 1;
    });

    Object.entries(categoryCount).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count} recursos`);
    });

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

insertFinalResources();
