import { supabase } from '../lib/supabase';

// Declaración de tipos para File System Access API
declare global {
  interface Window {
    showSaveFilePicker?: (options?: {
      suggestedName?: string;
      types?: Array<{
        description: string;
        accept: Record<string, string[]>;
      }>;
    }) => Promise<any>;
  }
}

/**
 * Descarga un archivo desde Supabase Storage
 * @param bucket - Nombre del bucket ('recursos-pdf' o 'recursos-word')
 * @param fileName - Nombre del archivo
 * @param displayName - Nombre para mostrar en la descarga
 */
export async function downloadFileFromSupabase(
  bucket: 'recursos-pdf' | 'recursos-word',
  fileName: string,
  displayName: string
): Promise<void> {
  try {
    console.log(`🔽 Iniciando descarga: ${fileName} desde bucket ${bucket}`);
    
    // Descargar el archivo desde Supabase
    const { data, error } = await supabase.storage
      .from(bucket)
      .download(fileName);

    if (error) {
      console.error('❌ Error al descargar:', error);
      throw new Error(`Error al descargar el archivo: ${error.message}`);
    }

    if (!data) {
      throw new Error('No se recibieron datos del archivo');
    }

    console.log(`📦 Archivo recibido, tamaño: ${data.size} bytes`);

    // Crear blob con tipo MIME apropiado
    const mimeType = bucket === 'recursos-pdf' 
      ? 'application/pdf' 
      : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    
    const blob = new Blob([data], { type: mimeType });
    
    // Intentar descarga principal
    const success = await attemptDownload(blob, displayName);
    
    if (!success) {
      // Fallback: abrir en nueva ventana
      console.log(`🔄 Método principal falló, usando fallback para: ${displayName}`);
      await attemptFallbackDownload(blob, displayName);
    }
    
    console.log(`✅ Descarga completada: ${displayName}`);
    
  } catch (error) {
    console.error('❌ Error en downloadFileFromSupabase:', error);
    throw error;
  }
}

/**
 * Intenta descargar usando el método principal
 */
async function attemptDownload(blob: Blob, displayName: string): Promise<boolean> {
  try {
    // Limpiar el nombre del archivo para evitar problemas
    const cleanFileName = displayName.replace(/[^a-zA-Z0-9.-\s]/g, '').trim();
    console.log(`💾 Preparando descarga: ${cleanFileName}`);
    
    // Verificar soporte para showSaveFilePicker (File System Access API)
    if (window.showSaveFilePicker) {
      try {
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: cleanFileName,
          types: [{
            description: 'PDF files',
            accept: {
              'application/pdf': ['.pdf']
            }
          }]
        });
        
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
        
        console.log(`✅ Descarga completada con File System API: ${cleanFileName}`);
        return true;
      } catch (error) {
        console.log('File System API cancelado o no disponible, usando método tradicional');
        // Continuar con método tradicional
      }
    }
    
    // Método tradicional con mejoras
    const url = window.URL.createObjectURL(blob);
    
    // Crear elemento de enlace optimizado
    const link = document.createElement('a');
    link.href = url;
    link.download = cleanFileName;
    link.style.display = 'none';
    
    // Configuraciones adicionales para forzar descarga
    link.setAttribute('download', cleanFileName);
    link.rel = 'noopener';
    
    // Agregar al DOM
    document.body.appendChild(link);
    
    // Simular click con evento personalizado
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    
    return new Promise((resolve) => {
      // Usar doble requestAnimationFrame para mejor compatibilidad
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            link.dispatchEvent(clickEvent);
            
            // Limpiar después de un delay
            setTimeout(() => {
              if (document.body.contains(link)) {
                document.body.removeChild(link);
              }
              window.URL.revokeObjectURL(url);
              console.log(`✅ Descarga iniciada: ${cleanFileName}`);
              resolve(true);
            }, 200);
          } catch (error) {
            console.error('Error en descarga tradicional:', error);
            window.URL.revokeObjectURL(url);
            if (document.body.contains(link)) {
              document.body.removeChild(link);
            }
            resolve(false);
          }
        });
      });
    });
    
  } catch (error) {
    console.error('Error en attemptDownload:', error);
    return false;
  }
}

/**
 * Método de fallback: abrir en nueva ventana
 */
async function attemptFallbackDownload(blob: Blob, displayName: string): Promise<void> {
  try {
    // Método 1: Intentar forzar descarga directa
    const url = window.URL.createObjectURL(blob);
    const cleanFileName = displayName.replace(/[^a-zA-Z0-9.-\s]/g, '').trim();
    
    // Crear enlace temporal con click forzado
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.download = cleanFileName;
    tempLink.style.position = 'fixed';
    tempLink.style.left = '-9999px';
    
    document.body.appendChild(tempLink);
    
    // Intentar múltiples métodos de activación
    try {
      // Método 1: Click directo
      tempLink.click();
      
      // Método 2: Evento de mouse
      const mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        button: 0
      });
      tempLink.dispatchEvent(mouseEvent);
      
      console.log(`📥 Descarga forzada iniciada: ${cleanFileName}`);
      
    } catch (clickError) {
      console.error('Click forzado falló:', clickError);
      
      // Método 3: Abrir en nueva ventana como último recurso
      const newWindow = window.open(url, '_blank');
      
      if (!newWindow) {
        // Si las pop-ups están bloqueadas, dar instrucciones al usuario
        throw new Error(`Las descargas automáticas están bloqueadas. 
        
Por favor:
1. Permite las descargas para este sitio
2. O haz clic derecho en el botón y selecciona "Guardar como..."

Archivo: ${cleanFileName}`);
      }
    }
    
    // Limpiar después de un delay más largo
    setTimeout(() => {
      if (document.body.contains(tempLink)) {
        document.body.removeChild(tempLink);
      }
      window.URL.revokeObjectURL(url);
    }, 3000);
    
  } catch (error) {
    console.error('Error en fallback download:', error);
    throw error;
  }
}

/**
 * Obtiene la URL de descarga directa para un archivo
 * @param bucket - Nombre del bucket
 * @param fileName - Nombre del archivo
 * @returns URL del archivo o null si hay error
 */
export function getFileUrl(bucket: 'recursos-pdf' | 'recursos-word', fileName: string): string | null {
  try {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);
    
    return data.publicUrl;
  } catch (error) {
    console.error('Error al obtener URL:', error);
    return null;
  }
}

/**
 * Extrae el nombre del archivo desde una URL de Supabase
 * @param url - URL completa del archivo
 * @returns Nombre del archivo o null
 */
export function extractFileNameFromUrl(url: string): string | null {
  try {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  } catch {
    return null;
  }
}
