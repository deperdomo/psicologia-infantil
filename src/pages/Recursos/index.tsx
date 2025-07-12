import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import SEOMeta from "../../components/SEOMeta";
import StructuredData from "../../components/StructuredData";
import { BibliotecaGrid } from "../../components/recursos";

export default function Recursos() {
  usePageTitle({
    title: 'Biblioteca Emocional',
    description: 'Explora nuestra biblioteca de recursos emocionales organizados por categorías.'
  });

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

          {/* Componente BibliotecaGrid con datos de Supabase */}
          <BibliotecaGrid />
        </div>
      </div>
    </div>
  );
}
