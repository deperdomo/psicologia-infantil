// ...existing code...
import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import ServiceHero from "../../components/sections/ServiceHero";
import ServiceContent from "../../components/sections/ServiceContent";
import ServiceIdentification from "../../components/sections/ServiceIdentification";
import ServiceProcess from "../../components/sections/ServiceProcess";
import { FaHome, FaHeart, FaUsers, FaBaby, FaHandHoldingHeart, FaRoute } from "react-icons/fa";

export default function CambioFamiliar() {
  usePageTitle({
    title: 'Cambio Familiar - Psicología Infantil',
    description: 'Acompañamiento en momentos de transición familiar: mudanzas, separaciones, llegada de hermanos, pérdidas o nuevas estructuras familiares. Estrategias para una adaptación saludable.'
  });

  const serviceFeatures = [
    {
      title: "Adaptación a Transiciones",
      description: "Apoyo especializado durante mudanzas, separaciones y cambios de estructura familiar",
      icon: <FaRoute className="text-2xl" />
    },
    {
      title: "Preparación para Nuevos Hermanos",
      description: "Estrategias para preparar a los niños ante la llegada de un nuevo bebé",
      icon: <FaBaby className="text-2xl" />
    },
    {
      title: "Gestión del Duelo Infantil",
      description: "Acompañamiento sensible en procesos de pérdida y duelo familiar",
      icon: <FaHeart className="text-2xl" />
    },
    {
      title: "Integración de Familias",
      description: "Apoyo en la formación de nuevas estructuras familiares y familias reconstituidas",
      icon: <FaUsers className="text-2xl" />
    },
    {
      title: "Fortalecimiento de Vínculos",
      description: "Estrategias para mantener y fortalecer las relaciones durante los cambios",
      icon: <FaHandHoldingHeart className="text-2xl" />
    },
    {
      title: "Adaptación al Entorno",
      description: "Herramientas para facilitar la adaptación a nuevos hogares y entornos",
      icon: <FaHome className="text-2xl" />
    }
  ];

  const identificationQuestions = [
    {
      question: "¿Habéis pasado por una separación y los niños están confundidos?",
      icon: <FaUsers className="text-xl" />
    },
    {
      question: "¿Esperáis un nuevo bebé y no sabéis cómo preparar al hermano mayor?",
      icon: <FaBaby className="text-xl" />
    },
    {
      question: "¿Habéis perdido a un ser querido y no sabéis cómo explicárselo a los niños?",
      icon: <FaHeart className="text-xl" />
    },
    {
      question: "¿Os habéis mudado y vuestro hijo/a no se adapta al nuevo entorno?",
      icon: <FaHome className="text-xl" />
    },
    {
      question: "¿Habéis formado una nueva familia y buscáis crear armonía entre todos?",
      icon: <FaHandHoldingHeart className="text-xl" />
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Evaluación del Cambio",
      description: "Analizamos el tipo de transición familiar y su impacto en cada miembro, identificando necesidades específicas y recursos disponibles.",
      icon: <FaUsers className="text-xl" />
    },
    {
      number: 2,
      title: "Estrategias de Adaptación",
      description: "Desarrollamos un plan personalizado con herramientas específicas para facilitar la transición y fortalecer los vínculos familiares.",
      icon: <FaRoute className="text-xl" />
    },
    {
      number: 3,
      title: "Implementación Gradual",
      description: "Acompañamos la puesta en práctica de las estrategias, ajustando el proceso según la evolución y respuesta de cada miembro.",
      icon: <FaHandHoldingHeart className="text-xl" />
    },
    {
      number: 4,
      title: "Consolidación y Seguimiento",
      description: "Fortalecemos los nuevos patrones familiares y proporcionamos herramientas para futuras transiciones de manera autónoma.",
      icon: <FaHeart className="text-xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <ServiceHero
        badge="Cambio Familiar"
        title="Navegando Juntos las Transiciones"
        subtitle="Los cambios forman parte de la vida familiar: mudanzas, separaciones, llegada de hermanos, pérdidas o nuevas estructuras familiares. Te acompañamos en estos momentos de transición para que toda la familia pueda adaptarse de manera saludable. Creamos estrategias que fortalecen los vínculos y ayudan a cada miembro a encontrar su lugar en esta nueva etapa."
        trustIndicators={[
          "Especialistas en transiciones familiares",
          "Enfoque integral para toda la familia",
          "Estrategias adaptadas a cada situación"
        ]}
        primaryCTA="Reservar Consulta"
        secondaryCTA="Más Información"
        imageAlt="Familia adaptándose a cambios"
        imageSrc="/img/servicios/cambio-familiar.webp"
      />

      <ServiceContent
        features={serviceFeatures}
        additionalContent={
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Tipos de Cambios que Acompañamos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
                <FaUsers className="text-3xl text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-3">Separaciones</h4>
                <p className="text-gray-600 text-sm">
                  Apoyo durante procesos de separación o divorcio, ayudando a los niños a comprender y adaptarse.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
                <FaBaby className="text-3xl text-pink-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-3">Nuevos Hermanos</h4>
                <p className="text-gray-600 text-sm">
                  Preparación y adaptación ante la llegada de un nuevo miembro a la familia.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
                <FaHome className="text-3xl text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-3">Mudanzas</h4>
                <p className="text-gray-600 text-sm">
                  Facilitamos la adaptación a nuevos entornos, escuelas y comunidades.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <ServiceIdentification
        title="¿Tu familia está viviendo alguno de estos cambios?"
        subtitle="Si tu familia está atravesando una transición, no estáis solos. Te acompañamos para que este proceso sea una oportunidad de crecimiento y fortalecimiento."
        description="Te ayudamos a fortalecer los vínculos familiares y a adaptarte a los cambios de manera saludable."
        questions={identificationQuestions}
        ctaTitle="Transforma el Cambio en Oportunidad"
        ctaSubtitle="Te ayudamos a navegar esta transición de manera saludable"
        benefits={[
          "Estrategias específicas para cada tipo de cambio",
          "Apoyo integral para toda la familia",
          "Herramientas para futuras transiciones"
        ]}
      />

      <ServiceProcess
        title="Nuestro Proceso de Acompañamiento"
        subtitle="Un camino estructurado para transformar los desafíos en oportunidades de crecimiento familiar"
        steps={processSteps}
      />
    </div>
  );
}
