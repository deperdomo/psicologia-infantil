import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports modernos para el nuevo estilo
import { HiOutlineFaceFrown, HiOutlineExclamationTriangle, HiOutlineHeart, HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

export default function ParentQuestions() {
  const { setRef, visibleItems } = useStaggeredScrollAnimation(4, 200);

  const situations = [
    {
      id: 1,
      title: "Emociones intensas y desbordantes",
      question: "¿Tu hijo/a llora con facilidad, se siente inseguro/a o tiene rabietas muy intensas?",
      description: "Observas que las emociones de tu hijo/a son muy intensas y le cuesta regularlas, lo que genera momentos difíciles tanto para él/ella como para toda la familia.",
      icon: <HiOutlineFaceFrown className="text-4xl text-blue-600" />,
      image: "https://images.pexels.com/photos/6222771/pexels-photo-6222771.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500",
      symptoms: ["Llanto frecuente", "Rabietas intensas", "Inseguridad emocional", "Dificultad para calmarse"]
    },
    {
      id: 2,
      title: "Desafíos en la crianza",
      question: "¿Te cuesta poner límites sin culpa o no sabes cómo ayudarle tras un cambio importante?",
      description: "Sientes que no tienes las herramientas adecuadas para acompañar a tu hijo/a, especialmente después de situaciones como mudanzas, cambios de colegio o eventos familiares.",
      icon: <HiOutlineQuestionMarkCircle className="text-4xl text-purple-600" />,
      image: "https://images.pexels.com/photos/8841302/pexels-photo-8841302.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500",
      symptoms: ["Dudas sobre límites", "Sentimientos de culpa", "Falta de herramientas", "Incertidumbre parental"]
    },
    {
      id: 3,
      title: "Crisis emocionales",
      question: "¿No sabes cómo manejar los berrinches o las crisis emocionales de tu hijo/a?",
      description: "Los momentos de crisis emocional se vuelven abrumadores y sientes que nada de lo que haces funciona para ayudar a tu hijo/a a regularse.",
      icon: <HiOutlineExclamationTriangle className="text-4xl text-orange-600" />,
      image: "https://images.pexels.com/photos/8923036/pexels-photo-8923036.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-500 to-red-500",
      symptoms: ["Berrinches frecuentes", "Crisis emocionales", "Sensación de impotencia", "Desgaste familiar"]
    },
    {
      id: 4,
      title: "Cambios y transiciones",
      question: "¿Te preocupa el comportamiento de tu hijo/a después de una separación, mudanza u otro cambio importante?",
      description: "Has notado cambios significativos en el comportamiento de tu hijo/a tras eventos importantes en la familia, y no estás seguro/a de cómo ayudarle a adaptarse.",
      icon: <HiOutlineHeart className="text-4xl text-green-600" />,
      image: "https://images.pexels.com/photos/8923664/pexels-photo-8923664.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-teal-500",
      symptoms: ["Cambios de comportamiento", "Dificultad de adaptación", "Regresiones", "Estrés familiar"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título de la sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Te identificas con alguna de estas situaciones?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            No estás sola. Estas son algunas de las situaciones más comunes por las que las familias buscan acompañamiento profesional.
          </p>
        </div>

        {/* Situaciones en layout moderno */}
        <div className="space-y-20">
          {situations.map((situation, index) => (
            <div
              key={situation.id}
              ref={setRef(index)}
              className={`transition-all duration-1000 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Imagen */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={situation.image}
                      alt={situation.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${situation.color}/20 to-transparent rounded-3xl group-hover:${situation.color}/30 transition-all duration-500`}></div>
                    {/* Icono flotante */}
                    <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {situation.icon}
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="lg:w-1/2 space-y-6">
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${situation.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                    Situación {situation.id}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {situation.title}
                  </h3>
                  
                  <p className="text-xl text-gray-800 font-medium leading-relaxed">
                    {situation.question}
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {situation.description}
                  </p>

                  {/* Síntomas principales */}
                  <div className="grid grid-cols-2 gap-3">
                    {situation.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${situation.color} rounded-full shadow-sm`}></div>
                        <span className="text-gray-700 text-sm font-medium">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action final */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              ¿Te sientes identificado/a con alguna de estas situaciones?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Si has respondido "sí" a alguna de estas preguntas, puedo ayudarte a encontrar herramientas y estrategias para acompañar a tu hijo/a con mayor seguridad y tranquilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Agendar consulta inicial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Conocer más sobre mi trabajo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
