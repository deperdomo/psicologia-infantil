import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GiSprout } from 'react-icons/gi';
import { FaUserMd } from 'react-icons/fa';

export default function HeroSection() {
  // Hooks para animaciones de scroll
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: photoRef, isVisible: photoVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={heroRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      {/* Elementos decorativos sutiles */}
      <div className={`absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl transition-all duration-1000 ${
        heroVisible 
          ? 'opacity-100 animate-float' 
          : 'opacity-0 translate-y-8'
      }`}></div>
      <div className={`absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
        heroVisible 
          ? 'opacity-100 animate-float-delayed' 
          : 'opacity-0 translate-y-8'
      }`}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido principal */}
          <div className="space-y-8 text-center lg:text-left">
            <div 
              ref={contentRef}
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
                <FaUserMd className="text-2xl text-blue-600" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">Máster en Psicología Infantil y Juvenil</span>
              </div>
              
              <h1 
                ref={titleRef}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-400 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <span className="block">Hola, soy</span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block transition-all duration-1000 delay-600 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>Llenia</span>
              </h1>
                
              <div className={`max-w-3xl mx-auto lg:mx-0 space-y-4 transition-all duration-1000 delay-800 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                  <span className="text-blue-600 font-semibold">Llenia Monteagudo Rodríguez</span> - Psicóloga especializada en infancia, familias y vínculos
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Acompaño procesos de crecimiento emocional desde una mirada sistémica, humanista e integradora con más de 15 años de experiencia.
                </p>
              </div>

              {/* Estadísticas profesionales */}
              <div className={`grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-1000 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Familias acompañadas</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Espacio para la foto de Llenia */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={photoRef}
              className={`relative transition-all duration-1000 delay-1200 ${
                photoVisible 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-95'
              }`}
            >
              {/* Contenedor principal de la foto */}
              <div className="relative">
                {/* Fondo decorativo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Contenedor de la foto */}
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-200">
                  {/* Placeholder para la foto de Llenia */}
                  <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                        <FaUserMd className="text-3xl text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600 font-medium">Foto de Llenia</p>
                        <p className="text-sm text-gray-500">Próximamente</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge flotante de credencial */}
                  <div className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-lg border border-gray-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <GiSprout className="text-white text-lg" />
                    </div>
                  </div>
                  
                  {/* Indicador de disponibilidad */}
                  <div className="absolute -bottom-2 left-6 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Disponible para consultas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frase inspiracional al final */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1400 ${
          heroVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 italic font-medium">
              "Cada niño merece ser visto, escuchado y acompañado en su crecimiento único y especial"
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
