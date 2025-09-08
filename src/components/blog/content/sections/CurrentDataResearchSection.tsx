import type { BlogArticle } from '../../../../types/blog';

interface CurrentDataResearchSectionProps {
  article: BlogArticle;
}

export default function CurrentDataResearchSection({ article }: CurrentDataResearchSectionProps) {
  if (!article.current_data_research) return null;

  const { title, content } = article.current_data_research;

  return (
    <section className="mb-12 p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3>
            {title}
          </h3>
          <div className="text-gray-700 leading-relaxed">
            {content.split('\n').map((paragraph, index) => (
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