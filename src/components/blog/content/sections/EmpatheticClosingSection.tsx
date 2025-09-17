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
    <section className="mb-14 py-8">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="prose-h2">
          {title}
        </h2>
      </div>
      <div className="prose prose-lg max-w-none leading-relaxed">
        {formatText(content)}
      </div>
    </section>
  );
}