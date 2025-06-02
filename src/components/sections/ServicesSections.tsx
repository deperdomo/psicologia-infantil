export default function ServicesSections() {
  const services = [
    {
      title: "🧠 Terapia infantil",
      description: "Para niños y niñas que presentan ansiedad, inseguridad, cambios de conducta, baja autoestima, miedos o dificultades para adaptarse a nuevas situaciones.",
      icon: "👶"
    },
    {
      title: "👨‍👩‍👧 Orientación a madres y padres",
      description: "Para acompañarte a ti, como figura clave en la vida emocional de tu hijo/a. Te ayudo a comprender, validar y guiar, sin sobreproteger ni juzgarte.",
      icon: "💑"
    },
    {
      title: "📖 Cuentos y herramientas emocionales",
      description: "Cuentos terapéuticos, guías prácticas y recursos descargables para hablar de lo que a veces cuesta decir con palabras.",
      icon: "📚"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
          ¿Qué puedo ofrecerte?
        </h2>
        <p className="text-lg text-[var(--muted-text)] max-w-3xl mx-auto">
          Trabajo desde un enfoque respetuoso, integrador y cercano, que combina psicología infantil, orientación a madres y padres, y recursos terapéuticos como los cuentos, el juego o la palabra sencilla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, description, icon }, index) => (
          <div
            key={title}
            className="group bg-[var(--card-background)] hover:bg-[var(--hover-bg)] border border-[var(--border-light)] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--highlight)] mb-4 group-hover:text-[var(--button-hover)]">
              {title}
            </h3>
            <p className="text-[var(--muted-text)] leading-relaxed">
              {description}
            </p>
            <div className="mt-6">
              <a
                href="/servicios"
                className="text-[var(--accent)] hover:text-[var(--highlight)] font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
              >
                Saber más
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}