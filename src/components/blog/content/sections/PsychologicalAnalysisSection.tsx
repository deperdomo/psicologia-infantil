import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';

// Perspectiva Psicológica
interface PsychologicalAnalysisSectionProps {
  article: BlogArticle;
}

export default function PsychologicalAnalysisSection({ article }: PsychologicalAnalysisSectionProps) {
  if (!article.psychological_analysis) return null;

  const { title, content } = article.psychological_analysis;

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