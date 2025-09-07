import type { BlogArticle } from '../../../../types/blog';

interface EmpatheticClosingSectionProps {
  article: BlogArticle;
}

export default function EmpatheticClosingSection({ article }: EmpatheticClosingSectionProps) {
  if (!article.empathetic_closing) return null;

  return (
    <section className="mb-12 py-8">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3>
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
  );
}