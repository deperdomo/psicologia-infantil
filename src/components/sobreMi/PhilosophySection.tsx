import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - simplified for minimalist approach
import { IoSparkles } from 'react-icons/io5';

export default function PhilosophySection() {
  // Hook para animaciones de scroll
  const { elementRef: sectionRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Estilos CSS inline para las animaciones */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes drawCircle1 {
            from { stroke-dashoffset: 942; }
            to { stroke-dashoffset: 628; }
          }
          
          @keyframes drawCircle2 {
            from { stroke-dashoffset: 754; }
            to { stroke-dashoffset: 503; }
          }
          
          @keyframes drawCircle3 {
            from { stroke-dashoffset: 565; }
            to { stroke-dashoffset: 377; }
          }
          
          .draw-circle-1 {
            animation: drawCircle1 2.5s ease-out 0.5s both;
          }
          
          .draw-circle-2 {
            animation: drawCircle2 2.5s ease-out 1s both;
          }
          
          .draw-circle-3 {
            animation: drawCircle3 2.5s ease-out 1.5s both;
          }
        `
      }} />
      {/* Elementos decorativos minimalistas */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Ilustración minimalista */}
          <div className="lg:col-span-5">
            <div className={`relative transition-all duration-1000 delay-200 ${
              cardVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-8 scale-95'
            }`}>
              {/* Gráfico circular con filosofías */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Fondo del gráfico más sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/90 rounded-full border border-gray-300/50 shadow-lg"></div>
                
                {/* SVG para las líneas semicirculares - más grande y claro */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                  {/* Línea semicircular 1 - Comprensión (Azul) - Exterior */}
                  <circle
                    cx="192"
                    cy="192"
                    r="150"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="314 942"
                    strokeDashoffset="942"
                    className={`transform -rotate-90 origin-center ${cardVisible ? 'draw-circle-1' : ''}`}
                  />
                  
                  {/* Línea semicircular 2 - Crecimiento (Púrpura) - Medio */}
                  <circle
                    cx="192"
                    cy="192"
                    r="120"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray="251 754"
                    strokeDashoffset="754"
                    className={`transform -rotate-90 origin-center ${cardVisible ? 'draw-circle-2' : ''}`}
                  />
                  
                  {/* Línea semicircular 3 - Autenticidad (Rosa) - Interior */}
                  <circle
                    cx="192"
                    cy="192"
                    r="90"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="188 565"
                    strokeDashoffset="565"
                    className={`transform -rotate-90 origin-center ${cardVisible ? 'draw-circle-3' : ''}`}
                  />
                  
                  {/* Gradientes mejorados para las líneas */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EC4899" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#DB2777" stopOpacity="1" />
                      <stop offset="100%" stopColor="#BE185D" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Centro del gráfico mejorado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-xl border border-gray-200">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <IoSparkles className="text-3xl text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xl font-bold text-gray-800">Filosofía</p>
                      <p className="text-sm text-gray-600 font-medium">Integral</p>
                    </div>
                  </div>
                </div>

                {/* Etiquetas de las filosofías mejoradas y mejor posicionadas */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white">
                    Comprensión
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-400"></div>
                </div>
                
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white">
                    Crecimiento
                  </div>
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-8 h-0.5 bg-purple-400"></div>
                </div>
                
                <div className="absolute -bottom-4 -right-6">
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white">
                    Autenticidad
                  </div>
                  <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 w-0.5 h-8 bg-pink-400"></div>
                </div>

                {/* Puntos de conexión para mejor visualización */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg border-2 border-white"></div>
                </div>
                
                <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg border-2 border-white"></div>
                </div>
                
                <div className="absolute bottom-12 right-12">
                  <div className="w-4 h-4 bg-pink-500 rounded-full shadow-lg border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido textual */}
          <div className="lg:col-span-7">
            <div 
              ref={cardRef}
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                cardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Header */}
              <div className="space-y-6">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-600 ${
                  cardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  Mi filosofía de 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> trabajo</span>
                </h2>
              </div>

              {/* Contenido principal */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                <blockquote className={`text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6 transition-all duration-1000 delay-800 ${
                  cardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  "Trabajo con una mirada amplia, sensible y práctica, que une la comprensión profunda con herramientas concretas."
                </blockquote>
                
                <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-1000 ${
                  cardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  Mi objetivo es que tanto el niño como los adultos que lo rodean encuentren nuevas formas de estar, sentir y vincularse desde un lugar más sano y auténtico.
                </p>
              </div>

              {/* Valores clave minimalistas */}
              <div className={`grid grid-cols-3 gap-4 transition-all duration-1000 delay-1200 ${
                cardVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <div className="text-center p-4 bg-blue-50/80 rounded-xl border border-blue-100">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-700">Comprensión</p>
                </div>
                <div className="text-center p-4 bg-purple-50/80 rounded-xl border border-purple-100">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-700">Crecimiento</p>
                </div>
                <div className="text-center p-4 bg-pink-50/80 rounded-xl border border-pink-100">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-700">Autenticidad</p>
                </div>
              </div>

              {/* Línea decorativa final */}
              <div className={`flex justify-start transition-all duration-1000 delay-1400 ${
                cardVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-75'
              }`}>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
