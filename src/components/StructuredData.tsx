import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'website' | 'person' | 'organization' | 'service' | 'article';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'website':
        return {
          ...baseData,
          "@type": "WebSite",
          name: data.name || "Psicología Infantil - Llenia Monteagudo",
          url: data.url || "https://piscologiainfantil.com",
          description: data.description || "Psicología infantil especializada en Madrid. Acompañamiento terapéutico para niños y familias.",
          author: {
            "@type": "Person",
            name: "Llenia Monteagudo Rodríguez",
            jobTitle: "Psicóloga Infantil",
            worksFor: {
              "@type": "Organization",
              name: "Psicología Infantil - Llenia Monteagudo"
            }
          }
        };

      case 'person':
        return {
          ...baseData,
          "@type": "Person",
          name: data.name || "Llenia Monteagudo Rodríguez",
          jobTitle: data.jobTitle || "Psicóloga Infantil",
          description: data.description || "Psicóloga especializada en infancia y familias con más de 15 años de experiencia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressCountry: "ES"
          },
          email: data.email || "llenia@psicologiainfantil.com",
          telephone: data.telephone || "+34123456789",
          worksFor: {
            "@type": "Organization",
            name: "Psicología Infantil - Llenia Monteagudo"
          },
          knowsAbout: [
            "Psicología Infantil",
            "Terapia Familiar",
            "Desarrollo Emocional",
            "Acompañamiento Terapéutico"
          ]
        };

      case 'organization':
        return {
          ...baseData,
          "@type": "Organization",
          name: data.name || "Psicología Infantil - Llenia Monteagudo",
          url: data.url || "https://piscologiainfantil.com",
          description: data.description || "Centro de psicología infantil especializado en acompañamiento terapéutico",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressCountry: "ES"
          },
          email: data.email || "llenia@psicologiainfantil.com",
          telephone: data.telephone || "+34123456789",
          founder: {
            "@type": "Person",
            name: "Llenia Monteagudo Rodríguez"
          },
          sameAs: data.socialMedia || []
        };

      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Person",
            name: "Llenia Monteagudo Rodríguez",
            jobTitle: "Psicóloga Infantil"
          },
          areaServed: {
            "@type": "City",
            name: "Madrid"
          },
          serviceType: data.serviceType || "Psicología Infantil",
          audience: {
            "@type": "Audience",
            audienceType: data.audience || "Familias con niños"
          }
        };

      case 'article':
        return {
          ...baseData,
          "@type": "Article",
          headline: data.headline,
          description: data.description,
          author: {
            "@type": "Person",
            name: "Llenia Monteagudo Rodríguez"
          },
          publisher: {
            "@type": "Organization",
            name: "Psicología Infantil - Llenia Monteagudo"
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished
        };

      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
  );
}
