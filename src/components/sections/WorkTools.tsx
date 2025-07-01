// react-icons imports - replacing emojis with proper icons
import { IoGameController, IoBook, IoMedical, IoHeart } from 'react-icons/io5';

export default function WorkTools() {
  const tools = [
    {
      title: "Juego terapéutico y cuentos emocionales",
      description: "Utilizamos el juego y los cuentos como herramientas principales para conectar con el mundo emocional de los niños.",
      icon: IoGameController // Replaced 🎯 emoji with IoGameController for therapeutic play
    },
    {
      title: "Guías de acompañamiento para padres",
      description: "Recursos prácticos y personalizados para que puedas acompañar a tu hijo/a en casa.",
      icon: IoBook // Replaced 📖 emoji with IoBook for guides
    },
    {
      title: "Técnicas de regulación emocional infantil",
      description: "Estrategias adaptadas a la edad y necesidades específicas de cada niño/a.",
      icon: IoMedical // Replaced 🧘‍♀️ emoji with IoMedical for therapeutic techniques
    },
    {
      title: "Orientación en crianza respetuosa con límites",
      description: "Aprende a poner límites necesarios desde el amor y el respeto mutuo.",
      icon: IoHeart // Replaced 💝 emoji with IoHeart for respectful parenting
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
          Herramientas de trabajo
        </h2>
        <p className="text-lg text-[var(--muted-text)] max-w-3xl mx-auto">
          Mi enfoque integra la psicología emocional, el vínculo afectivo, el juego y la escucha activa, tanto con los niños como con los adultos que los acompañan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map(({ title, description, icon: IconComponent }, index) => (
          <div
            key={title}
            className="group bg-[var(--card-background)] border border-[var(--border-light)] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {/* Changed from emoji string to React icon component */}
                <IconComponent className="text-[var(--primary)]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--highlight)] mb-3 group-hover:text-[var(--button-hover)]">
                  {title}
                </h3>
                <p className="text-[var(--muted-text)] leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
