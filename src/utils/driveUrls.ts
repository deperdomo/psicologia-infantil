// URLs de Google Drive para recursos
// Formato: https://drive.google.com/uc?export=download&id=FILE_ID

export const driveResourceUrls = {
  // Cartas que Curan
  'carta-hija-crece-rapido': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_1',
  'carta-nino-interior': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2',
  'carta-padre-aprendiendo': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_3',
  
  // Colecciones de Ayuda
  'coleccion-autoestima-infantil': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_4',
  'coleccion-ninos-se-pegan': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_5',
  
  // Agregar más según necesidad...
} as const;

// Función helper para obtener URL de descarga
export const getDownloadUrl = (resourceId: string): string => {
  return driveResourceUrls[resourceId as keyof typeof driveResourceUrls] || '';
};

// Función para validar si el enlace existe
export const hasDownloadUrl = (resourceId: string): boolean => {
  return resourceId in driveResourceUrls;
};
