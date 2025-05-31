import Navbar from "../../../components/Navbar";

export default function TerapiaIndividual() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Terapia Individual</h1>
        <p className="text-lg text-gray-600">
          Ofrecemos sesiones personalizadas para abordar tus necesidades emocionales y psicológicas.
        </p>
      </main>
    </div>
  );
}
