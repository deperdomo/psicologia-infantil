import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Bienvenida a la consulta de Psicología</h2>
        <p className="text-lg text-gray-600">
          Ofrecemos apoyo profesional para tu bienestar emocional.
        </p>
      </main>
    </div>
  );
}

