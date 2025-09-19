// ...existing code...
import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import ServiceHero from "../../components/sections/ServiceHero";
import ServiceContent from "../../components/sections/ServiceContent";
import ServiceIdentification from "../../components/sections/ServiceIdentification";
import ServiceProcess from "../../components/sections/ServiceProcess";
import { FaHeart, FaComments, FaHandshake, FaRoute, FaStar, FaUsers } from "react-icons/fa";

export default function FortalecimientoVinculosDePareja() {
  usePageTitle({
    title: 'Fortalecimiento de Vínculos de Pareja - Psicología Infantil',
    description: 'Una relación sólida es la base de una familia feliz. Te ayudamos a mejorar la comunicación, resolver conflictos y reconectar con aquello que os unió como pareja.'
  });

  const serviceFeatures = [
    {
      title: "Mejora de la Comunicación",
      description: "Técnicas para expresar necesidades y emociones de manera efectiva y empática",
      icon: <FaComments className="text-2xl" />
    },
    {
      title: "Resolución de Conflictos",
      description: "Herramientas para abordar desacuerdos de manera constructiva y respetuosa",
      icon: <FaHandshake className="text-2xl" />
    },
    {
      title: "Reconexión Emocional",
      description: "Recuperación de la intimidad emocional y la complicidad perdida",
      icon: <FaHeart className="text-2xl" />
    },
    {
      title: "Proyecto de Vida Compartido",
      description: "Construcción de objetivos y sueños comunes para el futuro",
      icon: <FaRoute className="text-2xl" />
    },
    {
      title: "Fortalecimiento del Vínculo",
      description: "Redescubrimiento de aquello que os unió y os hace únicos como pareja",
      icon: <FaStar className="text-2xl" />
    },
    {
      title: "Equilibrio Familia-Pareja",
      description: "Gestión del tiempo y espacio para la pareja dentro de la vida familiar",
      icon: <FaUsers className="text-2xl" />
    }
  ];

  const identificationQuestions = [
    {
      question: "¿Sentís que solo habláis de tareas domésticas y responsabilidades?",
      icon: <FaComments className="text-xl" />
    },
    {
      question: "¿Las discusiones se repiten una y otra vez sin llegar a ninguna solución?",
      icon: <FaHandshake className="text-xl" />
    },
    {
      question: "¿Desde que llegaron los hijos habéis perdido vuestra conexión como pareja?",
      icon: <FaUsers className="text-xl" />
    },
    {
      question: "¿Uno de los dos ha cambiado y ya no os entendéis como antes?",
      icon: <FaHeart className="text-xl" />
    },
    {
      question: "¿Queréis mejorar vuestra relación antes de que los problemas crezcan?",
      icon: <FaStar className="text-xl" />
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Evaluación de la Relación",
      description: "Analizamos la dinámica actual de pareja, identificando fortalezas, desafíos y patrones de comunicación existentes.",
      icon: <FaUsers className="text-xl" />
    },
    {
      number: 2,
      title: "Mejora de la Comunicación",
      description: "Desarrollamos habilidades de escucha activa, expresión emocional y diálogo constructivo para fortalecer la conexión.",
      icon: <FaComments className="text-xl" />
    },
    {
      number: 3,
      title: "Resolución de Conflictos",
      description: "Implementamos estrategias para abordar desacuerdos de manera respetuosa y encontrar soluciones mutuamente satisfactorias.",
      icon: <FaHandshake className="text-xl" />
    },
    {
      number: 4,
      title: "Construcción del Futuro",
      description: "Trabajamos en la creación de un proyecto de vida compartido y el mantenimiento de una relación sólida a largo plazo.",
      icon: <FaRoute className="text-xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <ServiceHero
        badge="Fortalecimiento de Vínculos de Pareja"
        title="Redescubrid Vuestra Conexión"
        subtitle="Una relación sólida es la base de una familia feliz. Te ayudamos a mejorar la comunicación, resolver conflictos de manera constructiva y reconectar con aquello que os unió. Trabajamos tanto crisis puntuales como el deseo de crecer juntos como pareja. Nuestro objetivo es que redescubráis la complicidad y construyáis un proyecto de vida compartido más satisfactorio."
        trustIndicators={[
          "Enfoque en la comunicación efectiva",
          "Resolución constructiva de conflictos",
          "Fortalecimiento del vínculo emocional"
        ]}
        primaryCTA="Reservar Consulta"
        secondaryCTA="Más Información"
        imageAlt="Pareja fortaleciendo su relación"
        imageSrc="/img/servicios/fortalecimiento-vinculos-de-pareja.webp"
      />

      <ServiceContent
        features={serviceFeatures}
        additionalContent={
          <div className="mt-16 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Modalidades de Trabajo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Crisis Puntuales</h4>
                <p className="text-gray-600">
                  Intervención específica para superar momentos difíciles, conflictos recurrentes o situaciones que amenazan la estabilidad de la pareja.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Crecimiento Conjunto</h4>
                <p className="text-gray-600">
                  Fortalecimiento preventivo de la relación, mejora de la comunicación y construcción de un futuro más sólido y satisfactorio.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <ServiceIdentification
        title="¿Reconocéis vuestra relación en alguna de estas situaciones?"
        subtitle="Si alguna de estas situaciones os resulta familiar, la terapia de pareja puede ayudaros a reconectar y fortalecer vuestro vínculo."
        description="Te ayudamos a fortalecer los vínculos familiares y a adaptarte a los cambios de manera saludable."
        questions={identificationQuestions}
        ctaTitle="Invierte en Vuestra Relación"
        ctaSubtitle="Redescubrid la complicidad y construid un futuro más sólido juntos"
        benefits={[
          "Mejora en la comunicación de pareja",
          "Herramientas para resolver conflictos",
          "Fortalecimiento del vínculo emocional"
        ]}
      />

      <ServiceProcess
        title="Nuestro Proceso de Acompañamiento"
        subtitle="Un camino estructurado para fortalecer vuestra relación y construir un futuro más satisfactorio"
        steps={processSteps}
        
      />
    </div>
  );
}
