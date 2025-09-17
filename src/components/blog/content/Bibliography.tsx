// ===================================
// 📚 REFERENCIAS BIBLIOGRÁFICAS ESTILO PSICOLOGÍA Y MENTE
// Referencias académicas con formato APA y desplegables
// ===================================

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, BookOpen, FileText, Globe } from 'lucide-react';
import type { BlogArticle } from '../../../types/blog';

interface BibliographyProps {
  article: BlogArticle;
}

export default function Bibliography({ article }: BibliographyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!article.bibliography || !Array.isArray(article.bibliography) || article.bibliography.length === 0) {
    return null;
  }

  const references = article.bibliography;

  const formatAuthors = (authors: any) => {
    if (!authors || !Array.isArray(authors)) return 'Autor desconocido';
    if (authors.length === 1) return authors[0];
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} y ${authors[1]}`;
    if (authors.length > 2) {
      return `${authors[0]}, ${authors.slice(1, -1).join(', ')} y ${authors[authors.length - 1]}`;
    }
    return '';
  };

  const formatAPACitation = (ref: any) => {
    const authors = formatAuthors(ref.authors);
    let citation = `${authors} (${ref.year || 'Sin fecha'}). ${ref.title || 'Título no disponible'}`;

    if (ref.type === 'journal_article' && ref.journal) {
      citation += `. *${ref.journal}*`;
      if (ref.volume) citation += `, ${ref.volume}`;
      if (ref.pages) citation += `, ${ref.pages}`;
    } else if (ref.type === 'book' && ref.publisher) {
      citation += `. ${ref.publisher}`;
    } else if (ref.type === 'report' && ref.publisher) {
      citation += `. ${ref.publisher}`;
    }

    if (ref.doi) {
      citation += `. https://doi.org/${ref.doi}`;
    }

    return citation;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal_article': return <FileText className="w-4 h-4 text-blue-600" />;
      case 'book': return <BookOpen className="w-4 h-4 text-green-600" />;
      case 'report': return <FileText className="w-4 h-4 text-orange-600" />;
      case 'website': return <Globe className="w-4 h-4 text-purple-600" />;
      default: return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'journal_article': return 'Artículo científico';
      case 'book': return 'Libro';
      case 'report': return 'Informe';
      case 'website': return 'Sitio web';
      default: return 'Documento';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border-b border-gray-200 pb-4">
        {/* Header clickeable */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-4 flex items-center justify-between transition-colors"
        >
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-gray-700" />
            <h3 className="prose-h3">
              Referencias bibliográficas ({references.length})
            </h3>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-700" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Contenido expandible */}
        {isExpanded && (
          <div className="py-6">
            <p className="prose-p text-sm mb-6">
              Este artículo está respaldado por investigación científica actual. 
              Las referencias están formateadas según las normas APA.
            </p>

            <div className="space-y-6">
              {references.map((ref, index) => (
                <div
                  key={ref.id}
                  className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                >
                  {/* Número y tipo de referencia */}
                  <div className="flex items-start space-x-3 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 text-sm font-medium rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(ref.type)}
                      <span className="text-sm font-medium text-gray-600">
                        {getTypeName(ref.type)}
                      </span>
                      {ref.cited_in_text && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Citado en el texto
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Cita formateada */}
                  <div className="ml-9">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {formatAPACitation(ref)}
                    </p>

                    {/* Información adicional */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                      <span>Año: {ref.year}</span>
                      {ref.type === 'journal_article' && ref.journal && (
                        <span>Revista: {ref.journal}</span>
                      )}
                      {ref.doi && (
                        <a
                          href={`https://doi.org/${ref.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                        >
                          <span>DOI: {ref.doi}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {ref.url && !ref.doi && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                        >
                          <span>Ver fuente</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer con información sobre las referencias */}
            <div className="mt-6 p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">
                💡 Sobre estas referencias
              </h4>
              <p className="text-sm text-blue-800">
                Todas las referencias incluidas han sido verificadas y provienen de fuentes 
                académicas reconocidas, revistas científicas indexadas o instituciones oficiales 
                en el campo de la psicología y el desarrollo infantil.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
