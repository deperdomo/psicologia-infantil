#!/usr/bin/env node

/**
 * Script para descargar ilustraciones de unDraw.co
 * Uso: node download-undraw-illustrations.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ilustraciones recomendadas para psicología infantil
const illustrations = [
  {
    name: 'family-time',
    url: 'https://illustrations.popsy.co/amber/man-with-a-laptop.svg',
    description: 'Familia pasando tiempo juntos - Hero principal'
  },
  {
    name: 'certificate',
    url: 'https://illustrations.popsy.co/amber/diploma.svg',
    description: 'Certificado profesional - Credenciales'
  },
  {
    name: 'mindfulness',
    url: 'https://illustrations.popsy.co/amber/meditation.svg',
    description: 'Mindfulness y bienestar - Elemento de fondo'
  },
  {
    name: 'team-spirit',
    url: 'https://illustrations.popsy.co/amber/team-spirit.svg',
    description: 'Trabajo en equipo - Terapia familiar'
  },
  {
    name: 'children',
    url: 'https://illustrations.popsy.co/amber/children.svg',
    description: 'Niños jugando - Terapia infantil'
  },
  {
    name: 'therapy',
    url: 'https://illustrations.popsy.co/amber/therapy.svg',
    description: 'Sesión de terapia - Servicios'
  }
];

// Crear directorio si no existe
const illustrationsDir = path.join(__dirname, '..', 'public', 'illustrations');
if (!fs.existsSync(illustrationsDir)) {
  fs.mkdirSync(illustrationsDir, { recursive: true });
}

// Función para descargar archivo
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(illustrationsDir, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filename);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Función principal
async function downloadIllustrations() {
  console.log('🎨 Descargando ilustraciones de unDraw.co...\n');

  for (const illustration of illustrations) {
    try {
      const filename = `${illustration.name}.svg`;
      console.log(`📥 Descargando: ${illustration.name}...`);
      await downloadFile(illustration.url, filename);
      console.log(`✅ ${illustration.description}`);
    } catch (error) {
      console.error(`❌ Error descargando ${illustration.name}:`, error.message);
    }
  }

  console.log('\n🎉 ¡Descarga completada!');
  console.log(`📁 Ilustraciones guardadas en: ${illustrationsDir}`);
  
  // Crear archivo de índice
  const indexContent = `# 🎨 Ilustraciones para Psicología Infantil

## Ilustraciones Disponibles

${illustrations.map(ill => `
### ${ill.name}
- **Archivo**: \`${ill.name}.svg\`
- **Descripción**: ${ill.description}
- **Uso recomendado**: ${getUsageRecommendation(ill.name)}
`).join('\n')}

## Cómo Usar

\`\`\`typescript
import { UnDrawIllustration } from '../components/hero/UnDrawIllustration';

<UnDrawIllustration 
  name="family-time"
  className="w-full max-w-lg"
  primaryColor="#3B82F6"
  accentColor="#EC4899"
/>
\`\`\`

## Personalización de Colores

Las ilustraciones pueden personalizarse para coincidir con tu marca:
- **Azul principal**: #3B82F6 (confianza, profesionalismo)
- **Rosa acento**: #EC4899 (calidez, comprensión)
- **Amarillo energía**: #FDE047 (positividad, creatividad)
`;

  fs.writeFileSync(path.join(illustrationsDir, 'README.md'), indexContent);
  console.log('📋 Archivo README.md creado con instrucciones de uso');
}

function getUsageRecommendation(name) {
  const recommendations = {
    'family-time': 'Hero principal, landing page',
    'certificate': 'Sección de credenciales, about page',
    'mindfulness': 'Fondo sutil, sección de bienestar',
    'team-spirit': 'Servicios familiares, terapia grupal',
    'children': 'Servicios infantiles, página específica',
    'therapy': 'Página de servicios, call-to-action'
  };
  return recommendations[name] || 'Uso general';
}

// Ejecutar script
downloadIllustrations().catch(console.error);
