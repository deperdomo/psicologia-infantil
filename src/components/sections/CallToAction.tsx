// react-icons imports modernos y con más personalidad
import { HiOutlineSparkles, HiOutlineChatBubbleLeftRight, HiOutlineBookOpen, HiOutlineCalendarDays, HiOutlineHeart, HiOutlinePhone, HiOutlineEnvelope, HiOutlineArrowRight } from 'react-icons/hi2';

export default function CallToAction() {

  const actionCards = [
    {
      id: 1,
      title: "Agenda tu Primera Consulta",
      subtitle: "El primer paso hacia el bienestar",
      description: "Una sesión inicial donde conoceremos la situación de tu hijo/a y definiremos el mejor camino a seguir juntos.",
      icon: <HiOutlineCalendarDays className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      action: "Agendar consulta",
      link: "/contacto",
      features: ["Sesión de 60 minutos", "Evaluación inicial gratuita", "Plan personalizado", "Sin compromiso"]
    },
    {
      id: 2,
      title: "Explora Recursos Gratuitos",
      subtitle: "Herramientas que puedes usar hoy",
      description: "Cuentos terapéuticos, guías para padres y recursos prácticos que te ayudarán desde el primer día.",
      icon: <HiOutlineBookOpen className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      action: "Ver recursos",
      link: "/recursos",
      features: ["Cuentos terapéuticos", "Guías prácticas", "Videos explicativos", "Completamente gratis"]
    },
    {
      id: 3,
      title: "Conversemos por WhatsApp",
      subtitle: "Resuelve tus dudas ahora",
      description: "¿Tienes preguntas específicas? Escríbeme directamente y te ayudo a aclarar cualquier inquietud sobre tu situación.",
      icon: <HiOutlineChatBubbleLeftRight className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      action: "Escribir ahora",
      link: "https://wa.me/641123622",
      features: ["Respuesta rápida", "Sin compromiso", "Orientación inicial", "Totalmente confidencial"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header principal */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl">
            <HiOutlineSparkles className="text-3xl text-white" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Lista para dar el siguiente paso?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Tu hijo/a merece crecer feliz y seguro. Tu familia merece acompañamiento profesional y cálido.
          </p>

          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <HiOutlineHeart className="text-pink-300 text-xl" />
            <span className="text-white font-medium">Más de 200 familias ya dieron este paso</span>
          </div>
        </div>

        {/* Cards de acción */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {actionCards.map((card) => (
            <div
              key={card.id}
              className="group relative transform transition-all duration-500 hover:scale-105"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Sombra inferior discreta con altura delimitada */}
                  <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${card.color}/60 to-transparent`}></div>
                  
                  {/* Icono flotante */}
                  <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {card.icon}
                  </div>

                  {/* Número de paso */}
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-900">{card.id}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                    {card.subtitle}
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${card.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Botón de acción */}
                  <a
                    href={card.link}
                    className={`w-full bg-gradient-to-r ${card.color} text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:transform group-hover:scale-105`}
                  >
                    {card.action}
                    <HiOutlineArrowRight className="ml-2 text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de urgencia/testimonial */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                "No esperes a que las cosas se compliquen más"
              </h3>
              
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Cada día cuenta en el desarrollo emocional de tu hijo/a. Cuanto antes comencemos a trabajar juntos, 
                más herramientas tendrán para crecer felices y seguros.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <HiOutlinePhone className="text-green-300 text-xl" />
                  <span className="text-white">Primera consulta sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineEnvelope className="text-blue-300 text-xl" />
                  <span className="text-white">Respuesta en menos de 24 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineHeart className="text-pink-300 text-xl" />
                  <span className="text-white">Acompañamiento cálido y profesional</span>
                </div>
              </div>
            </div>

            {/* Estadísticas/Testimonial */}
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <blockquote className="text-xl text-white italic mb-6">
                  "Llenia nos ayudó a entender mejor las emociones de nuestro hijo. Ahora toda la familia se siente más tranquila y conectada."
                </blockquote>
                
                <div className="text-blue-200 font-medium">
                  - María, madre de Lucas (7 años)
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-blue-200 text-sm">Satisfacción</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-blue-200 text-sm">Años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-blue-200 text-sm">Familias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
