import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - replacing emojis with proper icons
import { IoMail, IoBook, IoHeart } from 'react-icons/io5';
import { GiSprout } from 'react-icons/gi';

export default function Hero() {
  const { elementRef: heroRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: trustRef, isVisible: trustVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] py-24 lg:py-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--highlight)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          {/* Main heading with staggered animation */}
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text)] mb-6 leading-tight">
              Acompañando la infancia con
              <span className={`block text-[var(--highlight)] mt-2 transition-all duration-1000 delay-300 ${
                titleVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}>
                ternura, límites y herramientas emocionales
              </span>
            </h1>
          </div>

          {/* Subtitle with delayed animation */}
          <div 
            ref={subtitleRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--muted-text)] mb-8 leading-relaxed font-light">
              En este espacio encontrarás acompañamiento profesional para niñas, niños y sus familias,
              en momentos de cambio, conflicto o malestar emocional.
            </p>
          </div>

          {/* CTA buttons with enhanced styling */}
          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
              buttonsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="/reserva-cita"
              className="btn-primary group inline-flex items-center space-x-3 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl group-hover:animate-pulse">
                {/* Replaced 📩 emoji with IoMail icon */}
                <IoMail aria-hidden="true" />
              </span>
              <span>Pedir cita o escribir ahora</span>
            </a>
            <a
              href="/blog"
              className="nav-transition border-2 border-[var(--highlight)] text-[var(--highlight)] px-8 py-4 rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--button-text)] font-semibold text-lg"
            >
              {/* Replaced 📚 emoji with IoBook icon */}
              <IoBook className="inline mr-2" aria-hidden="true" /> Ver cuentos y recursos gratuitos
            </a>
          </div>

          {/* Trust indicators */}
          <div 
            ref={trustRef}
            className={`mt-16 transition-all duration-1000 delay-1000 ${
              trustVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center space-x-2 text-[var(--muted-text)]">
                <span className="text-2xl">
                  <GiSprout />
                </span>
                <span className="text-sm font-medium">Máster en Psicología Infantil y Juvenil</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--muted-text)]">
                <span className="text-2xl">
                  <IoHeart />
                </span>
                <span className="text-sm font-medium">Especialista en Infancia</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--muted-text)]">
                <span className="text-2xl">
                  <GiSprout />
                </span>
                <span className="text-sm font-medium">Enfoque Humanista</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--highlight)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--highlight)] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}