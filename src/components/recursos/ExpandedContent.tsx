import { forwardRef } from 'react';
import type { Collection, Resource } from '../../types/recursos';
import ResourceCard from './ResourceCard';

interface ExpandedContentProps {
  selectedCollection: string | null;
  expandingCollection: string | null;
  isClosing: boolean;
  collections: Collection[];
  onDownload: (resource: Resource) => void;
  onClose: () => void;
}

const ExpandedContent = forwardRef<HTMLDivElement, ExpandedContentProps>(({
  selectedCollection,
  expandingCollection,
  isClosing,
  collections,
  onDownload,
  onClose
}, ref) => {
  if (!selectedCollection) return null;

  const currentCollection = collections.find(c => c.id === selectedCollection);
  if (!currentCollection) return null;

  return (<div
    ref={ref} className={`mt-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 transition-all duration-700 ease-out transform-gpu overflow-hidden ${isClosing
        ? 'opacity-0 -translate-y-8 scale-95'
        : expandingCollection === selectedCollection
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
    style={{
      maxHeight: '80vh',
      animation: isClosing
        ? 'slide-out-to-top-smooth 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards'
        : expandingCollection === selectedCollection
          ? 'slide-in-from-top-8 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          : 'none'
    }}
  >
    <div className="p-6 md:p-8 h-full overflow-y-auto flex flex-col">        
      {/* Header de la colección expandida */}
      <div className="text-center mb-6 md:mb-8 flex-shrink-0">
        <div className="flex items-center justify-center mb-4">
          <div className={`text-5xl mr-4 transition-all duration-500 flex items-center justify-center ${isClosing
              ? 'opacity-0 scale-75 rotate-12'
              : expandingCollection === selectedCollection
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: isClosing ? '0ms' : '100ms' }}
          >
            {/* Changed from emoji string to React icon component */}
            <currentCollection.icon 
              className="text-gray-700"
              aria-label={`Icono de ${currentCollection.title}`}
            />
          </div>
          <h4 className={`text-2xl md:text-3xl font-bold text-gray-800 transition-all duration-500 ${isClosing
              ? 'opacity-0 translate-x-8'
              : expandingCollection === selectedCollection
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: isClosing ? '0ms' : '200ms' }}
          >
            {currentCollection.title}
          </h4>
        </div>
        <p className={`text-gray-600 text-lg max-w-3xl mx-auto transition-all duration-500 ${isClosing
            ? 'opacity-0 translate-y-4'
            : expandingCollection === selectedCollection
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isClosing ? '0ms' : '300ms' }}
        >
          Recursos especializados para esta colección
        </p>
      </div>
      {/* Contenedor scrolleable para recursos */}
      <div className="flex-1 overflow-y-auto max-h-115 py-2">
        {/* Grid de recursos - Mejorado para mostrar todos los recursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {currentCollection.resources.map((resource, resourceIndex) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              index={resourceIndex}
              isVisible={expandingCollection === selectedCollection}
              isClosing={isClosing}
              onDownload={onDownload}
            />
          ))}
        </div>
      </div>

      {/* Botón para cerrar - Siempre visible */}
      <div className="text-center mt-6 md:mt-8 flex-shrink-0">          <button
        onClick={onClose}
        className={`bg-gray-100 hover:bg-gray-500 text-gray-700 font-semibold py-3 px-8 rounded-full transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer ${isClosing
            ? 'opacity-0 translate-y-4 scale-90'
            : expandingCollection === selectedCollection
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-90'
          }`}
        style={{
          transitionDelay: isClosing
            ? '0ms'
            : `${600 + currentCollection.resources.length * 50}ms`
        }}
      >
        Ocultar colección
      </button>
      </div>
    </div>
  </div>
  );
});

ExpandedContent.displayName = 'ExpandedContent';

export default ExpandedContent;
