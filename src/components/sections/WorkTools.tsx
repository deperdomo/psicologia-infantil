export default function WorkTools() {
  const tools = [
    {
      id: 1,
      title: "Juego Terapéutico",
      description: "Conectamos con las emociones infantiles a través del juego y cuentos.",
      image: "https://images.pexels.com/photos/6966341/pexels-photo-6966341.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Juego terapéutico - Niña pintando creativamente"
    },
    {
      id: 2,
      title: "Guías para Padres",
      description: "Recursos prácticos para acompañar a tu hijo/a en casa.",
      image: "https://images.pexels.com/photos/6274956/pexels-photo-6274956.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Guías para padres - Madre leyendo con hija"
    },
    {
      id: 3,
      title: "Regulación Emocional",
      description: "Estrategias personalizadas según la edad y necesidades de cada niño/a.",
      image: "https://images.pexels.com/photos/8654221/pexels-photo-8654221.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Técnicas de regulación emocional - Niña con cartas educativas"
    },
    {
      id: 4,
      title: "Crianza Respetuosa",
      description: "Límites necesarios desde el amor y respeto mutuo.",
      image: "https://images.pexels.com/photos/9127745/pexels-photo-9127745.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Crianza respetuosa - Padre e hijo leyendo juntos"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mt-15">

          {/* Header Section */}
          <div className="text-center mb-20">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Herramientas de Trabajo
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Enfoque integral con psicología emocional, vínculo afectivo y escucha activa.
              </p>
            </div>
          </div>

          {/* Grid con overlay de texto */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-white/20"
              >
                {/* Imagen que ocupa todo el espacio */}
                <div className="relative h-80 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradiente para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Contenido superpuesto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                      {tool.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
