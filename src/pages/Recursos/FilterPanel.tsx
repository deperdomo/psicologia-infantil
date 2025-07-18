import type { AgeRange, ResourceType } from '../../types/recursos';
import { IoClose } from 'react-icons/io5';

interface FilterPanelProps {
  selectedAges: AgeRange[];
  setSelectedAges: (ages: AgeRange[]) => void;
  selectedTypes: ResourceType[];
  setSelectedTypes: (types: ResourceType[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  allTags: string[];
  onClearFilters: () => void;
}

const ageRanges: { value: AgeRange; label: string }[] = [
  { value: '0-3', label: '0-3 años' },
  { value: '3-6', label: '3-6 años' },
  { value: '6-12', label: '6-12 años' },
  { value: '12+', label: '12+ años' },
  { value: 'todas', label: 'Todas las edades' }
];

const resourceTypes: { value: ResourceType; label: string }[] = [
  { value: 'carta', label: 'Cartas' },
  { value: 'cuento', label: 'Cuentos' },
  { value: 'guia', label: 'Guías' },
  { value: 'ficha', label: 'Fichas' },
  { value: 'libro', label: 'Libros' },
  { value: 'actividad', label: 'Actividades' }
];

export default function FilterPanel({
  selectedAges,
  setSelectedAges,
  selectedTypes,
  setSelectedTypes,
  selectedTags,
  setSelectedTags,
  allTags,
  onClearFilters
}: FilterPanelProps) {
  const handleAgeToggle = (age: AgeRange) => {
    if (selectedAges.includes(age)) {
      setSelectedAges(selectedAges.filter(a => a !== age));
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  };

  const handleTypeToggle = (type: ResourceType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
      {/* Header del panel de filtros */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">Filtros avanzados</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-600 hover:text-purple-600 transition-colors font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
        >
          Limpiar todo
        </button>
      </div>

      {/* Grid de filtros con cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Filtro por edad */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            Edad recomendada
          </h4>
          <div className="space-y-3">
            {ageRanges.map((age) => (
              <label key={age.value} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedAges.includes(age.value)}
                    onChange={() => handleAgeToggle(age.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                    selectedAges.includes(age.value)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent shadow-lg'
                      : 'border-gray-300 bg-white group-hover:border-blue-400'
                  }`}>
                    {selectedAges.includes(age.value) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                  {age.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por tipo */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            Tipo de recurso
          </h4>
          <div className="space-y-3">
            {resourceTypes.map((type) => (
              <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.value)}
                    onChange={() => handleTypeToggle(type.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                    selectedTypes.includes(type.value)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent shadow-lg'
                      : 'border-gray-300 bg-white group-hover:border-purple-400'
                  }`}>
                    {selectedTypes.includes(type.value) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por tags */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
            Temas
          </h4>
          <div className="max-h-40 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {allTags.slice(0, 10).map((tag) => (
              <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                    selectedTags.includes(tag)
                      ? 'bg-gradient-to-r from-pink-500 to-orange-500 border-transparent shadow-lg'
                      : 'border-gray-300 bg-white group-hover:border-pink-400'
                  }`}>
                    {selectedTags.includes(tag) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors font-medium capitalize">
                  {tag}
                </span>
              </label>
            ))}
            {allTags.length > 10 && (
              <p className="text-xs text-gray-600 font-medium pl-8">
                Y {allTags.length - 10} temas más...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Filtros activos */}
      {(selectedAges.length > 0 || selectedTypes.length > 0 || selectedTags.length > 0) && (
        <div className="pt-6 border-t border-gray-200">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            Filtros activos
          </h4>
          <div className="flex flex-wrap gap-3">
            {selectedAges.map((age) => (
              <button
                key={age}
                onClick={() => handleAgeToggle(age)}
                className="group flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-all duration-300 border border-blue-200 hover:scale-[1.02]"
              >
                {ageRanges.find(a => a.value === age)?.label}
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <IoClose className="w-3 h-3 text-white" />
                </div>
              </button>
            ))}
            {selectedTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeToggle(type)}
                className="group flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-all duration-300 border border-purple-200 hover:scale-[1.02]"
              >
                {resourceTypes.find(t => t.value === type)?.label}
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <IoClose className="w-3 h-3 text-white" />
                </div>
              </button>
            ))}
            {selectedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className="group flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium hover:bg-pink-200 transition-all duration-300 border border-pink-200 hover:scale-[1.02]"
              >
                {tag}
                <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <IoClose className="w-3 h-3 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
