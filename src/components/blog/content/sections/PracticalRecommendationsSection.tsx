import type { BlogArticle } from '../../../../types/blog';

interface PracticalRecommendationsSectionProps {
  article: BlogArticle;
}

function extractRecommendationsComplete(data: string[] | string | any): string[] {
  console.log('🔍 Datos recibidos:', data, typeof data);
  let recommendations: string[] = [];

  try {
    // CASO 1: Array directo limpio (el formato ideal que quieres)
    if (Array.isArray(data) && data.length > 1) {
      console.log('✅ Detectado: Array limpio con múltiples elementos');
      return data
        .filter(item => typeof item === 'string' && item.trim().length > 15)
        .slice(0, 10);
    }

    // CASO 2: Array con un solo elemento que contiene texto malformado
    if (Array.isArray(data) && data.length === 1 && typeof data[0] === 'string') {
      const rawString = data[0];
      console.log('🔧 Detectado: JSON malformado en array[0]');
      console.log('Raw string:', rawString);

      // ESTRATEGIA A: Buscar patrones completos "texto completo": ""
      const fullTextPattern = /["']([^"']{20,}?)["']\s*:\s*["']["']/g;
      let matches;

      while ((matches = fullTextPattern.exec(rawString)) !== null) {
        let fullRecommendation = matches[1]
          .replace(/\\"/g, '"')
          .replace(/\\'/g, "'")
          .replace(/\\\\/g, '\\')
          .replace(/\\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        if (fullRecommendation.length > 20) {
          recommendations.push(fullRecommendation);
        }
      }

      // ESTRATEGIA B: Si no encuentra nada, dividir manualmente
      if (recommendations.length === 0) {
        console.log('🔄 Estrategia A falló, usando división manual...');

        // Limpiar el string de caracteres problemáticos
        let cleanedString = rawString
          .replace(/\\"/g, '"')
          .replace(/\\'/g, "'")
          .replace(/\\\\/g, '\\')
          .replace(/^\["|"\]$/g, '')  // Remover [" y "]
          .replace(/^{"|"}$/g, '')    // Remover {" y "}
          .replace(/^"|"$/g, '');     // Remover " al inicio/final

        console.log('String limpio:', cleanedString);

        // Dividir por patrones que separan recomendaciones
        // Buscar: ","  seguido de espacio y comilla
        const separators = [
          /",\s*"/g,           // ","
          /'\s*,\s*'/g,        // ', '
          /:"\s*,\s*"/g        // :", "
        ];

        let parts: string[] = [];

        for (const separator of separators) {
          parts = cleanedString.split(separator);
          if (parts.length > 1) {
            console.log(`✅ Separación exitosa con patrón: ${separator.source}`);
            break;
          }
        }

        // Si no se pudo dividir, intentar extraer manualmente
        if (parts.length <= 1) {
          console.log('🎯 División manual por posiciones...');

          // Buscar todas las ocurrencias de texto largo seguido de ":"
          const manualPattern = /([^"'{}\[\],]{25,?})(?:\s*:\s*["']?["']?)/g;
          let manualMatches;

          while ((manualMatches = manualPattern.exec(cleanedString)) !== null) {
            const text = manualMatches[1].trim();
            if (text.length > 20) {
              parts.push(text);
            }
          }
        }

        // Procesar cada parte
        parts.forEach((part, index) => {
          console.log(`Procesando parte ${index + 1}:`, part);

          // Limpiar la parte
          let cleanPart = part
            .replace(/["{}\[\]]/g, '')     // Remover caracteres especiales
            .replace(/:\s*$/, '')          // Remover : al final
            .replace(/^[,\s]+|[,\s]+$/g, '') // Remover comas y espacios al inicio/final
            .trim();

          if (cleanPart.length > 20) {
            recommendations.push(cleanPart);
          }
        });
      }

      // ESTRATEGIA C: Última opción - regex más agresiva
      if (recommendations.length === 0) {
        console.log('🚨 Estrategias anteriores fallaron, usando regex agresiva...');

        // Buscar cualquier texto largo entre comillas o delimitadores
        const aggressivePattern = /['""]([^'""\[\]{}]{30,?}?)['""](?:\s*[:\,]|$)/g;
        let aggressiveMatches;

        while ((aggressiveMatches = aggressivePattern.exec(rawString)) !== null) {
          let text = aggressiveMatches[1]
            .replace(/\\./g, ' ')  // Reemplazar escapes por espacios
            .replace(/\s+/g, ' ')  // Normalizar espacios
            .trim();

          if (text.length > 25 && !text.includes('":') && !text.includes('",')) {
            recommendations.push(text);
          }
        }
      }
    }

    // CASO 3: String directo
    if (typeof data === 'string') {
      console.log('📝 Detectado: String directo');
      if (data.length > 20) {
        recommendations = [data];
      }
    }

    console.log('🎉 Recomendaciones extraídas:', recommendations);

  } catch (error) {
    console.error('💥 Error extrayendo recomendaciones:', error);

    // Fallback de emergencia
    const emergency = Array.isArray(data) ? data[0] : String(data);
    if (emergency && emergency.length > 20) {
      recommendations = [emergency.substring(0, 500)]; // Truncar si es muy largo
    }
  }

  // Filtrar y limpiar resultados finales
  return recommendations
    .filter(rec => rec && rec.trim().length > 20)
    .slice(0, 10)
    .map(rec => rec.trim());
}

export default function PracticalRecommendationsSection({ article }: PracticalRecommendationsSectionProps) {
  if (!article.practical_recommendations) return null;

  return (
    <section className="mb-14 py-8">
      <div className="mb-6">
        <h2>
          Estrategias Prácticas
        </h2>
        <p className="text-orange-700 font-medium">Herramientas que puedes aplicar hoy mismo</p>
      </div>

      <div className="space-y-5">
        {(() => {
          const recommendations = extractRecommendationsComplete(article.practical_recommendations);

          if (recommendations.length === 0) {
            return (
              <div className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xl">⚠️</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-red-800 mb-2">
                      No se pudieron extraer las recomendaciones
                    </p>
                    <p className="text-sm text-red-600">
                      Tipo de datos: <code className="bg-red-100 px-1 rounded">{typeof article.practical_recommendations}</code>
                    </p>
                    <p className="text-sm text-red-600">
                      Contenido: <code className="bg-red-100 px-1 rounded">
                        {JSON.stringify(article.practical_recommendations).substring(0, 100)}...
                      </code>
                    </p>
                    <button
                      onClick={() => console.log('Full data:', article.practical_recommendations)}
                      className="mt-2 text-sm bg-red-100 hover:bg-red-200 px-2 py-1 rounded transition-colors"
                    >
                      Ver datos completos en consola
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return recommendations.map((recommendation: string, index: number) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 mb-4 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                {(() => {
                  // Detectar si hay título y descripción separados por ":"
                  const colonIndex = recommendation.indexOf(':');

                  if (colonIndex > 0 && colonIndex < 80) {
                    const title = recommendation.substring(0, colonIndex).trim();
                    const description = recommendation.substring(colonIndex + 1).trim();

                    return (
                      <div>
                        <h4>
                          {title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <p className="text-gray-700 leading-relaxed font-medium text-base">
                        {recommendation}
                      </p>
                    );
                  }
                })()}
              </div>
            </div>
          ));
        })()}
      </div>
    </section>
  );
}