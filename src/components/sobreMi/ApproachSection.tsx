import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - replacing emojis with proper icons
import { GiSprout } from 'react-icons/gi';
import { IoLink, IoHeart, IoConstruct } from 'react-icons/io5';

export default function ApproachSection() {
  // Hooks para animaciones de scroll
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mb-6 shadow-lg transition-all duration-1000 delay-200 ${
            headerVisible 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-75 -rotate-12'
          }`}>
            <GiSprout className="text-3xl text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-400 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Mi enfoque 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> terapéutico</span>
          </h2>
          <p className={`text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Una mirada integral que honra la singularidad de cada familia y respeta los tiempos de cada proceso de crecimiento.
          </p>
        </div>

        {/* Grid de enfoques con diseño moderno */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Enfoque Sistémico */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <IoLink className="text-2xl text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistémico</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Porque los niños no crecen en el vacío, sino dentro de una red de relaciones que los sostienen y los afectan.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Entorno familiar y escolar</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Dinámicas relacionales</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Acompañamiento a padres</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enfoque Humanista */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/80 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <IoHeart className="text-2xl text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Humanista</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Cada persona merece ser vista, escuchada y aceptada tal como es, sin juicios ni etiquetas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Mirada empática y cálida</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Aceptación incondicional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Crecimiento desde el amor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enfoque Integrador */}
          <div className={`relative transition-all duration-1000 delay-700 ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-white/80 backdrop-blur-sm border border-pink-200 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/50 to-orange-200/50 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <IoConstruct className="text-2xl text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrador</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    La realidad es compleja y requiere múltiples herramientas para abordar cada situación única.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Juego terapéutico</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Terapia emocional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-medium">Psicoeducación</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección adicional con call-to-action sutil */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-900 ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Mi compromiso es crear un espacio seguro donde cada niño y cada familia pueda encontrar su propio camino hacia el bienestar emocional."
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
