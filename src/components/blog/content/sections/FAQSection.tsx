import type { BlogArticle } from '../../../../types/blog';

interface FAQSectionProps {
  article: BlogArticle;
}

export default function FAQSection({ article }: FAQSectionProps) {
  if (!article.faq_data || !article.faq_data.length) return null;

  return (
    <section className="mb-10">
      <h3>
        Preguntas frecuentes
      </h3>
      <div className="space-y-3">
        {article.faq_data.map((faq: any, index: number) => (
          <details key={index} className="group border-b border-gray-200 py-4 last:border-b-0">
            <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900 group-open:text-blue-600">
              <span className="flex items-center">
                <span className="mr-3 text-blue-600 font-bold text-sm">Q:</span>
                {faq.pregunta}
              </span>
              <span className="ml-2 group-open:rotate-180 transition-transform text-gray-400">
                ▼
              </span>
            </summary>
            <div className="pt-2 text-gray-700 leading-relaxed">
              <span className="font-semibold text-green-600 mr-2 text-sm">A:</span>
              {faq.respuesta}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}