import { IoSparkles } from 'react-icons/io5';

interface PhilosophyGraphicProps {
  cardVisible: boolean;
}

export default function PhilosophyGraphic({ cardVisible }: PhilosophyGraphicProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fondo suave con gradiente cálido */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl border border-gray-200/50 shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,107,116,0.05),transparent_50%)]"></div>
        
        {/* Ondas de fondo sutiles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-pink-200/20 to-purple-200/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Partículas flotantes sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
      
      {/* SVG para las líneas semicirculares con colores actualizados */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
        {/* Línea semicircular 1 - Comprensión (Azul suave) - Exterior */}
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
        {/* Línea semicircular 2 - Crecimiento (Púrpura suave) - Medio */}
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
        {/* Línea semicircular 3 - Autenticidad (Rosa cálido) - Interior */}
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
        
        {/* Gradientes actualizados con colores del sitio web */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#60A5FA" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#DBEAFE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#DDD6FE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E06B74" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#EC4899" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#F9A8D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FCE7F3" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Efectos de brillo suaves */}
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
      
      {/* Centro del gráfico con diseño cálido y profesional */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2 sm:space-y-4 bg-white/80 backdrop-blur-sm rounded-full p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
          {/* Efecto de brillo interno sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg relative overflow-hidden">
              {/* Efecto de rotación interna sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-spin"></div>
              <IoSparkles className="text-2xl sm:text-3xl lg:text-4xl text-white relative z-10 animate-pulse" />
            </div>
            <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4">
              <p className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900">Filosofía</p>
              <p className="text-xs sm:text-base lg:text-lg text-gray-600 font-medium">Integral</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Palabras con diseño profesional y cálido - Responsive positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Comprensión - Posición responsive */}
        <div className="absolute left-[8%] top-[8%] sm:left-[12%] sm:top-[10%] lg:left-[16%] lg:top-[12%] transform -rotate-12">
          <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-1' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-blue-200/30 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
              <span className="relative z-10">Comprensión</span>
            </div>
          </div>
        </div>
        
        {/* Crecimiento - Posición responsive */}
        <div className="absolute right-[8%] top-[16%] sm:right-[12%] sm:top-[18%] lg:right-[16%] lg:top-[24%] transform rotate-12">
          <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-2' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-purple-200/30 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
              <span className="relative z-10">Crecimiento</span>
            </div>
          </div>
        </div>
        
        {/* Autenticidad - Posición responsive */}
        <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 rotate-6">
          <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-3' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-pink-400 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-pink-200/30 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
              <span className="relative z-10">Autenticidad</span>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos sutiles - Responsive */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Líneas de conexión sutiles */}
          <div className="absolute top-1/4 left-1/4 w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-blue-300/40 to-transparent transform rotate-45"></div>
          <div className="absolute top-1/4 right-1/4 w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-purple-300/40 to-transparent transform -rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/2 w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-pink-300/40 to-transparent transform -translate-x-1/2 rotate-90"></div>
          
          {/* Puntos de conexión sutiles */}
          <div className="absolute top-[12%] left-[12%] sm:top-[15%] sm:left-[15%] lg:top-[20%] lg:left-[20%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute top-[20%] right-[12%] sm:top-[22%] sm:right-[15%] lg:top-[28%] lg:right-[20%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-[12%] left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* Estilos CSS para las animaciones */}
      <style>{`
        @keyframes drawCircle1 {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes drawCircle2 {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes drawCircle3 {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes floatingParticle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        
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