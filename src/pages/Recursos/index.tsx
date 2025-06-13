import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'gratuito' | 'premium';
  downloadUrl?: string;
}

interface Collection {
  id: string;
  title: string;
  emoji: string;
  description: string;
  resources: Resource[];
  color: string;
}

export default function Recursos() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [expandingCollection, setExpandingCollection] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Hooks de animación para diferentes secciones
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: collectionsRef, isVisible: collectionsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const collections: Collection[] = [
    {
      id: 'dos-casas',
      title: 'Dos casas, un corazón',
      emoji: '🏠',
      description: 'Recursos para ayudar a los niños a navegar la separación y el divorcio de sus padres.',
      color: 'from-pink-100 to-rose-200',
      resources: [
        {
          id: 'guia-padres-separados',
          title: 'Guía para padres separados',
          description: 'Cómo comunicar la separación a los niños de manera saludable.',
          type: 'gratuito',
          downloadUrl: '/downloads/guia-padres-separados.pdf'
        },
        {
          id: 'cuento-dos-casas',
          title: 'Cuento: "Mi corazón en dos lugares"',
          description: 'Historia ilustrada para explicar a los niños la nueva dinámica familiar.',
          type: 'premium'
        },
        {
          id: 'actividades-emociones',
          title: 'Actividades para procesar emociones',
          description: 'Ejercicios prácticos para ayudar a los niños a expresar sus sentimientos.',
          type: 'gratuito',
          downloadUrl: '/downloads/actividades-emociones.pdf'
        },
        {
          id: 'protocolo-transiciones',
          title: 'Protocolo de transiciones suaves',
          description: 'Estrategias para facilitar los cambios entre casas.',
          type: 'premium'
        }
      ]
    },
    {
      id: 'semillas-autoestima',
      title: 'Semillas de autoestima',
      emoji: '🌱',
      description: 'Herramientas para cultivar la confianza y el amor propio en los niños.',
      color: 'from-green-100 to-emerald-200',
      resources: [
        {
          id: 'diario-logros',
          title: 'Diario de logros personales',
          description: 'Plantilla para que los niños registren sus éxitos diarios.',
          type: 'gratuito',
          downloadUrl: '/downloads/diario-logros.pdf'
        },
        {
          id: 'afirmaciones-positivas',
          title: 'Tarjetas de afirmaciones positivas',
          description: 'Colección de frases motivadoras adaptadas para niños.',
          type: 'gratuito',
          downloadUrl: '/downloads/afirmaciones-positivas.pdf'
        },
        {
          id: 'juego-cualidades',
          title: 'Juego: "Mis súper poderes"',
          description: 'Actividad lúdica para identificar fortalezas personales.',
          type: 'premium'
        },
        {
          id: 'manual-padres-autoestima',
          title: 'Manual para padres: Fomentando la autoestima',
          description: 'Guía completa con estrategias basadas en evidencia.',
          type: 'premium'
        },
        {
          id: 'rituales-confianza',
          title: 'Rituales de confianza familiar',
          description: 'Actividades para fortalecer vínculos y seguridad emocional.',
          type: 'premium'
        }
      ]
    },
    {
      id: 'corazon-enojado',
      title: 'Cuando se enoja mi corazón',
      emoji: '❤️‍🔥',
      description: 'Recursos para manejar la ira y las emociones intensas en los niños.',
      color: 'from-orange-100 to-red-200',
      resources: [
        {
          id: 'termometro-emociones',
          title: 'Termómetro de emociones',
          description: 'Herramienta visual para identificar niveles de ira.',
          type: 'gratuito',
          downloadUrl: '/downloads/termometro-emociones.pdf'
        },
        {
          id: 'tecnicas-respiracion',
          title: 'Técnicas de respiración para niños',
          description: 'Ejercicios simples de autorregulación emocional.',
          type: 'gratuito',
          downloadUrl: '/downloads/tecnicas-respiracion.pdf'
        },
        {
          id: 'caja-calma',
          title: 'Kit: "Mi caja de la calma"',
          description: 'Guía para crear un espacio de autorregulación personalizado.',
          type: 'premium'
        },
        {
          id: 'estrategias-padres-berrinches',
          title: 'Estrategias para padres: Manejo de berrinches',
          description: 'Protocolo paso a paso para acompañar episodios de ira.',
          type: 'premium'
        },
        {
          id: 'juego-monstruo-ira',
          title: 'Juego: "Domando al monstruo de la ira"',
          description: 'Actividad terapéutica para externalizar y manejar la ira.',
          type: 'premium'
        },
        {
          id: 'cuento-dragon-furioso',
          title: 'Cuento: "El dragón furioso"',
          description: 'Historia que enseña técnicas de manejo emocional.',
          type: 'premium'
        }
      ]
    }
  ];  const handleExploreCollection = (collectionId: string) => {
    if (selectedCollection === collectionId) {
      // Si ya está expandido, iniciamos la animación de cierre suave
      setIsClosing(true);
      setExpandingCollection(null);
      
      // Después de la animación de salida, ocultamos completamente
      setTimeout(() => {
        setSelectedCollection(null);
        setIsClosing(false);
      }, 700); // Tiempo que dura la animación de salida
    } else {
      // Si no está expandido o es diferente, lo expandimos
      setIsClosing(false);
      setSelectedCollection(collectionId);
      // Pequeño delay para que se renderice el elemento antes de animarlo
      setTimeout(() => {
        setExpandingCollection(collectionId);
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] relative overflow-hidden">
      <Navbar />

      {/* Background effects */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--highlight)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--secondary)]/15 rounded-full blur-2xl animate-pulse-soft"></div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-24 pb-16 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div 
              ref={titleRef}
              className={`transition-all duration-1000 ${
                titleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-6 leading-tight">
                Biblioteca 
                <span className={`block text-[var(--highlight)] mt-2 transition-all duration-1000 delay-300 ${
                  titleVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}>
                  Emocional
                </span>
              </h1>
            </div>
            <div 
              ref={subtitleRef}
              className={`transition-all duration-1000 delay-500 ${
                subtitleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xl md:text-2xl text-[var(--text)]/80 max-w-4xl mx-auto leading-relaxed">
                Un espacio cuidadosamente curado con recursos, herramientas y guías 
                para acompañar el desarrollo emocional de los niños y sus familias.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Collections Grid */}
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
          </div>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={collection.id} 
                className={`group transition-all duration-700 delay-${index * 100} ${
                  collectionsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Collection Card */}
                <div className={`bg-gradient-to-br ${collection.color} rounded-2xl p-6 shadow-lg transition-all duration-500 border border-white/20 backdrop-blur-sm`}>
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">
                      {collection.emoji}
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
                      onClick={() => handleExploreCollection(collection.id)}
                      className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg relative overflow-hidden group"
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
            ))}
          </div>          {/* Resources Expanded View - Ocupando las 3 columnas completas */}
          {selectedCollection && (
            <div 
              className={`mt-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 overflow-hidden transition-all duration-700 ease-out transform-gpu ${
                isClosing 
                  ? 'opacity-0 -translate-y-8 scale-95' 
                  : expandingCollection === selectedCollection 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                animation: isClosing 
                  ? 'slide-out-to-top 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards'
                  : expandingCollection === selectedCollection 
                    ? 'slide-in-from-top-8 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' 
                    : 'none'
              }}
            >
              <div className="p-8">                {/* Header de la colección expandida */}
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
                      {collections.find(c => c.id === selectedCollection)?.emoji}
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
                      {collections.find(c => c.id === selectedCollection)?.title}
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
                  {/* Grid de recursos - Optimizado para 3 columnas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collections.find(c => c.id === selectedCollection)?.resources.map((resource, resourceIndex) => (
                    <div
                      key={resource.id}
                      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-600 ${
                        isClosing 
                          ? 'opacity-0 translate-y-8 scale-95' 
                          : expandingCollection === selectedCollection 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-6 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: isClosing 
                          ? `${resourceIndex * 50}ms` 
                          : `${400 + resourceIndex * 100}ms`,
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
                        onClick={() => handleDownload(resource)}
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
                  ))}
                </div>                {/* Botón para cerrar */}
                <div className="text-center mt-8">
                  <button
                    onClick={() => handleExploreCollection(selectedCollection)}
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
                        : `${600 + (collections.find(c => c.id === selectedCollection)?.resources.length || 0) * 100}ms`
                    }}
                  >
                    Ocultar colección
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>      {/* Newsletter CTA */}
      <section 
        ref={ctaRef}
        className="pb-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 text-center relative overflow-hidden transition-all duration-1000 ${
              ctaVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative z-10">
              <div className="mb-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  ¿Quieres acceso a más recursos?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Suscríbete a nuestro boletín y recibe recursos gratuitos cada mes, 
                  además de acceso anticipado a nuevas colecciones.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--highlight)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]/20 transition-all duration-300"
                />
                <button className="bg-[var(--highlight)] hover:bg-[var(--highlight)]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                  <span className="relative z-10">Suscribirme</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Floating benefits */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <span>✅</span>
                  <span>Recursos gratuitos</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🎯</span>
                  <span>Contenido exclusivo</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>⚡</span>
                  <span>Acceso anticipado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}