// Script para insertar recursos faltantes en Supabase
import { createClient } from '@supabase/supabase-js';
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

// Recursos faltantes organizados por categoría
const MISSING_RESOURCES = {
  colecciones_ayuda: [
    {
      title: 'Autoestima Infantil',
      description: 'Guía completa sobre cómo fortalecer la autoestima en los niños desde temprana edad.',
      tags: ['autoestima', 'desarrollo infantil', 'confianza'],
      age_ranges: ['3-6', '6-12'],
      difficulty: 'basico'
    },
    {
      title: 'Cuando los Niños Se Pegan',
      description: 'Estrategias para manejar la agresividad física en la infancia.',
      tags: ['agresividad', 'comportamiento', 'límites'],
      age_ranges: ['3-6', '6-12'],
      difficulty: 'intermedio'
    },
    {
      title: 'Pantallas Y Vínculo',
      description: 'Cómo equilibrar el uso de pantallas manteniendo vínculos familiares saludables.',
      tags: ['pantallas', 'tecnología', 'vínculo familiar'],
      age_ranges: ['todas'],
      difficulty: 'basico'
    },
    {
      title: 'Rabietas Y Tormentas Emocionales',
      description: 'Herramientas para acompañar las rabietas y desregulaciones emocionales.',
      tags: ['rabietas', 'regulación emocional', 'acompañamiento'],
      age_ranges: ['0-3', '3-6'],
      difficulty: 'basico'
    },
    {
      title: 'Separación Y Divorcio',
      description: 'Guía para acompañar a los niños durante procesos de separación familiar.',
      tags: ['separación', 'divorcio', 'familia'],
      age_ranges: ['todas'],
      difficulty: 'intermedio'
    },
    {
      title: 'TDAH Y Conductas Desafiantes',
      description: 'Estrategias específicas para niños con TDAH y comportamientos desafiantes.',
      tags: ['TDAH', 'conductas desafiantes', 'neurodivergencia'],
      age_ranges: ['6-12', '12+'],
      difficulty: 'avanzado'
    }
  ],
  cuentos_terapeuticos: [
    {
      title: 'Cuento La botella del Capitán Nico (Llegada de un hermano)',
      description: 'Cuento terapéutico para ayudar a los niños a procesar la llegada de un hermano.',
      tags: ['hermanos', 'celos', 'familia'],
      age_ranges: ['3-6', '6-12'],
      difficulty: 'basico'
    },
    {
      title: 'Cuento La capucha invisible de Bruno (Bullying escolar)',
      description: 'Historia que ayuda a los niños a entender y afrontar el bullying escolar.',
      tags: ['bullying', 'escuela', 'autodefensa emocional'],
      age_ranges: ['6-12'],
      difficulty: 'intermedio'
    },
    {
      title: 'Cuento La luz que vivía en su corazón (Miedo- Inseguridad)',
      description: 'Cuento para trabajar miedos e inseguridades en la infancia.',
      tags: ['miedos', 'inseguridad', 'autoconfianza'],
      age_ranges: ['3-6', '6-12'],
      difficulty: 'basico'
    },
    {
      title: 'Cuento Las alas de Leo (Sobreprotección)',
      description: 'Historia sobre la importancia de la autonomía vs sobreprotección.',
      tags: ['autonomía', 'sobreprotección', 'independencia'],
      age_ranges: ['6-12'],
      difficulty: 'basico'
    }
  ],
  fichas_psicoeducativas: [
    {
      title: 'APEGO SEGURO-INSEGURO',
      description: 'Ficha educativa sobre los diferentes tipos de apego y su impacto.',
      tags: ['apego', 'vínculo', 'desarrollo'],
      age_ranges: ['todas'],
      difficulty: 'intermedio'
    },
    {
      title: 'AUTONOMÍA- SOBREPROTECCIÓN',
      description: 'Balance entre fomentar autonomía y evitar la sobreprotección.',
      tags: ['autonomía', 'sobreprotección', 'desarrollo'],
      age_ranges: ['todas'],
      difficulty: 'basico'
    },
    {
      title: 'COMPORTAMIENTO ADECUADO- INADECUADO',
      description: 'Guía para entender y moldear comportamientos en la infancia.',
      tags: ['comportamiento', 'límites', 'disciplina'],
      age_ranges: ['todas'],
      difficulty: 'basico'
    },
    {
      title: 'DESARROLLO EMOCIONAL POR EDADES',
      description: 'Etapas del desarrollo emocional según la edad del niño.',
      tags: ['desarrollo emocional', 'etapas', 'crecimiento'],
      age_ranges: ['todas'],
      difficulty: 'intermedio'
    },
    {
      title: 'ESTILOS EDUCATIVOS FAMILIARES',
      description: 'Diferentes estilos parentales y sus efectos en el desarrollo.',
      tags: ['estilos parentales', 'educación', 'familia'],
      age_ranges: ['todas'],
      difficulty: 'intermedio'
    },
    {
      title: 'REGULACIÓN EMOCIONAL',
      description: 'Conceptos y técnicas fundamentales de regulación emocional.',
      tags: ['regulación emocional', 'autocontrol', 'emociones'],
      age_ranges: ['todas'],
      difficulty: 'basico'
    },
    {
      title: 'TDAH',
      description: 'Información completa sobre el Trastorno por Déficit de Atención e Hiperactividad.',
      tags: ['TDAH', 'neurodivergencia', 'atención'],
      age_ranges: ['6-12', '12+'],
      difficulty: 'intermedio'
    },
    {
      title: 'TND',
      description: 'Guía sobre el Trastorno Negativista Desafiante.',
      tags: ['TND', 'conductas desafiantes', 'oposición'],
      age_ranges: ['6-12', '12+'],
      difficulty: 'avanzado'
    }
  ],
  guias_breves: [
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
  ]
};

// Función para generar resource_id
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

async function insertMissingResources() {
  console.log('🔄 Insertando recursos faltantes...\n');

  try {
    let totalInserted = 0;

    for (const [categoria, resources] of Object.entries(MISSING_RESOURCES)) {
      console.log(`📂 Insertando ${categoria.toUpperCase()}: ${resources.length} recursos`);

      for (const resource of resources) {
        const resourceId = generateResourceId(resource.title);

        // Verificar si ya existe
        const { data: existing } = await supabase
          .from('recursos')
          .select('resource_id')
          .eq('resource_id', resourceId)
          .single();

        if (existing) {
          console.log(`   ⚠️  Ya existe: ${resource.title}`);
          continue;
        }

        // Determinar tipo de recurso
        const resourceType = categoria === 'colecciones_ayuda' || categoria === 'guias_breves' ? 'guia' :
                           categoria === 'cuentos_terapeuticos' ? 'cuento' :
                           categoria === 'fichas_psicoeducativas' ? 'ficha' : 'carta';

        // Insertar recurso
        const { error } = await supabase
          .from('recursos')
          .insert({
            resource_id: resourceId,
            title: resource.title,
            description: resource.description,
            categoria: categoria,
            resource_type: resourceType,
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
          console.log(`   ❌ Error al insertar "${resource.title}": ${error.message}`);
        } else {
          console.log(`   ✅ Insertado: ${resource.title}`);
          totalInserted++;
        }
      }
      console.log('');
    }

    console.log(`\n🎉 ¡Proceso completado!`);
    console.log(`📊 Total de recursos insertados: ${totalInserted}`);

    // Verificar total final
    const { count } = await supabase
      .from('recursos')
      .select('*', { count: 'exact', head: true });

    console.log(`📋 Total de recursos en BD: ${count}`);

  } catch (error) {
    console.error('❌ Error general:', error);
  }
}

insertMissingResources();
