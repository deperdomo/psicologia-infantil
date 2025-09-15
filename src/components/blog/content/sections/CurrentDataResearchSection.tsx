import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';

interface CurrentDataResearchSectionProps {
  article: BlogArticle;
}

export default function CurrentDataResearchSection({ article }: CurrentDataResearchSectionProps) {
  if (!article.current_data_research) return null;

  const { title, content } = article.current_data_research;

  return (
    <section className="mb-12">
      <div className="flex items-start">
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