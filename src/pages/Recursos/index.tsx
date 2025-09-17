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
  const { slug } = useParams<{ slug?: string }>();
  
  // Determinar título dinámico basado en la categoría
  const dynamicTitle = slug 
    ? `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Biblioteca Emocional`
    : 'Biblioteca Emocional';
  
  const dynamicDescription = slug
    ? `Recursos terapéuticos específicos para ${slug.split('-').join(' ')}. Materiales profesionales gratuitos.`
    : 'Explora nuestra biblioteca de recursos emocionales organizados por categorías.';
  
  usePageTitle({
    title: dynamicTitle,
    description: dynamicDescription
  });

  // Hooks para animaciones de scroll
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: illustrationRef, isVisible: illustrationVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEOMeta 
        title={dynamicTitle}
        description={dynamicDescription}
        keywords={slug 
          ? `recursos ${slug.split('-').join(' ')}, psicología infantil, ${slug.split('-').join(' ')} niños`
          : "recursos psicología infantil, biblioteca emocional, cartas terapéuticas"
        }
        url={slug 
          ? `https://piscologiainfantil.com/recursos/categoria/${slug}`
          : "https://piscologiainfantil.com/recursos"
        }
      />
      <StructuredData 
        type="website" 
        data={{
          name: dynamicTitle,
          description: dynamicDescription,
          url: slug 
            ? `https://piscologiainfantil.com/recursos/categoria/${slug}`
            : "https://piscologiainfantil.com/recursos"
        }}
      />
      
      <Navbar />
      
      {/* Hero Section Modernizado */}
      <section 
        ref={heroRef}
        className="relative py-24 lg:py-32 overflow-hidden"
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl transition-all duration-2000 ${
            heroVisible 
              ? 'opacity-100 scale-100 animate-pulse' 
              : 'opacity-0 scale-75'
          }`}></div>
          <div className={`absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl transition-all duration-2000 delay-500 ${
            heroVisible 
              ? 'opacity-100 scale-100 animate-pulse' 
              : 'opacity-0 scale-75'
          }`}></div>
          <div className={`absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl transition-all duration-2000 delay-1000 ${
            heroVisible 
              ? 'opacity-100 scale-100 animate-pulse' 
              : 'opacity-0 scale-75'
          }`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Lado izquierdo - Contenido */}
            <div className="space-y-12 text-center lg:text-left">
              <div 
                ref={titleRef}
                className={`space-y-8 transition-all duration-1000 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="space-y-6">                 
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-400 ${
                    titleVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    <span className="text-gray-900 font-heading">Biblioteca</span>
                    <span className="text-transparent bg-clip-text font-heading  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 block">
                      Emocional
                    </span>
                  </h1>
                  
                  <p className={`text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-600 ${
                    titleVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    Descubre nuestra colección completa de recursos terapéuticos organizados por categorías específicas. 
                    Cada recurso ha sido cuidadosamente seleccionado para acompañar el desarrollo emocional.
                  </p>
                </div>
              </div>

              {/* Estadísticas destacadas */}
              <div 
                ref={statsRef}
                className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${
                  statsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IoBook className="text-xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Recursos</div>
                </div>

                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FaGraduationCap className="text-xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Categorías</div>
                </div>

                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FaHeart className="text-xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-pink-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Gratuitos</div>
                </div>

                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IoDownload className="text-xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">∞</div>
                  <div className="text-sm text-gray-600">Descargas</div>
                </div>
              </div>

              
            </div>
            
            {/* Lado derecho - Ilustración */}
            <div 
              ref={illustrationRef}
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-1200 ${
                illustrationVisible 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-95'
              }`}
            >
              <div className="relative">
                {/* Fondo decorativo para la ilustración */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Contenedor de la ilustración - fondo transparente */}
                <div className="relative p-8">
                  <img
                    src="/illustrations/biblioteca/biblioteca-principal.svg"
                    alt="Biblioteca de recursos emocionales - Ilustración de libros y documentos organizados"
                    className="w-full max-w-lg h-auto drop-shadow-2xl"
                    loading="eager"
                  />
                  
                 
                  
                </div>
                
                {/* Elementos decorativos adicionales */}
                <div className="absolute -top-6 left-10 w-16 h-16 bg-yellow-200/60 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 right-10 w-20 h-20 bg-blue-200/60 rounded-full blur-xl animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 mb-26">
        <div className="max-w-7xl mx-auto">
          {/* Componente BibliotecaGrid con datos de Supabase */}
          <BibliotecaGrid />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
