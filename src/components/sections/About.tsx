export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido Principal */}
          <div className="space-y-8">
            {/* Header con icono */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hola, soy
                <span className="block text-transparent font-heading bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Llenia Monteagudo
                </span>
              </h2>
              <p className="text-xl text-purple-600 font-semibold mt-2">
                Psicóloga especializada en infancia, familias y vínculos
              </p>
            </div>
            
            {/* Descripción personal */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trabajo acompañando a niñas, niños y a sus familias cuando las emociones se hacen grandes, cuando los cambios desordenan un poco la casa, y cuando lo que más se necesita no es una solución rápida, sino alguien que escuche, sostenga y oriente con respeto.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-purple-700">Llevo más de 15 años</span> trabajando con infancia y parentalidad, en procesos de duelo, divorcio, inseguridad emocional, miedos, problemas de conducta y desbordes afectivos.
                </p>
              </div>
            </div>
            
            {/* Botón de acción */}
            <div className="pt-4">
              <a
                href="/sobre-mi"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg font-semibold"
              >
                <span>Conoce más sobre mi trabajo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Tarjeta Personal con Imagen */}
          <div className="relative">
            {/* Tarjeta principal */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Decoración de fondo en la tarjeta */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-2xl"></div>
              
              {/* Imagen personal */}
              <div className="text-center mb-8 relative z-10">
                <div className="relative inline-block">
                  <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-1 shadow-lg">
                    <img
                      src="/img/llenia/llenia.jpg"
                      alt="Llenia Monteagudo Rodríguez - Psicóloga especializada en infancia"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* Indicador online */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              </div>
              
              {/* Pregunta destacada */}
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  ¿Por qué elegí esta 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> profesión?</span>
                </h3>
              </div>
              
              {/* Respuesta personal */}
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Porque crecí sabiendo que cuando un niño tiene alguien que lo ve, lo nombra con ternura y lo acompaña sin miedo a sus emociones, <strong className="text-purple-700">ese niño florece</strong>.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Y porque las madres y padres también necesitan un lugar sin juicio, donde <strong className="text-pink-700">sentirse acompañados</strong> mientras crían, educan y sanan.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mt-6 border-l-4 border-gradient-to-b from-purple-500 to-pink-500">
                  <p className="font-medium text-gray-800 leading-relaxed">
                    💝 Este proyecto nació del deseo de dar herramientas reales, de aliviar las culpas innecesarias y de ayudar a construir puentes emocionales más fuertes en las familias.
                  </p>
                </div>
              </div>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">∞</div>
                  <div className="text-sm text-gray-600">Familias acompañadas</div>
                </div>
              </div>
            </div>

            {/* Elemento flotante decorativo */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-70 blur-sm"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

