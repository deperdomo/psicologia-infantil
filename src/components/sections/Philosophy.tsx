export default function Philosophy() {
  return (
    <section className="bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
            Un espacio donde el dolor no se evita, se acompaña
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--muted-text)] leading-relaxed mb-6">
              Aquí creemos que llorar, sentir miedo o frustración no es un problema: es parte de crecer.
            </p>
            <p className="text-lg text-[var(--text)] font-medium">
              La diferencia está en cómo acompañamos a los niños a transitar esas emociones, y cómo ayudamos a los adultos a hacerlo sin sentirse perdidos o solos.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🤗</div>
            <h3 className="text-xl font-bold text-[var(--highlight)] mb-3">Acompañamiento</h3>
            <p className="text-[var(--muted-text)]">
              Estamos contigo en cada paso del proceso emocional
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-[var(--highlight)] mb-3">Crecimiento</h3>
            <p className="text-[var(--muted-text)]">
              Cada emoción es una oportunidad para crecer y aprender
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">💕</div>
            <h3 className="text-xl font-bold text-[var(--highlight)] mb-3">Ternura</h3>
            <p className="text-[var(--muted-text)]">
              Con respeto y calidez en cada encuentro terapéutico
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}