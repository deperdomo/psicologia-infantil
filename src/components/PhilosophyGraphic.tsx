import { IoSparkles } from 'react-icons/io5';

interface PhilosophyGraphicProps {
  cardVisible: boolean;
}

export default function PhilosophyGraphic({ cardVisible }: PhilosophyGraphicProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* ===== FONDO PRINCIPAL ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl border border-gray-200/50 shadow-xl">
        {/* Efecto radial sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,107,116,0.05),transparent_50%)]"></div>
        
        {/* Ondas de fondo animadas */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-pink-200/20 to-purple-200/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* ===== PARTÍCULAS FLOTANTES ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/40 rounded-full floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* ===== SVG - CÍRCULOS ANIMADOS ===== */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
        {/* Círculo exterior - Comprensión (Azul) */}
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="691 691"
          strokeDashoffset="691"
          className={`transform -rotate-180 origin-center ${cardVisible ? 'draw-circle-1' : ''}`}
          filter="url(#glow1)"
        />
        
        {/* Círculo medio - Crecimiento (Púrpura) */}
        <circle
          cx="300"
          cy="300"
          r="170"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="534 534"
          strokeDashoffset="534"
          className={`transform -rotate-180 origin-center ${cardVisible ? 'draw-circle-2' : ''}`}
          filter="url(#glow2)"
        />
        
        {/* Círculo interior - Autenticidad (Rosa) */}
        <circle
          cx="300"
          cy="300"
          r="120"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="377 377"
          strokeDashoffset="377"
          className={`transform -rotate-180 origin-center ${cardVisible ? 'draw-circle-3' : ''}`}
          filter="url(#glow3)"
        />
        
        {/* ===== DEFINICIONES SVG ===== */}
        <defs>
          {/* Gradiente Azul - Comprensión */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#60A5FA" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#DBEAFE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Gradiente Púrpura - Crecimiento */}
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#DDD6FE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Gradiente Rosa - Autenticidad */}
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E06B74" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#EC4899" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#F9A8D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FCE7F3" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Filtros de brillo */}
          <filter id="glow1">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* ===== CENTRO DEL GRÁFICO ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 bg-white/80 backdrop-blur-sm rounded-full p-4 sm:p-5 lg:p-6 shadow-xl border border-gray-200/50 relative overflow-hidden">
          {/* Efecto de brillo interno */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            {/* Icono central */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-spin"></div>
              <IoSparkles className="text-2xl sm:text-2xl lg:text-3xl text-white relative z-10 animate-pulse" />
            </div>
            
            {/* Texto central */}
            <div className="space-y-1 sm:space-y-1 lg:space-y-2 mt-2 sm:mt-3 lg:mt-4">
              <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">Filosofía</p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Integral</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* ===== PALABRAS CLAVE ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Comprensión - Superior izquierda */}
        <div className="absolute left-[10%] top-[10%] sm:left-[12%] sm:top-[12%] lg:left-[15%] lg:top-[15%] transform -rotate-12">
          <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-1' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-blue-200/30 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
              <span className="relative z-10">Comprensión</span>
            </div>
          </div>
        </div>
        
        {/* Crecimiento - Superior derecha */}
        <div className="absolute right-[10%] top-[20%] sm:right-[12%] sm:top-[22%] lg:right-[15%] lg:top-[25%] transform rotate-12">
          <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-2' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-purple-200/30 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
              <span className="relative z-10">Crecimiento</span>
            </div>
          </div>
        </div>
        
        {/* Autenticidad - Inferior central */}
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 rotate-6">
          <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-3' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-pink-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-pink-200/30 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
              <span className="relative z-10">Autenticidad</span>
            </div>
          </div>
        </div>
        
        {/* ===== ELEMENTOS DECORATIVOS ===== */}
        {/* Líneas de conexión */}
        <div className="absolute top-1/4 left-1/4 w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-blue-300/40 to-transparent transform rotate-45"></div>
        <div className="absolute top-1/4 right-1/4 w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-purple-300/40 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/2 w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-pink-300/40 to-transparent transform -translate-x-1/2 rotate-90"></div>
        
        {/* Puntos de conexión */}
        <div className="absolute top-[15%] left-[15%] sm:top-[18%] sm:left-[18%] lg:top-[20%] lg:left-[20%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-[25%] right-[15%] sm:top-[28%] sm:right-[18%] lg:top-[30%] lg:right-[20%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[15%] left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* ===== ESTILOS CSS ===== */}
      <style>{`
        /* Animaciones de círculos */
        @keyframes drawCircle1 {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes drawCircle2 {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes drawCircle3 {
          to { stroke-dashoffset: 0; }
        }
        
        /* Animación de palabras */
        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(-15px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Animación de partículas */
        @keyframes floatingParticle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(180deg);
          }
        }
        
        /* Clases de animación */
        .draw-circle-1 {
          animation: drawCircle1 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.5s;
        }
        
        .draw-circle-2 {
          animation: drawCircle2 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1.2s;
        }
        
        .draw-circle-3 {
          animation: drawCircle3 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1.8s;
        }
        
        .fade-in-word-1 {
          animation: fadeInWord 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 4s;
        }
        
        .fade-in-word-2 {
          animation: fadeInWord 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 4.4s;
        }
        
        .fade-in-word-3 {
          animation: fadeInWord 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 4.8s;
        }
        
        .floating-particle {
          animation: floatingParticle linear infinite;
        }
      `}</style>
    </div>
  );
}