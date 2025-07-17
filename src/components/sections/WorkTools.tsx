export default function WorkTools() {
  const tools = [
    {
      id: 1,
      title: "Juego terapéutico y cuentos emocionales",
      description: "Utilizamos el juego y los cuentos como herramientas principales para conectar con el mundo emocional de los niños.",
      image: "https://images.pexels.com/photos/6966341/pexels-photo-6966341.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Juego terapéutico - Niña pintando creativamente"
    },
    {
      id: 2,
      title: "Guías de acompañamiento para padres",
      description: "Recursos prácticos y personalizados para que puedas acompañar a tu hijo/a en casa.",
      image: "https://images.pexels.com/photos/6274956/pexels-photo-6274956.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Guías para padres - Madre leyendo con hija"
    },
    {
      id: 3,
      title: "Técnicas de regulación emocional infantil",
      description: "Estrategias adaptadas a la edad y necesidades específicas de cada niño/a.",
      image: "https://images.pexels.com/photos/8654221/pexels-photo-8654221.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Técnicas de regulación emocional - Niña con cartas educativas"
    },
    {
      id: 4,
      title: "Orientación en crianza respetuosa con límites",
      description: "Aprende a poner límites necesarios desde el amor y el respeto mutuo.",
      image: "https://images.pexels.com/photos/9127745/pexels-photo-9127745.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Crianza respetuosa - Padre e hijo leyendo juntos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Herramientas de trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mi enfoque integra la psicología emocional, el vínculo afectivo, el juego y la escucha activa, tanto con los niños como con los adultos que los acompañan.
            </p>
          </div>

          {/* Grid de herramientas */}
          <div className="grid md:grid-cols-2 gap-12">
            {tools.map((tool) => (
              <div 
                key={tool.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row h-auto lg:h-95">
                  {/* Imagen */}
                  <div className="lg:w-1/2 h-64 lg:h-full">
                    <div className="h-full w-full overflow-hidden">
                      <img
                        src={tool.image}
                        alt={tool.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
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
