interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <p className="text-red-600 mb-4">❌ {error}</p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Reintentar
          </button>
        )}
      </div>
    </div>
  );
}
