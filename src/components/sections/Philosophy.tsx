import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedSection from '../AnimatedSection';
// react-icons imports - replacing emojis with proper icons
import { GiSprout } from 'react-icons/gi';
import { IoHeart, IoHappy } from 'react-icons/io5';

export default function Philosophy() {
  const { setRef, visibleItems } = useStaggeredScrollAnimation(3, 200);

  const principles = [
    {
      icon: <IoHappy className="text-4xl mb-4 animate-pulse-soft" />,
      title: "Acompañamiento",
      description: "Estamos contigo en cada paso del proceso emocional"
    },
    {
      icon: <GiSprout className="text-4xl mb-4 animate-pulse-soft" />,
      title: "Crecimiento", 
      description: "Cada emoción es una oportunidad para crecer y aprender"
    },
    {
      icon: <IoHeart className="text-4xl mb-4 animate-pulse-soft" />,
      title: "Ternura",
      description: "Con respeto y calidez en cada encuentro terapéutico"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
            Un espacio donde el dolor no se evita, se acompaña
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--muted-text)] leading-relaxed mb-6">
              Aquí creemos que llorar, sentir miedo o frustración no es un problema: es parte de crecer.
            </p>
            <p className="text-lg text-[var(--text)] font-medium">
              La diferencia está en cómo acompañamos a los niños a transitar esas emociones, y cómo ayudamos a los adultos a hacerlo sin sentirse perdidos o solos.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              ref={setRef(index)}
              className={`bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-1000 hover:bg-white/30 hover:scale-105 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {principle.icon}
              <h3 className="text-xl font-bold text-[var(--highlight)] mb-3">{principle.title}</h3>
              <p className="text-[var(--muted-text)]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}