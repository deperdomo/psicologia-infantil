import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function HeroSection() {
  // Hooks para animaciones de scroll
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/10 to-[var(--secondary)]/15 py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      {/* Elementos decorativos sutiles */}
      <div className={`absolute top-20 left-10 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-2xl transition-all duration-1000 ${
        heroVisible 
          ? 'opacity-100 animate-float' 
          : 'opacity-0 translate-y-8'
      }`}></div>
      <div className={`absolute bottom-20 right-10 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-2xl transition-all duration-1000 delay-300 ${
        heroVisible 
          ? 'opacity-100 animate-float-delayed' 
          : 'opacity-0 translate-y-8'
      }`}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenido principal */}
          <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
            <div 
              ref={contentRef}
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="inline-flex items-center space-x-3 bg-[var(--card-background)] px-4 py-2 rounded-full shadow-sm border border-[var(--border-light)]">
                <span className="text-2xl">👩‍⚕️</span>
                <span className="text-sm font-medium text-[var(--muted-text)]">Psicóloga especializada</span>
              </div>
                <h1 
                ref={titleRef}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-tight text-center lg:text-left transition-all duration-1000 delay-400 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <span className="block">¿Quién</span>
                <span className={`text-[var(--highlight)] block transition-all duration-1000 delay-600 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>soy?</span>
              </h1>
                <div className={`max-w-3xl mx-auto lg:mx-0 space-y-4 transition-all duration-1000 delay-800 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-xl md:text-2xl text-[var(--text)] leading-relaxed font-medium">
                  Hola, soy <span className="text-[var(--highlight)]">Llenia Monteagudo Rodríguez</span>
                </p>
                <p className="text-lg text-[var(--muted-text)] leading-relaxed">
                  Psicóloga especializada en infancia, familias y vínculos. Acompaño procesos de crecimiento emocional desde una mirada sistémica, humanista e integradora.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card lateral con estadísticas */}
          <div className="lg:col-span-4">
            <div 
              ref={cardRef}
              className={`bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${
                cardVisible 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-95'
              }`}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Experiencia profesional</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[var(--hover-bg)] rounded-xl">
                    <div className="text-2xl font-bold text-[var(--highlight)]">15+</div>
                    <div className="text-sm text-[var(--muted-text)]">Años de experiencia</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--hover-bg)] rounded-xl">
                    <div className="text-2xl font-bold text-[var(--highlight)]">∞</div>
                    <div className="text-sm text-[var(--muted-text)]">Familias acompañadas</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[var(--border-light)]">
                  <p className="text-sm text-[var(--muted-text)] text-center italic">
                    "Cada niño merece ser visto, escuchado y acompañado en su crecimiento"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
