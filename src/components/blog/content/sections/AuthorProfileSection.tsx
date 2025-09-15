// ===================================
// 👨‍⚕️ PERFIL COMPLETO DEL AUTOR CON BIOGRAFÍA Y ENLACES SOCIALES
// Componente mejorado para mostrar información profesional completa
// ===================================

import { Mail, Globe, Twitter, Linkedin, Instagram, Award } from 'lucide-react';
import type { BlogArticle } from '../../../../types/blog';

interface AuthorProfileSectionProps {
  article: BlogArticle;
}

interface SocialLinks {
  web?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

const formatBio = (bio: string) => {
  return bio.split('\\n\\n').map((paragraph, index) => (
    <p key={index} className="mb-4 last:mb-0">
      {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
               .replace(/\*(.*?)\*/g, '<em>$1</em>')
               .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
               .split(/(<strong>.*?<\/strong>|<em>.*?<\/em>|<strong><em>.*?<\/em><\/strong>)/)
               .map((part, partIndex) => {
                 if (part.startsWith('<strong><em>') && part.endsWith('</em></strong>')) {
                   return <strong key={partIndex}><em>{part.replace(/<\/?strong>|<\/?em>/g, '')}</em></strong>;
                 } else if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
                   return <strong key={partIndex}>{part.replace(/<\/?strong>/g, '')}</strong>;
                 } else if (part.startsWith('<em>') && part.endsWith('</em>')) {
                   return <em key={partIndex}>{part.replace(/<\/?em>/g, '')}</em>;
                 }
                 return part;
               })}
    </p>
  ));
};

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
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl my-8 border border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            👨‍⚕️ Sobre el autor
          </h3>
          <p className="text-gray-700">
            Conoce al profesional detrás de este artículo
          </p>
        </div>

        {/* Author Card */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Author Photo */}
            {article.author_photo_url && (
              <div className="flex-shrink-0 text-center md:text-left">
                <img
                  src={article.author_photo_url}
                  alt={article.author_name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto md:mx-0"
                />
              </div>
            )}

            {/* Author Info */}
            <div className="flex-1">
              {/* Name and Credentials */}
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {article.author_name}
                </h4>
                {article.author_credentials && (
                  <div className="flex items-center text-gray-600 mb-2">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm font-medium">{article.author_credentials}</span>
                  </div>
                )}
              </div>

              {/* Biography */}
              {article.author_bio && (
                <div className="prose prose-sm max-w-none mb-6 text-gray-700 leading-relaxed">
                  {formatBio(article.author_bio)}
                </div>
              )}

              {/* Contact and Social Links */}
              <div className="flex flex-wrap gap-4">
                {/* Email */}
                {article.author_email && (
                  <a
                    href={`mailto:${article.author_email}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Contactar</span>
                  </a>
                )}

                {/* Website */}
                {socialLinks.web && (
                  <a
                    href={socialLinks.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Website</span>
                  </a>
                )}

                {/* LinkedIn */}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                )}

                {/* Twitter */}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                )}

                {/* Instagram */}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors duration-200"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Note */}
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <strong>Artículo profesional:</strong> Este contenido ha sido elaborado por un profesional 
            cualificado en psicología y revisado según estándares académicos.
          </p>
        </div>
      </div>
    </section>
  );
}