interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'var(--primary)', 
  className = '',
  ariaLabel = 'Cargando...'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const borderSizes = {
    sm: 'border-2',
    md: 'border-2',
    lg: 'border-4'
  };

  return (
    <div
      className={`${sizeClasses[size]} ${borderSizes[size]} border-gray-200 border-t-transparent rounded-full animate-spin ${className}`}
      style={{ borderTopColor: color }}
      role="status"
      aria-label={ariaLabel}
    >
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
}
