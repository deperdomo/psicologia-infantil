import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import SEOMeta from "../../components/SEOMeta";
import StructuredData from "../../components/StructuredData";
import { BibliotecaGrid } from "./BibliotecaGrid";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { IoBook, IoDownload } from 'react-icons/io5';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';

export default function Recursos() {
  const { slug, resourceId } = useParams<{ slug?: string; resourceId?: string }>();
  
  // Determinar título dinámico basado en la categoría o recurso
  let dynamicTitle = 'Biblioteca Emocional';
  let dynamicDescription = 'Explora nuestra biblioteca de recursos emocionales organizados por categorías.';
  
  if (resourceId) {
    dynamicTitle = 'Recurso - Biblioteca Emocional';
    dynamicDescription = 'Visualiza y descarga recursos terapéuticos específicos de nuestra biblioteca emocional.';
  } else if (slug) {
    dynamicTitle = `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Biblioteca Emocional`;
    dynamicDescription = `Recursos terapéuticos específicos para ${slug.split('-').join(' ')}. Materiales profesionales gratuitos.`;
  }
  
  usePageTitle({
    title: dynamicTitle,
    description: dynamicDescription
  });

  // Hooks para animaciones de scroll
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEOMeta 
        title={dynamicTitle}
        description={dynamicDescription}
        keywords={resourceId 
          ? "recurso psicología infantil, biblioteca emocional, descargar recurso"
          : slug 
            ? `recursos ${slug.split('-').join(' ')}, psicología infantil, ${slug.split('-').join(' ')} niños`
            : "recursos psicología infantil, biblioteca emocional, cartas terapéuticas"
        }
        url={resourceId
          ? slug 
            ? `https://piscologiainfantil.com/recursos/categoria/${slug}/${resourceId}`
            : `https://piscologiainfantil.com/recursos/${resourceId}`
          : slug 
            ? `https://piscologiainfantil.com/recursos/categoria/${slug}`
            : "https://piscologiainfantil.com/recursos"
        }
      />
      <StructuredData 
        type="website" 
        data={{
          name: dynamicTitle,
          description: dynamicDescription,
          url: resourceId
            ? slug 
              ? `https://piscologiainfantil.com/recursos/categoria/${slug}/${resourceId}`
              : `https://piscologiainfantil.com/recursos/${resourceId}`
            : slug 
              ? `https://piscologiainfantil.com/recursos/categoria/${slug}`
              : "https://piscologiainfantil.com/recursos"
        }}
      />
      
      <Navbar />
      
      {/* Hero Section Responsive */}
      {!slug && !resourceId && (
        <section 
          ref={heroRef}
          className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Imagen de fondo responsive */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('img/biblioteca/biblioteca-hero-2.webp')"
              }}
            />
            {/* Overlay con gradiente mejorado para móviles */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 sm:from-black/60 sm:via-black/40 sm:to-black/20"></div>
            {/* Overlay adicional con colores de marca */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-900/20 to-pink-900/20"></div>
          </div>

          {/* Elementos decorativos flotantes - responsivos */}
          <div className="absolute inset-0 z-10">
            {/* Elementos más pequeños en móviles */}
            <div className={`absolute top-10 right-4 sm:top-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-400/20 rounded-full blur-xl sm:blur-2xl transition-all duration-3000 ${
              heroVisible 
                ? 'opacity-100 scale-100 animate-pulse' 
                : 'opacity-0 scale-75'
            }`}></div>
            <div className={`absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-purple-400/20 rounded-full blur-xl sm:blur-2xl transition-all duration-3000 delay-700 ${
              heroVisible 
                ? 'opacity-100 scale-100 animate-pulse' 
                : 'opacity-0 scale-75'
            }`}></div>
            <div className={`absolute top-1/3 left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-pink-400/20 rounded-full blur-xl sm:blur-2xl transition-all duration-3000 delay-1400 ${
              heroVisible 
                ? 'opacity-100 scale-100 animate-pulse' 
                : 'opacity-0 scale-75'
            }`}></div>
          </div>

          {/* Contenido principal responsive */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              
              {/* Título principal responsive */}
              <div 
                ref={titleRef}
                className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1500 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
              >
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">                 
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight transition-all duration-1500 delay-500 ${
                    titleVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}>
                    <span className="text-white font-heading drop-shadow-2xl">Biblioteca</span>
                    <span className="text-transparent bg-clip-text font-heading bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 block drop-shadow-lg">
                      Emocional
                    </span>
                  </h1>
                  
                  <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto drop-shadow-lg transition-all duration-1500 delay-800 px-2 sm:px-0 ${
                    titleVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}>
                    Descubre nuestra colección completa de recursos terapéuticos organizados por categorías específicas. 
                    Cada recurso ha sido cuidadosamente seleccionado para acompañar el desarrollo emocional.
                  </p>
                </div>
              </div>

              {/* Estadísticas destacadas responsive */}
              <div 
                ref={statsRef}
                className={`max-w-6xl mx-auto transition-all duration-1500 delay-1200 ${
                  statsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  <div className="group">
                    <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IoBook className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg" />
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">200+</div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-200 font-medium">Recursos</div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <FaGraduationCap className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg" />
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">15</div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-200 font-medium">Categorías</div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <FaHeart className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg" />
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">100%</div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-200 font-medium">Gratuitos</div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IoDownload className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg" />
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">∞</div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-200 font-medium">Descargas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de scroll responsive */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className={`transition-all duration-2000 delay-2000 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contenedor principal responsive */}
      <div className={`px-3 sm:px-4 md:px-6 lg:px-8 ${!slug && !resourceId ? 'mb-16 sm:mb-20 md:mb-24 lg:mb-26' : 'py-4 sm:py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto mt-4 sm:mt-6 md:mt-8">
          {/* Componente BibliotecaGrid con datos de Supabase */}
          <BibliotecaGrid />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}