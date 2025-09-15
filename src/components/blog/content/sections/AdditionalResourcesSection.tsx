// ===================================
// 📚 SECCIÓN DE RECURSOS ADICIONALES
// Muestra libros, artículos científicos y herramientas recomendadas
// ===================================

import { ExternalLink, Book, FileText, Wrench, ShoppingCart } from 'lucide-react';
import type { BlogArticle } from '../../../../types/blog';

interface AdditionalResourcesSectionProps {
  article: BlogArticle;
}

interface Resource {
  url: string;
  tipo: string;
  titulo: string;
  autor?: string;
}

interface RecommendedProduct {
  url: string;
  nombre: string;
  categoria: string;
  descripcion: string;
}

const getResourceIcon = (tipo: string) => {
  switch (tipo.toLowerCase()) {
    case 'libro':
      return <Book className="w-5 h-5" />;
    case 'artículo_científico':
    case 'articulo_cientifico':
      return <FileText className="w-5 h-5" />;
    case 'herramienta':
      return <Wrench className="w-5 h-5" />;
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
};

const getResourceTypeText = (tipo: string) => {
  switch (tipo.toLowerCase()) {
    case 'libro':
      return 'Libro recomendado';
    case 'artículo_científico':
    case 'articulo_cientifico':
      return 'Artículo científico';
    case 'herramienta':
      return 'Herramienta digital';
    default:
      return 'Recurso externo';
  }
};

export default function AdditionalResourcesSection({ article }: AdditionalResourcesSectionProps) {
  const hasAdditionalResources = article.additional_resources && Array.isArray(article.additional_resources) && article.additional_resources.length > 0;
  const hasRecommendedProducts = article.recommended_products && Array.isArray(article.recommended_products) && article.recommended_products.length > 0;

  if (!hasAdditionalResources && !hasRecommendedProducts) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl my-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            📚 Recursos adicionales recomendados
          </h3>
          <p className="text-gray-700">
            Profundiza en el tema con estos recursos seleccionados profesionalmente
          </p>
        </div>

        {/* Additional Resources */}
        {hasAdditionalResources && (
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-blue-600" />
              Lecturas y herramientas complementarias
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              {article.additional_resources.map((resource: Resource, index: number) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1 group-hover:text-blue-700">
                      {getResourceIcon(resource.tipo)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {getResourceTypeText(resource.tipo)}
                        </span>
                      </div>
                      <h5 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1">
                        {resource.titulo}
                      </h5>
                      {resource.autor && (
                        <p className="text-sm text-gray-600">
                          Por {resource.autor}
                        </p>
                      )}
                      <div className="flex items-center mt-2 text-sm text-blue-600 group-hover:text-blue-700">
                        <span>Ver recurso</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Products */}
        {hasRecommendedProducts && (
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2 text-green-600" />
              Productos recomendados
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              {article.recommended_products.map((product: RecommendedProduct, index: number) => (
                <a
                  key={index}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-green-600 mt-1 group-hover:text-green-700">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {product.categoria}
                        </span>
                      </div>
                      <h5 className="font-semibold text-gray-900 group-hover:text-green-700 mb-1">
                        {product.nombre}
                      </h5>
                      <p className="text-sm text-gray-600 mb-2">
                        {product.descripcion}
                      </p>
                      <div className="flex items-center text-sm text-green-600 group-hover:text-green-700">
                        <span>Ver en Amazon</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <strong>Nota:</strong> Estos recursos han sido seleccionados por su calidad y relevancia profesional. 
            Los enlaces de productos pueden contener enlaces de afiliación.
          </p>
        </div>
      </div>
    </section>
  );
}