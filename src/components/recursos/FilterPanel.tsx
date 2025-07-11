import type { AgeRange, ResourceType } from '../../types/recursos';
import { IoClose } from 'react-icons/io5';

interface FilterPanelProps {
  selectedAges: AgeRange[];
  setSelectedAges: (ages: AgeRange[]) => void;
  selectedTypes: ResourceType[];
  setSelectedTypes: (types: ResourceType[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  onlyFree: boolean;
  setOnlyFree: (onlyFree: boolean) => void;
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
  onlyFree,
  setOnlyFree,
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
    <div className="mt-6 pt-6 border-t border-[var(--border-light)] space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-[var(--text)]">Filtros</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
        >
          Limpiar todo
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Filtro por edad */}
        <div>
          <h4 className="font-medium text-[var(--text)] mb-3">Edad recomendada</h4>
          <div className="space-y-2">
            {ageRanges.map((age) => (
              <label key={age.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedAges.includes(age.value)}
                  onChange={() => handleAgeToggle(age.value)}
                  className="rounded border-[var(--border-light)] text-[var(--primary)] focus:ring-[var(--primary)]"
                />
                <span className="text-sm text-[var(--text)]">{age.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por tipo */}
        <div>
          <h4 className="font-medium text-[var(--text)] mb-3">Tipo de recurso</h4>
          <div className="space-y-2">
            {resourceTypes.map((type) => (
              <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.value)}
                  onChange={() => handleTypeToggle(type.value)}
                  className="rounded border-[var(--border-light)] text-[var(--primary)] focus:ring-[var(--primary)]"
                />
                <span className="text-sm text-[var(--text)]">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por acceso */}
        <div>
          <h4 className="font-medium text-[var(--text)] mb-3">Acceso</h4>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyFree}
              onChange={(e) => setOnlyFree(e.target.checked)}
              className="rounded border-[var(--border-light)] text-[var(--primary)] focus:ring-[var(--primary)]"
            />
            <span className="text-sm text-[var(--text)]">Solo recursos gratuitos</span>
          </label>
        </div>

        {/* Filtro por tags */}
        <div>
          <h4 className="font-medium text-[var(--text)] mb-3">Temas</h4>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {allTags.slice(0, 10).map((tag) => (
              <label key={tag} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagToggle(tag)}
                  className="rounded border-[var(--border-light)] text-[var(--primary)] focus:ring-[var(--primary)]"
                />
                <span className="text-sm text-[var(--text)] capitalize">{tag}</span>
              </label>
            ))}
            {allTags.length > 10 && (
              <p className="text-xs text-[var(--muted-text)]">
                Y {allTags.length - 10} temas más...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Filtros activos */}
      {(selectedAges.length > 0 || selectedTypes.length > 0 || selectedTags.length > 0 || onlyFree) && (
        <div className="pt-4 border-t border-[var(--border-light)]">
          <h4 className="font-medium text-[var(--text)] mb-3">Filtros activos:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedAges.map((age) => (
              <button
                key={age}
                onClick={() => handleAgeToggle(age)}
                className="flex items-center gap-1 px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm hover:bg-[var(--primary)]/20 transition-colors"
              >
                {ageRanges.find(a => a.value === age)?.label}
                <IoClose className="w-3 h-3" />
              </button>
            ))}
            {selectedTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeToggle(type)}
                className="flex items-center gap-1 px-3 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm hover:bg-[var(--secondary)]/20 transition-colors"
              >
                {resourceTypes.find(t => t.value === type)?.label}
                <IoClose className="w-3 h-3" />
              </button>
            ))}
            {selectedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className="flex items-center gap-1 px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm hover:bg-[var(--accent)]/20 transition-colors"
              >
                {tag}
                <IoClose className="w-3 h-3" />
              </button>
            ))}
            {onlyFree && (
              <button
                onClick={() => setOnlyFree(false)}
                className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors"
              >
                Solo gratuitos
                <IoClose className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
