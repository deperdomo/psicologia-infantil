import { useState, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { Collection, Resource } from '../../types/recursos';
import CollectionCard from './CollectionCard';
import ExpandedContent from './ExpandedContent';

interface CollectionsGridProps {
  collections: Collection[];
}

export default function CollectionsGrid({ collections }: CollectionsGridProps) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [expandingCollection, setExpandingCollection] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const expandedContentRef = useRef<HTMLDivElement>(null);

  const { elementRef: collectionsRef, isVisible: collectionsVisible } = useScrollAnimation<HTMLDivElement>();
  const handleExploreCollection = (collectionId: string) => {
    if (selectedCollection === collectionId) {
      // Si ya está expandido, iniciamos la animación de cierre suave
      setIsClosing(true);
      setExpandingCollection(null);
      
      // Después de la animación de salida, ocultamos completamente
      setTimeout(() => {
        setSelectedCollection(null);
        setIsClosing(false);
      }, 700); // Tiempo que dura la animación de salida
    } else if (selectedCollection && selectedCollection !== collectionId) {
      // Si hay otra colección abierta, hacemos una transición suave
      setIsClosing(true);
      setExpandingCollection(null);
      
      // Mantener la posición de scroll durante la transición
      const currentScrollY = window.scrollY;
      
      // Después de cerrar la anterior, abrimos la nueva sin cambio brusco
      setTimeout(() => {
        setSelectedCollection(collectionId);
        setIsClosing(false);
        
        // Restaurar la posición de scroll
        window.scrollTo({ top: currentScrollY, behavior: 'auto' });
        
        // Pequeño delay adicional para que se renderice antes de expandir
        setTimeout(() => {
          setExpandingCollection(collectionId);
          
          // Scroll automático en móvil hacia el contenido expandido
          setTimeout(() => {
            if (expandedContentRef.current) {
              const isMobile = window.innerWidth < 768;
              if (isMobile) {
                expandedContentRef.current.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
              } else {
                // En desktop, solo hacer scroll si no es visible
                const rect = expandedContentRef.current.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                
                if (!isVisible) {
                  expandedContentRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                  });
                }
              }
            }
          }, 200);
        }, 100);
      }, 350); // La mitad del tiempo de cierre para solapar animaciones
    } else {
      // Si no hay nada abierto, expandimos normalmente
      setIsClosing(false);
      setSelectedCollection(collectionId);
      // Pequeño delay para que se renderice el elemento antes de animarlo
      setTimeout(() => {
        setExpandingCollection(collectionId);
        
        // Scroll automático en móvil hacia el contenido expandido
        setTimeout(() => {
          if (expandedContentRef.current) {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
              expandedContentRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }
          }
        }, 200);
      }, 50);
    }
  };

  const handleDownload = (resource: Resource) => {
    if (resource.type === 'gratuito' && resource.downloadUrl) {
      // Aquí iría la lógica de descarga gratuita
      window.open(resource.downloadUrl, '_blank');
    } else if (resource.type === 'premium') {
      // Aquí iría la lógica para material premium
      alert('Este recurso está disponible en nuestro plan premium. ¡Contáctanos para más información!');
    }
  };

  const handleCloseCollection = () => {
    if (selectedCollection) {
      handleExploreCollection(selectedCollection);
    }
  };

  return (
    <section 
      ref={collectionsRef}
      className="pb-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`mb-12 transition-all duration-1000 ${
            collectionsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] text-center mb-4">
            📦 Colecciones Destacadas
          </h2>
          <p className="text-lg text-[var(--text)]/70 text-center max-w-2xl mx-auto">
            Explora nuestras colecciones temáticas diseñadas para diferentes necesidades emocionales y situaciones familiares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
              isVisible={collectionsVisible}
              selectedCollection={selectedCollection}
              onExplore={handleExploreCollection}
            />
          ))}
        </div>

        <ExpandedContent
          ref={expandedContentRef}
          selectedCollection={selectedCollection}
          expandingCollection={expandingCollection}
          isClosing={isClosing}
          collections={collections}
          onDownload={handleDownload}
          onClose={handleCloseCollection}
        />
      </div>
    </section>
  );
}
