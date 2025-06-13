import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function RecursosHero() {
  const { elementRef: heroRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
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
              Explora una colección de recursos prácticos y creativos para acompañar el crecimiento emocional de niños y familias. ¡Inspírate y encuentra nuevas formas de cuidar el bienestar juntos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
