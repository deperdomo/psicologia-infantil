// Script para verificar recursos faltantes en la base de datos
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
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

// Mapeo de carpetas a categorías
const FOLDER_MAPPINGS = {
  'CARTAS QUE CURAN': {
    categoria: 'cartas_que_curan',
    resource_type: 'carta'
  },
  'COLECCIONES DE AYUDA POR TEMAS': {
    categoria: 'colecciones_ayuda',
    resource_type: 'guia'
  },
  'CUENTOS TERAPÉUTICOS': {
    categoria: 'cuentos_terapeuticos',
    resource_type: 'cuento'
  },
  'FICHAS PSICOEDUCATIVAS TEMÁTICAS': {
    categoria: 'fichas_psicoeducativas',
    resource_type: 'ficha'
  },
  'GUÍAS BREVES PARA PADRES': {
    categoria: 'guias_breves',
    resource_type: 'guia'
  },
  'RECOMENDACIONES DE LIBROS CON MIRADA CLÍNICA': {
    categoria: 'recomendaciones_libros',
    resource_type: 'libro'
  }
};

// Función para generar resource_id desde el título
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

// Función para leer archivos en una carpeta
function getFilesInFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️  Carpeta no encontrada: ${folderPath}`);
    return [];
  }

  return fs.readdirSync(folderPath, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.docx'))
    .map(dirent => dirent.name.replace('.docx', ''));
}

async function checkMissingResources() {
  console.log('🔍 Verificando recursos faltantes...\n');

  try {
    // Obtener todos los recursos de la base de datos
    const { data: existingResources, error } = await supabase
      .from('recursos')
      .select('resource_id, title, categoria');

    if (error) {
      console.error('❌ Error al obtener recursos:', error);
      return;
    }

    console.log(`📊 Recursos en BD: ${existingResources.length}\n`);

    const existingResourceIds = new Set(existingResources.map(r => r.resource_id));
    const missingResources = [];

    // Verificar cada carpeta
    for (const [folderName, config] of Object.entries(FOLDER_MAPPINGS)) {
      console.log(`📁 Verificando: ${folderName}`);
      
      const folderPath = path.join('public', 'biblioteca_emocional', folderName);
      const files = getFilesInFolder(folderPath);
      
      console.log(`   Archivos encontrados: ${files.length}`);

      for (const title of files) {
        const resourceId = generateResourceId(title);
        
        if (!existingResourceIds.has(resourceId)) {
          missingResources.push({
            title,
            resourceId,
            folderName,
            ...config
          });
        }
      }
      console.log('');
    }

    // Mostrar resumen
    console.log(`\n📋 RESUMEN:`);
    console.log(`   Recursos en BD: ${existingResources.length}`);
    console.log(`   Recursos faltantes: ${missingResources.length}`);

    if (missingResources.length > 0) {
      console.log(`\n❌ RECURSOS FALTANTES:\n`);
      
      // Agrupar por categoría
      const groupedMissing = {};
      missingResources.forEach(resource => {
        if (!groupedMissing[resource.categoria]) {
          groupedMissing[resource.categoria] = [];
        }
        groupedMissing[resource.categoria].push(resource);
      });

      for (const [categoria, resources] of Object.entries(groupedMissing)) {
        console.log(`\n📂 ${categoria.toUpperCase()} (${resources.length} faltantes):`);
        resources.forEach(resource => {
          console.log(`   • ${resource.title}`);
        });
      }

      // Preguntar si insertar
      console.log(`\n¿Quieres insertar estos ${missingResources.length} recursos? (escribe 'si' para continuar)`);
      
      // Para propositos de este script, vamos a crear el SQL
      console.log(`\n📄 SQL para insertar recursos faltantes:\n`);
      
      const insertStatements = missingResources.map(resource => {
        const description = `Recurso de ${resource.categoria.replace('_', ' ')} - ${resource.title}`;
        const tags = [resource.resource_type, resource.categoria.replace('_', ' ')];
        
        return `INSERT INTO recursos (
  resource_id, title, description, categoria, resource_type, 
  age_ranges, difficulty, tags, word_file_name, pdf_file_name,
  is_premium, is_active, estimated_reading_time
) VALUES (
  '${resource.resourceId}',
  '${resource.title.replace(/'/g, "''")}',
  '${description.replace(/'/g, "''")}',
  '${resource.categoria}',
  '${resource.resource_type}',
  ARRAY['todas'],
  'basico',
  ARRAY[${tags.map(tag => `'${tag.replace(/'/g, "''")}'`).join(', ')}],
  '${resource.title}.docx',
  '${resource.title}.pdf',
  false,
  true,
  5
);`;
      });

      console.log(insertStatements.join('\n\n'));
      
    } else {
      console.log('\n✅ Todos los recursos están en la base de datos!');
    }

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

checkMissingResources();
