import { useState } from 'react';
import type { Resource } from '../../types/recursos';
import { IoClose, IoDownload, IoTime, IoPersonOutline, IoStar, IoDocumentText } from 'react-icons/io5';
import { downloadFileFromSupabase } from '../../utils/downloadUtils';

interface ResourceModalProps {
  resource: Resource;
  onClose: () => void;
}

export default function ResourceModal({ resource, onClose }: ResourceModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (format: 'word' | 'pdf') => {
    const downloadUrl = format === 'word' ? resource.wordFileUrl : resource.pdfFileUrl;
    
    if (!downloadUrl) {
      alert(`Formato ${format.toUpperCase()} no disponible para este recurso`);
      return;
    }

    setIsDownloading(true);
    
    try {
      // Usar storage_path directamente en lugar de extraer de la URL
      const storagePath = format === 'word' ? resource.wordStoragePath : resource.pdfStoragePath;
      
      if (!storagePath) {
        throw new Error('No se encontró la ruta del archivo en el storage');
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
      console.log(`📁 Storage Path: ${storagePath}`);
      
      // Descargar usando Supabase con storage_path correcto
      await downloadFileFromSupabase(bucket, storagePath, displayName);
      
      console.log(`✅ Descarga exitosa: ${displayName}`);
      
    } catch (error) {
      console.error('❌ Error al descargar:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      
      // Solo mostrar alert en caso de error
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
      <div className="bg-white/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-100 shadow-2xl">
        {/* Header con gradiente */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden rounded-t-3xl">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative flex justify-between items-start">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">{getResourceTypeIcon(resource.resourceType)}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{resource.title}</h2>
                  <p className="text-white/90 text-lg leading-relaxed">{resource.description}</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
            >
              <IoClose className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Metadatos con cards glassmorphism */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <IoTime className="w-5 h-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium mb-1">Tiempo estimado</p>
              <p className="font-bold text-gray-900 text-lg">{resource.estimatedTime}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <IoPersonOutline className="w-5 h-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium mb-1">Edades</p>
              <p className="font-bold text-gray-900 text-lg">{resource.ageRange.join(', ')}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <IoStar className="w-5 h-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium mb-1">Dificultad</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold border ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <IoDocumentText className="w-5 h-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium mb-1">Tipo</p>
              <p className="font-bold text-gray-900 text-lg capitalize">{resource.resourceType}</p>
            </div>
          </div>

          {/* Preview */}
          {resource.preview && (
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <h3 className="font-bold text-gray-900 text-xl">Vista previa</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">{resource.preview}</p>
            </div>
          )}

          {/* Tags */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
              <h3 className="font-bold text-gray-900 text-xl">Temas relacionados</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-200 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Botones de descarga */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <h3 className="font-bold text-gray-900 text-xl">Descargar recurso</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botón Word */}
              {resource.wordFileUrl && (
                <button
                  onClick={() => handleDownload('word')}
                  disabled={isDownloading}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <IoDocumentText className="w-5 h-5" />
                  </div>
                  {isDownloading ? 'Descargando...' : 'Word (.docx)'}
                </button>
              )}

              {/* Botón PDF */}
              {resource.pdfFileUrl && (
                <button
                  onClick={() => handleDownload('pdf')}
                  disabled={isDownloading}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <IoDownload className="w-5 h-5" />
                  </div>
                  {isDownloading ? 'Descargando...' : 'PDF (.pdf)'}
                </button>
              )}
            </div>

            {/* Fallback si no hay archivos disponibles */}
            {!resource.wordFileUrl && !resource.pdfFileUrl && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoDocumentText className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 font-medium">Archivos no disponibles temporalmente</p>
                <p className="text-gray-500 text-sm mt-2">Por favor, inténtalo más tarde</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
