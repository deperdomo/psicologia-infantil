export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
          🤍 ¿Quieres saber cómo puedo ayudarte?
        </h2>
        <p className="text-lg text-[var(--muted-text)] mb-12 max-w-3xl mx-auto">
          Puedes conocer más sobre mi trabajo, leer mis cuentos terapéuticos o agendar una primera consulta.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/reserva-cita"
            className="bg-[var(--highlight)] text-[var(--button-text)] px-8 py-4 rounded-lg hover:bg-[var(--button-hover)] shadow-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center"
          >
            📩 Pedir cita o escribir ahora
          </a>
          
          <a
            href="/blog"
            className="border-2 border-[var(--highlight)] text-[var(--highlight)] px-8 py-4 rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--button-text)] font-semibold text-lg transition-all duration-300 flex items-center"
          >
            📚 Ver cuentos y recursos gratuitos
          </a>
        </div>
        
        <div className="mt-12 p-6 bg-white/20 backdrop-blur-sm rounded-xl max-w-4xl mx-auto">
          <p className="text-lg text-[var(--text)] font-medium italic">
            ✨ "Cuidar el mundo emocional de un niño es fortalecer su futuro. Y tú puedes hacerlo sin cargarlo sola. Estoy aquí para ayudarte."
          </p>
        </div>
      </div>
    </section>
  )
}
