import { Users, Heart, Wrench, Lightbulb, Gift } from 'lucide-react';

export default function ApproachAndMethodSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Fondo con gradiente y elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
     
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Principal con animación */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
              Mi metodología de
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              acompañamiento
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un espacio donde la comprensión profunda se encuentra con herramientas prácticas 
            para el bienestar familiar
          </p>
        </div>

        {/* Card Principal con cita inspiracional */}
        <div className="relative mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12 transition-all duration-500">
            {/* Icono decorativo */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H7L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4V15A2,2 0 0,1 20,17H16L14,17Z" />
                </svg>
              </div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto pt-6">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-8">
                <span className="text-6xl text-purple-300 leading-none">"</span>
                Trabajo con una mirada amplia, sensible y práctica, que une la comprensión profunda con herramientas concretas
                <span className="text-6xl text-purple-300 leading-none">"</span>
              </blockquote>
              
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Mi objetivo es que tanto el niño como los adultos encuentren nuevas formas de estar, 
                sentir y vincularse desde un lugar más sano y auténtico.
              </p>
            </div>
          </div>
        </div>

        {/* Grid principal rediseñado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Metodología con diseño moderno */}
          <div className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transition-all duration-500 h-full">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-3 mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                  Mi metodología
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Personalizada", desc: "Adaptada a cada familia", icon: Users },
                  { title: "Sin juicios", desc: "Espacio seguro y libre", icon: Heart },
                  { title: "Práctica", desc: "Herramientas para el día a día", icon: Wrench }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-indigo-50/50 transition-all duration-300">
                    <div className="text-purple-600 mt-1">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experiencia rediseñada */}
          <div className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 transition-all duration-500 h-full">
              
              {/* Badge de experiencia */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 shadow-lg">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">15+</div>
                      <div className="text-sm opacity-90">Años</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-2">
                  Años de experiencia
                </h3>
                <p className="text-gray-600">Acompañando familias en su crecimiento</p>
              </div>
            
              {/* Cita inspiracional */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-purple-100/50">
                <div className="flex items-start space-x-3">
                  <div className="text-purple-600 mt-1">
                    <Gift className="w-8 h-8" />
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Cuando un niño tiene alguien que lo ve y lo acompaña sin miedo a sus emociones, ese niño florece."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}