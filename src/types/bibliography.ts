// ===================================
// 📚 TIPOS PARA REFERENCIAS BIBLIOGRÁFICAS
// ===================================

export interface Citation {
  id: string;
  type: 'article' | 'book' | 'website' | 'journal' | 'study' | 'report';
  title: string;
  authors: string[];
  publication: string;
  year: number;
  url?: string;
  doi?: string;
  isbn?: string;
  pages?: string;
  volume?: string;
  issue?: string;
  accessed_date?: string;
  evidence_level?: 'high' | 'medium' | 'low';
  peer_reviewed?: boolean;
}

export interface Bibliography {
  citations: Citation[];
  style: 'apa' | 'mla' | 'chicago';
  last_updated: string;
}

export interface Reference {
  citation_id: string;
  in_text_position: number;
  quote?: string;
  paraphrase?: boolean;
  page_reference?: string;
}

export type CitationStyle = 'apa' | 'mla' | 'chicago';

export interface FormattedCitation {
  id: string;
  formatted_text: string;
  html_formatted: string;
  style: CitationStyle;
}
