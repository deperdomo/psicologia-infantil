// ...existing code...
import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import ServiceHero from "../../components/sections/ServiceHero";
import ServiceContent from "../../components/sections/ServiceContent";
import ServiceIdentification from "../../components/sections/ServiceIdentification";
import ServiceProcess from "../../components/sections/ServiceProcess";
import { FaHeart, FaUsers, FaComments, FaHandHoldingHeart, FaBalanceScale, FaLightbulb } from "react-icons/fa";

export default function AcompañamientoParental() {
  usePageTitle({
    title: 'Acompañamiento Parental - Psicología Infantil',
    description: 'Herramientas prácticas y estrategias personalizadas para fortalecer la conexión con tus hijos, gestionar comportamientos difíciles y crear un ambiente familiar más armonioso.'
  });

  const serviceFeatures = [
    {
      title: "Herramientas Prácticas",
      description: "Estrategias concretas y aplicables para el día a día familiar",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: "Fortalecimiento del Vínculo",
      description: "Técnicas para mejorar la conexión y comunicación con tus hijos",
      icon: <FaHeart className="text-2xl" />
    },
    {
      title: "Gestión de Comportamientos",
      description: "Abordaje efectivo de conductas difíciles desde la comprensión",
      icon: <FaBalanceScale className="text-2xl" />
    },
    {
      title: "Ambiente Familiar Armonioso",
      description: "Creación de un hogar más equilibrado y tranquilo para todos",
      icon: <FaUsers className="text-2xl" />
    },
    {
      title: "Confianza Parental",
      description: "Desarrollo de seguridad y autoconfianza en tu rol como padre/madre",
      icon: <FaHandHoldingHeart className="text-2xl" />
    },
    {
      title: "Comunicación Efectiva",
      description: "Mejora de la comunicación familiar basada en el respeto mutuo",
      icon: <FaComments className="text-2xl" />
    }
  ];

  const identificationQuestions = [
    {
      question: "¿Por qué mi hijo/a no me hace caso y siempre acabamos discutiendo?",
      icon: <FaComments className="text-xl" />
    },
    {
      question: "¿Estoy siendo demasiado permisivo/a o demasiado estricto/a?",
      icon: <FaBalanceScale className="text-xl" />
    },
    {
      question: "¿Cómo puedo ayudar a mi hijo/a sin perder la paciencia?",
      icon: <FaHeart className="text-xl" />
    },
    {
      question: "¿Por qué conmigo se comporta diferente que con otros familiares?",
      icon: <FaUsers className="text-xl" />
    },
    {
      question: "¿Cómo establecer límites sin dañar nuestra relación?",
      icon: <FaHandHoldingHeart className="text-xl" />
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Evaluación Familiar",
      description: "Analizamos la dinámica familiar actual, identificando fortalezas y áreas de mejora en la relación padre/madre-hijo/a.",
      icon: <FaUsers className="text-xl" />
    },
    {
      number: 2,
      title: "Estrategias Personalizadas",
      description: "Desarrollamos herramientas específicas adaptadas a tu estilo parental y las necesidades particulares de tu familia.",
      icon: <FaLightbulb className="text-xl" />
    },
    {
      number: 3,
      title: "Práctica Guiada",
      description: "Implementamos las estrategias de forma gradual, con acompañamiento y ajustes según los resultados obtenidos.",
      icon: <FaHandHoldingHeart className="text-xl" />
    },
    {
      number: 4,
      title: "Fortalecimiento Continuo",
      description: "Consolidamos los cambios positivos y te proporcionamos recursos para mantener un ambiente familiar armonioso a largo plazo.",
      icon: <FaHeart className="text-xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <ServiceHero
        badge="Acompañamiento Parental"
        title="Fortalece tu Conexión Familiar"
        subtitle="Ser padre o madre es una experiencia maravillosa y desafiante a la vez. Te ofrecemos herramientas prácticas y estrategias personalizadas para fortalecer la conexión con tus hijos, gestionar comportamientos difíciles y crear un ambiente familiar más armonioso. Trabajamos juntos para que te sientas más seguro/a y confiado/a en tu rol parental, siempre desde el respeto y la comprensión."
        trustIndicators={[
          "Enfoque humanista y respetuoso",
          "Estrategias basadas en evidencia",
          "Acompañamiento personalizado"
        ]}
        primaryCTA="Reservar Consulta"
        secondaryCTA="Más Información"
        imageAlt="Familia unida y feliz"
        imageSrc="/img/servicios/acompañamiento-parental.png"
      />

      <ServiceContent
        features={serviceFeatures}
        additionalContent={
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Nuestro Enfoque
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Respeto y Comprensión</h4>
                <p className="text-gray-600">
                  Trabajamos desde la base de que cada familia es única, respetando tus valores y adaptando las estrategias a tu contexto particular.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Herramientas Prácticas</h4>
                <p className="text-gray-600">
                  Proporcionamos técnicas concretas y aplicables que puedes implementar inmediatamente en tu día a día familiar.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <ServiceIdentification
        title="¿Alguna vez te has preguntado?"
        subtitle="Si alguna de estas situaciones te resulta familiar, el acompañamiento parental puede ayudarte a encontrar respuestas y soluciones efectivas."
        description="Te ayudamos a fortalecer tu rol parental y mejorar la relación con tus hijos mediante estrategias prácticas."
        questions={identificationQuestions}
        ctaTitle="Encuentra las Respuestas que Necesitas"
        ctaSubtitle="Te acompañamos en el proceso de fortalecer tu rol parental"
        benefits={[
          "Estrategias personalizadas para tu familia",
          "Herramientas prácticas y aplicables",
          "Mejora en la comunicación familiar"
        ]}
      />

      <ServiceProcess
        title="Nuestro Proceso de Acompañamiento"
        subtitle="Un camino estructurado hacia una parentalidad más segura y efectiva"
        steps={processSteps}
     
      />
    </div>
  );
}
