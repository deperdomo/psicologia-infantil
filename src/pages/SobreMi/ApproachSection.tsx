import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - replacing emojis with proper icons
import { IoLink, IoHeart, IoConstruct } from 'react-icons/io5';
import ApproachCard from './ApproachCard';

export default function ApproachSection() {
  // Hooks para animaciones de scroll
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  // Datos de las tarjetas de enfoque
  const approachData = [
    {
      title: "Sistémico",
      description: "Porque los niños no crecen en el vacío, sino dentro de una red de relaciones que los sostienen y los afectan.",
      IconComponent: IoLink,
      features: [
        "Entorno familiar y escolar",
        "Dinámicas relacionales", 
        "Acompañamiento a padres"
      ],
      colorScheme: 'blue' as const,
      delay: 300
    },
    {
      title: "Humanista",
      description: "Cada persona merece ser vista, escuchada y aceptada tal como es, sin juicios ni etiquetas.",
      IconComponent: IoHeart,
      features: [
        "Mirada empática y cálida",
        "Aceptación incondicional",
        "Crecimiento desde el amor"
      ],
      colorScheme: 'purple' as const,
      delay: 500
    },
    {
      title: "Integrador",
      description: "La realidad es compleja y requiere múltiples herramientas para abordar cada situación única.",
      IconComponent: IoConstruct,
      features: [
        "Juego terapéutico",
        "Terapia emocional",
        "Psicoeducación"
      ],
      colorScheme: 'pink' as const,
      delay: 700
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-400 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Mi enfoque 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> terapéutico</span>
          </h2>
          <p className={`text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Una mirada integral que honra la singularidad de cada familia y respeta los tiempos de cada proceso de crecimiento.
          </p>
        </div>

        {/* Grid de enfoques con diseño moderno */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {approachData.map((approach) => (
            <ApproachCard
              key={approach.title}
              title={approach.title}
              description={approach.description}
              IconComponent={approach.IconComponent}
              features={approach.features}
              colorScheme={approach.colorScheme}
              isVisible={sectionVisible}
              delay={approach.delay}
            />
          ))}
        </div>

        {/* Sección adicional con call-to-action sutil */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-900 ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Mi compromiso es crear un espacio seguro donde cada niño y cada familia pueda encontrar su propio camino hacia el bienestar emocional."
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}