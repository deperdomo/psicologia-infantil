import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function NewsletterCTA() {
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={ctaRef}
      className="pb-16 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 text-center relative overflow-hidden transition-all duration-1000 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative z-10">
            <div className="mb-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                ¿Quieres acceso a más recursos?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Suscríbete a nuestro boletín y recibe recursos gratuitos cada mes, 
                además de acceso anticipado a nuevas colecciones.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--highlight)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]/20 transition-all duration-300"
              />
              <button className="bg-[var(--highlight)] hover:bg-[var(--highlight)]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Suscribirme</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
            
            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <span>✅</span>
                <span>Recursos gratuitos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🎯</span>
                <span>Contenido exclusivo</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>⚡</span>
                <span>Acceso anticipado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
