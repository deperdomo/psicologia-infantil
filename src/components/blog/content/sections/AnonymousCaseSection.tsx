import type { BlogArticle } from '../../../../types/blog';

interface AnonymousCaseSectionProps {
  article: BlogArticle;
}

export default function AnonymousCaseSection({ article }: AnonymousCaseSectionProps) {
  if (!article.anonymous_case) return null;

  return (
    <section className="mb-12 p-6">
      <h3 className="flex items-center">
        <span className="mr-2 text-xl">👥</span>
        Caso real (nombre modificado por privacidad)
      </h3>
      <blockquote className="text-gray-700 italic leading-relaxed pl-6">
        "{article.anonymous_case}"
      </blockquote>
    </section>
  );
}