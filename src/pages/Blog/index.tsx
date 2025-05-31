import Navbar from "../../components/Navbar";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Explora nuestros artículos sobre salud mental y bienestar emocional.
        </p>
      </main>
    </div>
  );
}
