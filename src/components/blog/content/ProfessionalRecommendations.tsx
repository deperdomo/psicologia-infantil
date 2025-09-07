// ===================================
// 🏥 BOX DE RECOMENDACIONES PROFESIONALES - LLENIA
// Adaptado para consulta con psicóloga individual
// ===================================

import { CheckCircle, Calendar, Heart } from 'lucide-react';
import type { BlogArticle } from '../../../types/blog';

interface ProfessionalRecommendationsProps {
  article: BlogArticle;
}

interface ProfessionalInfo {
  name: string;
  title: string;
  specialties: string[];
  credentials: string;
  image_url: string;
  experience_description: string;
  approach: string;
}

interface ProfessionalRecommendation {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_url: string;
  display_type: 'professional_cta' | 'cta_box';
  position_after_section?: string;
  professional_info?: ProfessionalInfo;
  background_color?: string;
  text_color?: string;
}

// Componente para presentación de Llenia
function ProfessionalProfile({ recommendation }: { recommendation: ProfessionalRecommendation }) {
  const { professional_info } = recommendation;
  
  if (!professional_info) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-blue-200 rounded-xl p-8">
      {/* Header principal */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {recommendation.title}
        </h3>
        <p className="text-xl text-gray-700 mb-6">
          {recommendation.subtitle}
        </p>
      </div>

      {/* Perfil de Llenia */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Imagen y verificación */}
          <div className="relative flex-shrink-0">
            <img
              src={professional_info.image_url}
              alt={professional_info.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            />
            <CheckCircle className="absolute -bottom-1 -right-1 w-6 h-6 text-green-500 bg-white rounded-full" />
          </div>

          {/* Información profesional */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              {professional_info.name}
            </h4>
            <p className="text-lg font-medium text-blue-600 mb-3">
              {professional_info.title}
            </p>

            {/* Credenciales */}
            <p className="text-sm text-gray-600 mb-4">
              {professional_info.credentials}
            </p>

            {/* Especialidades */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              {professional_info.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="tag-psychology text-sm px-3 py-1"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Descripción de experiencia */}
            <p className="text-gray-700 mb-3">
              {professional_info.experience_description}
            </p>

            {/* Enfoque profesional */}
            <div className="flex items-start space-x-2 text-sm text-gray-600">
              <Heart className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
              <span>{professional_info.approach}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA principal */}
      <div className="text-center">
        <a
          href={recommendation.cta_url}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Calendar className="w-5 h-5 mr-3" />
          {recommendation.cta_text}
        </a>
        <p className="text-sm text-gray-600 mt-3">
          Acompañamiento personalizado para tu familia
        </p>
      </div>
    </div>
  );
}

// Componente para CTA box simple
function CTABox({ recommendation }: { recommendation: ProfessionalRecommendation }) {
  const bgColor = recommendation.background_color || '#e8f4f8';
  const textColor = recommendation.text_color || '#2c3e50';

  return (
    <div 
      className="rounded-lg p-8 text-center shadow-sm"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h3 className="text-2xl font-bold mb-3">
        {recommendation.title}
      </h3>
      <p className="text-lg mb-6 opacity-90">
        {recommendation.subtitle}
      </p>
      <a
        href={recommendation.cta_url}
        className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
      >
        <Calendar className="w-5 h-5 mr-3" />
        {recommendation.cta_text}
      </a>
    </div>
  );
}

export default function ProfessionalRecommendations({ article }: ProfessionalRecommendationsProps) {
  if (!article.professional_recommendations || !Array.isArray(article.professional_recommendations)) {
    return null;
  }

  const recommendations: ProfessionalRecommendation[] = article.professional_recommendations;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {recommendations.map((recommendation, index) => (
        <div key={index} className="mb-12 last:mb-0">
          {recommendation.display_type === 'professional_cta' ? (
            <ProfessionalProfile recommendation={recommendation} />
          ) : (
            <CTABox recommendation={recommendation} />
          )}
        </div>
      ))}
    </div>
  );
}
