export default function ServicesSections() {
  const services = [
    {
      title: "🧠 Terapia infantil",
      description: "Para niños y niñas que presentan ansiedad, inseguridad, cambios de conducta, baja autoestima, miedos o dificultades para adaptarse a nuevas situaciones.",
      icon: "👶",
      gradient: "from-blue-50 to-indigo-100",
      iconBg: "bg-blue-100"
    },
    {
      title: "👨‍👩‍👧 Orientación a madres y padres",
      description: "Para acompañarte a ti, como figura clave en la vida emocional de tu hijo/a. Te ayudo a comprender, validar y guiar, sin sobreproteger ni juzgarte.",
      icon: "💑",
      gradient: "from-pink-50 to-rose-100",
      iconBg: "bg-pink-100"
    },
    {
      title: "🧩 Acompañamiento en momentos de cambio familiar",
      description: "Separaciones, mudanzas, llegada de nuevas parejas o hermanos...Te acompaño a ti y/o a tu hijo/a en el proceso de adaptación emocional, ayudando a que lo transiten con mayor seguridad, contención y herramientas para hablar de lo que sienten.",
      icon: "👨‍👩‍👧‍👦",
      gradient: "from-green-50 to-emerald-100",
      iconBg: "bg-green-100"
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-[var(--accent)]/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl mb-6">
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
            ¿Qué puedo ofrecerte?
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-text)] max-w-4xl mx-auto leading-relaxed">
            Trabajo desde un enfoque respetuoso, integrador y cercano, que combina psicología infantil,
            orientación a madres y padres, y recursos terapéuticos como los cuentos, el juego o la palabra sencilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map(({ title, description, icon, gradient, iconBg }, index) => (
            <div
              key={title}
              className="card-hover group relative bg-white/80 backdrop-blur-sm border border-[var(--border-light)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${iconBg} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <span className="text-3xl">{icon}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-4 group-hover:text-[var(--highlight)] transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-[var(--muted-text)] leading-relaxed mb-6 text-base md:text-lg">
                  {description}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href="/servicios"
                    className="inline-flex items-center text-[var(--highlight)] hover:text-[var(--button-hover)] font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    <span>Saber más</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>

                  {/* Decorative element */}
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card inline-block p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
              ¿Necesitas orientación personalizada?
            </h3>
            <p className="text-[var(--muted-text)] mb-6 max-w-md mx-auto">
              Cada familia es única. Conversemos sobre tu situación específica.
            </p>
            <a
              href="/contacto"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Contactar ahora</span>
              <span className="text-xl">💬</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}