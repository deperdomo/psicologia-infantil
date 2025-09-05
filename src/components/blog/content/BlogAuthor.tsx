// ===================================
// 👨‍⚕️ COMPONENTE DE AUTOR PROFESIONAL
// ===================================

import { useState } from 'react';
import type { BlogArticle } from '../../../types/blog';

interface BlogAuthorProps {
  article: BlogArticle;
  variant?: 'compact' | 'expanded' | 'card';
  showCredentials?: boolean;
  showSocialLinks?: boolean;
  showContactInfo?: boolean;
  className?: string;
}

export default function BlogAuthor({
  article,
  variant = 'compact',
  showCredentials = true,
  showSocialLinks = false,
  showContactInfo = false,
  className = ''
}: BlogAuthorProps) {
  const [imageError, setImageError] = useState(false);

  const getDefaultAvatar = (name: string) => {
    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
    
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
        {initials}
      </div>
    );
  };

  const formatCredentials = (credentials?: string) => {
    if (!credentials) return null;
    
    // Separar las credenciales por comas y limpiarlas
    return credentials
      .split(',')
      .map(cred => cred.trim())
      .filter(Boolean)
      .join(' • ');
  };

  const renderCompactVersion = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Avatar */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
        {article.author_photo_url && !imageError ? (
          <img
            src={article.author_photo_url}
            alt={`Dr. ${article.author_name}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          getDefaultAvatar(article.author_name)
        )}
      </div>
      
      {/* Información básica */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 truncate">
          Dr. {article.author_name}
        </p>
        {showCredentials && article.author_credentials && (
          <p className="text-sm text-gray-600 truncate">
            {formatCredentials(article.author_credentials)}
          </p>
        )}
        <p className="text-xs text-gray-500">
          Especialista en Psicología Infantil
        </p>
      </div>
    </div>
  );

  const renderExpandedVersion = () => (
    <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100 ${className}`}>
      <div className="flex items-start space-x-4">
        {/* Avatar grande */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-md">
          {article.author_photo_url && !imageError ? (
            <img
              src={article.author_photo_url}
              alt={`Dr. ${article.author_name}`}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            getDefaultAvatar(article.author_name)
          )}
        </div>
        
        {/* Información completa */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            Dr. {article.author_name}
          </h4>
          
          {showCredentials && article.author_credentials && (
            <p className="text-sm font-medium text-blue-700 mb-2">
              {formatCredentials(article.author_credentials)}
            </p>
          )}
          
          <p className="text-sm text-gray-600 mb-3">
            Especialista en Psicología Infantil y Desarrollo Emocional
          </p>
          
          {article.author_bio && (
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {article.author_bio}
            </p>
          )}
          
          {/* Métricas del autor */}
          <div className="flex items-center space-x-4 text-xs text-gray-600">
            <span className="flex items-center">
              📝 <span className="ml-1">Artículos publicados</span>
            </span>
            <span className="flex items-center">
              🎓 <span className="ml-1">Verificado</span>
            </span>
            <span className="flex items-center">
              ⭐ <span className="ml-1">Experto certificado</span>
            </span>
          </div>
          
          {/* Enlaces sociales */}
          {showSocialLinks && article.author_social_links && (
            <div className="mt-4 flex items-center space-x-3">
              {article.author_social_links.website && (
                <a
                  href={article.author_social_links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title="Sitio web profesional"
                >
                  🌐
                </a>
              )}
              {article.author_social_links.linkedin && (
                <a
                  href={article.author_social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title="LinkedIn"
                >
                  💼
                </a>
              )}
              {article.author_social_links.twitter && (
                <a
                  href={article.author_social_links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title="Twitter"
                >
                  🐦
                </a>
              )}
            </div>
          )}
          
          {/* Información de contacto */}
          {showContactInfo && (
            <div className="mt-4 p-3 bg-white rounded-md border border-blue-200">
              <p className="text-xs font-medium text-gray-700 mb-1">
                Contacto profesional:
              </p>
              {article.author_email && (
                <p className="text-xs text-blue-600">
                  📧 {article.author_email}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderCardVersion = () => (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-5 ${className}`}>
      <div className="text-center">
        {/* Avatar centrado */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-gray-100 mx-auto mb-4">
          {article.author_photo_url && !imageError ? (
            <img
              src={article.author_photo_url}
              alt={`Dr. ${article.author_name}`}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            getDefaultAvatar(article.author_name)
          )}
        </div>
        
        {/* Información centrada */}
        <h4 className="text-lg font-bold text-gray-900 mb-1">
          Dr. {article.author_name}
        </h4>
        
        {showCredentials && article.author_credentials && (
          <p className="text-sm font-medium text-blue-700 mb-2">
            {formatCredentials(article.author_credentials)}
          </p>
        )}
        
        <p className="text-sm text-gray-600 mb-3">
          Especialista en Psicología Infantil
        </p>
        
        {article.author_bio && (
          <p className="text-xs text-gray-700 leading-relaxed mb-4">
            {article.author_bio.length > 150 
              ? `${article.author_bio.substring(0, 150)}...` 
              : article.author_bio}
          </p>
        )}
        
        {/* Verificación */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          ✅ Profesional verificado
        </div>
      </div>
    </div>
  );

  // Renderizar según la variante
  switch (variant) {
    case 'expanded':
      return renderExpandedVersion();
    case 'card':
      return renderCardVersion();
    case 'compact':
    default:
      return renderCompactVersion();
  }
}
