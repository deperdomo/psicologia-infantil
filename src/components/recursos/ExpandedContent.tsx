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

  return (
    <div 
      ref={ref}
      className={`mt-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 overflow-hidden transition-all duration-700 ease-out transform-gpu ${
        isClosing 
          ? 'opacity-0 -translate-y-8 scale-95' 
          : expandingCollection === selectedCollection 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{
        minHeight: isClosing ? '400px' : 'auto',
        animation: isClosing 
          ? 'slide-out-to-top-smooth 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards'
          : expandingCollection === selectedCollection 
            ? 'slide-in-from-top-8 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' 
            : 'none'
      }}
    >
      <div className="p-8">
        {/* Header de la colección expandida */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`text-5xl mr-4 transition-all duration-500 ${
              isClosing 
                ? 'opacity-0 scale-75 rotate-12' 
                : expandingCollection === selectedCollection 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: isClosing ? '0ms' : '100ms' }}
            >
              {currentCollection.emoji}
            </div>
            <h4 className={`text-2xl md:text-3xl font-bold text-gray-800 transition-all duration-500 ${
              isClosing 
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
          <p className={`text-gray-600 text-lg max-w-3xl mx-auto transition-all duration-500 ${
            isClosing 
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
        
        {/* Grid de recursos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Botón para cerrar */}
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className={`bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-full transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg ${
              isClosing 
                ? 'opacity-0 translate-y-4 scale-90' 
                : expandingCollection === selectedCollection 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-90'
            }`}
            style={{ 
              transitionDelay: isClosing 
                ? '0ms' 
                : `${600 + currentCollection.resources.length * 100}ms`
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
