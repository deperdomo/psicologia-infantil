export default function ServicesOffering() {
  const services = [
    {
      id: 1,
      category: "Para niños y niñas",
      title: "Terapia Infantil",
      description: "Para niños y niñas que presentan ansiedad, inseguridad, cambios de conducta, baja autoestima, miedos o dificultades para adaptarse a nuevas situaciones.",
      image: "img/servicesOffering/terapia-ingantil.webp",
      alt: "Terapia infantil - Psicóloga trabajando con niña",
      color: "blue",
      features: [
        "Gestión de ansiedad y miedos",
        "Fortalecimiento de la autoestima",
        "Adaptación a nuevas situaciones",
        "Técnicas lúdicas y terapéuticas"
      ],
      imagePosition: "left"
    },
    {
      id: 2,
      category: "Para madres y padres",
      title: "Orientación a Madres y Padres",
      description: "Para acompañarte a ti, como figura clave en la vida emocional de tu hijo/a. Te ayudo a comprender, validar y guiar, sin sobreproteger ni juzgarte.",
      image: "https://images.pexels.com/photos/7653084/pexels-photo-7653084.jpeg",
      alt: "Orientación a padres - Consulta familiar profesional",
      color: "pink",
      features: [
        "Herramientas de crianza consciente",
        "Manejo de límites y conflictos",
        "Fortalecimiento del vínculo",
        "Apoyo sin juicio"
      ],
      imagePosition: "right"
    },
    {
      id: 3,
      category: "Momentos de cambio",
      title: "Acompañamiento en Cambios Familiares",
      description: "Separaciones, mudanzas, llegada de nuevas parejas o hermanos... Te acompaño a ti y/o a tu hijo/a en el proceso de adaptación emocional, con mayor seguridad y herramientas.",
      image: "https://images.pexels.com/photos/23495757/pexels-photo-23495757.jpeg",
      alt: "Acompañamiento familiar - Terapia de cambios familiares",
      color: "green",
      features: [
        "Separaciones y divorcios",
        "Llegada de nuevos hermanos",
        "Mudanzas y cambios de entorno",
        "Nuevas estructuras familiares"
      ],
      imagePosition: "left"
    }
  ];

  const colorClasses = {
    blue: {
      badge: "bg-blue-100 text-blue-800",
      dot: "bg-blue-500"
    },
    pink: {
      badge: "bg-pink-100 text-pink-800",
      dot: "bg-pink-500"
    },
    green: {
      badge: "bg-green-100 text-green-800",
      dot: "bg-green-500"
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="flex flex-col items-center mb-20 px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight flex flex-wrap justify-center items-center gap-x-0 text-center">
              ¿Qué puedo ofrecerte?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Trabajo desde un enfoque respetuoso, integrador y cercano, que combina psicología infantil,
                orientación a madres y padres, y recursos terapéuticos adaptados a cada familia.
              </p>
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="grid lg:grid-cols-1 gap-12 mb-16">
            {services.map((service) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              const isImageLeft = service.imagePosition === 'left';

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Imagen */}
                    <div className="lg:w-1/2">
                      <div className="h-80 lg:h-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className={`inline-flex items-center px-3 py-1 ${colors.badge} rounded-full text-sm font-medium mb-4 w-fit`}>
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mr-2`}></div>
                        {service.category}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className={`w-2 h-2 ${colors.dot} rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
