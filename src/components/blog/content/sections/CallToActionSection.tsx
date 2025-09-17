import { Phone } from 'lucide-react';
import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';

interface CallToActionSectionProps {
  article: BlogArticle;
}

export default function CallToActionSection({ article }: CallToActionSectionProps) {
  if (!article.call_to_action) return null;

  return (
    <section className="mb-12 p-6">
      <div className="flex items-start space-x-4">

        <div className="flex-1">
          <h3 className="prose-h3">
            Cuándo buscar ayuda profesional
          </h3>
          <div className="leading-relaxed mb-4">
            {formatText(article.call_to_action)}
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