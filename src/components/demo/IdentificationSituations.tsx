export default function IdentificationSituations() {
  const situations = [
    {
      id: 1,
      category: "Desarrollo Emocional",
      title: "Tu hijo/a presenta ansiedad, inseguridad o cambios de conducta",
      description: "Has notado que tu hijo/a se muestra más ansioso de lo habitual, tiene dificultades para adaptarse a nuevas situaciones, o su comportamiento ha cambiado significativamente.",
      illustration: "children",
      alt: "Niños jugando - representando desarrollo emocional infantil",
      color: "blue",
      symptoms: ["Ansiedad y miedos intensos", "Inseguridad emocional", "Cambios de comportamiento"]
    },
    {
      id: 2,
      category: "Cambios Familiares",
      title: "La familia está pasando por un momento de cambio importante",
      description: "Separaciones, mudanzas, llegada de nuevas parejas o hermanos... Los cambios familiares pueden generar incertidumbre y necesidad de adaptación.",
      illustration: "family-time",
      alt: "Familia pasando tiempo juntos - representando cambios familiares",
      color: "green",
      symptoms: ["Separación o divorcio", "Mudanzas y cambios de entorno", "Llegada de nuevos miembros"]
    },
    {
      id: 3,
      category: "Orientación Parental",
      title: "Necesitas orientación para acompañar mejor a tu hijo/a",
      description: "Te sientes perdida, no sabes cómo manejar ciertas situaciones, o buscas herramientas para acompañar el desarrollo emocional de tu hijo/a de manera más efectiva.",
      illustration: "therapy",
      alt: "Sesión de terapia - representando orientación parental",
      color: "purple",
      symptoms: ["Herramientas de crianza", "Manejo de emociones", "Comunicación efectiva"]
    }
  ];

  const colorClasses = {
    blue: {
      badge: "bg-blue-100 text-blue-800",
      dot: "bg-blue-500",
      gradient: "from-blue-600/20"
    },
    green: {
      badge: "bg-green-100 text-green-800",
      dot: "bg-green-500",
      gradient: "from-green-600/20"
    },
    purple: {
      badge: "bg-purple-100 text-purple-800",
      dot: "bg-purple-500",
      gradient: "from-purple-600/20"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Te identificas con alguna de estas situaciones?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No estás sola. Estas son algunas de las situaciones más comunes por las que las familias buscan acompañamiento profesional.
            </p>
          </div>

          {/* Layout horizontal con ilustraciones */}
          <div className="space-y-16">
            {situations.map((situation, index) => {
              const isReversed = index % 2 === 1;
              const colors = colorClasses[situation.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={situation.id}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                >
                  {/* Ilustración SVG */}
                  <div className="lg:w-1/2">
                    <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                      <div className="w-full h-80 flex items-center justify-center">
                        <img
                          src={`/illustrations/${situation.illustration}.svg`}
                          alt={situation.alt}
                          className="w-full h-full object-contain"
                          style={{
                            filter: `hue-rotate(${situation.color === 'blue' ? '0deg' : situation.color === 'green' ? '120deg' : '270deg'})`
                          }}
                        />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} to-transparent rounded-3xl opacity-10`}></div>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className={`inline-flex items-center px-4 py-2 ${colors.badge} rounded-full text-sm font-semibold`}>
                      {situation.category}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {situation.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {situation.description}
                    </p>
                    <ul className="space-y-3">
                      {situation.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`w-2 h-2 ${colors.dot} rounded-full mr-3`}></div>
                          <span className="text-gray-700">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-lg">
              <p className="text-xl text-gray-800 mb-6 font-medium">
                Si te identificas con alguna de estas situaciones, no dudes en contactarme. 
                Juntas podemos encontrar el camino hacia el bienestar emocional de tu familia.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                Solicitar consulta inicial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
