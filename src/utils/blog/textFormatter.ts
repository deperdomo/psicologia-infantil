// utils/textFormatter.ts
import React from 'react';

/**
 * Función auxiliar para procesar formato en línea (negrita y cursiva)
 * @param text - Texto a procesar
 * @returns Array de elementos React formateados
 */
function processInlineFormatting(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let key = 0;

  // Regex para encontrar patrones de formato
  // **texto** para negrita, *texto* para cursiva, ***texto*** para negrita y cursiva
  const formatRegex = /(\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let match: RegExpExecArray | null;

  while ((match = formatRegex.exec(text)) !== null) {
    // Agregar texto antes del formato
    if (match.index > currentIndex) {
      const plainText = text.slice(currentIndex, match.index);
      if (plainText) {
        parts.push(React.createElement('span', { key: key++ }, plainText));
      }
    }

    // Determinar el tipo de formato y agregar el elemento correspondiente
    if (match[1].startsWith('***') && match[1].endsWith('***')) {
      // Negrita y cursiva
      parts.push(
        React.createElement(
          'strong',
          { key: key++, className: 'prose-strong prose-em' },
          match[2]
        )
      );
    } else if (match[1].startsWith('**') && match[1].endsWith('**')) {
      // Solo negrita
      parts.push(
        React.createElement(
          'strong',
          { key: key++, className: 'prose-strong' },
          match[3]
        )
      );
    } else if (match[1].startsWith('*') && match[1].endsWith('*')) {
      // Solo cursiva
      parts.push(
        React.createElement(
          'em',
          { key: key++, className: 'prose-em' },
          match[4]
        )
      );
    }

    currentIndex = match.index + match[1].length;
  }

  // Agregar el texto restante
  if (currentIndex < text.length) {
    const remainingText = text.slice(currentIndex);
    if (remainingText) {
      parts.push(React.createElement('span', { key: key++ }, remainingText));
    }
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Función principal para formatear texto con marcadores especiales
 * Soporta:
 * - **texto** para negrita
 * - *texto* para cursiva  
 * - ***texto*** para negrita y cursiva
 * - \n para saltos de línea (nuevos párrafos)
 * 
 * @param text - Texto a formatear
 * @returns Array de elementos React JSX o null si no hay texto
 */
export function formatText(text: string | null | undefined): React.ReactNode[] | null {
  if (!text) return null;

  // Dividir el texto por saltos de línea explícitos - CORREGIDO: usar \n en lugar de \\n
  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
    
  return paragraphs.map((paragraph, paragraphIndex) => {
    // Procesar cada párrafo para formatear negritas y cursivas
    const processedParagraph = processInlineFormatting(paragraph.replace(/\\n/g, ' ').replace(/\n/g, ' ').replace(/\\/g, ' ').trim());
        
    return React.createElement(
      'p',
      { 
        key: paragraphIndex,
        className: 'prose-p mb-2 last:mb-0'
      },
      processedParagraph
      
    );
  });
}

/**
 * Función para limpiar marcadores de formato del texto (útil para previsualizaciones)
 * @param text - Texto con marcadores de formato
 * @returns Texto limpio sin marcadores
 */
export function stripFormatting(text: string | null | undefined): string {
  if (!text) return '';
    
  return text
    .replace(/\*\*\*([^*]+)\*\*\*/g, '$1') // Remover negrita + cursiva
    .replace(/\*\*([^*]+)\*\*/g, '$1')     // Remover negrita
    .replace(/\*([^*]+)\*/g, '$1')         // Remover cursiva
    .replace(/\\n/g, ' ')                  // Reemplazar \\n literal con espacios
    .replace(/\n/g, ' ')                   // Reemplazar \n real con espacios
    .trim();
}