// ...existing code...
import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import ServiceHero from "../../components/sections/ServiceHero";
import ServiceContent from "../../components/sections/ServiceContent";
import ServiceIdentification from "../../components/sections/ServiceIdentification";
import ServiceProcess from "../../components/sections/ServiceProcess";
import { FaHeart, FaBrain, FaLeaf, FaUserCheck, FaCompass, FaSun } from "react-icons/fa";

export default function AcompañamientoPsicológicoParaAdultos() {
  usePageTitle({
    title: 'Acompañamiento Psicológico para Adultos - Psicología Infantil',
    description: 'Tu bienestar emocional es fundamental para una vida plena. Exploramos juntos ansiedad, estrés, autoestima, duelo y cambios vitales en un ambiente de confianza y sin juicios.'
  });

  const serviceFeatures = [
    {
      title: "Gestión de Ansiedad y Estrés",
      description: "Herramientas efectivas para manejar la ansiedad y reducir el estrés del día a día",
      icon: <FaLeaf className="text-2xl" />
    },
    {
      title: "Fortalecimiento de Autoestima",
      description: "Desarrollo de una imagen personal más positiva y confianza en tus capacidades",
      icon: <FaUserCheck className="text-2xl" />
    },
    {
      title: "Procesamiento del Duelo",
      description: "Acompañamiento sensible en procesos de pérdida y cambios vitales importantes",
      icon: <FaHeart className="text-2xl" />
    },
    {
      title: "Autoconocimiento Profundo",
      description: "Exploración de patrones, creencias y emociones para un mayor entendimiento personal",
      icon: <FaBrain className="text-2xl" />
    },
    {
      title: "Equilibrio Personal",
      description: "Búsqueda de armonía entre diferentes áreas de tu vida personal y profesional",
      icon: <FaCompass className="text-2xl" />
    },
    {
      title: "Bienestar Integral",
      description: "Desarrollo de herramientas para una vida más plena y satisfactoria",
      icon: <FaSun className="text-2xl" />
    }
  ];

  const identificationQuestions = [
    {
      question: "¿Te despiertas por las noches con pensamientos que no puedes parar?",
      icon: <FaBrain className="text-xl" />
    },
    {
      question: "¿Sientes que das todo por tu familia pero has perdido tu propia identidad?",
      icon: <FaUserCheck className="text-xl" />
    },
    {
      question: "¿Te cuesta disfrutar de las cosas que antes te hacían feliz?",
      icon: <FaSun className="text-xl" />
    },
    {
      question: "¿Tienes la sensación de estar siempre corriendo pero sin llegar a ningún lado?",
      icon: <FaCompass className="text-xl" />
    },
    {
      question: "¿Has pasado por una pérdida o cambio importante y necesitas procesarlo?",
      icon: <FaHeart className="text-xl" />
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Acogida y Evaluación",
      description: "Creamos un espacio seguro donde puedas expresarte libremente y exploramos juntos tus necesidades y objetivos terapéuticos.",
      icon: <FaHeart className="text-xl" />
    },
    {
      number: 2,
      title: "Exploración Profunda",
      description: "Analizamos patrones, creencias y emociones que influyen en tu bienestar, identificando recursos y fortalezas personales.",
      icon: <FaBrain className="text-xl" />
    },
    {
      number: 3,
      title: "Desarrollo de Herramientas",
      description: "Trabajamos en estrategias prácticas y técnicas personalizadas para afrontar los desafíos y mejorar tu calidad de vida.",
      icon: <FaLeaf className="text-xl" />
    },
    {
      number: 4,
      title: "Integración y Crecimiento",
      description: "Consolidamos los aprendizajes y te acompañamos en la implementación de cambios duraderos hacia una vida más plena.",
      icon: <FaSun className="text-xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <ServiceHero
        badge="Acompañamiento Psicológico para Adultos"
        title="Tu Bienestar Emocional Importa"
        subtitle="Tu bienestar emocional es fundamental para una vida plena. En un ambiente de confianza y sin juicios, exploramos juntos aquello que te preocupa: ansiedad, estrés, baja autoestima, duelo, cambios vitales o la búsqueda de mayor equilibrio personal. Desarrollamos herramientas prácticas que te permitan afrontar los desafíos diarios con mayor serenidad y autoconocimiento."
        trustIndicators={[
          "Ambiente de confianza y sin juicios",
          "Enfoque humanista personalizado",
          "Herramientas prácticas y efectivas"
        ]}
        primaryCTA="Reservar Consulta"
        secondaryCTA="Más Información"
        imageAlt="Adulto en proceso de crecimiento personal"
        imageSrc="/img/servicios/acompañamiento-para-adultos.png"
      />

      <ServiceContent
        features={serviceFeatures}
        additionalContent={
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Áreas de Trabajo
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
                <FaLeaf className="text-3xl text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-3">Ansiedad y Estrés</h4>
                <p className="text-gray-600 text-sm">
                  Técnicas para gestionar la ansiedad, reducir el estrés y encontrar calma interior.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
                <FaUserCheck className="text-3xl text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-3">Autoestima</h4>
                <p className="text-gray-600 text-sm">
                  Fortalecimiento de la confianza personal y desarrollo de una imagen positiva.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
                <FaHeart className="text-3xl text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-3">Duelo y Cambios</h4>
                <p className="text-gray-600 text-sm">
                  Acompañamiento en procesos de pérdida y adaptación a cambios vitales.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <ServiceIdentification
        title="¿Te sientes identificado/a con alguna de estas experiencias?"
        subtitle="Si alguna de estas situaciones resuena contigo, el acompañamiento psicológico puede ayudarte a encontrar el equilibrio y bienestar que buscas."
        description="Te ayudamos a fortalecer tu rol parental y mejorar la relación con tus hijos mediante estrategias prácticas."
        questions={identificationQuestions}
        ctaTitle="Prioriza tu Bienestar Emocional"
        ctaSubtitle="Te acompañamos en el camino hacia una vida más plena y equilibrada"
        benefits={[
          "Espacio seguro y confidencial",
          "Herramientas prácticas para el día a día",
          "Crecimiento personal y autoconocimiento"
        ]}
      />

      <ServiceProcess
        title="Nuestro Proceso de Acompañamiento"
        subtitle="Un camino personalizado hacia tu bienestar emocional y crecimiento personal"
        steps={processSteps}
      />
    </div>
  );
}
