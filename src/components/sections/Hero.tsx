export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--highlight)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          {/* Main heading with staggered animation */}
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text)] mb-6 leading-tight">
              Acompañando la infancia con
              <span className="block text-[var(--highlight)] mt-2 animate-fadeInScale" style={{ animationDelay: '0.3s' }}>
                ternura, límites y herramientas emocionales
              </span>
            </h1>
          </div>

          {/* Subtitle with delayed animation */}
          <div className="max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--muted-text)] mb-8 leading-relaxed font-light">
              En este espacio encontrarás acompañamiento profesional para niñas, niños y sus familias,
              en momentos de cambio, conflicto o malestar emocional.
            </p>
          </div>

          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <a
              href="/reserva-cita"
              className="btn-primary group inline-flex items-center space-x-3 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl group-hover:animate-pulse">📩</span>
              <span>Pedir cita o escribir ahora</span>
            </a>
            <a
              href="/blog"
              className="nav-transition border-2 border-[var(--highlight)] text-[var(--highlight)] px-8 py-4 rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--button-text)] font-semibold text-lg"
            >
              📚 Ver cuentos y recursos gratuitos
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center space-x-2 text-[var(--muted-text)]">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-medium">Psicóloga Colegiada</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--muted-text)]">
                <span className="text-2xl">💙</span>
                <span className="text-sm font-medium">Especialista en Infancia</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--muted-text)]">
                <span className="text-2xl">🌱</span>
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