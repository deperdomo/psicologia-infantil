import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - modernized for new design
import { IoPersonAdd, IoStar, IoTrendingUp, IoChatbubble, IoHeartOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { FaHandshake } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export default function WorkMethodSection() {
  // Hooks para animaciones de scroll
  const { elementRef: sectionRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: illustrationRef, isVisible: illustrationVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado izquierdo - Contenido */}
          <div className="space-y-12">
            <div 
              ref={headerRef}
              className={`space-y-8 transition-all duration-1000 ${
                headerVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="space-y-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl shadow-lg transition-all duration-1000 delay-200 ${
                  headerVisible 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-75 rotate-12'
                }`}>
                  <IoChatbubble className="text-3xl text-white" aria-hidden="true" />
                </div>
                
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-400 ${
                  headerVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  ¿Cómo 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> trabajo?</span>
                </h2>
                
                <p className={`text-xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-1000 delay-600 ${
                  headerVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  Acompaño a niñas, niños y sus familias cuando las emociones se hacen grandes, con una metodología que combina calidez humana y herramientas profesionales.
                </p>
              </div>
            </div>

            {/* Metodología en cards mejoradas */}
            <div 
              ref={contentRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className={`bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`} style={{transitionDelay: '300ms'}}>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <IoPersonAdd className="text-2xl text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Terapia personalizada</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Cada proceso es único y se adapta a las necesidades específicas de cada familia.
                  </p>
                </div>
              </div>
              
              <div className={`bg-white/80 backdrop-blur-sm border border-purple-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`} style={{transitionDelay: '500ms'}}>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FaHandshake className="text-2xl text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Sin juicios</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Un espacio seguro donde padres e hijos pueden expresarse libremente.
                  </p>
                </div>
              </div>
              
              <div className={`bg-white/80 backdrop-blur-sm border border-pink-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`} style={{transitionDelay: '700ms'}}>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <IoStar className="text-2xl text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Crecimiento auténtico</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Promovemos el desarrollo desde la propia esencia de cada niño.
                  </p>
                </div>
              </div>
              
              <div className={`bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`} style={{transitionDelay: '900ms'}}>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <IoTrendingUp className="text-2xl text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Herramientas prácticas</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Proporcionamos estrategias concretas para el día a día familiar.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Destacado de experiencia */}
            <div className={`bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-white shadow-2xl transition-all duration-1000 delay-1100 ${
              contentVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">15+</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Años de experiencia profesional</h4>
                  <p className="text-purple-100 leading-relaxed">
                    Acompañando procesos de duelo, divorcio, inseguridad emocional, miedos y desbordes afectivos en la infancia y la familia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lado derecho - Ilustración e historia personal */}
          <div 
            ref={illustrationRef}
            className={`transition-all duration-1000 delay-1300 ${
              illustrationVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-8 scale-95'
            }`}
          >
            <div className="space-y-8">
              {/* Ilustración conceptual */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                    <IoHeartOutline className="text-4xl text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¿Por qué elegí esta profesión?
                  </h3>
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Porque crecí sabiendo que cuando un niño tiene alguien que lo ve, lo nombra con ternura y lo acompaña sin miedo a sus emociones, ese niño florece.
                    </p>
                    <p>
                      Y porque las madres y padres también necesitan un lugar sin juicio, donde sentirse acompañados mientras crían, educan y sanan.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                    <p className="font-medium text-gray-800 leading-relaxed italic">
                      "Este proyecto nació del deseo de dar herramientas reales, de aliviar las culpas innecesarias y de ayudar a construir puentes emocionales más fuertes en las familias."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Modalidades de trabajo */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IoCheckmarkCircle className="text-xl text-white" />
                  </div>
                  <div className="text-lg font-bold text-blue-600 mb-1">Madrid</div>
                  <div className="text-sm text-gray-600">Presencial</div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HiSparkles className="text-xl text-white" />
                  </div>
                  <div className="text-lg font-bold text-purple-600 mb-1">España</div>
                  <div className="text-sm text-gray-600">Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
