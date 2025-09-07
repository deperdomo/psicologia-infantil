import { Phone } from 'lucide-react';
import type { BlogArticle } from '../../../../types/blog';

interface CallToActionSectionProps {
  article: BlogArticle;
}

export default function CallToActionSection({ article }: CallToActionSectionProps) {
  if (!article.call_to_action) return null;

  return (
    <section className="mb-12 p-6">
      <div className="flex items-start space-x-4">
        
        <div className="flex-1">
          <h3>
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
  );
}