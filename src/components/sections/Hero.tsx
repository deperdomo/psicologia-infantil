export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-6 leading-tight">
            Acompañando la infancia con
            <span className="block text-[var(--highlight)] mt-2">ternura, límites y herramientas emocionales</span>
          </h1>          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-[var(--muted-text)] mb-6 leading-relaxed">
              En este espacio encontrarás acompañamiento profesional para niñas, niños y sus familias, en momentos de cambio, conflicto o malestar emocional.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/reserva-cita"
              className="nav-button bg-[var(--highlight)] text-[var(--button-text)] px-8 py-4 rounded-lg hover:bg-[var(--button-hover)] shadow-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              📩 Pedir cita o escribir ahora
            </a>
            <a
              href="/blog"
              className="nav-transition border-2 border-[var(--highlight)] text-[var(--highlight)] px-8 py-4 rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--button-text)] font-semibold text-lg"
            >
              📚 Ver cuentos y recursos gratuitos
            </a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `
      }} />
    </section>
  )
}