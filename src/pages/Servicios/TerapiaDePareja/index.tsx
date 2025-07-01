import Navbar from "../../../components/Navbar";
import { usePageTitle } from "../../../hooks/usePageTitle";

export default function TerapiaDePareja() {
  usePageTitle({
    title: 'Terapia de Pareja',
    description: 'Terapia de pareja especializada en mejorar la comunicación, resolver conflictos y fortalecer vínculos. Sesiones presenciales y online disponibles.'
  });
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Terapia de Pareja</h1>
        <p className="text-lg text-gray-600">
          Ayudamos a las parejas a mejorar su comunicación y resolver conflictos.
        </p>
      </main>
    </div>
  );
}
