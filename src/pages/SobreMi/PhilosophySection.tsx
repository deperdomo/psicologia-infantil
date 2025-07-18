import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - simplified for minimalist approach
import PhilosophyGraphic from '../../components/PhilosophyGraphic';

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
          
          {/* Ilustración minimalista extraída a PhilosophyGraphic */}
          <div className="lg:col-span-5">
            <div className={`relative transition-all duration-1000 delay-200 ${
              cardVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-8 scale-95'
            }`}>
              <PhilosophyGraphic cardVisible={cardVisible} />
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
