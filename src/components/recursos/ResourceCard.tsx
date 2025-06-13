import type { Resource } from '../../types/recursos';

interface ResourceCardProps {
  resource: Resource;
  index: number;
  isVisible: boolean;
  isClosing: boolean;
  onDownload: (resource: Resource) => void;
}

export default function ResourceCard({ 
  resource, 
  index, 
  isVisible, 
  isClosing, 
  onDownload 
}: ResourceCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-600 ${
        isClosing 
          ? 'opacity-0 translate-y-8 scale-95' 
          : isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-6 scale-95'
      }`}
      style={{ 
        transitionDelay: isClosing 
          ? `${index * 50}ms` 
          : `${400 + index * 100}ms`,
        transitionDuration: '600ms'
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h5 className="font-semibold text-gray-800 flex-1 text-lg">
          {resource.title}
        </h5>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ml-3 ${
          resource.type === 'gratuito' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-amber-100 text-amber-800'
        }`}>
          {resource.type === 'gratuito' ? '✨ Gratuito' : '💎 Premium'}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {resource.description}
      </p>
      <button
        onClick={() => onDownload(resource)}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md relative overflow-hidden group ${
          resource.type === 'gratuito'
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-amber-500 hover:bg-amber-600 text-white'
        }`}
      >
        <span className="relative z-10">
          {resource.type === 'gratuito' ? 'Descargar gratis' : 'Ver detalles'}
        </span>
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>
    </div>
  );
}
