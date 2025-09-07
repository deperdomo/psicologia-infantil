// ===================================
// 📄 CONTENIDO PRINCIPAL DEL ARTÍCULO ESTILO PSICOLOGÍA Y MENTE
// Renderizado optimizado con jerarquía visual profesional
// ===================================

import type { BlogArticle } from '../../../types/blog';
import {
  CallToActionSection,
  PsychologicalAnalysisSection,
  PracticalRecommendationsSection,
  ReflectiveQuestionSection,
  CurrentDataResearchSection,
  AnonymousCaseSection,
  FAQSection,
  SummaryPointsSection,
  EmpatheticClosingSection,
  NewsletterSection
} from './sections';

interface ArticleContentProps {
  article: BlogArticle;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-none font-inter prose-psicologia">

        {/* Call to Action (Ayuda Profesional) */}
        <CallToActionSection article={article} />

        {/* 🟠 ALTA IMPORTANCIA - Análisis Psicológico */}
        <PsychologicalAnalysisSection article={article} />

        {/* 🟠 ALTA IMPORTANCIA - Recomendaciones Prácticas */}
        <PracticalRecommendationsSection article={article} />

        {/* 🟡 IMPORTANCIA MEDIA - Pregunta Reflexiva */}
        <ReflectiveQuestionSection article={article} />

        {/* 🟡 IMPORTANCIA MEDIA - Datos e Investigación */}
        <CurrentDataResearchSection article={article} />

        {/* 🟡 IMPORTANCIA MEDIA - Caso Anónimo */}
        <AnonymousCaseSection article={article} />

        {/* 🔵 IMPORTANCIA BAJA - FAQ */}
        <FAQSection article={article} />

        {/* 🔵 IMPORTANCIA BAJA - Puntos Clave */}
        <SummaryPointsSection article={article} />

        {/* 💙 CIERRE EMPÁTICO - Importancia emocional */}
        <EmpatheticClosingSection article={article} />

        {/* 🔵 IMPORTANCIA BAJA - Newsletter */}
        <NewsletterSection article={article} />

      </article>
    </div>
  );
}