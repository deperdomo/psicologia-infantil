import React from 'react';

interface UnDrawIllustrationProps {
  name: string;
  className?: string;
  primaryColor?: string;
  accentColor?: string;
}

export const UnDrawIllustration: React.FC<UnDrawIllustrationProps> = ({
  name,
  className = "w-full h-auto",
  primaryColor = "#3B82F6",
  accentColor = "#EC4899"
}) => {
  // URLs directas de unDraw.co con colores personalizados
  const getIllustrationSrc = (illustrationName: string) => {
    const baseColor = primaryColor.replace('#', '');
    const illustrations: Record<string, string> = {
      'family-time': `https://undraw.co/api/illustrations/family_time?color=${baseColor}`,
      'certificate': `https://undraw.co/api/illustrations/certificate?color=${baseColor}`,
      'mindfulness': `https://undraw.co/api/illustrations/mindfulness?color=${baseColor}`,
      'people': `https://undraw.co/api/illustrations/people?color=${baseColor}`,
      'children': `https://undraw.co/api/illustrations/children?color=${baseColor}`,
      'therapy': `https://undraw.co/api/illustrations/therapy?color=${baseColor}`
    };
    
    return illustrations[illustrationName] || illustrations['family-time'];
  };

  return (
    <div className={`${className} relative`}>
      <img
        src={getIllustrationSrc(name)}
        alt={`Ilustración de ${name}`}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={(e) => {
          // Fallback si la API de unDraw no está disponible
          const target = e.target as HTMLImageElement;
          target.src = '/illustrations/family-time.svg';
        }}
      />
      
      {/* Overlay sutil para mejorar integración visual */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-10 rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(45deg, ${primaryColor}10, ${accentColor}10)`
        }}
      />
    </div>
  );
};
