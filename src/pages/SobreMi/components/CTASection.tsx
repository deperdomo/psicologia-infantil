export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--background)] to-[var(--accent)]/10"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative p-12 lg:p-16">
            {/* Header elegante */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl mb-8">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                Modalidad de trabajo
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full"></div>
            </div>

            {/* Modalidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="text-xl font-semibold text-[var(--text)] mb-2">Presencial</h4>
                <p className="text-[var(--muted-text)]">Madrid, España</p>
                <p className="text-sm text-[var(--muted-text)] mt-2">Consulta cálida y acogedora</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--accent)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="text-xl font-semibold text-[var(--text)] mb-2">Online</h4>
                <p className="text-[var(--muted-text)]">Todo el país</p>
                <p className="text-sm text-[var(--muted-text)] mt-2">Desde la comodidad de tu hogar</p>
              </div>
            </div>

            {/* Mensaje personal */}
            <div className="text-center mb-10">
              <p className="text-lg md:text-xl text-[var(--muted-text)] leading-relaxed mb-6">
                Si quieres saber si puedo ayudarte en tu caso particular, puedes escribirme sin compromiso.
              </p>
              <p className="text-[var(--text)] font-medium text-lg italic">
                "El primer paso hacia el cambio es reconocer que mereces apoyo."
              </p>
            </div>
            
            {/* CTA Button mejorado */}
            <div className="text-center">
              <a
                href="/contacto"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] text-[var(--button-text)] rounded-2xl font-semibold text-lg shadow-lg nav-transition hover:shadow-2xl hover:scale-105 hover:from-[var(--highlight)] hover:to-[var(--accent)]"
              >
                <span className="mr-3">Contactar conmigo</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              
              <p className="text-sm text-[var(--muted-text)] mt-4">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
