import { useState } from 'react';
import type { Resource } from '../../types/recursos';
import { IoClose, IoDownload, IoTime, IoPersonOutline, IoPricetagsOutline, IoStar, IoDocumentText } from 'react-icons/io5';
import { getRelatedResources } from '../../data/bibliotecaEmocional';
import { downloadFileFromSupabase, extractFileNameFromUrl } from '../../utils/downloadUtils';

interface ResourceModalProps {
  resource: Resource;
  onClose: () => void;
}

export default function ResourceModal({ resource, onClose }: ResourceModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const relatedResources = getRelatedResources(resource.id);

  const handleDownload = async (format: 'word' | 'pdf') => {
    if (resource.type === 'premium') {
      // Aquí iría la lógica para verificar suscripción
      alert('Este recurso requiere suscripción premium');
      return;
    }

    const downloadUrl = format === 'word' ? resource.wordFileUrl : resource.pdfFileUrl;
    
    if (!downloadUrl) {
      alert(`Formato ${format.toUpperCase()} no disponible para este recurso`);
      return;
    }

    setIsDownloading(true);
    
    try {
      // Extraer nombre del archivo desde la URL
      const fileName = extractFileNameFromUrl(downloadUrl);
      if (!fileName) {
        throw new Error('No se pudo extraer el nombre del archivo');
      }

      // Generar nombre de descarga limpio
      const extension = format === 'word' ? 'docx' : 'pdf';
      const cleanTitle = resource.title
        .replace(/[^\w\s-]/g, '') // Remover caracteres especiales
        .replace(/\s+/g, ' ')     // Normalizar espacios
        .trim();
      const displayName = `${cleanTitle}.${extension}`;
      
      // Usar bucket apropiado
      const bucket = format === 'word' ? 'recursos-word' : 'recursos-pdf';
      
      console.log(`🚀 Iniciando descarga de ${displayName}...`);
      console.log(`📁 Archivo origen: ${fileName}`);
      
      // Descargar usando Supabase
      await downloadFileFromSupabase(bucket, fileName, displayName);
      
      console.log(`✅ Descarga exitosa: ${displayName}`);
      
      // Mostrar mensaje de éxito con instrucciones
      alert(`✅ ¡Descarga completada!

Archivo: ${displayName}

📍 Ubicación: 
- Revisa tu carpeta de Descargas
- O busca el archivo en el administrador de descargas de tu navegador (Ctrl+J)

💡 Si no aparece, verifica que las descargas automáticas estén habilitadas.`);
      
    } catch (error) {
      console.error('❌ Error al descargar:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      
      // Mensaje de error más informativo
      alert(`❌ Error al descargar el archivo:

${errorMessage}

🔧 Soluciones:
1. Verifica tu conexión a internet
2. Permite las descargas en la configuración del navegador
3. Desactiva temporalmente el bloqueador de pop-ups
4. Intenta nuevamente en unos segundos

Si el problema persiste, contacta con soporte técnico.`);
    } finally {
      setIsDownloading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basico': return 'bg-green-100 text-green-700';
      case 'intermedio': return 'bg-yellow-100 text-yellow-700';
      case 'avanzado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'carta': return '💌';
      case 'cuento': return '📖';
      case 'guia': return '📋';
      case 'ficha': return '📄';
      case 'libro': return '📚';
      case 'actividad': return '🎯';
      default: return '📄';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-[var(--border-light)]">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{getResourceTypeIcon(resource.resourceType)}</span>
              <h2 className="text-2xl font-bold text-[var(--text)]">{resource.title}</h2>
            </div>
            <p className="text-[var(--muted-text)]">{resource.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Metadatos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <IoTime className="w-5 h-5 text-[var(--primary)]" />
              <div>
                <p className="text-sm text-[var(--muted-text)]">Tiempo estimado</p>
                <p className="font-semibold text-[var(--text)]">{resource.estimatedTime}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <IoPersonOutline className="w-5 h-5 text-[var(--secondary)]" />
              <div>
                <p className="text-sm text-[var(--muted-text)]">Edades</p>
                <p className="font-semibold text-[var(--text)]">{resource.ageRange.join(', ')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <IoStar className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="text-sm text-[var(--muted-text)]">Dificultad</p>
                <span className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <IoPricetagsOutline className="w-5 h-5 text-[var(--highlight)]" />
              <div>
                <p className="text-sm text-[var(--muted-text)]">Acceso</p>
                <span className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
                  resource.type === 'gratuito' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {resource.type === 'gratuito' ? 'Gratuito' : 'Premium'}
                </span>
              </div>
            </div>
          </div>

          {/* Preview */}
          {resource.preview && (
            <div className="bg-[var(--primary)]/5 rounded-xl p-6 border border-[var(--primary)]/10">
              <h3 className="font-semibold text-[var(--text)] mb-3">Vista previa</h3>
              <p className="text-[var(--muted-text)] leading-relaxed">{resource.preview}</p>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="font-semibold text-[var(--text)] mb-3">Temas relacionados</h3>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Recursos relacionados */}
          {relatedResources.length > 0 && (
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-3">Recursos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedResources.map((related) => (
                  <div
                    key={related.id}
                    className="p-4 border border-[var(--border-light)] rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{getResourceTypeIcon(related.resourceType)}</span>
                      <div>
                        <h4 className="font-medium text-[var(--text)] mb-1">{related.title}</h4>
                        <p className="text-sm text-[var(--muted-text)] line-clamp-2">{related.description}</p>
                        <div className="flex gap-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            related.type === 'gratuito' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {related.type === 'gratuito' ? 'Gratuito' : 'Premium'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botones de descarga */}
          <div className="flex flex-col gap-4 pt-6 border-t border-[var(--border-light)]">
            <h3 className="text-center font-semibold text-[var(--text)]">Descargar recurso</h3>
            
            {/* Instrucciones de descarga */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">💡</span>
                <div>
                  <p className="font-medium mb-2">¿Cómo encontrar tu descarga?</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li><strong>Carpeta de Descargas:</strong> Busca el archivo en tu carpeta de Descargas predeterminada</li>
                    <li><strong>Historial del navegador:</strong> Presiona <kbd className="bg-blue-100 px-1 rounded">Ctrl+J</kbd> para ver descargas recientes</li>
                    <li><strong>Si no aparece:</strong> Permite las descargas automáticas en la configuración del navegador</li>
                    <li><strong>Nombre del archivo:</strong> Se descargará con el título del recurso + .pdf</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* Botón Word */}
              {resource.wordFileUrl && (
                <button
                  onClick={() => handleDownload('word')}
                  disabled={isDownloading}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    resource.type === 'gratuito'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <IoDocumentText className="w-5 h-5" />
                  {isDownloading ? 'Descargando...' : 'Word (.docx)'}
                </button>
              )}

              {/* Botón PDF */}
              {resource.pdfFileUrl && (
                <button
                  onClick={() => handleDownload('pdf')}
                  disabled={isDownloading}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    resource.type === 'gratuito'
                      ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                      : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <IoDownload className="w-5 h-5" />
                  {isDownloading ? 'Descargando...' : 'PDF (.pdf)'}
                </button>
              )}
            </div>

            {/* Fallback si no hay archivos disponibles */}
            {!resource.wordFileUrl && !resource.pdfFileUrl && (
              <div className="text-center text-[var(--muted-text)]">
                <p>Archivos no disponibles temporalmente</p>
              </div>
            )}
          </div>

          {/* Información adicional para recursos premium */}
          {resource.type === 'premium' && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-blue-800 text-sm">
                <strong>Recurso Premium:</strong> Este contenido está disponible para suscriptores. 
                <br />
                <a href="/suscripcion" className="underline hover:no-underline">
                  Conoce nuestros planes aquí
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
