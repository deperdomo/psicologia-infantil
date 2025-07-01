import { useState } from "react";
import Navbar from "../../components/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner";
import SEOMeta from "../../components/SEOMeta";
import StructuredData from "../../components/StructuredData";
import { usePageTitle } from "../../hooks/usePageTitle";
import { IoMail, IoCall, IoLocation, IoSend, IoCheckmarkCircle } from "react-icons/io5";

export default function Contacto() {
  usePageTitle({
    title: 'Contacto',
    description: 'Ponte en contacto con Llenia Monteagudo Rodríguez, psicóloga infantil en Madrid. Consulta presencial y online. Respuesta en menos de 24 horas.'
  });

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no tiene un formato válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const field = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        field?.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/5 to-[var(--accent)]/5">
      <SEOMeta 
        title="Contacto"
        description="Ponte en contacto con Llenia Monteagudo Rodríguez, psicóloga infantil en Madrid. Consulta presencial y online. Respuesta en menos de 24 horas."
        keywords="contacto psicólogo infantil Madrid, cita psicología infantil, consulta online"
        url="https://piscologiainfantil.com/contacto"
      />
      <StructuredData 
        type="organization" 
        data={{
          name: "Psicología Infantil - Llenia Monteagudo",
          url: "https://piscologiainfantil.com",
          email: "llenia@psicologiainfantil.com",
          telephone: "+34123456789"
        }}
      />
      <Navbar />
      
      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Ponte en Contacto
          </h1>
          <p className="text-xl text-[var(--muted-text)] max-w-3xl mx-auto">
            Estoy aquí para ayudarte. No dudes en contactarme para cualquier consulta 
            o para agendar una primera sesión informativa gratuita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[var(--border-light)]">
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IoMail className="w-6 h-6 text-[var(--primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text)]">Email</h3>
                    <a 
                      href="mailto:llenia@psicologiainfantil.com" 
                      className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                      aria-label="Enviar email a llenia@psicologiainfantil.com"
                    >
                      llenia@psicologiainfantil.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--secondary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IoCall className="w-6 h-6 text-[var(--secondary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text)]">Teléfono</h3>
                    <a 
                      href="tel:+34123456789" 
                      className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
                      aria-label="Llamar al +34 123 456 789"
                    >
                      +34 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IoLocation className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text)]">Ubicación</h3>
                    <p className="text-[var(--muted-text)]">
                      Madrid, España<br />
                      <span className="text-sm">Consulta presencial y online</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--highlight)]/10 rounded-2xl p-6 border border-[var(--highlight)]/20">
              <h3 className="font-semibold text-[var(--text)] mb-2">
                Primera Consulta Gratuita
              </h3>
              <p className="text-[var(--muted-text)] text-sm">
                Te ofrezco una primera sesión informativa gratuita de 15 minutos 
                para conocernos y resolver tus dudas iniciales.
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[var(--border-light)]">
            {isSubmitted ? (
              <div className="text-center py-8">
                <IoCheckmarkCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
                  ¡Mensaje Enviado!
                </h2>
                <p className="text-[var(--muted-text)]">
                  Gracias por tu mensaje. Te responderé en menos de 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
                  Envíame un Mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label 
                      htmlFor="nombre" 
                      className="block text-sm font-medium text-[var(--text)] mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      aria-describedby={errors.nombre ? "nombre-error" : undefined}
                      aria-invalid={!!errors.nombre}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${
                        errors.nombre 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-[var(--border-light)] bg-white focus:border-[var(--primary)]'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-[var(--text)] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${
                        errors.email 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-[var(--border-light)] bg-white focus:border-[var(--primary)]'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="telefono" 
                      className="block text-sm font-medium text-[var(--text)] mb-2"
                    >
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-light)] bg-white focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 transition-colors"
                      placeholder="+34 123 456 789"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="asunto" 
                      className="block text-sm font-medium text-[var(--text)] mb-2"
                    >
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-light)] bg-white focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 transition-colors"
                    >
                      <option value="">Seleccionar asunto</option>
                      <option value="consulta-inicial">Consulta inicial</option>
                      <option value="terapia-infantil">Terapia infantil</option>
                      <option value="orientacion-padres">Orientación a padres</option>
                      <option value="informacion-precios">Información sobre precios</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="mensaje" 
                      className="block text-sm font-medium text-[var(--text)] mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                      aria-invalid={!!errors.mensaje}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 resize-vertical ${
                        errors.mensaje 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-[var(--border-light)] bg-white focus:border-[var(--primary)]'
                      }`}
                      placeholder="Cuéntame en qué puedo ayudarte..."
                    />
                    {errors.mensaje && (
                      <p id="mensaje-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--primary)] text-[var(--text)] py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" color="var(--text)" ariaLabel="Enviando mensaje" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <IoSend className="w-5 h-5" aria-hidden="true" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
