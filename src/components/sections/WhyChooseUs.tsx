import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports modernos y con más personalidad
import { HiOutlineHeart, HiOutlineShieldCheck, HiOutlineClock, HiOutlineChatBubbleLeftRight, HiOutlineCheckBadge, HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi2';

export default function WhyChooseUs() {
  const { setRef, visibleItems } = useStaggeredScrollAnimation(6, 250);

  const benefits = [
    {
      id: 1,
      title: "Enfoque Completamente Personalizado",
      description: "No hay dos niños iguales, ni dos familias iguales. Cada proceso terapéutico se diseña específicamente para tu hijo/a, respetando su ritmo, sus intereses y sus necesidades únicas.",
      detailedDescription: "Utilizamos técnicas adaptadas a la edad y personalidad de cada niño, desde juego terapéutico hasta técnicas narrativas, siempre desde un enfoque cálido y respetuoso.",
      icon: <HiOutlineHeart className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/8923659/pexels-photo-8923659.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      stats: "100% personalizado"
    },
    {
      id: 2,
      title: "Confidencialidad y Espacio Seguro",
      description: "Tu hijo/a y tu familia necesitan sentirse completamente seguros para abrirse y crecer. Garantizamos un espacio de absoluta confidencialidad y respeto.",
      detailedDescription: "Todo lo que se comparte en consulta está protegido por el secreto profesional. Creamos un ambiente donde expresarse libremente es no solo posible, sino alentado.",
      icon: <HiOutlineShieldCheck className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/8923664/pexels-photo-8923664.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      stats: "Máxima privacidad"
    },
    {
      id: 3,
      title: "Flexibilidad que se Adapta a Ti",
      description: "Entendemos que cada familia tiene sus propios horarios y necesidades. Por eso ofrecemos sesiones presenciales y online, con horarios flexibles.",
      detailedDescription: "Sesiones en diferentes modalidades: presencial en consulta, online desde casa, o sesiones familiares. Nos adaptamos a lo que mejor funcione para ustedes.",
      icon: <HiOutlineClock className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/8923036/pexels-photo-8923036.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      stats: "Horarios flexibles"
    },
    {
      id: 4,
      title: "Comunicación Transparente y Continua",
      description: "Mantenemos una comunicación abierta contigo en cada paso del proceso. Tu feedback es fundamental para adaptar el acompañamiento terapéutico.",
      detailedDescription: "Sesiones regulares de seguimiento familiar, informes de progreso y disponibilidad para resolver dudas entre sesiones cuando sea necesario.",
      icon: <HiOutlineChatBubbleLeftRight className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/8841444/pexels-photo-8841444.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      stats: "Comunicación abierta"
    },
    {
      id: 5,
      title: "Sin Presiones ni Compromisos Largos",
      description: "Tienes total libertad para decidir el ritmo y la duración del proceso. Puedes pausar, continuar o finalizar cuando lo consideres apropiado.",
      detailedDescription: "Trabajamos sesión a sesión, respetando tus decisiones y las necesidades cambiantes de tu familia. No hay contratos largos ni penalizaciones.",
      icon: <HiOutlineCheckBadge className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/8923665/pexels-photo-8923665.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      stats: "Total libertad"
    },
    {
      id: 6,
      title: "Trabajo en Equipo: Familia y Terapeuta",
      description: "No trabajo 'sobre' tu familia, sino 'con' tu familia. Tu participación activa y nuestro acompañamiento profesional crean la magia del cambio.",
      detailedDescription: "Sesiones familiares, estrategias para implementar en casa y herramientas prácticas que puedes usar en el día a día con tu hijo/a.",
      icon: <HiOutlineUserGroup className="text-4xl text-white" />,
      image: "https://images.pexels.com/photos/8841302/pexels-photo-8841302.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      stats: "Colaboración total"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header mejorado */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-8 shadow-2xl">
            <HiOutlineSparkles className="text-3xl text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Por qué confiar en mí?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Más de 15 años acompañando familias me han enseñado que cada proceso es único. 
            Aquí encontrarás un enfoque personalizado, respetuoso y efectivo.
          </p>
        </div>

        {/* Grid de beneficios con diseño alternado */}
        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              ref={setRef(index)}
              className={`transition-all duration-1000 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                {/* Imagen con efectos */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500`}></div>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="relative w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                    />
                    
                    {/* Estadística flotante */}
                    <div className={`absolute -bottom-6 -right-6 bg-gradient-to-r ${benefit.color} text-white px-6 py-3 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="font-bold text-sm">{benefit.stats}</span>
                    </div>

                    {/* Icono flotante */}
                    <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {benefit.icon}
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="lg:w-1/2 space-y-8">
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${benefit.color} text-white rounded-full text-sm font-bold shadow-lg`}>
                    Beneficio {benefit.id}
                  </div>
                  
                  <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.detailedDescription}
                  </p>

                  {/* Indicador de progreso animado */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Nivel de personalización</span>
                      <span className="text-sm font-bold text-gray-900">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${benefit.color} rounded-full transform origin-left transition-all duration-2000 delay-500`}
                        style={{
                          width: visibleItems.has(index) ? '100%' : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección final con testimonial */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <HiOutlineHeart className="text-3xl text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">
                Tu familia merece el mejor acompañamiento
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto italic">
                "Cada niño tiene su propio ritmo y su propia forma de crecer. Mi trabajo es acompañar ese proceso único, 
                respetando lo que cada familia necesita y celebrando cada pequeño avance."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-blue-100">Familias acompañadas</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-blue-100">Años de experiencia</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-blue-100">Familias satisfechas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

