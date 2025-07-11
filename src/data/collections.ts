import type { Collection } from '../types/recursos';
// react-icons imports - replacing emojis with proper icons
import { IoHome } from 'react-icons/io5'; // Replacing 🏠 emoji
import { GiSprout } from 'react-icons/gi'; // Replacing 🌱 emoji
import { IoHeartDislike } from 'react-icons/io5'; // Replacing ❤️‍🔥 emoji (angry heart)

export const collectionsData: Collection[] = [
  {
    id: 'dos-casas',
    title: 'Dos casas, un corazón',
    icon: IoHome, // Replaced 🏠 emoji with IoHome icon
    description: 'Recursos para ayudar a los niños a navegar la separación y el divorcio de sus padres.',
    color: 'from-pink-100 to-rose-200',
    resources: [
      {
        id: 'guia-padres-separados',
        title: 'Guía para padres separados',
        description: 'Cómo comunicar la separación a los niños de manera saludable.',
        fileName: 'guia-padres-separados.pdf',
        type: 'gratuito',
        resourceType: 'guia',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        tags: ['separación', 'divorcio', 'comunicación'],
        downloadUrl: '/downloads/guia-padres-separados.pdf'
      },
      {
        id: 'cuento-dos-casas',
        title: 'Cuento: "Mi corazón en dos lugares"',
        description: 'Historia ilustrada para explicar a los niños la nueva dinámica familiar.',
        fileName: 'cuento-dos-casas.pdf',
        type: 'premium',
        resourceType: 'cuento',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        tags: ['cuento', 'separación', 'familia']
      },
      {
        id: 'actividades-emociones',
        title: 'Actividades para procesar emociones',
        description: 'Ejercicios prácticos para ayudar a los niños a expresar sus sentimientos.',
        fileName: 'actividades-emociones.pdf',
        type: 'gratuito',
        resourceType: 'actividad',
        ageRange: ['6-12'],
        difficulty: 'intermedio',
        tags: ['emociones', 'actividades', 'procesamiento'],
        downloadUrl: '/downloads/actividades-emociones.pdf'
      },
      {
        id: 'protocolo-transiciones',
        title: 'Protocolo de transiciones suaves',
        description: 'Estrategias para facilitar los cambios entre casas.',
        fileName: 'protocolo-transiciones.pdf',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['3-6', '6-12'],
        difficulty: 'intermedio',
        tags: ['transiciones', 'rutinas', 'adaptación']
      }
    ]
  },
  {
    id: 'semillas-autoestima',
    title: 'Semillas de autoestima',
    icon: GiSprout, // Replaced 🌱 emoji with GiSprout icon
    description: 'Herramientas para cultivar la confianza y el amor propio en los niños.',
    color: 'from-green-100 to-emerald-200',
    resources: [
      {
        id: 'diario-logros',
        title: 'Diario de logros personales',
        description: 'Plantilla para que los niños registren sus éxitos diarios.',
        fileName: 'diario-logros.pdf',
        type: 'gratuito',
        resourceType: 'actividad',
        ageRange: ['6-12'],
        difficulty: 'basico',
        tags: ['autoestima', 'logros', 'registro'],
        downloadUrl: '/downloads/diario-logros.pdf'
      },
      {
        id: 'afirmaciones-positivas',
        title: 'Tarjetas de afirmaciones positivas',
        description: 'Colección de frases motivadoras adaptadas para niños.',
        fileName: 'afirmaciones-positivas.pdf',
        type: 'gratuito',
        resourceType: 'actividad',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        tags: ['afirmaciones', 'autoestima', 'positividad'],
        downloadUrl: '/downloads/afirmaciones-positivas.pdf'
      },
      {
        id: 'juego-cualidades',
        title: 'Juego: "Mis súper poderes"',
        description: 'Actividad lúdica para identificar fortalezas personales.',
        fileName: 'juego-cualidades.pdf',
        type: 'premium',
        resourceType: 'actividad',
        ageRange: ['6-12'],
        difficulty: 'intermedio',
        tags: ['fortalezas', 'juego', 'autoconocimiento']
      },
      {
        id: 'manual-padres-autoestima',
        title: 'Manual para padres: Fomentando la autoestima',
        description: 'Guía completa con estrategias basadas en evidencia.',
        fileName: 'manual-padres-autoestima.pdf',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['todas'],
        difficulty: 'avanzado',
        tags: ['padres', 'autoestima', 'estrategias']
      },
      {
        id: 'rituales-confianza',
        title: 'Rituales de confianza familiar',
        description: 'Actividades para fortalecer vínculos y seguridad emocional.',
        fileName: 'rituales-confianza.pdf',
        type: 'premium',
        resourceType: 'actividad',
        ageRange: ['3-6', '6-12'],
        difficulty: 'intermedio',
        tags: ['confianza', 'familia', 'rituales']
      }
    ]
  },
  {
    id: 'corazon-enojado',
    title: 'Cuando se enoja mi corazón',
    icon: IoHeartDislike, // Replaced ❤️‍🔥 emoji with IoHeartDislike icon for angry heart
    description: 'Recursos para manejar la ira y las emociones intensas en los niños.',
    color: 'from-orange-100 to-red-200',
    resources: [
      {
        id: 'termometro-emociones',
        title: 'Termómetro de emociones',
        description: 'Herramienta visual para identificar niveles de ira.',
        fileName: 'termometro-emociones.pdf',
        type: 'gratuito',
        resourceType: 'actividad',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        tags: ['emociones', 'ira', 'autorregulación'],
        downloadUrl: '/downloads/termometro-emociones.pdf'
      },
      {
        id: 'tecnicas-respiracion',
        title: 'Técnicas de respiración para niños',
        description: 'Ejercicios simples de autorregulación emocional.',
        fileName: 'tecnicas-respiracion.pdf',
        type: 'gratuito',
        resourceType: 'actividad',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        tags: ['respiración', 'calma', 'autorregulación'],
        downloadUrl: '/downloads/tecnicas-respiracion.pdf'
      },
      {
        id: 'caja-calma',
        title: 'Kit: "Mi caja de la calma"',
        description: 'Guía para crear un espacio de autorregulación personalizado.',
        fileName: 'caja-calma.pdf',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['3-6', '6-12'],
        difficulty: 'intermedio',
        tags: ['calma', 'autorregulación', 'herramientas']
      },
      {
        id: 'estrategias-padres-berrinches',
        title: 'Estrategias para padres: Manejo de berrinches',
        description: 'Protocolo paso a paso para acompañar episodios de ira.',
        fileName: 'estrategias-padres-berrinches.pdf',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        tags: ['padres', 'berrinches', 'manejo']
      },
      {
        id: 'juego-monstruo-ira',
        title: 'Juego: "Domando al monstruo de la ira"',
        description: 'Actividad terapéutica para externalizar y manejar la ira.',
        fileName: 'juego-monstruo-ira.pdf',
        type: 'premium',
        resourceType: 'actividad',
        ageRange: ['6-12'],
        difficulty: 'intermedio',
        tags: ['ira', 'juego', 'externalización']
      },
      {
        id: 'cuento-dragon-furioso',
        title: 'Cuento: "El dragón furioso"',
        description: 'Historia que enseña técnicas de manejo emocional.',
        fileName: 'cuento-dragon-furioso.pdf',
        type: 'premium',
        resourceType: 'cuento',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        tags: ['cuento', 'ira', 'manejo emocional']
      }
    ]
  }
];
