import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: string;
}

export default function SEOMeta({ 
  title, 
  description, 
  keywords,
  author = "Llenia Monteagudo Rodríguez",
  url,
  image,
  type = "website"
}: SEOMetaProps) {
  const fullTitle = title ? `${title} | Psicología Infantil - Llenia Monteagudo` : 'Psicología Infantil - Llenia Monteagudo - Acompañamiento Terapéutico';
  const defaultDescription = 'Psicología infantil especializada en Madrid. Acompañamiento terapéutico para niños y familias con más de 15 años de experiencia. Consulta presencial y online.';
  const metaDescription = description || defaultDescription;
  const siteName = 'Psicología Infantil - Llenia Monteagudo';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="language" content="es" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_ES" />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={`${title} - ${siteName}`} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={`${title} - ${siteName}`} />}
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#F8E8E7" />
      <meta name="msapplication-TileColor" content="#F8E8E7" />
      
      {/* Canonical Link */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
}
