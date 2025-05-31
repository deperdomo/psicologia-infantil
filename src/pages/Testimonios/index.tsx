import Navbar from "../../components/Navbar";

export default function Testimonios() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">Testimonios</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Lee lo que dicen nuestros pacientes sobre su experiencia con la terapia.
        </p>
        <ul className="space-y-4 text-gray-700">
          <li className="bg-white p-4 rounded shadow">
            “La terapia me ayudó a superar momentos muy difíciles. ¡Gracias!”
          </li>
          <li className="bg-white p-4 rounded shadow">
            “Sentí mucha confianza desde la primera sesión.”
          </li>
          <li className="bg-white p-4 rounded shadow">
            “Mi pareja y yo mejoramos muchísimo nuestra comunicación.”
          </li>
        </ul>
      </main>
    </div>
  );
}
