import type { Collection } from '../types/recursos';

export const collectionsData: Collection[] = [
  {
    id: 'dos-casas',
    title: 'Dos casas, un corazón',
    emoji: '🏠',
    description: 'Recursos para ayudar a los niños a navegar la separación y el divorcio de sus padres.',
    color: 'from-pink-100 to-rose-200',
    resources: [
      {
        id: 'guia-padres-separados',
        title: 'Guía para padres separados',
        description: 'Cómo comunicar la separación a los niños de manera saludable.',
        type: 'gratuito',
        downloadUrl: '/downloads/guia-padres-separados.pdf'
      },
      {
        id: 'cuento-dos-casas',
        title: 'Cuento: "Mi corazón en dos lugares"',
        description: 'Historia ilustrada para explicar a los niños la nueva dinámica familiar.',
        type: 'premium'
      },
      {
        id: 'actividades-emociones',
        title: 'Actividades para procesar emociones',
        description: 'Ejercicios prácticos para ayudar a los niños a expresar sus sentimientos.',
        type: 'gratuito',
        downloadUrl: '/downloads/actividades-emociones.pdf'
      },
      {
        id: 'protocolo-transiciones',
        title: 'Protocolo de transiciones suaves',
        description: 'Estrategias para facilitar los cambios entre casas.',
        type: 'premium'
      }
    ]
  },
  {
    id: 'semillas-autoestima',
    title: 'Semillas de autoestima',
    emoji: '🌱',
    description: 'Herramientas para cultivar la confianza y el amor propio en los niños.',
    color: 'from-green-100 to-emerald-200',
    resources: [
      {
        id: 'diario-logros',
        title: 'Diario de logros personales',
        description: 'Plantilla para que los niños registren sus éxitos diarios.',
        type: 'gratuito',
        downloadUrl: '/downloads/diario-logros.pdf'
      },
      {
        id: 'afirmaciones-positivas',
        title: 'Tarjetas de afirmaciones positivas',
        description: 'Colección de frases motivadoras adaptadas para niños.',
        type: 'gratuito',
        downloadUrl: '/downloads/afirmaciones-positivas.pdf'
      },
      {
        id: 'juego-cualidades',
        title: 'Juego: "Mis súper poderes"',
        description: 'Actividad lúdica para identificar fortalezas personales.',
        type: 'premium'
      },
      {
        id: 'manual-padres-autoestima',
        title: 'Manual para padres: Fomentando la autoestima',
        description: 'Guía completa con estrategias basadas en evidencia.',
        type: 'premium'
      },
      {
        id: 'rituales-confianza',
        title: 'Rituales de confianza familiar',
        description: 'Actividades para fortalecer vínculos y seguridad emocional.',
        type: 'premium'
      }
    ]
  },
  {
    id: 'corazon-enojado',
    title: 'Cuando se enoja mi corazón',
    emoji: '❤️‍🔥',
    description: 'Recursos para manejar la ira y las emociones intensas en los niños.',
    color: 'from-orange-100 to-red-200',
    resources: [
      {
        id: 'termometro-emociones',
        title: 'Termómetro de emociones',
        description: 'Herramienta visual para identificar niveles de ira.',
        type: 'gratuito',
        downloadUrl: '/downloads/termometro-emociones.pdf'
      },
      {
        id: 'tecnicas-respiracion',
        title: 'Técnicas de respiración para niños',
        description: 'Ejercicios simples de autorregulación emocional.',
        type: 'gratuito',
        downloadUrl: '/downloads/tecnicas-respiracion.pdf'
      },
      {
        id: 'caja-calma',
        title: 'Kit: "Mi caja de la calma"',
        description: 'Guía para crear un espacio de autorregulación personalizado.',
        type: 'premium'
      },
      {
        id: 'estrategias-padres-berrinches',
        title: 'Estrategias para padres: Manejo de berrinches',
        description: 'Protocolo paso a paso para acompañar episodios de ira.',
        type: 'premium'
      },
      {
        id: 'juego-monstruo-ira',
        title: 'Juego: "Domando al monstruo de la ira"',
        description: 'Actividad terapéutica para externalizar y manejar la ira.',
        type: 'premium'
      },
      {
        id: 'cuento-dragon-furioso',
        title: 'Cuento: "El dragón furioso"',
        description: 'Historia que enseña técnicas de manejo emocional.',
        type: 'premium'
      }
    ]
  }
];
