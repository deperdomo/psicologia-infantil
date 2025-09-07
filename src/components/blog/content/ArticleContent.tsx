// ===================================
// 📄 CONTENIDO PRINCIPAL DEL ARTÍCULO ESTILO PSICOLOGÍA Y MENTE
// Renderizado optimizado con jerarquía visual profesional
// Fuente recomendada: Inter (importar desde Google Fonts)
// ===================================

import { BookOpen, Lightbulb, Heart, Phone, AlertCircle } from 'lucide-react';
import type { BlogArticle } from '../../../types/blog';

interface ArticleContentProps {
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

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-inter">
      <article className="prose prose-lg max-w-none">

        {/* Call to Action (Ayuda Profesional) */}
        {article.call_to_action && (
          <section className="mb-12 p-6 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Cuándo buscar ayuda profesional
                </h3>
                <div className="text-gray-700 leading-relaxed mb-4">
                  {article.call_to_action.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar consulta
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 🟠 ALTA IMPORTANCIA - Análisis Psicológico */}
        {article.psychological_analysis && (
          <section className="mb-14 p-8 bg-white border border-gray-200 rounded-xl shadow-md">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Perspectiva Psicológica
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {article.psychological_analysis.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-5 last:mb-0 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* 🟠 ALTA IMPORTANCIA - Recomendaciones Prácticas */}
        {article.practical_recommendations && (
          <section className="mb-14 p-8 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl shadow-md">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Estrategias Prácticas
              </h3>
              <p className="text-orange-700 font-medium">Herramientas que puedes aplicar hoy mismo</p>
            </div>

            <div className="space-y-5">
              {(() => {
                const recommendations = extractRecommendationsComplete(article.practical_recommendations);

                if (recommendations.length === 0) {
                  return (
                    <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
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
                    className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm duration-300 border border-orange-100"
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
                              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
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
        )}

        {/* 🟡 IMPORTANCIA MEDIA - Pregunta Reflexiva */}
        {article.reflective_question && (
          <section className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-400 rounded-r-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-medium text-gray-800 leading-relaxed italic">
                  {article.reflective_question}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 🟡 IMPORTANCIA MEDIA - Datos e Investigación */}
        {article.current_data_research && (
          <section className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Lo que dice la investigación
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  {article.current_data_research.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 🟡 IMPORTANCIA MEDIA - Caso Anónimo */}
        {article.anonymous_case && (
          <section className="mb-12 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
              <span className="mr-2 text-xl">👥</span>
              Caso real (nombre modificado por privacidad)
            </h3>
            <blockquote className="text-gray-700 italic leading-relaxed border-l-4 border-green-400 pl-6 bg-white p-4 rounded-r-lg">
              "{article.anonymous_case}"
            </blockquote>
          </section>
        )}

        {/* 🔵 IMPORTANCIA BAJA - FAQ */}
        {article.FAQ_data && article.FAQ_data.length > 0 && (
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Preguntas frecuentes
            </h3>
            <div className="space-y-3">
              {article.FAQ_data.map((faq: any, index: number) => (
                <details key={index} className="group border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-gray-900 group-open:text-blue-600 hover:bg-gray-50">
                    <span className="flex items-center">
                      <span className="mr-3 text-blue-600 font-bold text-sm">Q:</span>
                      {faq.pregunta}
                    </span>
                    <span className="ml-2 group-open:rotate-180 transition-transform text-gray-400">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                    <span className="font-semibold text-green-600 mr-2 text-sm">A:</span>
                    {faq.respuesta}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* 🔵 IMPORTANCIA BAJA - Puntos Clave */}
        {article.summary_points && article.summary_points.length > 0 && (
          <section className="mb-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Puntos clave para recordar
            </h3>
            <ul className="space-y-3">
              {article.summary_points.map((point: any, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700 leading-relaxed">
                    {point.point}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 💙 CIERRE EMPÁTICO - Importancia emocional */}
        {article.empathetic_closing && (
          <section className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Un mensaje final
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  {article.empathetic_closing.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 🔵 IMPORTANCIA BAJA - Newsletter */}
        {article.newsletter_mention && (
          <section className="mb-8 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-900 mb-3 flex items-center">
              <span className="mr-2">📧</span>
              Newsletter especializado
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              {article.newsletter_mention}
            </p>
            {article.related_newsletter_content && (
              <div className="text-sm text-gray-600">
                <p>{(article.related_newsletter_content as any)?.content}</p>
                {(article.related_newsletter_content as any)?.call_to_action && (
                  <a
                    href="/newsletter"
                    className="inline-flex items-center mt-3 px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors text-sm"
                  >
                    {(article.related_newsletter_content as any).call_to_action}
                  </a>
                )}
              </div>
            )}
          </section>
        )}

      </article>
    </div>
  );
}