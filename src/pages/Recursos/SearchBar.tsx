import { IoSearch, IoFilter, IoGrid, IoList } from 'react-icons/io5';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  activeFiltersCount: number;
  filteredResourcesCount: number;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  viewMode,
  setViewMode,
  activeFiltersCount,
  filteredResourcesCount
}: SearchBarProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Búsqueda */}
        <div className="flex-1 relative">
          <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar recursos por tema, palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          />
        </div>

        {/* Controles */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors font-medium ${
              showFilters 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'border-gray-200 hover:border-blue-600 hover:text-blue-600'
            }`}
          >
            <IoFilter className="w-5 h-5" />
            Filtros
            {activeFiltersCount > 0 && (
              <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="flex border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <IoGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors ${
                viewMode === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <IoList className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Resultados de búsqueda */}
      {searchTerm && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {filteredResourcesCount} resultados encontrados para "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}
