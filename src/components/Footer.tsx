export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-[var(--background)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Psicología</h3>
            <p className="text-[var(--platinum)] leading-relaxed">
              Tu bienestar emocional es nuestra prioridad. Estamos aquí para acompañarte en tu camino hacia una vida más plena.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/servicios" className="text-[var(--platinum)] hover:text-[var(--primary)] transition-colors">Servicios</a></li>
              <li><a href="/sobre-mi" className="text-[var(--platinum)] hover:text-[var(--primary)] transition-colors">Sobre Nosotros</a></li>
              <li><a href="/blog" className="text-[var(--platinum)] hover:text-[var(--primary)] transition-colors">Blog</a></li>
              <li><a href="/contacto" className="text-[var(--platinum)] hover:text-[var(--primary)] transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-[var(--platinum)] mb-2">📞 +34 123 456 789</p>
            <p className="text-[var(--platinum)] mb-2">✉️ info@psicologia.com</p>
            <p className="text-[var(--platinum)]">📍 Madrid, España</p>
          </div>
        </div>
        <div className="border-t border-[var(--platinum)] pt-8 text-center">
          <p className="text-[var(--platinum)]">
            © 2025 Psicología. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}