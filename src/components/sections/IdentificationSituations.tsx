import { useState, type JSX } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';

interface Situation {
  id: number;
  title: string;
  question: string;
  description: string;
  image: string;
  symptoms: string[];
}

export default function IdentificationSituations(): JSX.Element {
  const { setRef, visibleItems } = useStaggeredScrollAnimation(4, 150);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (cardId: number): void => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(cardId)) {
      newFlippedCards.delete(cardId);
    } else {
      newFlippedCards.add(cardId);
    }
    setFlippedCards(newFlippedCards);
  };

  const situations: Situation[] = [
    {
      id: 1,
      title: "Emociones Intensas",
      question: "¿Tu hijo/a tiene rabietas muy intensas o llora con facilidad?",
      description: "Las emociones son difíciles de regular y los momentos se vuelven desafiantes para toda la familia.",
      image: "https://images.pexels.com/photos/6222771/pexels-photo-6222771.jpeg?auto=compress&cs=tinysrgb&w=800",
      symptoms: ["Llanto frecuente", "Rabietas intensas", "Inseguridad", "Dificultad para calmarse"]
    },
    {
      id: 2,
      title: "Desafíos de Crianza",
      question: "¿Te cuesta poner límites o ayudarle tras un cambio importante?",
      description: "Sientes que no tienes las herramientas adecuadas para acompañar de forma efectiva a tu hijo/a.",
      image: "https://images.pexels.com/photos/8841302/pexels-photo-8841302.jpeg?auto=compress&cs=tinysrgb&w=800",
      symptoms: ["Dudas sobre límites", "Sentimientos de culpa", "Falta de herramientas", "Incertidumbre"]
    },
    {
      id: 3,
      title: "Crisis Emocionales",
      question: "¿No sabes cómo manejar los berrinches o crisis emocionales?",
      description: "Los momentos de crisis se vuelven abrumadores y sientes que ninguna estrategia funciona realmente.",
      image: "img/identificationSituations/crisis-emocional.jpg",
      symptoms: ["Berrinches frecuentes", "Crisis emocionales", "Sensación de impotencia", "Desgaste familiar"]
    },
    {
      id: 4,
      title: "Cambios y Transiciones",
      question: "¿Te preocupa su comportamiento tras una separación o mudanza?",
      description: "Has notado cambios significativos en su comportamiento tras eventos importantes en la familia.",
      image: "img/identificationSituations/separacion-padres.jpg",
      symptoms: ["Cambios de comportamiento", "Dificultad de adaptación", "Regresiones", "Estrés familiar"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight flex flex-wrap justify-center items-center gap-x-0 text-center">
            ¿Te Identificas con&nbsp;
            <span className="text-transparent font-heading bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              estas situaciones
            </span>
            ?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Estas son las situaciones más comunes por las que las familias buscan acompañamiento profesional.
            </p>
          </div>
        </div>

        {/* Grid de cartas con efecto flip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {situations.map((situation: Situation, index: number) => (
            <div
              key={situation.id}
              ref={setRef(index)}
              className={`transition-all duration-700 ${visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
            >
              <ReactCardFlip
                isFlipped={flippedCards.has(situation.id)}
                flipDirection="horizontal"
                flipSpeedBackToFront={0.6}
                flipSpeedFrontToBack={0.6}
              >
                {/* Cara frontal de la carta */}
                <div
                  className="relative h-96 overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-101 shadow-lg hover:shadow-xl group"
                  onClick={() => handleCardFlip(situation.id)}
                >
                  <img
                    src={situation.image}
                    alt={situation.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay gradiente mejorado para mejor legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Badge de situación con mejor contraste */}
                  <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-black/60 border border-white/20">
                    Situación {situation.id}
                  </div>

                  {/* Contenido superpuesto - Dividido en dos secciones */}
                  <div className="absolute inset-0 flex flex-col p-8 transform transition-all duration-300 group-hover:translate-y-[-4px]">

                    {/* Espacio superior (mitad superior vacía) */}
                    <div className="flex-1"></div>

                    {/* Contenido principal (mitad inferior) */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                        {situation.title}
                      </h3>
                      <p className="text-white/95 text-lg font-medium mb-4 leading-relaxed">
                        {situation.question}
                      </p>
                      <p className="text-white/80 leading-relaxed mb-6">
                        {situation.description}
                      </p>

                      {/* Hint visual mejorado */}
                      <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <span className="text-white/80 text-sm font-medium">Haz clic para ver síntomas</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Cara trasera de la carta - Síntomas */}
                <div
                  className="relative h-96 overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-101 shadow-lg hover:shadow-xl bg-gradient-to-br from-blue-600 to-purple-700 group"
                  onClick={() => handleCardFlip(situation.id)}
                >
                  {/* Patrón de fondo sutil */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>

                  {/* Badge de situación */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Situación {situation.id}
                  </div>

                  {/* Contenido de síntomas */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Header */}
                    <div className="text-center pt-8">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {situation.title}
                      </h3>
                      <p className="text-white/90 text-sm font-medium">
                        Síntomas Comunes
                      </p>
                    </div>

                    {/* Lista de síntomas optimizada */}
                    <div className="flex-1 flex flex-col justify-center pb-4">
                      <div className="space-y-2">
                        {situation.symptoms.map((symptom: string, idx: number) => (
                          <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                            <span className="text-white font-medium text-sm leading-tight">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer hint mejorado */}
                    <div className="text-center pb-2">
                      <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <p className="text-white/80 text-xs font-medium">
                          Haz clic para volver
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>

        {/* CTA final elegante */}
        <div className="mt-20">
          <div className="relative h-64 overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/7282805/pexels-photo-7282805.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Consulta psicológica"
              className="w-full h-full object-cover"
            />

            {/* Overlay para el CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90"></div>

            {/* Contenido del CTA */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Te Sientes Identificado/a?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl leading-relaxed">
                Puedo ayudarte a encontrar herramientas para acompañar a tu hijo/a con mayor seguridad y tranquilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/consulta"
                  className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Agendar Consulta
                </a>
                <a
                  href="/servicios"
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
                >
                  Conocer Más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}