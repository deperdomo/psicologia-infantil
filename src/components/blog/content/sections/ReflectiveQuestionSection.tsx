import { Lightbulb } from 'lucide-react';
import type { BlogArticle } from '../../../../types/blog';

interface ReflectiveQuestionSectionProps {
  article: BlogArticle;
}

export default function ReflectiveQuestionSection({ article }: ReflectiveQuestionSectionProps) {
  if (!article.reflective_question) return null;

  return (
    <section className="mb-12 p-6">
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-indigo-600" />
        </div>
        <div className="flex-1">
          <p className="text-xl font-medium text-gray-800 leading-relaxed italic">
            {article.reflective_question}
          </p>
        </div>
      </div>
    </section>
  );
}