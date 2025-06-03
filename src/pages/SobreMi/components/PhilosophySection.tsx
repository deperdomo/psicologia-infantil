export default function PhilosophySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/10 to-[var(--accent)]/5"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-12 shadow-lg text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">✨</span>
            </div>
            
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">Mi filosofía de trabajo</h3>
              <blockquote className="text-xl md:text-2xl text-[var(--muted-text)] leading-relaxed italic mb-6">
                "Trabajo con una mirada amplia, sensible y práctica, que une la comprensión profunda con herramientas concretas."
              </blockquote>
              <p className="text-lg text-[var(--text)] font-medium">
                Mi objetivo es que tanto el niño como los adultos que lo rodean encuentren nuevas formas de estar, sentir y vincularse desde un lugar más sano y auténtico.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
