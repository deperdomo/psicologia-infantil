import type { BlogArticle } from '../../../../types/blog';

interface PracticalRecommendationsSectionProps {
  article: BlogArticle;
}

function extractRecommendations(data: any): string[] {
  console.log('🔍 Datos recibidos:', data, typeof data);
  
  try {
    // Si ya es un array de strings, devolverlo directamente
    if (Array.isArray(data) && data.every(item => typeof item === 'string')) {
      return data.filter(item => item.trim().length > 10);
    }

    // Si es un objeto con title y content (nuevo formato)
    if (data && typeof data === 'object' && 'content' in data) {
      const content = data.content;
      
      if (typeof content === 'string') {
        // Dividir por saltos de línea numerados (1., 2., etc.)
        const numberedItems = content.split(/\d+\.\s+/).filter(item => item.trim().length > 0);
        
        if (numberedItems.length > 1) {
          // Remover el primer elemento vacío si existe
          return numberedItems.slice(1).map(item => item.trim().replace(/\n/g, ' '));
        }
        
        // Si no hay numeración, dividir por saltos de línea dobles
        const lineBreakItems = content.split('\n').filter(item => item.trim().length > 10);
        if (lineBreakItems.length > 1) {
          return lineBreakItems.map(item => item.trim());
        }
        
        // Como último recurso, devolver el contenido completo
        return [content.trim()];
      }
    }

    // Si es un string directo
    if (typeof data === 'string') {
      // Intentar parsear como JSON si parece serlo
      if (data.trim().startsWith('{') || data.trim().startsWith('[')) {
        try {
          const parsed = JSON.parse(data);
          return extractRecommendations(parsed);
        } catch {
          // Si no se puede parsear, tratar como string normal
        }
      }
      
      // Dividir por numeración
      const numberedItems = data.split(/\d+\.\s+/).filter(item => item.trim().length > 0);
      if (numberedItems.length > 1) {
        return numberedItems.slice(1).map(item => item.trim().replace(/\\n/g, ' '));
      }
      
      return [data.trim()];
    }

    console.warn('⚠️ Formato de datos no reconocido');
    return [];

  } catch (error) {
    console.error('💥 Error extrayendo recomendaciones:', error);
    
    // Fallback de emergencia
    const fallbackText = typeof data === 'string' ? data : JSON.stringify(data);
    if (fallbackText && fallbackText.length > 10) {
      return [fallbackText.substring(0, 500)];
    }
    
    return [];
  }
}

export default function PracticalRecommendationsSection({ article }: PracticalRecommendationsSectionProps) {
  if (!article.practical_recommendations) return null;

  const recommendations = extractRecommendations(article.practical_recommendations);
  
  // Obtener el título dinámico si está disponible
  const sectionTitle = (
    typeof article.practical_recommendations === 'object' && 
    'title' in article.practical_recommendations
  ) ? article.practical_recommendations.title : 'Estrategias prácticas recomendadas';

  return (
    
    <section className="mb-10 py-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {sectionTitle}
      </h3>
        <ul className="space-y-4">
          {recommendations.map((recommendation: string, index: number) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                {index + 1}
              </span>
              <div className="flex-1 text-gray-700 leading-relaxed">
                {(() => {
                  // Detectar si hay título y descripción separados por ":"
                  const colonIndex = recommendation.indexOf(':');

                  if (colonIndex > 0 && colonIndex < 100) {
                    const title = recommendation.substring(0, colonIndex).trim();
                    const description = recommendation.substring(colonIndex + 1).trim();

                    return (
                      <div>
                        <strong className="font-semibold text-gray-900 block mb-1">
                          {title}:
                        </strong>
                        <span className="text-gray-700">
                          {description}
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <span className="text-gray-700">
                        {recommendation}
                      </span>
                    );
                  }
                })()}
              </div>
            </li>
          ))}
        </ul>
      
    </section>
  );
}