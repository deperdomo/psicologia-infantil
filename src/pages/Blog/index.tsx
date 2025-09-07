import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/blog/BlogGrid";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function Blog() {
  usePageTitle({
    title: 'Blog - Psicología Infantil',
    description: 'Artículos especializados sobre psicología infantil, desarrollo emocional y crianza positiva. Consejos profesionales para padres y familias.'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <BlogGrid 
          showSearch={true}
          showFilters={true}
          viewMode="grid"
          title="Blog de Psicología Infantil"
        />
      </main>
    </div>
  );
}
