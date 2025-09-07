import type { BlogArticle } from '../../../../types/blog';

interface NewsletterSectionProps {
  article: BlogArticle;
}

export default function NewsletterSection({ article }: NewsletterSectionProps) {
  if (!article.newsletter_mention) return null;

  return (
    <section className="mb-8 py-5">
      <h3 className="flex items-center">
        <span className="mr-2">📧</span>
        Newsletter especializado
      </h3>
      <p className="text-gray-700 mb-4 text-sm">
        {article.newsletter_mention}
      </p>
      {article.related_newsletter_content && (
        <div className="text-sm text-gray-600">
          <p>{(article.related_newsletter_content as any)?.content}</p>
          {(article.related_newsletter_content as any)?.call_to_action && (
            <a
              href="/newsletter"
              className="inline-flex items-center mt-3 px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors text-sm"
            >
              {(article.related_newsletter_content as any).call_to_action}
            </a>
          )}
        </div>
      )}
    </section>
  );
}