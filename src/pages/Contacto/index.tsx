import { useState } from "react";
import Navbar from "../../components/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner";
import SEOMeta from "../../components/SEOMeta";
import StructuredData from "../../components/StructuredData";
import { usePageTitle } from "../../hooks/usePageTitle";
import { IoMail, IoCall, IoLocation, IoSend, IoCheckmarkCircle, IoTime, IoShield, IoWarning } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

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
  const [submitError, setSubmitError] = useState<string | null>(null);
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
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const field = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        field?.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Verificar que las variables de entorno estén configuradas
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
        throw new Error('Configuración de EmailJS incompleta. Verifica las variables de entorno.');
      }

      // Preparar los datos para EmailJS
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono || 'No proporcionado',
        subject: formData.asunto || 'Consulta general',
        message: formData.mensaje,
        to_email: 'lleniavinculoycrecimiento@gmail.com',
        reply_to: formData.email,
        // Datos adicionales para la plantilla
        date: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        subject_display: getSubjectDisplay(formData.asunto)
      };

      // Enviar email usando EmailJS con la configuración centralizada
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result);
      
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contacta directamente por email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubjectDisplay = (asunto: string) => {
    const subjects = {
      'consulta-inicial': 'Consulta Inicial',
      'terapia-infantil': 'Terapia Infantil',
      'orientacion-padres': 'Orientación a Padres',
      'informacion-precios': 'Información sobre Precios',
      'otro': 'Otro'
    };
    return subjects[asunto as keyof typeof subjects] || 'Consulta General';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (submitError) {
      setSubmitError(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
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
          email: "lleniavinculoycrecimiento@gmail.com",
          telephone: "+34123456789"
        }}
      />
      <Navbar />
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <main id="main-content" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Respuesta en menos de 24 horas
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ponte en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Contacto
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estoy aquí para ayudarte. No dudes en contactarme para cualquier consulta 
            o para agendar una primera sesión informativa gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Información de contacto */}
          <div className="space-y-8">
            {/* Card principal de información */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IoMail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Información de Contacto
                  </h2>
                  <p className="text-white/90 leading-relaxed font-medium">
                    Múltiples formas de conectar contigo
                  </p>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IoMail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a 
                      href="mailto:lleniavinculoycrecimiento@gmail.com" 
                      className="text-blue-600 hover:text-purple-600 transition-colors duration-300 font-semibold"
                    >
                      lleniavinculoycrecimiento@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IoCall className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                    <a 
                      href="tel:+34123456789" 
                      className="text-purple-600 hover:text-pink-600 transition-colors duration-300 font-semibold"
                    >
                      +34 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IoLocation className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Madrid, España<br />
                      <span className="text-sm font-medium">Consulta presencial y online</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards de beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <IoTime className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Primera Consulta Gratuita
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Te ofrezco una primera sesión informativa gratuita de 15 minutos 
                  para conocernos y resolver tus dudas iniciales.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <IoShield className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Total Confidencialidad
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Toda la información compartida está protegida por el secreto profesional 
                  y la normativa de protección de datos.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {isSubmitted ? (
              <div className="p-8">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-8 text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <IoCheckmarkCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    ¡Mensaje Enviado!
                  </h2>
                  <p className="text-white/90">
                    Gracias por tu mensaje. Te responderé en menos de 24 horas.
                  </p>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <IoSend className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Envíame un Mensaje
                    </h2>
                    <p className="text-white/90 leading-relaxed font-medium">
                      Cuéntame cómo puedo ayudarte
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <div className="flex items-start space-x-3">
                        <IoWarning className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label 
                        htmlFor="nombre" 
                        className="block text-sm font-bold text-gray-900 mb-2"
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
                        className={`w-full px-4 py-3 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                          errors.nombre 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-200 bg-white focus:border-blue-600 hover:border-gray-300'
                        }`}
                        placeholder="Tu nombre completo"
                      />
                      {errors.nombre && (
                        <p id="nombre-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
                          {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-bold text-gray-900 mb-2"
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
                        className={`w-full px-4 py-3 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                          errors.email 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-200 bg-white focus:border-blue-600 hover:border-gray-300'
                        }`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label 
                        htmlFor="telefono" 
                        className="block text-sm font-bold text-gray-900 mb-2"
                      >
                        Teléfono (opcional)
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-300 hover:border-gray-300"
                        placeholder="+34 123 456 789"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="asunto" 
                        className="block text-sm font-bold text-gray-900 mb-2"
                      >
                        Asunto
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-300 hover:border-gray-300"
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
                        className="block text-sm font-bold text-gray-900 mb-2"
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
                        className={`w-full px-4 py-3 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 resize-vertical ${
                          errors.mensaje 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-200 bg-white focus:border-blue-600 hover:border-gray-300'
                        }`}
                        placeholder="Cuéntame en qué puedo ayudarte..."
                      />
                      {errors.mensaje && (
                        <p id="mensaje-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
                          {errors.mensaje}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl"
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" color="white" ariaLabel="Enviando mensaje" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <IoSend className="w-5 h-5" />
                          <span>Enviar Mensaje</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
