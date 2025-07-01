import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - replacing emojis with proper icons
import { GiSprout } from 'react-icons/gi';
import { IoLink, IoHeart, IoConstruct } from 'react-icons/io5';

export default function ApproachSection() {
  // Hooks para animaciones de scroll
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl mb-6 transition-all duration-1000 delay-200 ${
            headerVisible 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-75 -rotate-12'
          }`}>
            <GiSprout className="text-2xl" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-[var(--text)] mb-6 transition-all duration-1000 delay-400 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Mi enfoque terapéutico
          </h2>
          <p className={`text-xl text-[var(--muted-text)] leading-relaxed transition-all duration-1000 delay-600 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Una mirada integral que honra la singularidad de cada familia y respeta los tiempos de cada proceso de crecimiento.
          </p>
        </div>        {/* Grid de enfoques con diseño moderno */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">          {/* Enfoque Sistémico */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-8 h-full shadow-lg">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center">
                  {/* Replaced 🔗 emoji with IoLink icon */}
                  <IoLink className="text-2xl text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Sistémico</h3>
                  <p className="text-[var(--muted-text)] leading-relaxed mb-4">
                    Porque los niños no crecen en el vacío, sino dentro de una red de relaciones que los sostienen y los afectan.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Entorno familiar y escolar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Dinámicas relacionales</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Acompañamiento a padres</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Enfoque Humanista */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-8 h-full shadow-lg">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] rounded-2xl flex items-center justify-center">
                  {/* Replaced 💛 emoji with IoHeart icon */}
                  <IoHeart className="text-2xl text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Humanista</h3>
                  <p className="text-[var(--muted-text)] leading-relaxed mb-4">
                    Cada persona merece ser vista, escuchada y aceptada tal como es, sin juicios ni etiquetas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--secondary)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Mirada empática y cálida</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--secondary)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Aceptación incondicional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--secondary)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Crecimiento desde el amor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Enfoque Integrador */}
          <div className={`relative transition-all duration-1000 delay-700 ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-8 h-full shadow-lg">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-2xl flex items-center justify-center">
                  {/* Replaced 🔧 emoji with IoConstruct icon */}
                  <IoConstruct className="text-2xl text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Integrador</h3>
                  <p className="text-[var(--muted-text)] leading-relaxed mb-4">
                    La realidad es compleja y requiere múltiples herramientas para abordar cada situación única.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Juego terapéutico</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Terapia emocional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                      <span className="text-sm text-[var(--muted-text)]">Psicoeducación</span>
                    </div>
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
