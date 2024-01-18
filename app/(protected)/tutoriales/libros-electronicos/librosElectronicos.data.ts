export const dataSubLibros = [
  {
    id: 1,
    title: "1.1 Libro Electrónico Registro de Compras",
    description:
      "Se detalla el proceso para la generación, validación y carga óptima del libro electrónico de compras en el Programa de Libros Electrónicos (PLE-SUNAT).",
    href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras",
    subtitle2: [
      {
        id: 2,
        title: "1.1.1 Generación del Libro Electrónico de Compras",
        description:
          "Este tutorial contiene todo lo relacionado a la creación del libro electrónico de compras en el sistema CONCAR®.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras",
        subtitle3: [
          {
            id: 3,
            title: "1.1.1.1 Cómo Generar el Libro Electrónico de Compras",
            description:
              "El presente documento detalla el procedimiento a realizar en el CONCAR para generar el libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/como-generar-libro-compras",
          },
          {
            id: 4,
            title:
              "1.1.1.2 Estado o Indicador de la Operación en el Libro Electrónico de Compras",
            description:
              "Procedimiento para registrar operaciones de compras según el estado a informar.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/estado-indicador-libro-compras",
          },
          {
            id: 5,
            title:
              "1.1.1.3 Rectificación - Registros Adicionales en Registro de Compras Electrónico",
            description:
              "En esta opción solo se registrarán las rectificaciones de los comprobantes de compras que se informarán en la declaración del libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/rectificacion-registro-compras",
          },
        ],
      },
      {
        id: 6,
        title: "1.1.2 Validación de Registro de Compras - PLE",
        description:
          "Reporte que emite el CONCAR® automáticamente, al generar el libro electrónico de compras, cuando detecta observaciones en los comprobantes registrados que impidan la carga del libro electrónico al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple",
        subtitle3: [
          {
            id: 7,
            title:
              "1.1.2.1 Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar el número de documento en el registro, el campo no debe estar en blanco ni ser cero.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-blanco-cero",
          },
          {
            id: 8,
            title:
              "1.1.2.2 Validación de Libro Electrónico de Compras - Número de serie es obligatoria",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar el número de serie del documento registrado.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-serie-obligatoria",
          },
          {
            id: 9,
            title:
              "1.1.2.3 Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 01 Factura",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 01 Factura",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo01-factura",
          },
          {
            id: 10,
            title:
              "1.1.2.4 Validación de Libro Electrónico de Compras - Para código de documento SUNAT 01 Factura, documento de proveedor debe ser código 6 RUC",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no seleccionar un tipo de documento correcto para un proveedor del exterior.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/documento-codigo6-ruc",
          },
          {
            id: 11,
            title:
              "1.1.2.5 Validación de Libro Electrónico de Compras - Error en número de serie para tipo de documento 02 Recibo por Honorarios",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie del tipo de documento recibo por honorarios.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento02-recibo-honorarios",
          },
          {
            id: 12,
            title:
              "1.1.2.6 Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 10 Recibo por Arrendamiento",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación porque el número de serie del documento tipo 10 Recibo por arrendamiento está incompleto y falta registrar el código por el aporte de renta de primero categoría.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento",
          },
          {
            id: 13,
            title:
              "1.1.2.7 Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 03 Boleta de Venta",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 03 Boleta de Venta.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento03-boleta-venta",
          },
          {
            id: 14,
            title:
              "1.1.2.8 Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 06 Carta de Porte Aéreo",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 06 Carta de Porte Aéreo.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento06-carta-porte",
          },
          {
            id: 15,
            title:
              "1.1.2.9 Validación de Libro Electrónico de Compras - Fecha de documento de referencia no debe ser mayor a fecha de documento para el tipo de documento 07 Nota de crédito",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por consignar de forma errónea la fecha del documento de referencia para el tipo de documento Nota de crédito, ésta no debe ser mayor que la fecha de documento.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-documento-mayor-documento07",
          },
          {
            id: 16,
            title:
              "1.1.2.10 Validación de Libro Electrónico de Compras - Falta documento de referencia para el documento tipo 07 Nota de Crédito",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar los datos del documento de referencia para el documento tipo 07 Nota de Crédito.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/falta-documento07-nota-credito",
          },
          {
            id: 17,
            title:
              "1.1.2.11 Validación de Libro Electrónico de Compras - Fecha de vencimiento debe ser menor o igual al periodo de proceso para tipo de documento 14 Recibo de servicios públicos",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación cuando la fecha de vencimiento del documento se ha registrado de forma incorrecta, debiendo ser menor o igual al periodo de proceso.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-vencimiento-documento14",
          },
          {
            id: 18,
            title:
              "1.1.2.12 Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 52 DUA Simplificada",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación porque en la serie del número de documento los datos están mal ingresados o éstos contienen caracteres no válidos.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento52-dua-simplificada",
          },
          {
            id: 19,
            title:
              "1.1.2.13 Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo55-transporte-ferroviario",
          },
        ],
      },
      {
        id: 20,
        title: "1.1.3 Carga del Libro Electrónico de Compras al PLE-SUNAT",
        description:
          "Este tutorial contiene todo lo relacionado a la validación y envío del libro electrónico de compras en el PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple",
        subtitle3: [
          {
            id: 21,
            title:
              "1.1.3.1 Cómo Cargar el Libro Electrónico de Compras al PLE-SUNAT",
            description:
              "Procedimiento para cargar el libro electrónico de compras al programa de libros electrónicos PLE-SUNAT.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-cargar-libro-compras",
          },
          {
            id: 22,
            title: "1.1.3.2 Cómo subsanar inconsistencias en el PLE-SUNAT",
            description:
              "Cómo subsanar las inconsistencias que el PLE detecta en el proceso de validación de los libros electrónicos.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-subsanar-inconsistencias",
          },
        ],
      },
      {
        id: 23,
        title:
          " 1.1.4 Errores detectados en el PLE-SUNAT al validar el libro electrónico de compras",
        description:
          "El programa de libros electrónicos (PLE-SUNAT) emite una constancia con los errores detectados al validar el libro electrónico de compras. Se detallan los errores más comunes y como subsanarlos.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras",
        subtitle3: [
          {
            id: 24,
            title:
              " 1.1.4.1 Validación en PLE-SUNAT: El número de documento de identidad es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque el número de documento de identidad es incorrecto.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/documento-identidad-incorrecto",
          },
          {
            id: 25,
            title: "1.1.4.2 Validación en PLE-SUNAT: El valor es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque en el número de comprobante de pago o documento hay caracteres que no son válidos para el campo.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/valor-incorrecto",
          },
        ],
      },
      {
        id: 26,
        title: "1.1.5 Consultas Libro Electrónico de Compras",
        description:
          "Este tutorial contiene consultas que se pueden presentar en el proceso de la generación del libro electrónico de compras en el sistema CONCAR® y que requieren asistencia para ser superadas.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras",
        subtitle3: [
          {
            id: 27,
            title:
              "1.1.5.1 Cómo generar el libro electrónico de compras de un mes sin movimiento",
            description:
              "Procedimiento para la generación del archivo TXT del libro electrónico de compras de un mes sin movimiento.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/consulta-libro-compras/como-generar-mes-movimiento",
          },
        ],
      },
    ],
  },
  {
    id: 28,
    title: "1.2 Libro Electrónico Registro de Ventas",
    description:
      "En este tutorial se detalla el proceso para la generación, validación y carga óptima del libro electrónico de ventas en el Programa de Libros Electrónicos (PLE-SUNAT).",
    href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas",
    subtitle2: [
      {
        id: 29,
        title: "1.2.1 Generación del Libro Electrónico de Ventas",
        description:
          "Este tutorial contiene todo lo relacionado a la creación del libro electrónico de ventas en el sistema CONCAR®.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas",
        subtitle3: [
          {
            id: 30,
            title: "1.2.1.1 Cómo Generar el Libro Electrónico de Ventas",
            description:
              "El presente documento detalla el procedimiento a realizar en el CONCAR para generar el libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/como-generar-libro-ventas",
          },
          {
            id: 31,
            title:
              "1.2.1.2 Estado o Indicador de la Operación en el Libro Electrónico de Ventas",
            description:
              "Procedimiento para registrar operaciones de ventas según el estado a informar.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/estado-indicador-libro-ventas",
          },
          {
            id: 32,
            title:
              "1.2.1.3 Rectificación - Registros Adicionales en Registro de ventas Electrónico",
            description:
              "En esta opción solo se registrarán las rectificaciones de los comprobantes de ventas que se informarán en la declaración del libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/rectificacion-registro-ventas",
          },
        ],
      },
      {
        id: 33,
        title: "1.2.2 Validación de Registro de Ventas - PLE",
        description:
          "Reporte que emite el CONCAR® automáticamente, al generar el libro electrónico de ventas, cuando detecta observaciones en los comprobantes registrados que impidan la carga del libro electrónico al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple",
        subtitle3: [
          {
            id: 34,
            title:
              "1.2.2.1 Validación de Libro Electrónico de Ventas - Número de documento debe ser numérico mayor a cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar el número de documento en el registro, el campo debe ser numérico mayor a cero.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/numero-numerico-mayor-cero",
          },
          {
            id: 35,
            title:
              "1.2.2.2 Validación de Libro Electrónico de Ventas - Error en el número de serie para el documento de tipo 01 Factura",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie del documento tipo 01 factura.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo01-factura",
          },
          {
            id: 36,
            title:
              "1.1.2.3 Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 03 Boleta de Venta",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 03 Boleta de Venta.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento03-boleta-venta",
          },
          {
            id: 37,
            title:
              "1.2.2.4 Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 04 Liquidación de Compra",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 04 Liquidación de Compra.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo04-liquidacion-compra",
          },
          {
            id: 38,
            title:
              "1.2.2.5 Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 05 Boleto Aéreo",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 05 Boleto Aéreo.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo05-boleto-aereo",
          },
          {
            id: 39,
            title:
              " 1.2.2.6 Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 06 Carta de Porte aéreo",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 06 Carta de porte aéreo.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-documento06-carta-porte",
          },
          {
            id: 40,
            title:
              "1.2.2.7 Validación de Libro Electrónico de Ventas - Falta documento de referencia para el documento tipo 08 Nota de Débito",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar los datos del documento de referencia para el documento tipo 08 Nota de Débito.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo08-nota-debito",
          },
          {
            id: 41,
            title:
              "1.2.2.8 Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validacion-registro-ventas-ple/error-tipo55-transporte-ferroviario",
          },
        ],
      },
      {
        id: 42,
        title: "1.2.3 Carga del Libro Electrónico de Ventas al PLE-SUNAT",
        description:
          "Este tutorial contiene todo lo relacionado a la validación y envío del libro electrónico de compras en el PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple",
        subtitle3: [
          {
            id: 43,
            title:
              "1.2.3.1 Cómo Cargar el Libro Electrónico de Ventas al PLE-SUNAT",
            description:
              "Procedimiento para cargar el libro electrónico de Ventas al programa de libros electrónicos PLE-SUNAT.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/como-cargar-libro-ventas",
          },
          {
            id: 44,
            title: "1.2.3.2 Cómo subsanar inconsistencias en el PLE-SUNAT",
            description:
              "Cómo subsanar las inconsistencias que el PLE detecta en el proceso de validación de los libros electrónicos.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/subsanar-inconsistencias",
          },
        ],
      },
      {
        id: 45,
        title:
          "1.2.4 Errores detectados en el PLE-SUNAT al validar el libro electrónico de Ventas",
        description:
          "El programa de libros electrónicos (PLE-SUNAT) emite una constancia con los errores detectados al validar el libro electrónico de compras. Se detallan los errores más comunes y como subsanarlos.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas",
        subtitle3: [
          {
            id: 46,
            title:
              "1.2.4.1 Validación en PLE-SUNAT: El número de documento de identidad es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque el número de documento de identidad es incorrecto.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/documento-identidad-incorrecto",
          },
          {
            id: 47,
            title: "1.2.4.2 Validación en PLE-SUNAT: El valor es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque en el número de comprobante de pago o documento hay caracteres que no son válidos para el campo.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/valor-incorrecto",
          },
        ],
      },
      {
        id: 48,
        title: "1.2.5 Consultas Libro Electrónico de Ventas",
        description:
          "Este tutorial contiene consultas que se pueden presentar en el proceso de la generación del libro electrónico de Ventas en el sistema CONCAR® y que requieren asistencia para ser superadas.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas",
        subtitle3: [
          {
            id: 49,
            title:
              "1.2.5.1 Cómo generar el libro electrónico de Ventas de un mes sin movimiento",
            description:
              "Procedimiento para la generación del archivo TXT del libro electrónico de compras de un mes sin movimiento.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas/como-generar-mes-movimiento",
          },
        ],
      },
    ],
  },
  {
    id: 50,
    title: "1.3 Libros Electrónicos Diario, Diario Simplificado y Mayor",
    description:
      "Se detalla el proceso para la generación, validación y carga óptima de los libros electrónicos Diario, Diario Simplificado y Mayor en el Programa de Libros Electrónicos (PLE-SUNAT).",
    href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado",
    subtitle2: [
      {
        id: 51,
        title:
          "1.3.1 Generación de los Libros Electrónicos Diario, Diario Simplificado y Mayor",
        description:
          "Este tutorial contiene todo lo relacionado a la creación de los libros electrónicos Diario, Diario Simplificado y Mayor en el sistema CONCAR®.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado",
        subtitle3: [
          {
            id: 52,
            title:
              "1.3.1.1 Cómo Generar los Libros Electrónicos Diario, Diario Simplificado y Mayor",
            description:
              "El presente documento detalla el procedimiento a realizar en el CONCAR SQL para generar los libros electrónicos Diario y Mayor.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/como-generar-libro-diario-simplificado",
          },
          {
            id: 53,
            title:
              "1.3.1.2 Registro de Omisiones en los Libros Electrónicos Diario, Diario Simplificado y Mayor",
            description:
              "Esta opción permite incluir asientos omitidos en meses anteriores en los libros electrónicos Diario y Mayor. Para poder incluir asientos en esta opción es necesario que el comprobante contable omitido se registre en el mes en que se va a regularizar su omisión.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/registro-omisiones-libro-diario-simplificado",
          },
        ],
      },
      {
        id: 54,
        title:
          "1.3.2 Carga de los Libros Electrónicos Diario, Diario Simplificado y Mayor al PLE-SUNAT",
        description:
          "Este tutorial contiene todo lo relacionado a la validación y envío de los libros electrónicos Diario, Diario Simplificado y Mayor al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado",
        subtitle3: [
          {
            id: 55,
            title:
              "1.3.2.1 Cómo Cargar los Libros Electrónicos Diario, Diario Simplificado y Mayor al PLE-SUNAT",
            description:
              "Procedimiento para cargar los libros electrónicos Diario, Diario Simplificado y Mayor al programa de libros electrónicos PLE-SUNAT.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-cargar-libro-diario",
          },
          {
            id: 56,
            title: "1.3.2.2 Cómo subsanar inconsistencias en el PLE-SUNAT",
            description:
              "Cómo subsanar las inconsistencias que el PLE detecta en el proceso de validación de los libros electrónicos.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-subsanar-inconsistencias",
          },
        ],
      },
      {
        id: 57,
        title:
          "1.3.3 Validación en PLE-SUNAT de los libros electrónicos Diario, Diario Simplificado y Mayor",
        description:
          "Reporte que emite el CONCAR® automáticamente, al generar el libro electrónico diario, diario simplificado y mayor, cuando detecta observaciones en los comprobantes registrados que impidan la carga del libro electrónico al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado",
        subtitle3: [
          {
            id: 58,
            title:
              "1.3.3.1 Validación en PLE-SUNAT: Campo obligatorio / La llave única es incorrecta",
            description:
              "Al intentar validar el libro electrónico diario en el PLE - SUNAT aparece una observación porque no se ha creado correctamente la compañía en el sistema, debido a que se dejó vacío el campo Tipo de Plan de Cuentas.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/validacion-libro-diario-simplificado/campo-obligatorio-llave-incorrecta",
          },
        ],
      },
    ],
  },
];
