export default function Philosophy() {
  const principles = [
    {
      title: "Acompañamiento",
      description: "Estamos contigo en cada paso del proceso emocional, brindando apoyo constante y comprensión.",
      illustration: "acompañamiento.webp"
    },
    {
      title: "Crecimiento", 
      description: "Cada emoción es una oportunidad para crecer y aprender sobre nosotros mismos.",
      illustration: "crecimiento.webp"
    },
    {
      title: "Ternura",
      description: "Con respeto, calidez y empatía en cada encuentro terapéutico que compartimos.",
      illustration: "ternura.webp"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
        
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Un espacio donde el dolor
            <span className="block text-transparent font-heading bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              no se evita, se acompaña
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Aquí creemos que llorar, sentir miedo o frustración no es un problema: es parte de crecer.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              La diferencia está en cómo acompañamos a los niños a transitar esas emociones, y cómo ayudamos a los adultos a hacerlo sin sentirse perdidos o solos.
            </p>
          </div>
        </div>
        
        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Ilustración SVG */}
              <div className="mb-6">
                <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
                  <img
                    src={`/illustrations/imagenes/philosophy/${principle.illustration}`}
                    alt={`Ilustración representando ${principle.title}`}
                    className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {principle.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decorative quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
            "Las emociones no son el enemigo, son la brújula que nos guía hacia una vida más auténtica y plena"
          </blockquote>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}