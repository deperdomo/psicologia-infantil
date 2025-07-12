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
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
        {/* Icono */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <category.icon className="w-8 h-8 text-[var(--text-on-gradient)]" />
        </div>

        {/* Contenido */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[var(--text-on-gradient)] group-hover:text-[var(--card-text-hover)] transition-colors">
            {category.title}
          </h3>
          
          <p className="text-[var(--text-on-gradient)]/80 leading-relaxed font-medium">
            {category.description}
          </p>

          {/* Estadísticas */}
          <div className="flex justify-between items-center pt-4 border-t border-white/20">
            <span className="text-sm text-[var(--text-on-gradient)]/75 font-medium">
              {totalResources} recursos
            </span>
            
            {/* Tipos de recursos */}
            <div className="flex gap-1">
              {uniqueResourceTypes.slice(0, 3).map((type) => (
                <span
                  key={type}
                  className="w-2 h-2 rounded-full bg-[var(--primary)]/40"
                  title={type}
                />
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-bold text-[var(--card-text-hover)] group-hover:text-[var(--button-hover)] transition-colors">
              Explorar recursos →
            </span>
            
            {/* Indicador de recursos gratuitos */}
            {allResources.some(r => r.type === 'gratuito') && (
              <span className="px-2 py-1 bg-green-50 text-green-800 text-xs rounded-full font-bold border border-green-200">
                Recursos gratuitos
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
