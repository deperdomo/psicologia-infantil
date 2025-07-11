import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import SEOMeta from "../../components/SEOMeta";
import StructuredData from "../../components/StructuredData";
import { bibliotecaEmocionalData } from "../../data/bibliotecaEmocional";
import { BibliotecaCategoryCard } from "../../components/recursos";
import { useState } from "react";

export default function Recursos() {
  usePageTitle({
    title: 'Biblioteca Emocional',
    description: 'Explora nuestra biblioteca de recursos emocionales organizados por categorías.'
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const selectedCategoryData = selectedCategory 
    ? bibliotecaEmocionalData.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/5 to-[var(--accent)]/5">
      <SEOMeta 
        title="Biblioteca Emocional"
        description="Accede a nuestra biblioteca completa de recursos emocionales organizados por categorías específicas."
        keywords="recursos psicología infantil, biblioteca emocional, cartas terapéuticas"
        url="https://piscologiainfantil.com/recursos"
      />
      <StructuredData 
        type="website" 
        data={{
          name: "Biblioteca Emocional",
          description: "Recursos terapéuticos organizados por categorías",
          url: "https://piscologiainfantil.com/recursos"
        }}
      />
      
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6">
              Biblioteca 
              <span className="titulo-emocional">
                {" "}Emocional
              </span>
            </h1>
            <p className="text-xl text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra colección completa de recursos terapéuticos organizados por categorías específicas. 
              Cada recurso ha sido cuidadosamente seleccionado para acompañar el desarrollo emocional.
            </p>
          </div>

          {!selectedCategory ? (
            /* Grid de categorías */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {bibliotecaEmocionalData.map((category) => (
                <BibliotecaCategoryCard
                  key={category.id}
                  category={category}
                  onSelect={handleCategorySelect}
                />
              ))}
            </div>
          ) : (
            /* Vista de recursos de la categoría seleccionada */
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text)] mb-2 drop-shadow-sm">
                    {selectedCategoryData?.title}
                  </h2>
                  <p className="text-[var(--muted-text)] text-lg leading-relaxed">
                    {selectedCategoryData?.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-[var(--highlight)] text-[var(--button-text)] px-6 py-3 rounded-xl font-bold hover:bg-[var(--button-hover)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  ← Volver a categorías
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategoryData?.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-[var(--resource-card-bg)] backdrop-blur-sm rounded-xl p-6 shadow-[0_4px_20px_var(--resource-card-shadow)] border border-[var(--resource-card-border)] hover:shadow-[0_8px_30px_var(--resource-card-hover-shadow)] hover:bg-[var(--resource-card-hover-bg)] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-2xl drop-shadow-sm">
                        {resource.resourceType === 'carta' && '💌'}
                        {resource.resourceType === 'cuento' && '📖'}
                        {resource.resourceType === 'guia' && '📋'}
                        {resource.resourceType === 'ficha' && '📄'}
                        {resource.resourceType === 'libro' && '📚'}
                        {resource.resourceType === 'actividad' && '🎯'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        resource.type === 'gratuito' 
                          ? 'bg-[var(--resource-type-gratuito-bg)] text-[var(--resource-type-gratuito-text)]' 
                          : 'bg-[var(--resource-type-premium-bg)] text-[var(--resource-type-premium-text)]'
                      }`}>
                        {resource.type === 'gratuito' ? 'Gratuito' : 'Premium'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--highlight)] transition-colors mb-3 leading-tight">
                      {resource.title}
                    </h3>

                    <p className="text-[var(--muted-text)] mb-4 line-clamp-3 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[var(--resource-tag-bg)] text-[var(--resource-tag-text)] rounded-lg text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm mb-4">
                      <span className="text-[var(--muted-text)] font-medium">📅 {resource.ageRange.join(', ')}</span>
                      <span className="px-2 py-1 bg-[var(--resource-difficulty-bg)] text-[var(--resource-difficulty-text)] rounded-full text-xs font-semibold">
                        {resource.difficulty}
                      </span>
                    </div>

                    <button className="w-full bg-[var(--highlight)] text-[var(--button-text)] py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:bg-[var(--button-hover)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:ring-offset-2 shadow-md">
                      {resource.downloadUrl ? '📥 Ver Recurso' : '👀 Ver Detalles'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
