// ===================================
// 📚 COMPONENTE DE BIBLIOGRAFÍA PROFESIONAL
// ===================================

import { useState } from 'react';
import type { Citation, CitationStyle } from '../../../types/bibliography';
import { formatBibliography, validateCitation } from '../../../utils/blog/bibliographyUtils';

interface BlogBibliographyProps {
  bibliography: Citation[];
  style?: CitationStyle;
  interactive?: boolean;
  className?: string;
  showStyleSelector?: boolean;
}

export default function BlogBibliography({
  bibliography = [],
  style = 'apa',
  interactive = false,
  className = '',
  showStyleSelector = false
}: BlogBibliographyProps) {
  const [selectedStyle, setSelectedStyle] = useState<CitationStyle>(style);
  const [expandedCitations, setExpandedCitations] = useState<Set<string>>(new Set());

  // Filtrar citas válidas
  const validCitations = bibliography.filter(validateCitation);
  
  if (validCitations.length === 0) {
    return null;
  }

  // Formatear bibliografía
  const formattedCitations = formatBibliography(validCitations, selectedStyle);

  const toggleCitation = (citationId: string) => {
    if (!interactive) return;
    
    const newExpanded = new Set(expandedCitations);
    if (newExpanded.has(citationId)) {
      newExpanded.delete(citationId);
    } else {
      newExpanded.add(citationId);
    }
    setExpandedCitations(newExpanded);
  };

  const getCitationTypeIcon = (type: Citation['type']) => {
    switch (type) {
      case 'journal': return '📄';
      case 'book': return '📚';
      case 'website': return '🌐';
      case 'study': return '🔬';
      case 'report': return '📋';
      default: return '📝';
    }
  };

  const getCitationTypeLabel = (type: Citation['type']) => {
    switch (type) {
      case 'journal': return 'Artículo de revista';
      case 'book': return 'Libro';
      case 'website': return 'Sitio web';
      case 'study': return 'Estudio';
      case 'report': return 'Informe';
      default: return 'Artículo';
    }
  };

  return (
    <section className={`bg-gray-50 rounded-lg p-6 ${className}`} id="bibliografia">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-bold text-gray-900">
            📚 Referencias Bibliográficas
          </h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {validCitations.length} {validCitations.length === 1 ? 'referencia' : 'referencias'}
          </span>
        </div>
        
        {/* Selector de estilo */}
        {showStyleSelector && (
          <div className="flex items-center space-x-2">
            <label htmlFor="citation-style" className="text-sm font-medium text-gray-700">
              Estilo:
            </label>
            <select
              id="citation-style"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value as CitationStyle)}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="apa">APA</option>
              <option value="mla">MLA</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
        )}
      </div>

      {/* Lista de referencias */}
      <div className="space-y-4">
        {formattedCitations.map((formattedCitation, index) => {
          const originalCitation = validCitations.find(c => c.id === formattedCitation.id);
          const isExpanded = expandedCitations.has(formattedCitation.id);
          
          return (
            <div
              key={formattedCitation.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
            >
              {/* Número y tipo */}
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                
                <div className="flex-1 min-w-0">
                  {/* Cita formateada */}
                  <div 
                    className={`text-gray-900 ${interactive ? 'cursor-pointer hover:text-blue-600' : ''}`}
                    onClick={() => toggleCitation(formattedCitation.id)}
                    dangerouslySetInnerHTML={{ __html: formattedCitation.html_formatted }}
                  />
                  
                  {/* Metadata adicional */}
                  {originalCitation && (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {/* Tipo de publicación */}
                      <span className="inline-flex items-center text-xs text-gray-600">
                        {getCitationTypeIcon(originalCitation.type)}
                        <span className="ml-1">{getCitationTypeLabel(originalCitation.type)}</span>
                      </span>
                      
                      {/* Revisión por pares */}
                      {originalCitation.peer_reviewed && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          ✓ Revisión por pares
                        </span>
                      )}
                      
                      {/* DOI */}
                      {originalCitation.doi && (
                        <span className="inline-flex items-center text-xs text-gray-600">
                          DOI: {originalCitation.doi}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Información expandida */}
                  {interactive && isExpanded && originalCitation && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-md border-l-4 border-blue-500">
                      <div className="text-sm text-gray-700 space-y-1">
                        {originalCitation.authors.length > 0 && (
                          <p><strong>Autores:</strong> {originalCitation.authors.join(', ')}</p>
                        )}
                        <p><strong>Año:</strong> {originalCitation.year}</p>
                        {originalCitation.publication && (
                          <p><strong>Publicación:</strong> {originalCitation.publication}</p>
                        )}
                        {originalCitation.volume && (
                          <p><strong>Volumen:</strong> {originalCitation.volume}</p>
                        )}
                        {originalCitation.issue && (
                          <p><strong>Número:</strong> {originalCitation.issue}</p>
                        )}
                        {originalCitation.pages && (
                          <p><strong>Páginas:</strong> {originalCitation.pages}</p>
                        )}
                        {originalCitation.isbn && (
                          <p><strong>ISBN:</strong> {originalCitation.isbn}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer informativo */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <div className="flex items-start space-x-2">
          <span className="text-blue-600">ℹ️</span>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Sobre las referencias:</p>
            <p className="mt-1">
              Todas las referencias han sido verificadas y provienen de fuentes académicas confiables. 
              El contenido se basa en evidencia científica actualizada en el campo de la psicología infantil.
              {interactive && ' Haz clic en cualquier referencia para ver más detalles.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
