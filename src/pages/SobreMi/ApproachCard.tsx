import type { IconType } from 'react-icons';

interface ApproachCardProps {
  title: string;
  description: string;
  IconComponent: IconType;
  features: string[];
  colorScheme: 'blue' | 'purple' | 'pink';
  isVisible: boolean;
  delay: number;
}

export default function ApproachCard({
  title,
  description,
  IconComponent,
  features,
  colorScheme,
  isVisible,
  delay
}: ApproachCardProps) {
  
  const colorSchemes = {
    blue: {
      border: 'border-blue-200',
      background: 'bg-gradient-to-br from-blue-200/50 to-purple-200/50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-blue-600'
    },
    purple: {
      border: 'border-purple-200',
      background: 'bg-gradient-to-br from-purple-200/50 to-pink-200/50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      textColor: 'text-purple-600'
    },
    pink: {
      border: 'border-pink-200',
      background: 'bg-gradient-to-br from-pink-200/50 to-orange-200/50',
      iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600',
      textColor: 'text-pink-600'
    }
  };

  const colors = colorSchemes[colorScheme];

  return (
    <div className={`relative transition-all duration-1000 delay-${delay} ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-12'
    }`}>
      <div className={`relative bg-white/80 backdrop-blur-sm ${colors.border} border-1 rounded-3xl p-8 h-full shadow-xl`}>
        {/* Decoración de fondo */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${colors.background} rounded-full blur-2xl`}></div>
        
        <div className="relative space-y-6">
          <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
            <IconComponent className="text-2xl text-white" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 h-26">
              {description}
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className={`text-sm ${colors.textColor} font-bold`}>{index + 1}.</span>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}