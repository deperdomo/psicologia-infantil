import type { Resource } from '../../types/recursos';

interface ResourceListItemProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
  isSubcategory?: boolean;
}

export default function ResourceListItem({ resource, onSelect, isSubcategory = false }: ResourceListItemProps) {
  const handleClick = () => {
    onSelect(resource);
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basico': return 'bg-green-100 text-green-700 border-green-200';
      case 'intermedio': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'avanzado': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group cursor-pointer transform transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 ${
        isSubcategory ? 'ml-4' : ''
      }`}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        {/* Header con gradiente horizontal */}
        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-1 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full -ml-6 -mb-6"></div>
        </div>

        {/* Contenido principal */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            {/* Icono del tipo de recurso */}
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 shadow-lg flex-shrink-0">
              <span className="text-2xl">{getResourceTypeIcon(resource.resourceType)}</span>
            </div>

            {/* Contenido del título y tiempo */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {resource.title}
                </h3>
                
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-bold text-green-700">{resource.estimatedTime}</span>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium border border-blue-200 hover:bg-blue-200 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
            {resource.tags.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{resource.tags.length - 4} más
              </span>
            )}
          </div>
          
          {/* Metadatos con iconos */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">{resource.ageRange.join(', ')} años</span>
              </div>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(resource.difficulty)}`}>
              {resource.difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
