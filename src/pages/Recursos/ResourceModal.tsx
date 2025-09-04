import { useState } from 'react';
import type { Resource } from '../../types/recursos';
import { IoClose, IoDownload, IoTime, IoPersonOutline, IoStar, IoDocumentText } from 'react-icons/io5';
import { downloadFileFromSupabase } from '../../utils/downloadUtils';

interface ResourceModalProps {
  resource: Resource;
  onClose: () => void;
}

export default function ResourceModal({ resource, onClose }: ResourceModalProps) {
  const [downloadingFormat, setDownloadingFormat] = useState<'word' | 'pdf' | null>(null);

  const handleDownload = async (format: 'word' | 'pdf') => {
    const downloadUrl = format === 'word' ? resource.wordFileUrl : resource.pdfFileUrl;
    
    if (!downloadUrl) {
      alert(`Formato ${format.toUpperCase()} no disponible para este recurso`);
      return;
    }

    // Evitar múltiples descargas simultáneas
    if (downloadingFormat) {
      return;
    }

    setDownloadingFormat(format);
    
    try {
      // Usar storage_path directamente en lugar de extraer de la URL
      const storagePath = format === 'word' ? resource.wordStoragePath : resource.pdfStoragePath;
      
      if (!storagePath) {
        throw new Error('No se encontró la ruta del archivo en el storage');
      }

      // Generar nombre de descarga preservando caracteres especiales
      const extension = format === 'word' ? 'docx' : 'pdf';
      const cleanTitle = resource.title
        .replace(/[<>:"/\\|?*]/g, '') // Solo remover caracteres inválidos para nombres de archivo
        .replace(/\s+/g, ' ')          // Normalizar espacios múltiples
        .trim();
      const displayName = `${cleanTitle}.${extension}`;
      
      // Usar bucket apropiado
      const bucket = format === 'word' ? 'recursos-word' : 'recursos-pdf';
      
      console.log(`🚀 Iniciando descarga de ${displayName}...`);
      console.log(`📁 Storage Path: ${storagePath}`);
      
      // Descargar usando Supabase con storage_path correcto
      await downloadFileFromSupabase(bucket, storagePath, displayName);
      
      console.log(`✅ Descarga exitosa: ${displayName}`);
      
    } catch (error) {
      console.error('❌ Error al descargar:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      
      // Verificar si fue cancelado por el usuario
      if (errorMessage.includes('AbortError') || errorMessage.includes('canceled') || errorMessage.includes('cancelled')) {
        console.log('📋 Descarga cancelada por el usuario');
        return; // No mostrar error si fue cancelación
      }
      
      // Solo mostrar alert en caso de error real (no cancelación)
      alert(`❌ Error al descargar el archivo:

${errorMessage}

🔧 Soluciones:
1. Verifica tu conexión a internet
2. Permite las descargas en la configuración del navegador
3. Desactiva temporalmente el bloqueador de pop-ups
4. Intenta nuevamente en unos segundos

Si el problema persiste, contacta con soporte técnico.`);
    } finally {
      setDownloadingFormat(null);
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-6xl max-h-[95vh] sm:max-h-[85vh] border border-gray-100 shadow-2xl overflow-hidden flex flex-col">
        {/* Header ultra compacto */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-5 relative flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-xl">{getResourceTypeIcon(resource.resourceType)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl ml-1 font-bold text-white">{resource.title}</h2>  
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all flex-shrink-0"
            >
              <IoClose className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Contenido responsive */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 min-h-full">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-3 flex flex-col order-2 lg:order-1">
              {/* Metadatos compactos */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50">
                <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Información
                </h3>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <IoTime className="w-3 h-3 text-blue-600" />
                      <span className="text-gray-600 font-medium">Tiempo</span>
                    </div>
                    <span className="font-bold text-gray-900">{resource.estimatedTime}</span>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <IoPersonOutline className="w-3 h-3 text-purple-600" />
                      <span className="text-gray-600 font-medium">Edades</span>
                    </div>
                    <span className="font-bold text-gray-900">{resource.ageRange.join(', ')}</span>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <IoStar className="w-3 h-3 text-orange-600" />
                      <span className="text-gray-600 font-medium">Dificultad</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <IoDocumentText className="w-3 h-3 text-green-600" />
                      <span className="text-gray-600 font-medium">Tipo</span>
                    </div>
                    <span className="font-bold text-gray-900 capitalize">{resource.resourceType}</span>
                  </div>
                </div>
              </div>

              {/* Vista previa */}
              {resource.preview && (
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 flex-1 lg:min-h-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Vista previa
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-3 max-h-32 lg:h-full overflow-y-auto">
                    <p className="text-gray-700 text-sm leading-relaxed">{resource.preview}</p>
                  </div>
                </div>
              )}

              {/* Tags compactos */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50">
                <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Temas ({resource.tags.length})
                </h3>
                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="flex flex-col order-1 lg:order-2">
              {/* Sección de descarga principal */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-blue-200 flex-1 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IoDownload className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">Descargar Recurso</h3>
                  <p className="text-gray-600 text-sm mb-4 sm:mb-6">Selecciona el formato que prefieras</p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* Botones de descarga */}
                    {resource.wordFileUrl && (
                      <button
                        onClick={() => handleDownload('word')}
                        disabled={downloadingFormat === 'word'}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-base sm:text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <IoDocumentText className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="truncate">{downloadingFormat === 'word' ? 'Descargando...' : 'Descargar Word (.docx)'}</span>
                      </button>
                    )}

                    {resource.pdfFileUrl && (
                      <button
                        onClick={() => handleDownload('pdf')}
                        disabled={downloadingFormat === 'pdf'}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold text-base sm:text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <IoDownload className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="truncate">{downloadingFormat === 'pdf' ? 'Descargando...' : 'Descargar PDF (.pdf)'}</span>
                      </button>
                    )}

                    {/* Estado sin archivos */}
                    {!resource.wordFileUrl && !resource.pdfFileUrl && (
                      <div className="text-center py-6 sm:py-8">
                        <IoDocumentText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
                        <p className="text-gray-600 font-medium text-base sm:text-lg">Archivos no disponibles</p>
                        <p className="text-gray-500 text-sm">Inténtalo más tarde</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
