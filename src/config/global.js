export default {
  global: {
    Name: 'Normatividad y requisitos técnicos para tableros de distribución',
    Description:
      'El componente formativo Normatividad y requisitos técnicos para tableros de distribución desarrolla en el aprendiz las competencias necesarias para interpretar, aplicar y verificar los lineamientos del RETIE, la NTC 2050 y normas internacionales relacionadas con el diseño, instalación y evaluación de tableros eléctricos, asegurando intervenciones seguras, con-formes a la normativa vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo del sistema eléctrico colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura regulatoria del sector eléctrico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Finalidad y alcance del RETIE',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'NTC 2050: Código Eléctrico Colombiano',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación RETIE, NTC 2050 y estándares internacionales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Responsabilidades del diseñador, instalador e inspector',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Requisitos técnicos y de seguridad para tableros de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Especificaciones constructivas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Materiales, encerramientos y grados de protección',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Barras colectoras: características, capacidades y exigencias normativas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Canalizaciones, cables y conexiones internas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Condiciones de accesibilidad, espacio y operación segura',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño normativo del tablero de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Identificación de sistemas (monofásico, bifásico y trifásico)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios normativos para protecciones eléctricas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Esquemas TT, TN y IT aplicados a tableros',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Coordinación y selectividad de protecciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Interpretación del diseño esquemático (diagrama unifilar)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Rotulado, señalización y verificación de conformidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Señalización obligatoria en tableros',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación de circuitos según RETIE',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Inspección de conformidad: criterios de verificación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Casos prácticos de aplicación normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tablero residencial: análisis normativo completo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tablero industrial: caso aplicado',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Errores comunes y cómo evitarlos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Checklist técnico de cumplimiento RETIE–NTC',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acometida eléctrica',
      significado:
        'Conjunto de conductores y accesorios que conectan la red de distribución pública con la instalación del usuario, pudiendo ser aérea o subterránea.',
    },
    {
      termino: 'Aislamiento eléctrico',
      significado:
        'Material o sistema que evita el paso de corriente no deseada entre partes activas y el entorno, reduciendo riesgo de choque eléctrico y cortocircuito.',
    },
    {
      termino: 'Ampacidad',
      significado:
        'Capacidad máxima de un conductor para transportar corriente sin superar su límite térmico, según condiciones de instalación y tipo de aislamiento.',
    },
    {
      termino: 'Barras colectoras',
      significado:
        'Conductores rígidos de cobre o aluminio que distribuyen la energía dentro de un tablero, permitiendo conectar varios circuitos.',
    },
    {
      termino: 'Canalización',
      significado:
        'Sistema de tuberías, ductos o canaletas que alojan los conductores eléctricos para su protección y organización.',
    },
    {
      termino: 'Capacidad interruptiva',
      significado:
        'Corriente máxima de cortocircuito que un interruptor puede interrumpir sin destruirse ni comprometer la seguridad.',
    },
    {
      termino: 'Cortocircuito',
      significado:
        'Falla eléctrica producida cuando dos puntos con potencial diferente se conectan accidentalmente sin resistencia, generando corrientes muy elevadas.',
    },
    {
      termino: 'Curva de disparo',
      significado:
        'Característica de los interruptores que define el tiempo de operación frente a una corriente anormal; clasificada comúnmente en curvas B, C y D.',
    },
    {
      termino: 'Diagrama unifilar',
      significado:
        'Representación gráfica simplificada que muestra la estructura de una instalación eléctrica y la relación entre sus componentes principales.',
    },
    {
      termino: 'Disyuntor (interruptor automático)',
      significado:
        'Dispositivo de protección que abre el circuito de manera automática ante sobrecorrientes o cortocircuitos.',
    },
    {
      termino: 'Energización',
      significado:
        'Estado en el que un conductor, equipo o sistema se encuentra bajo tensión y puede transmitir corriente.',
    },
    {
      termino: 'Esquema IT',
      significado:
        'Sistema con neutro aislado o conectado a tierra mediante impedancia, usado en instalaciones donde se requiere alta continuidad del servicio.',
    },
    {
      termino: 'Esquema TN',
      significado:
        'Sistema donde el neutro y las masas comparten el mismo sistema de tierra, con variantes TN-S, TN-C y TN-C-S.',
    },
    {
      termino: 'Esquema TT',
      significado:
        'Sistema de puesta a tierra donde el neutro está aterrizado por la empresa suministradora y las masas del usuario por un electrodo independiente.',
    },
    {
      termino: 'Grado IP',
      significado:
        'Clasificación del nivel de protección de un gabinete frente a ingreso de polvo y agua, según la norma IEC 60529.',
    },
    {
      termino: 'Interruptor diferencial (RCD)',
      significado:
        'Dispositivo que desconecta el circuito ante una fuga de corriente hacia tierra, protegiendo a las personas contra choques eléctricos.',
    },
    {
      termino: 'Neutro',
      significado:
        'Conductor conectado al punto estrella de un sistema y que sirve como retorno de corriente en circuitos monofásicos y trifásicos.',
    },
    {
      termino: 'No conformidad',
      significado:
        'Condición en la que un elemento de la instalación eléctrica no cumple los requisitos del RETIE o la NTC 2050.',
    },
    {
      termino: 'Protección eléctrica',
      significado:
        'Conjunto de dispositivos que limitan corriente o tensión para evitar daños en personas, equipos o instalaciones.',
    },
    {
      termino: 'Puesta a tierra (PAT)',
      significado:
        'Sistema que une eléctricamente las masas metálicas a un electrodo enterrado para desviar corrientes de falla.',
    },
    {
      termino: 'Selectividad',
      significado:
        'Coordinación entre protecciones para que solo actúe la más cercana al punto de falla, evitando interrupciones innecesarias.',
    },
    {
      termino: 'Tablero de distribución',
      significado:
        'Equipo donde se concentran las protecciones y elementos de maniobra para distribuir energía hacia distintos circuitos.',
    },
    {
      termino: 'Tensión nominal',
      significado:
        'Valor de voltaje para el cual un equipo o sistema ha sido diseñado para operar de forma segura.',
    },
    {
      termino: 'Trazabilidad eléctrica',
      significado:
        'Capacidad de seguir un circuito desde su origen hasta su carga, apoyada por rotulado, documentación y diagrama unifilar.',
    },
    {
      termino: 'Unidad funcional (celda)',
      significado:
        'Compartimiento independiente dentro de un switchgear que agrupa protecciones y barras de un circuito específico.',
    },
  ],
  referencias: [
    {
      referencia:
        'ABB. (2023). <em>Guía técnica de tableros eléctricos de baja tensión</em>. ABB Group.',
      link:
        'https://library.abb.com/public/8f6d8f6a2a214a42a738a49a8b7a29bd/Guia_tecnica_tableros_baja_tension.pdf',
    },
    {
      referencia:
        'Comisión Electrotécnica Internacional. (2024). <em>IEC 60364: Electrical installations for buildings</em>. IEC.',
      link: 'https://webstore.iec.ch/publication/60364',
    },
    {
      referencia:
        'Comisión Electrotécnica Internacional. (2024). <em>IEC 61439: Low-voltage switchgear and controlgear assemblies</em>. IEC.',
      link: 'https://webstore.iec.ch/publication/61439',
    },
    {
      referencia:
        'Icontec. (2020). <em>NTC 2050: Código Eléctrico Colombiano (Segunda actualización)</em>. Instituto Colombiano de Normas Técnicas y Certificación.',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2024). <em>Resolución 40117 de 2024: Por la cual se modifica el Reglamento Técnico de Instalaciones Eléctricas – RETIE</em>. Diario Oficial No. 52.716.',
      link:
        'https://www.minenergia.gov.co/documents/11564/2._Libro_1___Disposiciones_Generales.pdf',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2025). <em>Resolución 40304 de 2025: Por la cual se modifican las disposiciones transitorias de la Resolución 40117 de 2024 (RETIE)</em>. Diario Oficial No. 53.170.',
      link:
        'https://www.minenergia.gov.co/documents/14738/1._Proyecto_de_Resoluci%C3%B3n_RETIE.pdf',
    },
    {
      referencia:
        'National Fire Protection Association. (2023). <em>NFPA 70: National Electrical Code (NEC)</em>. NFPA.',
      link:
        'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70',
    },
    {
      referencia:
        'Schneider Electric. (2023). <em>Principios básicos de distribución eléctrica en baja tensión</em>. Schneider Electric.',
      link:
        'https://download.schneider-electric.com/files?p_Doc_Ref=ECT1904001_ES',
    },
    {
      referencia:
        'Siemens. (2024). <em>Electrical Distribution Handbook</em>. Siemens AG.',
      link:
        'https://assets.new.siemens.com/siemens/assets/api/uuid:ee6bd1fb-ff2d-4de5-9dbf-6255e819e939/electrical-distribution-handbook.pdf',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2023). <em>Seguridad eléctrica: fundamentos y normatividad aplicable</em>. Repositorio UNAL.',
      link: 'https://repositorio.unal.edu.co/handle/unal/79776',
    },
    {
      referencia:
        'U.S. Department of Energy. (2024). <em>Electrical Safety Guidelines</em>. Office of Energy Efficiency & Renewable Energy.',
      link: 'https://www.energy.gov/ehss/electrical-safety',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
