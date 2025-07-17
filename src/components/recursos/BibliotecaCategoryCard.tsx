import type { BibliotecaCategory } from '../../types/recursos';

interface BibliotecaCategoryCardProps {
  category: BibliotecaCategory;
  onSelect: (categoryId: string) => void;
}

export default function BibliotecaCategoryCard({ category, onSelect }: BibliotecaCategoryCardProps) {
  // Contar recursos totales (categoría principal + subcategorías)
  const totalResources = category.resources.length + 
    (category.subcategories?.reduce((sum, sub) => sum + sub.resources.length, 0) || 0);

  // Obtener tipos de recursos únicos (de categoría principal y subcategorías)
  const allResources = [
    ...category.resources,
    ...(category.subcategories?.flatMap(sub => sub.resources) || [])
  ];
  const uniqueResourceTypes = [...new Set(allResources.map(r => r.resourceType))];

  return (
    <div
      onClick={() => onSelect(category.id)}
      className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 h-full"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        {/* Header con gradiente */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden h-64">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          
          {/* Icono */}
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 shadow-lg">
            <category.icon className="w-8 h-8 text-white" />
          </div>

          {/* Título y descripción en header con distribución fija */}
          <div className="flex flex-col h-32">
            <h3 className="text-2xl font-bold text-white mb-4">
              {category.title}
            </h3>
            
            <p className="text-white/90 leading-relaxed font-medium line-clamp-4 text-sm flex-1">
              {category.description}
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="p-8 flex-1 flex flex-col justify-between">
          {/* Estadísticas */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-gray-900">
              {totalResources} recursos disponibles
            </span>
            
            {/* Tipos de recursos - puntos decorativos */}
            <div className="flex gap-2">
              {uniqueResourceTypes.slice(0, 4).map((type, index) => (
                <div
                  key={type}
                  className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm"
                  title={type}
                  style={{ opacity: 1 - (index * 0.2) }}
                />
              ))}
            </div>
          </div>

          {/* Indicadores adicionales */}
          <div className="space-y-4">
            {/* Call to action circular */}
            <div className="flex items-center justify-between pt-4">
              <span className="text-gray-700 font-semibold">
                Explorar categoría
              </span>
              
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
