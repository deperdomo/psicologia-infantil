import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 1000,
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8';
        case 'down':
          return '-translate-y-8';
        case 'left':
          return 'translate-x-8';
        case 'right':
          return '-translate-x-8';
        case 'scale':
          return 'scale-95';
        default:
          return 'translate-y-8';
      }
    }
    return direction === 'scale' ? 'scale-100' : 'translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={elementRef}
      className={`
        transition-all ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${getTransformClass()}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
