import React from 'react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceContentProps {
  features: ServiceFeature[];
  additionalContent?: React.ReactNode;
}

export default function ServiceContent({ features, additionalContent }: ServiceContentProps) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Elementos decorativos minimalistas */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo te ayudamos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro enfoque integral se centra en crear un ambiente seguro y de confianza
            donde puedas desarrollar las herramientas necesarias para tu bienestar.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Header con gradiente */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden">
                  {/* Elementos decorativos de fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                  
                  {/* Icono */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                </div>
                
                {/* Contenido */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Punto decorativo */}
                  <div className="flex justify-center mt-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contenido adicional */}
        {additionalContent && (
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-lg">
            {additionalContent}
          </div>
        )}
      </div>
    </section>
  );
}