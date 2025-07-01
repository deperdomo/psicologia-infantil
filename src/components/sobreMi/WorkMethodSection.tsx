import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// react-icons imports - replacing emojis with proper icons
import { IoPersonAdd, IoStar, IoTrendingUp, IoChatbubble, IoHeartOutline } from 'react-icons/io5'; // Various method icons
import { FaHandshake } from 'react-icons/fa'; // Handshake icon

export default function WorkMethodSection() {
  // Hooks para animaciones de scroll
  const { elementRef: sectionRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Contenido principal */}
          <div className="lg:col-span-3 space-y-12">
            <div 
              ref={headerRef}
              className={`space-y-8 transition-all duration-1000 ${
                headerVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center transition-all duration-1000 delay-200 ${
                  headerVisible 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-75 rotate-12'
                }`}>
                  {/* Replaced 💬 emoji with IoChatbubble icon */}
                  <IoChatbubble className="text-2xl text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className={`text-4xl md:text-5xl font-bold text-[var(--text)] transition-all duration-1000 delay-400 ${
                    headerVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>¿Cómo trabajo?</h2>
                  <div className={`w-16 h-1 bg-[var(--highlight)] rounded-full mt-2 transition-all duration-1000 delay-600 ${
                    headerVisible 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-75'
                  }`}></div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className={`text-xl text-[var(--muted-text)] leading-relaxed transition-all duration-1000 delay-800 ${
                  headerVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  Acompaño a niñas, niños y sus familias cuando las emociones se hacen grandes, cuando los cambios desordenan un poco la casa, y cuando lo que más se necesita no es una solución rápida, sino alguien que escuche, sostenga y oriente con respeto.
                </p>
              </div>
            </div>

            {/* Cards de metodología */}
            <div 
              ref={contentRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >              <div className={`bg-[var(--card-background)] border border-[var(--border-light)] rounded-2xl p-6 shadow-md transition-all duration-1000 delay-300 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/20 rounded-xl flex items-center justify-center">
                    {/* Replaced 🎯 emoji with IoPersonAdd icon for personalized therapy */}
                    <IoPersonAdd className="text-xl text-[var(--primary)]" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">Terapia personalizada</h4>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed">
                    Cada proceso es único y se adapta a las necesidades específicas de cada familia.
                  </p>
                </div>
              </div>
              
              <div className={`bg-[var(--card-background)] border border-[var(--border-light)] rounded-2xl p-6 shadow-md transition-all duration-1000 delay-500 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[var(--secondary)]/20 rounded-xl flex items-center justify-center">
                    {/* Replaced 🤝 emoji with FaHandshake icon for non-judgmental approach */}
                    <FaHandshake className="text-xl text-[var(--secondary)]" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">Sin juicios</h4>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed">
                    Un espacio seguro donde padres e hijos pueden expresarse libremente.
                  </p>
                </div>
              </div>
                <div className={`bg-[var(--card-background)] border border-[var(--border-light)] rounded-2xl p-6 shadow-md transition-all duration-1000 delay-700 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-xl flex items-center justify-center">
                    {/* Replaced 🌟 emoji with IoStar icon for authentic growth */}
                    <IoStar className="text-xl text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">Crecimiento auténtico</h4>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed">
                    Promovemos el desarrollo desde la propia esencia de cada niño.
                  </p>
                </div>
              </div>
                <div className={`bg-[var(--card-background)] border border-[var(--border-light)] rounded-2xl p-6 shadow-md transition-all duration-1000 delay-900 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[var(--highlight)]/20 rounded-xl flex items-center justify-center">
                    {/* Replaced 📈 emoji with IoTrendingUp icon for practical tools */}
                    <IoTrendingUp className="text-xl text-[var(--highlight)]" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">Herramientas prácticas</h4>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed">
                    Proporcionamos estrategias concretas para el día a día familiar.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--hover-bg)] border-l-4 border-[var(--highlight)] rounded-r-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--highlight)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">15+</span>
                </div>
                <div>
                  <p className="text-[var(--text)] font-medium mb-2">Experiencia profesional</p>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed">
                    Más de 15 años acompañando procesos de duelo, divorcio, inseguridad emocional, miedos, problemas de conducta y desbordes afectivos en la infancia y la familia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar con historia personal */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-8">
              <div className="bg-[var(--card-background)] border border-[var(--border-light)] rounded-3xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {/* Replaced 🤍 emoji with IoHeartOutline icon */}
                  <IoHeartOutline className="text-3xl text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                    ¿Por qué elegí esta profesión?
                  </h3>
                </div>
                
                <div className="space-y-6 text-[var(--muted-text)]">
                  <p className="leading-relaxed">
                    Porque crecí sabiendo que cuando un niño tiene alguien que lo ve, lo nombra con ternura y lo acompaña sin miedo a sus emociones, ese niño florece.
                  </p>
                  <p className="leading-relaxed">
                    Y porque las madres y padres también necesitan un lugar sin juicio, donde sentirse acompañados mientras crían, educan y sanan.
                  </p>
                  
                  <div className="bg-[var(--hover-bg)] rounded-2xl p-6 border-l-4 border-[var(--primary)]">
                    <p className="font-medium text-[var(--text)] leading-relaxed">
                      Este proyecto nació del deseo de dar herramientas reales, de aliviar las culpas innecesarias y de ayudar a construir puentes emocionales más fuertes en las familias.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mini estadísticas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--card-background)] border border-[var(--border-light)] rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--highlight)] mb-1">Madrid</div>
                  <div className="text-xs text-[var(--muted-text)]">Presencial</div>
                </div>
                <div className="bg-[var(--card-background)] border border-[var(--border-light)] rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--highlight)] mb-1">España</div>
                  <div className="text-xs text-[var(--muted-text)]">Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
