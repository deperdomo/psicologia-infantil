import Navbar from "../../components/Navbar";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Contacto</h1>
        <p className="text-lg text-gray-600">
          Ponte en contacto con nosotros para más información o para agendar una cita.
        </p>
      </main>
    </div>
  );
}
