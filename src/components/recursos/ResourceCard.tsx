import type { Resource } from '../../types/recursos';

interface ResourceCardProps {
  resource: Resource & {
    categoryTitle: string;
    categoryId: string;
    subcategoryTitle?: string;
    subcategoryId?: string;
  };
  onSelect: (resource: Resource) => void;
  viewMode?: 'grid' | 'list';
}

export default function ResourceCard({ resource, onSelect, viewMode = 'grid' }: ResourceCardProps) {
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

  const cardClasses = viewMode === 'grid' 
    ? "group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
    : "group cursor-pointer transform transition-all duration-300 hover:scale-[1.01]";

  return (
    <div onClick={handleClick} className={cardClasses}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200">
        {/* Header simplificado sin gradiente */}
        <div className="bg-gray-50 p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <span className="text-lg">{getResourceTypeIcon(resource.resourceType)}</span>
              </div>
              <span className="text-xs text-gray-600 font-medium bg-gray-200 px-2 py-1 rounded-full">
                {resource.categoryTitle}
              </span>
            </div>
            
            <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(resource.difficulty)}`}>
              {resource.difficulty}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {resource.title}
          </h3>
        </div>

        {/* Contenido principal */}
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
            {resource.description}
          </p>
          
          {/* Tags compactos */}
          <div className="flex flex-wrap gap-1 mb-3">
            {resource.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100"
              >
                {tag}
              </span>
            ))}
            {resource.tags.length > 2 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium">
                +{resource.tags.length - 2}
              </span>
            )}
          </div>
          
          {/* Metadatos en footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">{resource.estimatedTime}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">{resource.ageRange.join(', ')}</span>
            </div>
            
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
