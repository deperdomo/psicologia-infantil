import Navbar from "../../components/Navbar";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Sobre Mí</h1>
        <p className="text-lg text-gray-600">
          Soy una psicóloga licenciada con más de 10 años de experiencia en terapia individual y de pareja.
        </p>
      </main>
    </div>
  );
}
