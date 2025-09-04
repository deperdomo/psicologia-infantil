import type { BibliotecaCategory } from '../../types/recursos';

interface CategoryHeaderProps {
  category: BibliotecaCategory;
  totalResources: number;
  onBack: () => void;
}

export default function CategoryHeader({ category, totalResources, onBack }: CategoryHeaderProps) {
  const handleBack = () => {
    onBack();
    // El scroll se maneja automáticamente por el ScrollToTop component de React Router
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
      <button
        onClick={handleBack}
        className="text-blue-600  hover:text-purple-600 mb-4 flex items-center gap-2 font-medium transition-colors"
      >
        ← Volver a categorías
      </button>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
          <category.icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
          <p className="text-gray-600 font-medium">{category.description}</p>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 font-medium">
        {totalResources} recursos disponibles
      </div>
    </div>
  );
}
