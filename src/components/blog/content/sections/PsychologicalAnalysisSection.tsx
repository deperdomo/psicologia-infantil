import type { BlogArticle } from '../../../../types/blog';

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
        <h2>
          {title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></div>
      </div>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-5 last:mb-0 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}