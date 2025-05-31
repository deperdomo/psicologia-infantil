import Navbar from "../../../components/Navbar";

export default function TerapiaDePareja() {
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
