import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { IoLibraryOutline, IoSearchOutline, IoHeartOutline } from 'react-icons/io5';

export default function BibliotecaHero() {
  const { elementRef: heroRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();

  const stats = [
    {
      icon: IoLibraryOutline,
      number: '50+',
      label: 'Recursos especializados',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: IoSearchOutline,
      number: '6',
      label: 'Categorías organizadas',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: IoHeartOutline,
      number: '100%',
      label: 'Basado en evidencia',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative pt-24 pb-16 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Biblioteca 
              <span className={`block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2 transition-all duration-1000 delay-300 ${
                titleVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}>
                Emocional
              </span>
            </h1>
          </div>
          
          <div 
            ref={subtitleRef}
            className={`transition-all duration-1000 delay-500 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Accede a una colección cuidadosamente organizada de recursos terapéuticos. 
              Cartas sanadoras, cuentos transformadores, guías prácticas y herramientas 
              psicoeducativas para acompañar cada momento del desarrollo emocional.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                ✨ Recursos gratuitos disponibles
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                📱 Descarga inmediata
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                🎯 Organizados por situaciones
              </span>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div 
          ref={statsRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 delay-${index * 100} ${
                statsVisible ? 'scale-100' : 'scale-95'
              }`}
            >
              <div className={`bg-gradient-to-br ${stat.color} p-8 text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 skew-x-12 -translate-x-full hover:translate-x-full transform-gpu" />
            </div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-green-400/20 rounded-full blur-xl" />
      </div>
    </section>
  );
}
