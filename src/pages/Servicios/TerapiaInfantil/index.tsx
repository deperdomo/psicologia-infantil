import Navbar from "../../../components/Navbar";
import { usePageTitle } from "../../../hooks/usePageTitle";

export default function TerapiaInfantil() {
  usePageTitle({
    title: 'Terapia Infantil',
    description: 'Especialistas en terapia infantil y adolescentes. Abordamos problemas emocionales, conductuales y del desarrollo en un entorno seguro y comprensivo.'
  });
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Terapia Infantil</h1>
        <p className="text-lg text-gray-600">
          Brindamos apoyo psicológico a niños y adolescentes en un entorno seguro y comprensivo.
        </p>
      </main>
    </div>
  );
}
