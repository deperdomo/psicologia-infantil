
export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Enfoque Personalizado",
      description: "Cada terapia es única. Adaptamos nuestro enfoque a tus necesidades específicas, respetando tu ritmo y tus objetivos personales.",
      icon: "🎯",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Confidencialidad Total",
      description: "Tu privacidad es sagrada. Todo lo que compartas permanece en absoluta confidencialidad bajo el secreto profesional.",
      icon: "🔒",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Flexibilidad Horaria",
      description: "Entendemos tus compromisos. Ofrecemos horarios flexibles, incluyendo sesiones online, para que puedas priorizar tu bienestar.",
      icon: "⏰",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Comunicación Continua",
      description: "Mantenemos una comunicación abierta y constante. Tu feedback es fundamental para adaptar el proceso terapéutico.",
      icon: "💬",
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Sin Compromisos",
      description: "Tienes total libertad para decidir. Puedes pausar o finalizar el proceso cuando lo consideres necesario, sin penalizaciones.",
      icon: "✅",
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Trabajo Colaborativo",
      description: "Trabajamos juntos como equipo. Tu participación activa y nuestro acompañamiento profesional son la clave del éxito.",
      icon: "🤝",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/5 to-[var(--secondary)]/10">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-[var(--accent)]/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl mb-8 shadow-lg">
            <span className="text-3xl">💫</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-text)] max-w-4xl mx-auto leading-relaxed">
            Nuestra filosofía se basa en crear un espacio seguro y personalizado donde puedas crecer y sanar a tu propio ritmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-hover group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Main card */}
              <div className="relative h-full glass-card p-8 rounded-2xl border border-[var(--border-light)] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <span className="text-2xl filter drop-shadow-sm">{benefit.icon}</span>
                    </div>
                    {/* Floating dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--highlight)] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-4 group-hover:text-[var(--highlight)] transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-[var(--muted-text)] leading-relaxed text-base md:text-lg mb-6">
                    {benefit.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${benefit.color} w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full`}></div>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[var(--highlight)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center mt-20 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="glass-card inline-block p-8 rounded-3xl border border-[var(--border-light)] shadow-xl">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full animate-pulse">
                <span className="text-xl">💝</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-[var(--text)] mb-1">
                  Tu bienestar es nuestra prioridad
                </h3>
                <p className="text-[var(--muted-text)] text-sm">
                  Más de 500 familias confían en nosotros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

