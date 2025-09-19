import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const PUBLIC_DIR = 'public';
const SRC_DIR = 'src';

// Configuración de calidad para WebP
const WEBP_QUALITY = 90; // Alta calidad para mantener calidad visual

/**
 * Convierte una imagen a formato WebP manteniendo la estructura de carpetas
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: WEBP_QUALITY, effort: 6 })
            .toFile(outputPath);
        
        console.log(`✅ Convertido: ${inputPath} → ${outputPath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
        return false;
    }
}

/**
 * Encuentra todas las imágenes en la carpeta public
 */
async function findImages() {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
    const patterns = imageExtensions.map(ext => `${PUBLIC_DIR}/**/*.${ext}`);
    
    const images = [];
    for (const pattern of patterns) {
        const matches = await glob(pattern, { ignore: ['**/node_modules/**'] });
        images.push(...matches);
    }
    
    return images;
}

/**
 * Convierte todas las imágenes a WebP
 */
async function convertAllImages() {
    console.log('🚀 Iniciando conversión de imágenes a WebP...\n');
    
    const images = await findImages();
    console.log(`📸 Encontradas ${images.length} imágenes para convertir\n`);
    
    const conversions = [];
    
    for (const imagePath of images) {
        const ext = path.extname(imagePath);
        const outputPath = imagePath.replace(ext, '.webp');
        
        conversions.push({
            original: imagePath,
            webp: outputPath
        });
        
        await convertToWebP(imagePath, outputPath);
    }
    
    return conversions;
}

/**
 * Encuentra todas las referencias a imágenes en el código
 */
async function findImageReferences() {
    const codeFiles = await glob([
        `${SRC_DIR}/**/*.{ts,tsx,js,jsx}`,
        'index.html',
        `${SRC_DIR}/**/*.css`
    ]);
    
    const references = [];
    
    for (const file of codeFiles) {
        try {
            const content = fs.readFileSync(file, 'utf8');
            const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
            
            for (const ext of imageExtensions) {
                // Buscar referencias como: src="...", import "...", url("...")
                const patterns = [
                    new RegExp(`(src=["'])([^"']*\\.${ext})["']`, 'gi'),
                    new RegExp(`(import\\s+.*?["'])([^"']*\\.${ext})["']`, 'gi'),
                    new RegExp(`(url\\(["']?)([^"')]*\\.${ext})[)"']`, 'gi'),
                    new RegExp(`(["'])([^"']*\\.${ext})["']`, 'gi')
                ];
                
                for (const pattern of patterns) {
                    let match;
                    while ((match = pattern.exec(content)) !== null) {
                        references.push({
                            file: file,
                            match: match[0],
                            imagePath: match[2],
                            startIndex: match.index,
                            prefix: match[1],
                            originalExt: ext
                        });
                    }
                }
            }
        } catch (error) {
            console.error(`❌ Error leyendo ${file}:`, error.message);
        }
    }
    
    return references;
}

/**
 * Actualiza las referencias en el código para usar archivos .webp
 */
async function updateImageReferences(conversions) {
    console.log('\n🔄 Actualizando referencias en el código...\n');
    
    const references = await findImageReferences();
    const fileUpdates = new Map();
    
    // Crear un mapa de conversiones para búsqueda rápida
    const conversionMap = new Map();
    conversions.forEach(conv => {
        const relativePath = conv.original.replace(/\\/g, '/');
        const webpPath = conv.webp.replace(/\\/g, '/');
        conversionMap.set(relativePath, webpPath);
    });
    
    // Agrupar cambios por archivo
    references.forEach(ref => {
        const normalizedPath = ref.imagePath.replace(/\\/g, '/');
        
        // Buscar si esta imagen fue convertida
        for (const [originalPath, webpPath] of conversionMap.entries()) {
            if (originalPath.includes(normalizedPath) || normalizedPath.includes(originalPath.replace('public/', ''))) {
                const newImagePath = normalizedPath.replace(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i, '.webp');
                const newMatch = ref.match.replace(ref.imagePath, newImagePath);
                
                if (!fileUpdates.has(ref.file)) {
                    fileUpdates.set(ref.file, []);
                }
                
                fileUpdates.get(ref.file).push({
                    original: ref.match,
                    replacement: newMatch,
                    startIndex: ref.startIndex
                });
                break;
            }
        }
    });
    
    // Aplicar cambios archivo por archivo
    for (const [file, updates] of fileUpdates.entries()) {
        try {
            let content = fs.readFileSync(file, 'utf8');
            
            // Ordenar por índice descendente para no afectar las posiciones
            updates.sort((a, b) => b.startIndex - a.startIndex);
            
            for (const update of updates) {
                content = content.replace(update.original, update.replacement);
            }
            
            fs.writeFileSync(file, content, 'utf8');
            console.log(`✅ Actualizado: ${file} (${updates.length} referencias)`);
        } catch (error) {
            console.error(`❌ Error actualizando ${file}:`, error.message);
        }
    }
    
    return fileUpdates.size;
}

/**
 * Elimina los archivos originales después de la conversión exitosa
 */
async function cleanupOriginalFiles(conversions) {
    console.log('\n🗑️  Eliminando archivos originales...\n');
    
    for (const conversion of conversions) {
        try {
            if (fs.existsSync(conversion.webp)) {
                fs.unlinkSync(conversion.original);
                console.log(`🗑️  Eliminado: ${conversion.original}`);
            }
        } catch (error) {
            console.error(`❌ Error eliminando ${conversion.original}:`, error.message);
        }
    }
}

/**
 * Función principal
 */
async function main() {
    try {
        console.log('🎨 OPTIMIZADOR DE IMÁGENES A WEBP\n');
        console.log('================================\n');
        
        // Paso 1: Convertir imágenes
        const conversions = await convertAllImages();
        
        if (conversions.length === 0) {
            console.log('ℹ️  No se encontraron imágenes para convertir.');
            return;
        }
        
        // Paso 2: Actualizar referencias en el código
        const updatedFiles = await updateImageReferences(conversions);
        
        // Paso 3: Limpiar archivos originales
        await cleanupOriginalFiles(conversions);
        
        console.log('\n✨ PROCESO COMPLETADO ✨');
        console.log('========================');
        console.log(`📸 Imágenes convertidas: ${conversions.length}`);
        console.log(`📝 Archivos actualizados: ${updatedFiles}`);
        console.log(`💾 Formato: WebP (calidad ${WEBP_QUALITY}%)`);
        console.log('\n🎉 ¡Todas las imágenes han sido optimizadas exitosamente!');
        
    } catch (error) {
        console.error('❌ Error en el proceso de optimización:', error.message);
        process.exit(1);
    }
}

// Ejecutar si es llamado directamente
main().catch(console.error);

export { convertAllImages, updateImageReferences, findImages, findImageReferences };