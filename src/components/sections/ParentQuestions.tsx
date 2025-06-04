export default function ParentQuestions() {
  const questions = [
    {
      question: "¿Notas que tu hija llora con facilidad, se siente insegura o reacciona con rabietas intensas?",
      icon: "😢"
    },
    {
      question: "¿Te cuesta poner límites sin culpa o no sabes cómo ayudarla tras un cambio importante?",
      icon: "🤔"
    },
    {
      question: "¿Sientes que no sabes cómo manejar los berrinches o las crisis emocionales?",
      icon: "😰"
    },
    {
      question: "¿Te preocupa el comportamiento de tu hijo/a después de una separación o mudanza?",
      icon: "💔"
    }
  ];

  return (
    <section className="bg-[var(--card-background)] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
            ¿Te identificas con alguna de estas situaciones?
          </h2>
          <p className="text-lg text-[var(--muted-text)] max-w-3xl mx-auto">
            Es normal sentirse abrumado/a ante los desafíos emocionales de la crianza. No estás solo/a en este proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map(({ question, icon }, index) => (
            <div
              key={index}
              className="group bg-white border border-[var(--border-light)] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[var(--text)] leading-relaxed font-medium">
                    {question}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl p-8">
            <p className="text-lg text-[var(--text)] font-medium mb-6">
              Si has respondido "sí" a alguna de estas preguntas, puedo ayudarte a encontrar herramientas y estrategias para acompañar a tu hijo/a con mayor seguridad y tranquilidad.
            </p>
            <a
              href="/reserva-cita"
              className="bg-[var(--highlight)] text-[var(--button-text)] px-8 py-3 rounded-lg hover:bg-[var(--button-hover)] shadow-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Agenda una consulta
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
