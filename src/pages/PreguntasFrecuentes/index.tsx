import Navbar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function PreguntasFrecuentes() {
  usePageTitle({
    title: 'Preguntas Frecuentes',
    description: 'Encuentra respuestas a las preguntas más comunes sobre terapia infantil, sesiones, métodos de trabajo y proceso terapéutico.'
  });
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Preguntas Frecuentes</h1>
        <p className="text-lg text-gray-600">
          Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
        </p>
      </main>
    </div>
  );
}
