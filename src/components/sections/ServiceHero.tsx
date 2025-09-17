// ...existing code...

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  trustIndicators: string[];
  primaryCTA: string;
  secondaryCTA: string;
  imageAlt: string;
  imageSrc?: string;
}

export default function ServiceHero({ 
  badge, 
  title, 
  subtitle, 
  trustIndicators, 
  primaryCTA, 
  secondaryCTA, 
  imageAlt, 
  imageSrc 
}: ServiceHeroProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido principal */}
          <div className="space-y-8">
            {/* Badge de servicio */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              {badge}
            </div>
            
            {/* Título principal */}
            <h1 className="text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight">
              {title}
            </h1>
            
            {/* Descripción */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 hover:bg-white/90 transition-all duration-300">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{indicator}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/reserva-cita"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg text-center"
              >
                {primaryCTA}
              </a>
              <a
                href="/contacto"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300 text-center"
              >
                {secondaryCTA}
              </a>
            </div>
          </div>

          {/* Espacio para imagen */}
          <div className="relative">
            {imageSrc ? (
              <div className="relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
              </div>
            ) : (
              /* Placeholder para imagen */
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-lg">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Espacio reservado para imagen</p>
                    <p className="text-gray-400 text-xs">relacionada con el servicio</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}