import type { BibliotecaCategory, Resource } from '../types/recursos';
import { 
  IoMailOutline, 
  IoBookOutline, 
  IoDocumentTextOutline,
  IoSchoolOutline,
  IoLibraryOutline,
  IoHeartOutline 
} from 'react-icons/io5';

export const bibliotecaEmocionalData: BibliotecaCategory[] = [
  {
    id: 'cartas-que-curan',
    title: 'Cartas que Curan',
    icon: IoMailOutline,
    description: 'Cartas terapéuticas para sanar heridas emocionales y fortalecer vínculos familiares.',
    folderPath: 'CARTAS QUE CURAN',
    color: 'from-pink-100 to-rose-200',
    resources: [
      {
        id: 'carta-hija-crece-rapido',
        title: 'A mi hija que crece rápido',
        description: 'Una carta emotiva para acompañar el crecimiento acelerado de nuestras hijas.',
        fileName: 'A mi hija que crece rápido.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['6-12', '12+'],
        difficulty: 'basico',
        estimatedTime: '5 min lectura',
        tags: ['crecimiento', 'madre-hija', 'tiempo', 'nostalgia'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/A mi hija que crece rápido.docx',
        preview: 'Una reflexión profunda sobre el paso del tiempo y la importancia de valorar cada momento con nuestras hijas.'
      },
      {
        id: 'carta-nino-interior',
        title: 'A mi niño interior',
        description: 'Carta de sanación hacia el niño que fuimos, para sanar heridas del pasado.',
        fileName: 'A mi niño interior.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        estimatedTime: '7 min lectura',
        tags: ['sanación', 'niño interior', 'autocuidado', 'heridas'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/A mi niño interior.docx',
        preview: 'Un ejercicio de autocompasión y sanación para reconectar con nuestro niño interior.'
      },
      {
        id: 'carta-padre-aprendiendo',
        title: 'Carta a un padre que está aprendiendo',
        description: 'Palabras de aliento para padres que se sienten inseguros en su rol.',
        fileName: 'Carta a un padre que está aprendiendo.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['todas'],
        difficulty: 'basico',
        estimatedTime: '6 min lectura',
        tags: ['paternidad', 'aprendizaje', 'inseguridad', 'crecimiento'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/Carta a un padre que está aprendiendo.docx',
        preview: 'Reconocimiento y validación para padres que están en proceso de aprendizaje constante.'
      },
      {
        id: 'cuando-madre-quiere-llorar',
        title: 'Cuando una madre quiere llorar',
        description: 'Validación emocional para madres que necesitan expresar su vulnerabilidad.',
        fileName: 'Cuando una madre quiere llorar.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['todas'],
        difficulty: 'basico',
        estimatedTime: '5 min lectura',
        tags: ['maternidad', 'llanto', 'vulnerabilidad', 'emociones'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/Cuando una madre quiere llorar.docx',
        preview: 'Permiso para sentir y validación de las emociones maternas más profundas.'
      },
      {
        id: 'beso-no-di-no-recibi',
        title: 'El beso que no di, el que no recibí',
        description: 'Reflexión sobre las muestras de afecto no expresadas y su impacto.',
        fileName: 'El beso que no di, el que no recibí.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        estimatedTime: '8 min lectura',
        tags: ['afecto', 'arrepentimiento', 'conexión', 'amor'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/El beso que no di, el que no recibí.docx',
        preview: 'Una reflexión emotiva sobre la importancia de expresar amor y afecto.'
      },
      {
        id: 'dia-no-supe-acompanarte',
        title: 'El día que no supe acompañarte',
        description: 'Carta de reconocimiento cuando no estuvimos presentes emocionalmente.',
        fileName: 'El día que no supe acompañarte.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        estimatedTime: '6 min lectura',
        tags: ['presencia', 'arrepentimiento', 'reparación', 'vínculo'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/El día que no supe acompañarte.docx',
        preview: 'Reconocimiento de momentos en que no supimos estar presentes para nuestros hijos.'
      },
      {
        id: 'perdoname-por-gritarte',
        title: 'Perdóname por gritarte',
        description: 'Carta de disculpa y reparación después de perder el control.',
        fileName: 'Perdóname por gritarte.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['todas'],
        difficulty: 'basico',
        estimatedTime: '5 min lectura',
        tags: ['disculpa', 'gritos', 'reparación', 'control'],
        relatedResources: ['guia-acompanar-rabieta'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/Perdóname por gritarte.docx',
        preview: 'Una guía para reparar vínculos después de momentos de descontrol parental.'
      },
      {
        id: 'madre-hijo-tdah',
        title: 'Una madre a su hijo con TDAH',
        description: 'Carta de amor y comprensión hacia los niños con TDAH.',
        fileName: 'Una madre a su hijo con TDAH.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['6-12', '12+'],
        difficulty: 'basico',
        estimatedTime: '7 min lectura',
        tags: ['TDAH', 'neurodivergencia', 'aceptación', 'amor'],
        relatedResources: ['coleccion-tdah-conductas', 'ficha-tdah'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/Una madre a su hijo con TDAH.docx',
        preview: 'Palabras de amor incondicional para niños con TDAH y sus familias.'
      },
      {
        id: 'madre-separada-hijo-pequeno',
        title: 'Una madre separada de su hijo pequeño',
        description: 'Apoyo emocional para madres que viven separadas de sus hijos.',
        fileName: 'Una madre separada de su hijo pequeño.docx',
        type: 'gratuito',
        resourceType: 'carta',
        ageRange: ['0-3', '3-6'],
        difficulty: 'intermedio',
        estimatedTime: '8 min lectura',
        tags: ['separación', 'distancia', 'maternidad', 'dolor'],
        relatedResources: ['coleccion-separacion-divorcio'],
        downloadUrl: '/biblioteca_emocional/CARTAS QUE CURAN/Una madre separada de su hijo pequeño.docx',
        preview: 'Acompañamiento emocional para madres que enfrentan la separación física de sus hijos.'
      }
    ]
  },
  {
    id: 'colecciones-ayuda-temas',
    title: 'Colecciones de Ayuda por Temas',
    icon: IoLibraryOutline,
    description: 'Guías completas organizadas por problemáticas específicas de la infancia.',
    folderPath: 'COLECCIONES DE AYUDA POR TEMAS',
    color: 'from-blue-100 to-indigo-200',
    resources: [
      {
        id: 'coleccion-autoestima-infantil',
        title: 'Autoestima Infantil',
        description: 'Guía completa para desarrollar una autoestima saludable en los niños.',
        fileName: 'Autoestima Infantil.docx',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['3-6', '6-12'],
        difficulty: 'intermedio',
        estimatedTime: '20 min lectura',
        tags: ['autoestima', 'confianza', 'desarrollo', 'emocional'],
        downloadUrl: '/biblioteca_emocional/COLECCIONES DE AYUDA POR TEMAS/Autoestima Infantil.docx',
        preview: 'Estrategias basadas en evidencia para fortalecer la autoestima desde la primera infancia.'
      },
      {
        id: 'coleccion-ninos-se-pegan',
        title: 'Cuando los Niños Se Pegan',
        description: 'Estrategias para manejar y prevenir comportamientos agresivos.',
        fileName: 'Cuando lo Niños Se Pegan.docx',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['3-6', '6-12'],
        difficulty: 'avanzado',
        estimatedTime: '25 min lectura',
        tags: ['agresividad', 'conducta', 'límites', 'disciplina'],
        downloadUrl: '/biblioteca_emocional/COLECCIONES DE AYUDA POR TEMAS/Cuando lo Niños Se Pegan.docx',
        preview: 'Protocolo completo para entender y abordar la agresividad infantil.'
      },
      {
        id: 'coleccion-pantallas-vinculo',
        title: 'Pantallas y Vínculo',
        description: 'Cómo mantener la conexión familiar en la era digital.',
        fileName: 'Pantallas Y Vínculo.docx',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        estimatedTime: '18 min lectura',
        tags: ['tecnología', 'pantallas', 'vínculo', 'digital'],
        downloadUrl: '/biblioteca_emocional/COLECCIONES DE AYUDA POR TEMAS/Pantallas Y Vínculo.docx',
        preview: 'Equilibrio saludable entre tecnología y conexión emocional familiar.'
      },
      {
        id: 'coleccion-rabietas-tormentas',
        title: 'Rabietas y Tormentas Emocionales',
        description: 'Guía para acompañar y gestionar las crisis emocionales infantiles.',
        fileName: 'Rabietas Y Tormentas Emocionales.docx',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['0-3', '3-6', '6-12'],
        difficulty: 'intermedio',
        estimatedTime: '22 min lectura',
        tags: ['rabietas', 'emociones', 'regulación', 'acompañamiento'],
        relatedResources: ['guia-acompanar-rabieta', 'perdoname-por-gritarte'],
        downloadUrl: '/biblioteca_emocional/COLECCIONES DE AYUDA POR TEMAS/Rabietas Y Tormentas Emocionales.docx',
        preview: 'Herramientas prácticas para navegar las tormentas emocionales con comprensión.'
      },
      {
        id: 'coleccion-separacion-divorcio',
        title: 'Separación y Divorcio',
        description: 'Acompañamiento para familias en proceso de separación.',
        fileName: 'Separación  Y Divorcio.docx',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['todas'],
        difficulty: 'avanzado',
        estimatedTime: '30 min lectura',
        tags: ['separación', 'divorcio', 'familia', 'transición'],
        relatedResources: ['madre-separada-hijo-pequeno'],
        downloadUrl: '/biblioteca_emocional/COLECCIONES DE AYUDA POR TEMAS/Separación  Y Divorcio.docx',
        preview: 'Protocolo integral para acompañar a los niños durante procesos de separación.'
      },
      {
        id: 'coleccion-tdah-conductas',
        title: 'TDAH y Conductas Desafiantes',
        description: 'Estrategias específicas para niños con TDAH y comportamientos desafiantes.',
        fileName: 'TDAH Y Conductas Desafiantes.docx',
        type: 'premium',
        resourceType: 'guia',
        ageRange: ['6-12', '12+'],
        difficulty: 'avanzado',
        estimatedTime: '35 min lectura',
        tags: ['TDAH', 'conductas', 'neurodivergencia', 'estrategias'],
        relatedResources: ['madre-hijo-tdah', 'ficha-tdah'],
        downloadUrl: '/biblioteca_emocional/COLECCIONES DE AYUDA POR TEMAS/TDAH Y Conductas Desafiantes.docx',
        preview: 'Herramientas especializadas para el acompañamiento de niños con TDAH.'
      }
    ]
  },
  {
    id: 'cuentos-terapeuticos',
    title: 'Cuentos Terapéuticos',
    icon: IoBookOutline,
    description: 'Historias sanadoras para trabajar situaciones específicas a través de la narrativa.',
    folderPath: 'CUENTOS TERAPÉUTICOS',
    color: 'from-green-100 to-emerald-200',
    resources: [
      {
        id: 'cuento-botella-capitan-nico',
        title: 'La botella del Capitán Nico',
        description: 'Cuento para preparar a los niños ante la llegada de un hermano.',
        fileName: 'Cuento La botella del Capitán Nico (Llegada de un hermano).docx',
        type: 'gratuito',
        resourceType: 'cuento',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        estimatedTime: '10 min lectura',
        tags: ['hermanos', 'celos', 'familia', 'aventura'],
        downloadUrl: '/biblioteca_emocional/CUENTOS TERAPÉUTICOS/Cuento La botella del Capitán Nico (Llegada de un hermano).docx',
        preview: 'Una aventura pirata que ayuda a procesar la llegada de un nuevo hermano.'
      },
      {
        id: 'cuento-capucha-invisible-bruno',
        title: 'La capucha invisible de Bruno',
        description: 'Historia para abordar el bullying escolar y el poder interior.',
        fileName: 'Cuento La capucha invisible de Bruno (Bullying escolar) .docx',
        type: 'gratuito',
        resourceType: 'cuento',
        ageRange: ['6-12'],
        difficulty: 'basico',
        estimatedTime: '12 min lectura',
        tags: ['bullying', 'autoestima', 'escuela', 'poder interior'],
        downloadUrl: '/biblioteca_emocional/CUENTOS TERAPÉUTICOS/Cuento La capucha invisible de Bruno (Bullying escolar) .docx',
        preview: 'Una historia mágica sobre encontrar la fuerza interior frente al acoso.'
      },
      {
        id: 'cuento-luz-corazon',
        title: 'La luz que vivía en su corazón',
        description: 'Cuento para trabajar miedos e inseguridades infantiles.',
        fileName: 'Cuento La luz que vivía en su corazón (Miedo- Inseguridad).docx',
        type: 'gratuito',
        resourceType: 'cuento',
        ageRange: ['3-6', '6-12'],
        difficulty: 'basico',
        estimatedTime: '8 min lectura',
        tags: ['miedo', 'inseguridad', 'valentía', 'luz interior'],
        downloadUrl: '/biblioteca_emocional/CUENTOS TERAPÉUTICOS/Cuento La luz que vivía en su corazón (Miedo- Inseguridad).docx',
        preview: 'Una historia luminosa sobre descubrir el coraje que llevamos dentro.'
      },
      {
        id: 'cuento-alas-leo',
        title: 'Las alas de Leo',
        description: 'Historia sobre sobreprotección y la importancia de la autonomía.',
        fileName: 'Cuento Las alas de Leo (Sobreprotección).docx',
        type: 'gratuito',
        resourceType: 'cuento',
        ageRange: ['6-12'],
        difficulty: 'intermedio',
        estimatedTime: '15 min lectura',
        tags: ['sobreprotección', 'autonomía', 'libertad', 'crecimiento'],
        relatedResources: ['ficha-autonomia-sobreproteccion'],
        downloadUrl: '/biblioteca_emocional/CUENTOS TERAPÉUTICOS/Cuento Las alas de Leo (Sobreprotección).docx',
        preview: 'La historia de un pajarito que aprende a volar con confianza y seguridad.'
      }
    ]
  },
  {
    id: 'fichas-psicoeducativas',
    title: 'Fichas Psicoeducativas Temáticas',
    icon: IoDocumentTextOutline,
    description: 'Material educativo especializado para comprender el desarrollo infantil.',
    folderPath: 'FICHAS PSICOEDUCATIVAS TEMÁTICAS',
    color: 'from-purple-100 to-violet-200',
    resources: [
      {
        id: 'ficha-apego-seguro-inseguro',
        title: 'Apego Seguro-Inseguro',
        description: 'Comprende los diferentes tipos de apego y su impacto en el desarrollo.',
        fileName: 'APEGO SEGURO-INSEGURO.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['todas'],
        difficulty: 'avanzado',
        estimatedTime: '15 min lectura',
        tags: ['apego', 'vínculo', 'desarrollo', 'seguridad'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/APEGO SEGURO-INSEGURO.docx',
        preview: 'Fundamentos científicos del apego y su influencia en el desarrollo emocional.'
      },
      {
        id: 'ficha-autonomia-sobreproteccion',
        title: 'Autonomía - Sobreprotección',
        description: 'Equilibrio entre protección y fomento de la independencia.',
        fileName: 'AUTONOMÍA- SOBREPROTECCIÓN.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        estimatedTime: '12 min lectura',
        tags: ['autonomía', 'sobreprotección', 'independencia', 'desarrollo'],
        relatedResources: ['cuento-alas-leo'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/AUTONOMÍA- SOBREPROTECCIÓN.docx',
        preview: 'Claves para fomentar la autonomía sin caer en la sobreprotección.'
      },
      {
        id: 'ficha-comportamiento-adecuado-inadecuado',
        title: 'Comportamiento Adecuado-Inadecuado',
        description: 'Criterios para evaluar y guiar el comportamiento infantil.',
        fileName: 'COMPORTAMIENTO  ADECUADO- INADECUADO.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['3-6', '6-12'],
        difficulty: 'intermedio',
        estimatedTime: '10 min lectura',
        tags: ['comportamiento', 'conducta', 'límites', 'desarrollo'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/COMPORTAMIENTO  ADECUADO- INADECUADO.docx',
        preview: 'Guía para entender y orientar el comportamiento según la etapa evolutiva.'
      },
      {
        id: 'ficha-desarrollo-emocional-edades',
        title: 'Desarrollo Emocional por Edades',
        description: 'Hitos emocionales esperados en cada etapa del desarrollo.',
        fileName: 'DESARROLLO EMOCIONAL POR EDADES.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['todas'],
        difficulty: 'avanzado',
        estimatedTime: '18 min lectura',
        tags: ['desarrollo', 'emociones', 'edades', 'hitos'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/DESARROLLO EMOCIONAL POR EDADES.docx',
        preview: 'Mapa del desarrollo emocional desde el nacimiento hasta la adolescencia.'
      },
      {
        id: 'ficha-estilos-educativos',
        title: 'Estilos Educativos Familiares',
        description: 'Diferentes enfoques parentales y sus efectos en el desarrollo.',
        fileName: 'ESTILOS EDUCATIVOS FAMILIARES.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['todas'],
        difficulty: 'avanzado',
        estimatedTime: '16 min lectura',
        tags: ['estilos educativos', 'crianza', 'familia', 'desarrollo'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/ESTILOS EDUCATIVOS FAMILIARES.docx',
        preview: 'Análisis de los diferentes estilos de crianza y su impacto en los niños.'
      },
      {
        id: 'ficha-regulacion-emocional',
        title: 'Regulación Emocional',
        description: 'Estrategias para desarrollar la autorregulación emocional.',
        fileName: 'REGULACIÓN EMOCIONAL.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['todas'],
        difficulty: 'intermedio',
        estimatedTime: '14 min lectura',
        tags: ['regulación', 'emociones', 'autorregulación', 'desarrollo'],
        relatedResources: ['guia-acompanar-regulacion'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/REGULACIÓN EMOCIONAL.docx',
        preview: 'Fundamentos y técnicas para desarrollar la regulación emocional en niños.'
      },
      {
        id: 'ficha-tdah',
        title: 'TDAH',
        description: 'Información completa sobre el Trastorno por Déficit de Atención e Hiperactividad.',
        fileName: 'TDAH.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['6-12', '12+'],
        difficulty: 'avanzado',
        estimatedTime: '20 min lectura',
        tags: ['TDAH', 'neurodivergencia', 'atención', 'hiperactividad'],
        relatedResources: ['coleccion-tdah-conductas', 'madre-hijo-tdah'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/TDAH.docx',
        preview: 'Guía completa sobre TDAH: características, diagnóstico y acompañamiento.'
      },
      {
        id: 'ficha-tnd',
        title: 'TND (Trastorno Negativista Desafiante)',
        description: 'Información sobre el trastorno negativista desafiante y su manejo.',
        fileName: 'TND.docx',
        type: 'premium',
        resourceType: 'ficha',
        ageRange: ['6-12', '12+'],
        difficulty: 'avanzado',
        estimatedTime: '16 min lectura',
        tags: ['TND', 'desafiante', 'comportamiento', 'trastorno'],
        downloadUrl: '/biblioteca_emocional/FICHAS PSICOEDUCATIVAS TEMÁTICAS/TND.docx',
        preview: 'Comprensión y estrategias para el trastorno negativista desafiante.'
      }
    ]
  },
  {
    id: 'guias-breves-padres',
    title: 'Guías Breves para Padres',
    icon: IoSchoolOutline,
    description: 'Herramientas prácticas y concisas para situaciones cotidianas.',
    folderPath: 'GUÍAS BREVES PARA PADRES',
    color: 'from-orange-100 to-amber-200',
    resources: [
      {
        id: 'guia-acompanar-regulacion',
        title: 'Cómo Acompañar en la Regulación Emocional',
        description: 'Estrategias prácticas para ayudar a los niños a regular sus emociones.',
        fileName: 'CÓMO ACOMPAÑAR EN LA REGULACIÓN EMOCIONAL DE LOS HIJOS.docx',
        type: 'gratuito',
        resourceType: 'guia',
        ageRange: ['todas'],
        difficulty: 'basico',
        estimatedTime: '10 min lectura',
        tags: ['regulación', 'emociones', 'acompañamiento', 'estrategias'],
        relatedResources: ['ficha-regulacion-emocional'],
        downloadUrl: '/biblioteca_emocional/GUÍAS BREVES PARA PADRES/CÓMO ACOMPAÑAR EN LA REGULACIÓN EMOCIONAL DE LOS HIJOS.docx',
        preview: 'Pasos prácticos para convertirse en un regulador emocional externo efectivo.'
      },
      {
        id: 'guia-acompanar-rabieta',
        title: 'Cómo Acompañar una Rabieta sin Castigar',
        description: 'Protocolo para manejar rabietas desde el respeto y la comprensión.',
        fileName: 'CÓMO ACOMPAÑAR UNA RABIETA SIN CASTIGAR.docx',
        type: 'gratuito',
        resourceType: 'guia',
        ageRange: ['0-3', '3-6', '6-12'],
        difficulty: 'basico',
        estimatedTime: '8 min lectura',
        tags: ['rabietas', 'disciplina positiva', 'acompañamiento', 'respeto'],
        relatedResources: ['coleccion-rabietas-tormentas', 'perdoname-por-gritarte'],
        downloadUrl: '/biblioteca_emocional/GUÍAS BREVES PARA PADRES/CÓMO ACOMPAÑAR UNA RABIETA SIN CASTIGAR.docx',
        preview: 'Guía paso a paso para navegar rabietas sin recurrir al castigo.'
      }
    ]
  },
  {
    id: 'recomendaciones-libros',
    title: 'Recomendaciones de Libros',
    icon: IoHeartOutline,
    description: 'Selección curada de libros con mirada clínica para diferentes necesidades.',
    folderPath: 'RECOMENDACIONES DE LIBROS CON MIRADA CLÍNICA',
    color: 'from-teal-100 to-cyan-200',
    subcategories: [
      {
        id: 'libros-ninos',
        title: 'Para Niños',
        description: 'Libros que ayudan a los niños a comprender y expresar emociones',
        resources: []
      },
      {
        id: 'libros-padres',
        title: 'Para Padres',
        description: 'Lecturas para profundizar en crianza consciente',
        resources: []
      },
      {
        id: 'libros-profesionales',
        title: 'Para Profesionales',
        description: 'Bibliografía especializada para terapeutas y educadores',
        resources: []
      }
    ],
    resources: [
      {
        id: 'libro-asi-es-mi-corazon',
        title: 'Así es mi corazón',
        description: 'Libro ilustrado para que los niños exploren sus emociones.',
        fileName: 'Así es mi corazón.docx',
        type: 'gratuito',
        resourceType: 'libro',
        ageRange: ['3-6'],
        difficulty: 'basico',
        estimatedTime: '3 min lectura',
        tags: ['emociones', 'corazón', 'infantil', 'ilustrado'],
        downloadUrl: '/biblioteca_emocional/RECOMENDACIONES DE LIBROS CON MIRADA CLÍNICA/Libros para comprender y acompañar a los niños/Así es mi corazón.docx',
        preview: 'Recomendación de un hermoso libro sobre el mundo emocional infantil.'
      }
      // Aquí se pueden agregar más libros recomendados
    ]
  }
];

// Función helper para buscar recursos relacionados
export const getRelatedResources = (resourceId: string): Resource[] => {
  const allResources = bibliotecaEmocionalData.flatMap(category => category.resources);
  const currentResource = allResources.find(r => r.id === resourceId);
  
  if (!currentResource?.relatedResources) return [];
  
  return allResources.filter(r => 
    currentResource.relatedResources?.includes(r.id)
  );
};

// Función helper para filtrar por tags
export const getResourcesByTag = (tag: string): Resource[] => {
  return bibliotecaEmocionalData
    .flatMap(category => category.resources)
    .filter(resource => resource.tags.includes(tag));
};

// Función helper para filtrar por edad
export const getResourcesByAge = (age: string): Resource[] => {
  return bibliotecaEmocionalData
    .flatMap(category => category.resources)
    .filter(resource => resource.ageRange.includes(age as any) || resource.ageRange.includes('todas'));
};
