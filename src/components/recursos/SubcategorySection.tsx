import type { BibliotecaSubcategory, Resource } from '../../types/recursos';
import ResourceListItem from './ResourceListItem';

interface SubcategorySectionProps {
  subcategory: BibliotecaSubcategory;
  onResourceSelect: (resource: Resource) => void;
}

export default function SubcategorySection({ subcategory, onResourceSelect }: SubcategorySectionProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{subcategory.title}</h3>
        <p className="text-gray-600 font-medium mb-4">{subcategory.description}</p>
        <div className="text-sm text-gray-600 font-medium">
          {subcategory.resources.length} recursos en esta subcategoría
        </div>
      </div>
      
      <div className="grid gap-6">
        {subcategory.resources.map((resource) => (
          <ResourceListItem
            key={resource.id}
            resource={resource}
            onSelect={onResourceSelect}
            isSubcategory={true}
          />
        ))}
      </div>
    </div>
  );
}
