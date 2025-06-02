
export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Enfoque Personalizado",
      description: "Cada terapia es única. Adaptamos nuestro enfoque a tus necesidades específicas, respetando tu ritmo y tus objetivos personales.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Confidencialidad Total",
      description: "Tu privacidad es sagrada. Todo lo que compartas permanece en absoluta confidencialidad bajo el secreto profesional.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Flexibilidad Horaria",
      description: "Entendemos tus compromisos. Ofrecemos horarios flexibles, incluyendo sesiones online, para que puedas priorizar tu bienestar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Comunicación Continua",
      description: "Mantenemos una comunicación abierta y constante. Tu feedback es fundamental para adaptar el proceso terapéutico.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Sin Compromisos",
      description: "Tienes total libertad para decidir. Puedes pausar o finalizar el proceso cuando lo consideres necesario, sin penalizaciones.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Trabajo Colaborativo",
      description: "Trabajamos juntos como equipo. Tu participación activa y nuestro acompañamiento profesional son la clave del éxito.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
              <defs>
                <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#F7CAC9;stop-opacity:0.3" />
                  <stop offset="50%" style="stop-color:#FFE0B5;stop-opacity:0.2" />
                  <stop offset="100%" style="stop-color:#B4A7D6;stop-opacity:0.3" />
                </linearGradient>
              </defs>
              <rect width="1200" height="600" fill="url(#bg1)"/>
              <circle cx="200" cy="150" r="80" fill="#F7CAC9" opacity="0.1"/>
              <circle cx="800" cy="300" r="120" fill="#B4A7D6" opacity="0.1"/>
              <circle cx="1000" cy="100" r="60" fill="#FFE0B5" opacity="0.15"/>
              <path d="M0,400 Q300,350 600,380 T1200,360 L1200,600 L0,600 Z" fill="#F7CAC9" opacity="0.05"/>
            </svg>
          `)}`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--background)]/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed">
            Nuestra filosofía se basa en crear un espacio seguro y personalizado donde puedas crecer y sanar a tu propio ritmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="h-full bg-[var(--card-background)]/90 backdrop-blur-sm border border-[var(--border-light)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--card-background)]">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl mb-6 text-[var(--text)] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--highlight)] mb-4 group-hover:text-[var(--button-hover)] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-[var(--muted-text)] leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-[var(--accent)] to-[var(--highlight)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-[var(--card-background)]/90 backdrop-blur-sm border border-[var(--border-light)] rounded-full px-8 py-4 shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full">
              <svg className="w-5 h-5 text-[var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-[var(--text)] font-medium">
              Tu bienestar es nuestra prioridad
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .floating {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}