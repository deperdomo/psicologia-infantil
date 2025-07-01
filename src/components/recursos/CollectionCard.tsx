import type { Collection } from '../../types/recursos';

interface CollectionCardProps {
  collection: Collection;
  index: number;
  isVisible: boolean;
  selectedCollection: string | null;
  onExplore: (collectionId: string) => void;
}

export default function CollectionCard({ 
  collection, 
  index, 
  isVisible, 
  selectedCollection, 
  onExplore 
}: CollectionCardProps) {
  return (
    <div 
      className={`group transition-all duration-700 delay-${index * 100} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Collection Card */}
      <div className={`bg-gradient-to-br ${collection.color} rounded-2xl p-6 shadow-lg transition-all duration-500 border border-white/20 backdrop-blur-sm`}>
        <div className="text-center mb-6">
          <div className="text-4xl mb-3 flex justify-center">
            {/* Changed from emoji string to React icon component */}
            <collection.icon 
              className="text-gray-700"
              aria-label={`Icono de ${collection.title}`}
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {collection.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {collection.description}
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => onExplore(collection.id)}
            className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">
              {selectedCollection === collection.id ? 'Ocultar' : 'Explorar'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm font-medium text-gray-600">
            {collection.resources.length} recursos disponibles
          </span>
        </div>
      </div>
    </div>
  );
}
