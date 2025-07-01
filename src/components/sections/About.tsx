import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import OptimizedImage from '../OptimizedImage';
// react-icons imports - replacing emojis with proper icons
import { FaUserMd } from 'react-icons/fa';

export default function About() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 ${
            contentVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}
        >
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 delay-200 ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
              {/* Replaced 👩‍⚕ emoji with FaUserMd icon */}
              <FaUserMd className="text-[var(--primary)]" />
              Sobre mí
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-[var(--muted-text)] leading-relaxed text-lg">
              Hola, soy <strong>Llenia Monteagudo Rodríguez</strong>, psicóloga especializada en infancia, familias y vínculos.
            </p>
            <p className="text-[var(--muted-text)] leading-relaxed">
              Trabajo acompañando a niñas, niños y a sus familias cuando las emociones se hacen grandes, cuando los cambios desordenan un poco la casa, y cuando lo que más se necesita no es una solución rápida, sino alguien que escuche, sostenga y oriente con respeto.
            </p>
            <p className="text-[var(--muted-text)] leading-relaxed mb-8">
              Llevo más de 15 años trabajando con infancia y parentalidad, en procesos de duelo, divorcio, inseguridad emocional, miedos, problemas de conducta y desbordes afectivos.
            </p>
          </div>
          
          <a
            href="/sobre-mi"
            className="nav-button bg-[var(--accent)] text-[var(--button-text)] px-6 py-3 rounded-lg hover:bg-[var(--button-hover)] shadow-sm font-semibold inline-flex items-center transition-all duration-300 hover:translate-y-[-2px]"
          >
            Conoce más sobre mi trabajo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        
        <div 
          ref={cardRef}
          className={`bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 transition-all duration-1000 delay-500 ${
            cardVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-8 scale-95'
          }`}
        >
          <div className="text-center mb-6">
            {/* Imagen de la doctora con lazy loading */}
            <div className="mb-6">
              <OptimizedImage
                src="/img/doctora.jpg"
                alt="Llenia Monteagudo Rodríguez - Psicóloga especializada en infancia"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
              ¿Por qué elegí esta profesión?
            </h3>
          </div>
          
          <div className="space-y-4 text-[var(--muted-text)]">
            <p>
              Porque crecí sabiendo que cuando un niño tiene alguien que lo ve, lo nombra con ternura y lo acompaña sin miedo a sus emociones, ese niño florece.
            </p>
            <p>
              Y porque las madres y padres también necesitan un lugar sin juicio, donde sentirse acompañados mientras crían, educan y sanan.
            </p>
            <p className="font-medium text-[var(--text)]">
              Este proyecto nació del deseo de dar herramientas reales, de aliviar las culpas innecesarias y de ayudar a construir puentes emocionales más fuertes en las familias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

