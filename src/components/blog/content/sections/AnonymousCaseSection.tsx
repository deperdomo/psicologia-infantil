// Caso real (nombre modificado por privacidad)
import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';

interface AnonymousCaseSectionProps {
  article: BlogArticle;
}

export default function AnonymousCaseSection({ article }: AnonymousCaseSectionProps) {
  if (!article.anonymous_case) return null;

  const { title, content } = article.anonymous_case;
  const textoFormateado = formatText(content);
  return (
    <section className="mb-12 py-6">
      <h3 className="prose-h3 flex items-center">
        {title}
      </h3>
      <blockquote className="prose-blockquote pl-6">
        {textoFormateado}
      </blockquote>
    </section>
  );
}