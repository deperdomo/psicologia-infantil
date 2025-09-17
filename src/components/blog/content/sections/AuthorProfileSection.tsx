// ===================================
// 👨‍⚕️ PERFIL COMPLETO DEL AUTOR CON BIOGRAFÍA Y ENLACES SOCIALES
// Componente mejorado con diseño moderno y profesional
// ===================================

import { Mail, Globe, Linkedin, Instagram, Award, Star, CheckCircle } from 'lucide-react';
import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';
import { SiX } from 'react-icons/si';

interface AuthorProfileSectionProps {
  article: BlogArticle;
}

interface SocialLinks {
  web?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export default function AuthorProfileSection({ article }: AuthorProfileSectionProps) {
  if (!article.author_bio && !article.author_email && !article.author_social_links) {
    return null;
  }

  let socialLinks: SocialLinks = {};
  if (article.author_social_links) {
    try {
      socialLinks = typeof article.author_social_links === 'string' 
        ? JSON.parse(article.author_social_links) 
        : article.author_social_links;
    } catch (e) {
      console.warn('Error parsing author social links:', e);
    }
  }

  return (
    <section className="relative py-16 my-12 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header with improved typography */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Sobre el Autor
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce al profesional detrás de este contenido especializado
          </p>
        </div>

        {/* Enhanced Author Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-white/20 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Enhanced Author Photo */}
            {article.author_photo_url && (
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src={article.author_photo_url}
                    alt={article.author_name}
                    className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Author Info */}
            <div className="flex-1 space-y-6">
              {/* Name and Credentials */}
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {article.author_name}
                </h4>
                {article.author_credentials && (
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full border border-amber-200">
                      <Award className="w-4 h-4 mr-2 text-amber-600" />
                      <span className="text-sm font-semibold">{article.author_credentials}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Biography */}
              {article.author_bio && (
                <div className="prose prose-lg max-w-none">
                  {formatText(article.author_bio)}
                </div>
              )}

              {/* Enhanced Contact and Social Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {/* Email */}
                {article.author_email && (
                  <a
                    href={`mailto:${article.author_email}`}
                    className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Contactar</span>
                  </a>
                )}

                {/* Website */}
                {socialLinks.web && (
                  <a
                    href={socialLinks.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Globe className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Website</span>
                  </a>
                )}

                {/* LinkedIn */}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                )}

                {/* Twitter */}
                {socialLinks.twitter && (
                    <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <SiX size={24}className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform"  />
                    <span className="font-medium">X</span>
                    </a>
                )}

                {/* Instagram */}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Note */}
        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl"></div>
          <div className="relative p-6 bg-white/60 backdrop-blur-sm border-l-4 border-blue-500 rounded-r-2xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Contenido Profesional Verificado</h5>
                <p className="text-gray-700 leading-relaxed">
                  Este artículo ha sido elaborado por un profesional cualificado en psicología, 
                  revisado según estándares académicos y actualizado con las últimas investigaciones del campo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}