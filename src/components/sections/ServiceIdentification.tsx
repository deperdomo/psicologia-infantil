import React from 'react';

interface IdentificationQuestion {
  question: string;
  icon: React.ReactNode;
}

interface ServiceIdentificationProps {
  title: string;
  subtitle: string;
  description: string;
  questions: IdentificationQuestion[];
  ctaTitle: string;
  ctaSubtitle: string;
  benefits: string[];
}

export default function ServiceIdentification({
  title,
  subtitle,
  description,
  questions,
  ctaTitle,
  ctaSubtitle,
  benefits
}: ServiceIdentificationProps) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Elementos decorativos minimalistas */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">{subtitle}</p>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-200/50 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">{description}</p>
          </div>
        </div>
        {/* Questions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {questions.map((q, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white/80 rounded-lg p-6 shadow">
              <span>{q.icon}</span>
              <span className="text-gray-800 text-lg">{q.question}</span>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center shadow">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{ctaTitle}</h3>
          <p className="text-blue-700 mb-4">{ctaSubtitle}</p>
          <ul className="list-disc list-inside text-blue-800 mb-4">
            {benefits.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}