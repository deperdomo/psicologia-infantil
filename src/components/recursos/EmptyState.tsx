interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  onClearFilters?: () => void;
}

export default function EmptyState({ 
  title = "No se encontraron recursos que coincidan con tu búsqueda.",
  subtitle,
  onClearFilters
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600 text-lg mb-2">{title}</p>
      {subtitle && (
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      )}
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="mt-4 text-blue-600 hover:text-purple-600 transition-colors font-medium"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
