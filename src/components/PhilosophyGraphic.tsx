import { IoSparkles } from 'react-icons/io5';

interface PhilosophyGraphicProps {
  cardVisible: boolean;
}

export default function PhilosophyGraphic({ cardVisible }: PhilosophyGraphicProps) {
  return (
    <div className="relative w-[600px] h-[600px] mx-auto overflow-hidden">
      {/* Fondo animado con ondas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        {/* Ondas de fondo animadas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-pink-500/20 to-indigo-500/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* SVG para las líneas semicirculares con efectos modernos */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
        {/* Línea semicircular 1 - Comprensión (Azul) - Exterior */}
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="691 691"
          strokeDashoffset="691"
          className={`transform -rotate-180 origin-center ${cardVisible ? 'draw-circle-1' : ''}`}
          filter="url(#glow1)"
        />
        {/* Línea semicircular 2 - Crecimiento (Púrpura) - Medio */}
        <circle
          cx="300"
          cy="300"
          r="170"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray="534 534"
          strokeDashoffset="534"
          className={`transform -rotate-180 origin-center ${cardVisible ? 'draw-circle-2' : ''}`}
          filter="url(#glow2)"
        />
        {/* Línea semicircular 3 - Autenticidad (Rosa) - Interior */}
        <circle
          cx="300"
          cy="300"
          r="120"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="377 377"
          strokeDashoffset="377"
          className={`transform -rotate-180 origin-center ${cardVisible ? 'draw-circle-3' : ''}`}
          filter="url(#glow3)"
        />
        
        {/* Gradientes con efectos holográficos */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
            <stop offset="75%" stopColor="#1D4ED8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
            <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
            <stop offset="75%" stopColor="#6D28D9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5B21B6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="1" />
            <stop offset="25%" stopColor="#EC4899" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#DB2777" stopOpacity="1" />
            <stop offset="75%" stopColor="#BE185D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#9D174D" stopOpacity="1" />
          </linearGradient>
          
          {/* Efectos de brillo */}
          <filter id="glow1">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Centro del gráfico con diseño futurista */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 bg-white/10 backdrop-blur-xl rounded-full p-10 shadow-2xl border border-white/20 relative overflow-hidden">
          {/* Efecto de brillo interno */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden">
              {/* Efecto de rotación interna */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin"></div>
              <IoSparkles className="text-5xl text-white relative z-10 animate-pulse" />
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-2xl font-bold text-white drop-shadow-lg">Filosofía</p>
              <p className="text-lg text-cyan-200 font-medium">Integral</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Palabras con diseño futurista y efectos 3D */}
      
      {/* Comprensión - Parte superior izquierda con efecto holográfico */}
      <div className="absolute left-16 top-12 transform -rotate-12">
        <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-1' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
            <span className="relative z-10">Comprensión</span>
          </div>
        </div>
      </div>
      
      {/* Crecimiento - Parte superior derecha con efecto holográfico */}
      <div className="absolute right-16 top-24 transform rotate-12">
        <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-2' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-400 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-violet-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
            <span className="relative z-10">Crecimiento</span>
          </div>
        </div>
      </div>
      
      {/* Autenticidad - Parte inferior con efecto holográfico */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 rotate-6">
        <div className={`relative group opacity-0 ${cardVisible ? 'fade-in-word-3' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-400 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-r from-pink-600 to-rose-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
            <span className="relative z-10">Autenticidad</span>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos futuristas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Líneas de conexión sutiles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform rotate-45"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/2 w-16 h-0.5 bg-gradient-to-r from-pink-400/50 to-transparent transform -translate-x-1/2 rotate-90"></div>
        
        {/* Puntos de conexión brillantes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-28 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Estilos CSS para las animaciones avanzadas */}
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
            transform: translateY(-30px) scale(0.8);
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
            transform: translateY(-20px) rotate(180deg);
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