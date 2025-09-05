// ===================================
// 📚 UTILIDADES PARA REFERENCIAS BIBLIOGRÁFICAS
// ===================================

import type { Citation, FormattedCitation, CitationStyle } from '../../types/bibliography';

/**
 * Formatea una cita según el estilo especificado
 */
export function formatCitation(citation: Citation, style: CitationStyle = 'apa'): FormattedCitation {
  let formatted_text = '';
  let html_formatted = '';
  
  switch (style) {
    case 'apa':
      formatted_text = formatAPA(citation);
      html_formatted = formatAPAHtml(citation);
      break;
    case 'mla':
      formatted_text = formatMLA(citation);
      html_formatted = formatMLAHtml(citation);
      break;
    case 'chicago':
      formatted_text = formatChicago(citation);
      html_formatted = formatChicagoHtml(citation);
      break;
    default:
      formatted_text = formatAPA(citation);
      html_formatted = formatAPAHtml(citation);
  }
  
  return {
    id: citation.id,
    formatted_text,
    html_formatted,
    style
  };
}

/**
 * Formato APA (American Psychological Association)
 */
function formatAPA(citation: Citation): string {
  const authors = formatAuthorsAPA(citation.authors);
  const year = `(${citation.year})`;
  const title = citation.title;
  
  let result = `${authors} ${year}. ${title}`;
  
  if (citation.type === 'journal' && citation.publication) {
    result += `. *${citation.publication}*`;
    if (citation.volume) result += `, ${citation.volume}`;
    if (citation.issue) result += `(${citation.issue})`;
    if (citation.pages) result += `, ${citation.pages}`;
  } else if (citation.type === 'book' && citation.publication) {
    result += `. ${citation.publication}`;
  } else if (citation.type === 'website') {
    if (citation.publication) result += `. *${citation.publication}*`;
  }
  
  if (citation.doi) {
    result += `. https://doi.org/${citation.doi}`;
  } else if (citation.url) {
    result += `. ${citation.url}`;
  }
  
  return result + '.';
}

/**
 * Formato APA en HTML
 */
function formatAPAHtml(citation: Citation): string {
  const authors = formatAuthorsAPA(citation.authors);
  const year = `(${citation.year})`;
  const title = `<em>${citation.title}</em>`;
  
  let result = `${authors} ${year}. ${title}`;
  
  if (citation.type === 'journal' && citation.publication) {
    result += `. <strong>${citation.publication}</strong>`;
    if (citation.volume) result += `, <em>${citation.volume}</em>`;
    if (citation.issue) result += `(${citation.issue})`;
    if (citation.pages) result += `, ${citation.pages}`;
  } else if (citation.type === 'book' && citation.publication) {
    result += `. ${citation.publication}`;
  } else if (citation.type === 'website') {
    if (citation.publication) result += `. <em>${citation.publication}</em>`;
  }
  
  if (citation.doi) {
    result += `. <a href="https://doi.org/${citation.doi}" target="_blank" rel="noopener noreferrer">https://doi.org/${citation.doi}</a>`;
  } else if (citation.url) {
    result += `. <a href="${citation.url}" target="_blank" rel="noopener noreferrer">${citation.url}</a>`;
  }
  
  return result + '.';
}

/**
 * Formato MLA (Modern Language Association)
 */
function formatMLA(citation: Citation): string {
  const authors = formatAuthorsMLA(citation.authors);
  const title = `"${citation.title}"`;
  
  let result = `${authors}. ${title}`;
  
  if (citation.publication) {
    result += ` ${citation.publication}`;
  }
  
  if (citation.volume) result += `, vol. ${citation.volume}`;
  if (citation.issue) result += `, no. ${citation.issue}`;
  
  result += `, ${citation.year}`;
  
  if (citation.pages) result += `, pp. ${citation.pages}`;
  
  if (citation.url) {
    result += `. Web`;
    if (citation.accessed_date) {
      result += `. ${citation.accessed_date}`;
    }
  }
  
  return result + '.';
}

/**
 * Formato MLA en HTML
 */
function formatMLAHtml(citation: Citation): string {
  const authors = formatAuthorsMLA(citation.authors);
  const title = `"<em>${citation.title}</em>"`;
  
  let result = `${authors}. ${title}`;
  
  if (citation.publication) {
    result += ` <em>${citation.publication}</em>`;
  }
  
  if (citation.volume) result += `, vol. ${citation.volume}`;
  if (citation.issue) result += `, no. ${citation.issue}`;
  
  result += `, ${citation.year}`;
  
  if (citation.pages) result += `, pp. ${citation.pages}`;
  
  if (citation.url) {
    result += `. Web`;
    if (citation.accessed_date) {
      result += `. ${citation.accessed_date}`;
    }
  }
  
  return result + '.';
}

/**
 * Formato Chicago
 */
function formatChicago(citation: Citation): string {
  const authors = formatAuthorsChicago(citation.authors);
  const title = `"${citation.title}"`;
  
  let result = `${authors}. ${title}`;
  
  if (citation.publication) {
    result += ` ${citation.publication}`;
  }
  
  if (citation.volume) result += ` ${citation.volume}`;
  if (citation.issue) result += `, no. ${citation.issue}`;
  
  result += ` (${citation.year})`;
  
  if (citation.pages) result += `: ${citation.pages}`;
  
  if (citation.url) {
    result += `. ${citation.url}`;
  }
  
  return result + '.';
}

/**
 * Formato Chicago en HTML
 */
function formatChicagoHtml(citation: Citation): string {
  const authors = formatAuthorsChicago(citation.authors);
  const title = `"<em>${citation.title}</em>"`;
  
  let result = `${authors}. ${title}`;
  
  if (citation.publication) {
    result += ` <em>${citation.publication}</em>`;
  }
  
  if (citation.volume) result += ` ${citation.volume}`;
  if (citation.issue) result += `, no. ${citation.issue}`;
  
  result += ` (${citation.year})`;
  
  if (citation.pages) result += `: ${citation.pages}`;
  
  if (citation.url) {
    result += `. <a href="${citation.url}" target="_blank" rel="noopener noreferrer">${citation.url}</a>`;
  }
  
  return result + '.';
}

/**
 * Formatear autores según APA
 */
function formatAuthorsAPA(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
  if (authors.length <= 20) {
    const lastAuthor = authors[authors.length - 1];
    const otherAuthors = authors.slice(0, -1).join(', ');
    return `${otherAuthors}, & ${lastAuthor}`;
  }
  // Más de 20 autores
  return `${authors.slice(0, 19).join(', ')}, ... ${authors[authors.length - 1]}`;
}

/**
 * Formatear autores según MLA
 */
function formatAuthorsMLA(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  
  const lastAuthor = authors[authors.length - 1];
  const otherAuthors = authors.slice(0, -1).join(', ');
  return `${otherAuthors}, and ${lastAuthor}`;
}

/**
 * Formatear autores según Chicago
 */
function formatAuthorsChicago(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  if (authors.length === 3) return `${authors[0]}, ${authors[1]}, and ${authors[2]}`;
  
  // Más de 3 autores
  return `${authors[0]} et al.`;
}

/**
 * Valida que una cita tenga los campos mínimos requeridos
 */
export function validateCitation(citation: Citation): boolean {
  if (!citation.title || !citation.year || !citation.authors || citation.authors.length === 0) {
    return false;
  }
  
  if (citation.type === 'journal' && !citation.publication) {
    return false;
  }
  
  return true;
}

/**
 * Genera una lista de referencias formateadas
 */
export function formatBibliography(citations: Citation[], style: CitationStyle = 'apa'): FormattedCitation[] {
  return citations
    .filter(validateCitation)
    .sort((a, b) => {
      // Ordenar alfabéticamente por primer autor
      const authorA = a.authors[0] || '';
      const authorB = b.authors[0] || '';
      return authorA.localeCompare(authorB);
    })
    .map(citation => formatCitation(citation, style));
}

/**
 * Extrae información básica de una URL para crear una cita web
 */
export function extractWebCitation(url: string, title?: string): Partial<Citation> {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace('www.', '');
    
    return {
      type: 'website',
      url,
      publication: domain,
      title: title || 'Página web',
      accessed_date: new Date().toLocaleDateString('es-ES'),
      year: new Date().getFullYear(),
      authors: [domain]
    };
  } catch {
    return {
      type: 'website',
      url,
      title: title || 'Página web',
      year: new Date().getFullYear(),
      authors: ['Autor desconocido']
    };
  }
}
