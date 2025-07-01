import { useEffect } from 'react';

interface UsePageTitleProps {
  title: string;
  description?: string;
}

export const usePageTitle = ({ title, description }: UsePageTitleProps) => {
  useEffect(() => {
    // Actualizar título de la página
    const fullTitle = title ? `${title} | Psicología Infantil - Llenia Monteagudo` : 'Psicología Infantil - Llenia Monteagudo - Acompañamiento Terapéutico';
    document.title = fullTitle;

    // Actualizar meta description si se proporciona
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Cleanup: restaurar título original al desmontar
    return () => {
      document.title = 'Psicología Infantil - Llenia Monteagudo - Acompañamiento Terapéutico';
    };
  }, [title, description]);
};

// Hook simplificado para casos básicos
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const fullTitle = `${title} | Psicología Infantil - Llenia Monteagudo`;
    document.title = fullTitle;

    return () => {
      document.title = 'Psicología Infantil - Llenia Monteagudo - Acompañamiento Terapéutico';
    };
  }, [title]);
};
