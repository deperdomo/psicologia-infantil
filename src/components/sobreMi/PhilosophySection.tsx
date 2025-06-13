import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function PhilosophySection() {
  // Hook para animaciones de scroll
  const { elementRef: sectionRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/10 to-[var(--accent)]/5"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={cardRef}
          className={`bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-12 shadow-lg text-center transition-all duration-1000 ${
            cardVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <div className={`w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto transition-all duration-1000 delay-200 ${
              cardVisible 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-75 rotate-12'
            }`}>
              <span className="text-3xl">✨</span>
            </div>
            
            <div>
              <h3 className={`text-3xl md:text-4xl font-bold text-[var(--text)] mb-6 transition-all duration-1000 delay-400 ${
                cardVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>Mi filosofía de trabajo</h3>
              <blockquote className={`text-xl md:text-2xl text-[var(--muted-text)] leading-relaxed italic mb-6 transition-all duration-1000 delay-600 ${
                cardVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                "Trabajo con una mirada amplia, sensible y práctica, que une la comprensión profunda con herramientas concretas."
              </blockquote>
              <p className={`text-lg text-[var(--text)] font-medium transition-all duration-1000 delay-800 ${
                cardVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                Mi objetivo es que tanto el niño como los adultos que lo rodean encuentren nuevas formas de estar, sentir y vincularse desde un lugar más sano y auténtico.
              </p>
            </div>
            
            <div className={`flex justify-center transition-all duration-1000 delay-1000 ${
              cardVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
