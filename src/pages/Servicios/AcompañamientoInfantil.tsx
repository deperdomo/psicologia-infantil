// ...existing code...
import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import ServiceHero from "../../components/sections/ServiceHero";
import ServiceContent from "../../components/sections/ServiceContent";
import ServiceIdentification from "../../components/sections/ServiceIdentification";
import ServiceProcess from "../../components/sections/ServiceProcess";
import { FaHeart, FaGamepad, FaPalette, FaUsers, FaShieldAlt, FaSmile, FaLightbulb, FaHandHoldingHeart } from "react-icons/fa";

export default function AcompañamientoInfantil() {
  usePageTitle({
    title: 'Acompañamiento Infantil - Psicología Infantil',
    description: 'Creamos un espacio seguro y divertido donde tu hijo/a puede expresar sus emociones y desarrollar herramientas para crecer feliz. Enfoque personalizado y respetuoso.'
  });

  const serviceFeatures = [
    {
      title: "Terapia a través del Juego",
      description: "Utilizamos el juego como herramienta principal para conectar con el mundo emocional del niño",
      icon: <FaGamepad className="text-2xl" />
    },
    {
      title: "Expresión Artística",
      description: "Fomentamos la creatividad y expresión emocional a través del arte y actividades creativas",
      icon: <FaPalette className="text-2xl" />
    },
    {
      title: "Desarrollo Emocional",
      description: "Ayudamos a identificar, comprender y gestionar las emociones de manera saludable",
      icon: <FaHeart className="text-2xl" />
    },
    {
      title: "Habilidades Sociales",
      description: "Fortalecemos las competencias para relacionarse con otros niños y adultos",
      icon: <FaUsers className="text-2xl" />
    },
    {
      title: "Entorno Seguro",
      description: "Creamos un espacio de confianza donde el niño se siente libre de expresarse",
      icon: <FaShieldAlt className="text-2xl" />
    },
    {
      title: "Bienestar Integral",
      description: "Promovemos el crecimiento saludable en todas las áreas del desarrollo infantil",
      icon: <FaSmile className="text-2xl" />
    }
  ];

  const identificationQuestions = [
    {
      question: "¿Tu hijo/a tiene rabietas frecuentes que no sabes cómo manejar?",
      icon: <FaHeart className="text-xl" />
    },
    {
      question: "¿Ha comenzado a mostrar miedos o ansiedad que antes no tenía?",
      icon: <FaShieldAlt className="text-xl" />
    },
    {
      question: "¿Notas cambios en su comportamiento después de una situación difícil?",
      icon: <FaUsers className="text-xl" />
    },
    {
      question: "¿Le cuesta relacionarse con otros niños o adaptarse al colegio?",
      icon: <FaGamepad className="text-xl" />
    },
    {
      question: "¿Sientes que algo le preocupa pero no logra expresarlo con palabras?",
      icon: <FaSmile className="text-xl" />
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
    description: "Diseñamos estrategias adaptadas a las necesidades y valores de tu familia.",
    icon: <FaLightbulb className="text-xl" />
  },
  {
    number: 3,
    title: "Implementación y Seguimiento",
    description: "Te acompañamos en la puesta en práctica y ajustamos las herramientas según los resultados.",
    icon: <FaHandHoldingHeart className="text-xl" />
  }
];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <ServiceHero
        badge="Acompañamiento Infantil"
        title="Un Espacio Seguro para Crecer"
        subtitle="Creamos un espacio seguro y divertido donde tu hijo/a puede expresar sus emociones y desarrollar herramientas para crecer feliz. A través del juego y técnicas especializadas, abordamos dificultades emocionales, conductuales, miedos, ansiedad o cambios importantes en su vida. Cada niño es único, por eso nuestro enfoque se adapta a su personalidad y ritmo, siempre respetando su mundo interior."
        trustIndicators={[
          "Enfoque lúdico y respetuoso",
          "Técnicas especializadas",
          "Acompañamiento personalizado"
        ]}
        primaryCTA="Reservar Consulta"
        secondaryCTA="Más Información"
        imageAlt="Niño feliz en terapia"
        imageSrc="/img/servicios/acompañamiento-infantil.webp"
      />

      <ServiceContent
        features={serviceFeatures}
        additionalContent={
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Situaciones que Abordamos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Dificultades Emocionales</h4>
                <p className="text-gray-600">
                  Rabietas, miedos, ansiedad, tristeza, cambios de humor y dificultades para expresar emociones.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Problemas Conductuales</h4>
                <p className="text-gray-600">
                  Comportamientos disruptivos, dificultades de atención, problemas de sueño y adaptación escolar.
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
        subtitle="Un camino estructurado y flexible que respeta el ritmo único de cada niño"
        steps={processSteps}
      />
    </div>
  );
}
