import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
 
}

export default function ServiceProcess({ title, subtitle, steps }: ServiceProcessProps) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-blue-100 mb-6">
              Agenda tu primera consulta y da el primer paso hacia el bienestar.
            </p>
            <a
              href="/reserva-cita"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg inline-block"
            >
              Reservar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}