export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: "/servicios", label: "Servicios" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/contacto", label: "Contacto" }
  ];

  const resources = [
    { href: "/recursos", label: "Recursos gratuitos" },
    { href: "/preguntas-frecuentes", label: "FAQ" },
    { href: "/reserva-cita", label: "Reservar cita" },
    { href: "#", label: "Política de privacidad" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[var(--text)] via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[var(--primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[var(--accent)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold">🌱</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Psicología Infantil</h3>
                <p className="text-gray-300 text-sm">Acompañamiento terapéutico</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Tu bienestar emocional y el de tu familia es nuestra prioridad. Estamos aquí para acompañarte 
              en tu camino hacia una vida más plena y saludable.
            </p>
            
            {/* Contact info with icons */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📞</span>
                </div>
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">✉️</span>
                </div>
                <span>info@psicologia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-[var(--highlight)] rounded-full mr-3"></span>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-gray-300 hover:text-[var(--primary)] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-[var(--primary)] transition-colors duration-300"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full mr-3"></span>
              Recursos
            </h4>
            <ul className="space-y-3">
              {resources.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-gray-300 hover:text-[var(--accent)] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-[var(--accent)] transition-colors duration-300"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="glass-card-futer p-8 rounded-2xl mb-12 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold text-white mb-2">
                🌟 Mantente al día
              </h4>
              <p className="text-gray-300">
                Recibe recursos gratuitos y consejos de psicología infantil
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] backdrop-blur-sm"
              />
              <button className="btn-primary px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>© {currentYear} Psicología Infantil. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Síguenos:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors duration-300">
                  <span className="text-sm">📘</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors duration-300">
                  <span className="text-sm">📷</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors duration-300">
                  <span className="text-sm">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}