// Un mensaje final
import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';

interface EmpatheticClosingSectionProps {
  article: BlogArticle;
}

export default function EmpatheticClosingSection({ article }: EmpatheticClosingSectionProps) {
  if (!article.empathetic_closing) return null;

  const { title, content } = article.empathetic_closing;

  return (
    <section className="mb-12 py-8">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3>
            {title}
          </h3>
          <div className="text-gray-700 leading-relaxed">
            {formatText(content)}
          </div>
        </div>
      </div>
    </section>
  );
}