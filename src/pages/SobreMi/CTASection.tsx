import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - more dynamic and engaging icons
import { IoLocationSharp, IoChatbubbleEllipses, IoVideocam, IoHeart, IoStar, IoFlash } from 'react-icons/io5';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function CTASection() {
  // Hooks para animaciones de scroll
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Elementos decorativos de fondo animados */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl transition-all duration-2000 ${sectionVisible
          ? 'opacity-100 scale-100 animate-pulse'
          : 'opacity-0 scale-75'
          }`}></div>
        <div className={`absolute bottom-10 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl transition-all duration-2000 delay-500 ${sectionVisible
          ? 'opacity-100 scale-100 animate-pulse'
          : 'opacity-0 scale-75'
          }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl transition-all duration-2000 delay-1000 ${sectionVisible
          ? 'opacity-100 scale-100 animate-pulse'
          : 'opacity-0 scale-75'
          }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero CTA Principal */}
        <div
          ref={heroRef}
          className={`text-center mb-20 transition-all duration-1000 ${heroVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
        >

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 transition-all duration-1000 delay-400 ${heroVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}>
            ¿Comenzamos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 block">
              juntos?
            </span>
          </h2>

          <p className={`text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-600 ${heroVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}>
            Si quieres saber si puedo ayudarte en tu caso particular, puedes escribirme sin compromiso.
            <span className="block mt-4 text-xl italic font-medium text-purple-700">
              "El primer paso hacia el cambio es reconocer que mereces apoyo."
            </span>
          </p>
        </div>

        {/* Modalidades de trabajo con diseño innovador */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20"
        >
          {/* Modalidad Presencial */}
          <a href="/contacto" >
            <div className={`group relative bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${cardsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`} >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <IoLocationSharp className="text-3xl text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    Presencial
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <IoStar className="text-purple-600 text-lg" />
                    </div>
                    <span className="text-xl font-semibold text-purple-700">Madrid, España</span>
                  </div>
                </div>

                <div className="space-y-3 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Consulta cálida y acogedora en el corazón de Madrid. Un espacio pensado para que te sientas como en casa.
                  </p>
                  <div className="flex items-center space-x-3 text-sm">
                    <IoFlash className="text-purple-500" />
                    <span>Ambiente relajado y profesional</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <IoFlash className="text-purple-500" />
                    <span>Fácil acceso en transporte público</span>
                  </div>
                </div>


              </div>

            </div>
          </a>
          {/* Modalidad Online */}
          <a href="/contacto" >
            <div className={`group relative bg-white/80 backdrop-blur-lg border border-blue-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${cardsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: '500ms' }}>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <IoVideocam className="text-3xl text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    Online
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <IoStar className="text-blue-600 text-lg" />
                    </div>
                    <span className="text-xl font-semibold text-blue-700">Todo España</span>
                  </div>
                </div>

                <div className="space-y-3 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Desde la comodidad de tu hogar, sin perder la cercanía y la calidez de una consulta presencial.
                  </p>
                  <div className="flex items-center space-x-3 text-sm">
                    <IoFlash className="text-blue-500" />
                    <span>Horarios flexibles adaptados a ti</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <IoFlash className="text-blue-500" />
                    <span>Plataforma segura y confidencial</span>
                  </div>
                </div>

              </div>

            </div>
          </a>
        </div>

        {/* CTA Principal con diseño innovador */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ${ctaVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
            }`}
        >
          <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Botones de contacto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://wa.me/34641123622"
                  className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-4">
                    <FaWhatsapp className="text-3xl" />
                    <div className="text-left">
                      <div className="text-xl font-bold">WhatsApp</div>
                      <div className="text-green-100 text-sm">Respuesta inmediata</div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:lleniavinculoycrecimiento@gmail.com"
                  className="group relative bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-4">
                    <FaEnvelope className="text-3xl" />
                    <div className="text-left">
                      <div className="text-xl font-bold">Email</div>
                      <div className="text-purple-100 text-sm">Respuesta en 24h</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Mensaje de apoyo */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <IoChatbubbleEllipses className="text-2xl text-purple-500" />
                  <span className="text-lg text-gray-600">O simplemente cuéntame tu situación</span>
                </div>

                <a
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="mr-3">Formulario de contacto</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>

                <p className="text-sm text-gray-500 mt-4">
                  Primera consulta informativa gratuita • Sin compromiso
                </p>
              </div>

              {/* Garantía de privacidad */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-purple-500">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IoHeart className="text-purple-600 text-lg" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">Confidencialidad garantizada</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tu privacidad es sagrada. Todo lo que compartamos queda bajo estricto secreto profesional y nunca será compartido con terceros.
                    </p>
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
