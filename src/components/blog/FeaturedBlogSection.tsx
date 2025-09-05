import BlogGrid from "../../components/blog/BlogGrid";

interface FeaturedBlogSectionProps {
  maxItems?: number;
  showTitle?: boolean;
}

export default function FeaturedBlogSection({ 
  maxItems = 3, 
  showTitle = true 
}: FeaturedBlogSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artículos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre contenido especializado en psicología infantil, desarrollo emocional y crianza positiva
            </p>
          </div>
        )}
        
        <BlogGrid 
          maxItems={maxItems}
          showSearch={false}
          showFilters={false}
          viewMode="grid"
          title=""
        />
        
        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver todos los artículos
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
