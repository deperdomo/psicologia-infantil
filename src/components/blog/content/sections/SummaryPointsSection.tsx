import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';

interface SummaryPointsSectionProps {
  article: BlogArticle;
}

export default function SummaryPointsSection({ article }: SummaryPointsSectionProps) {
  if (!article.summary_points || !article.summary_points.length) return null;

  return (
    <section className="mb-10 py-6">
      <h3 className="prose-h3">
        Puntos clave para recordar
      </h3>
      <ul className="prose-ul space-y-3">
        {article.summary_points.map((point: any, index: number) => (
          <li key={index} className="prose-li flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-5">
              ✓
            </span>
            <span className="leading-relaxed">
              {formatText(point.point)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}