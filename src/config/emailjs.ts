// Validación de variables de entorno
const validateEnvVar = (varName: string, value: string | undefined): string => {
  if (!value || value.trim() === '') {
    throw new Error(`Variable de entorno ${varName} no está configurada. Verifica tu archivo .env`);
  }
  return value.trim();
};

export const EMAILJS_CONFIG = {
  SERVICE_ID: validateEnvVar('VITE_EMAILJS_SERVICE_ID', import.meta.env.VITE_EMAILJS_SERVICE_ID),
  TEMPLATE_ID: validateEnvVar('VITE_EMAILJS_TEMPLATE_ID', import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  PUBLIC_KEY: validateEnvVar('VITE_EMAILJS_PUBLIC_KEY', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
};

// Función para verificar si EmailJS está configurado correctamente
export const isEmailJSConfigured = (): boolean => {
  try {
    return !!(EMAILJS_CONFIG.SERVICE_ID && EMAILJS_CONFIG.TEMPLATE_ID && EMAILJS_CONFIG.PUBLIC_KEY);
  } catch {
    return false;
  }
};

// Función para obtener información de configuración (sin exponer las claves)
export const getEmailJSStatus = () => {
  return {
    serviceConfigured: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateConfigured: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKeyConfigured: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    allConfigured: isEmailJSConfigured()
  };
};