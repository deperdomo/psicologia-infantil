export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Gracias a la terapia, he encontrado herramientas para manejar mi ansiedad. ¡Recomendada!",
      author: "María G.",
      rating: 5
    },
    {
      quote: "La ayuda que recibí aquí cambió mi vida. Me siento más fuerte y feliz.",
      author: "Carlos R.",
      rating: 5
    },
    {
      quote: "Un enfoque profesional y cercano que realmente marca la diferencia.",
      author: "Ana M.",
      rating: 5
    }
  ];
  return (
    <section className="bg-[var(--background)]/80 backdrop-blur-sm py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-[var(--muted-text)]">
            Lo que dicen nuestros pacientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author, rating }, index) => (
            <div
              key={index}
              className="bg-[var(--card-background)] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--border-light)]"
            >
              <div className="flex mb-4">
                {[...Array(rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--highlight)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-[var(--text)] italic mb-4 leading-relaxed">
                "{quote}"
              </blockquote>
              <cite className="text-[var(--muted-text)] font-medium">
                — {author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}