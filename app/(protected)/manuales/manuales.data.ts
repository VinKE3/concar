export const dataManuales = [
  {
    id: 1,
    codigo: "M00007",
    title: "Manual de Usuario CONCAR SQL",
    description:
      "Este es una guía que te ayudará a entender el funcionamiento del sistema de forma ordenada y concisa.",
    href: "/tutoriales/libros-electronicos",
  },
  {
    id: 2,
    codigo: "M00006",
    title: "Manual de Preguntas Frecuentes CONCAR SQL",
    description: "Preguntas Frecuentes",
    href: "/tutoriales/instalacion-concar",
  },
];

export const dataManualUsuario = [
  {
    id: 1,
    title: "Finalidad de este documento",
    description:
      "El presente Manual tiene por finalidad servir como guía en la administración y operación del Sistema de Contabilidad Contable-Financiero CONCAR SQL.",
    href: "/manuales/finalidad-documento",
  },
  {
    id: 2,
    title: "Finalidad y descripción general del sistema",
    description:
      "El Sistema Contable y Financiero CONCAR® SQL ha sido desarrollado para ser utilizado por el área de Contabilidad, en la elaboración de los Libros contables, Balances y Estados Financieros, posibilitando de esta manera mejorar la oportunidad y confiabilidad de los resultados para la toma de decisiones por la Alta Dirección.",
    href: "/manuales/finalidad-descripcion-sistema",
  },
  {
    id: 3,
    title: "Características del sistema",
    description:
      "Se detallan principales características del sistema CONCAR SQL.",
    href: "/manuales/caracteristicas-sistema",
  },
  {
    id: 4,
    title: "Archivos",
    description:
      "El módulo de Archivos permite efectuar el mantenimiento y consulta de las bases de datos del sistema.",
    href: "/manuales/",
  },
  {
    id: 5,
    title: "Plan de Cuenta",
    description:
      "En este archivo o base de datos se registrarán, modificarán o visualizarán las cuentas contables que se definan para llevar la contabilidad de la empresa.",
    href: "/manuales/",
  },
  {
    id: 6,
    title: "Códigos de Anexos",
    description:
      "En esta base de datos se registran los anexos, que son datos complementarios a las cuentas, los mismos que sirven para identificar diferentes tipos de entidades o datos que son necesarios para hacer un análisis más detallado de las cuentas.",
    href: "/manuales/",
  },
  {
    id: 7,
    title: "Tabla General",
    description:
      "En esta opción están registradas todas las tablas creadas para el funcionamiento del sistema. El usuario no podrá crear nuevas tablas; salvo lo indicado en este manual o por un consultor.",
    href: "/manuales/",
  },
  {
    id: 8,
    title: "Tipo de Cambio",
    description:
      "La tabla de Tipo de Cambio es aquella donde se definen las monedas con su equivalencia en moneda nacional de cada día. Esta tabla será usada por el sistema para convertir cada asiento contable a soles y dólares. Para registrar el tipo de cambio dólar, se debe usar el código US.",
    href: "/manuales/",
  },
  {
    id: 9,
    title: "Tabla de Transferencia",
    description:
      "Esta tabla es usada cuando el Plan de cuentas está estructurado para trabajar los costos y gastos con las cuentas del elemento 6 y su uso es opcional.",
    href: "/manuales/",
  },
  {
    id: 10,
    title: "Numeración de Comprobantes",
    description:
      "En esta tabla se muestra el último número de comprobante generado en forma automática por cada subdiario y mes.",
    href: "/manuales/",
  },
  {
    id: 11,
    title: "CIERRE - Tabla de Cierre",
    description:
      "En esta tabla ya viene configurada con los asientos automáticos de cierre del ejercicio, son 17 asientos de cierre.",
    href: "/manuales/",
  },
  {
    id: 12,
    title: "Mantenimiento Cuentas Bancos",
    description:
      "En este archivo o base de datos se deberán registrar todas las cuentas bancarias que tenga la empresa.",
    href: "/manuales/",
  },
  {
    id: 13,
    title: "Mantenimiento Movimientos Bancos",
    description:
      "En esta opción se configuran los movimientos para el registro de Comprobante Bancos.",
    href: "/manuales/",
  },
  {
    id: 14,
    title: "Mantenimiento Parámetros Honorarios",
    description:
      "Este módulo del sistema permite registrar los parámetros que usará el programa de registro de comprobantes honorarios.",
    href: "/manuales/",
  },
  {
    id: 15,
    title: "Mantenimiento Tipo pago por programa",
    description:
      "Se debe configurar los tipos de medio de pago que pueden ser utilizados para cada una de las opciones de generación de comprobantes contables.",
    href: "/manuales/",
  },
  {
    id: 16,
    title: "Mantenimiento Documentos de Referencia",
    description:
      "En esta opción se configuran los documentos que requieren que se active el campo de documento de referencia en el registro de compras y ventas.",
    href: "/manuales/",
  },
  {
    id: 17,
    title: "Mantenimiento de Cuentas Regularización Diferencia de Cambio",
    description:
      "En esta opción se configuran las cuentas que van a participar en el proceso de Regularización Diferencia de Cambio además del subdiario y las cuentas de pérdida y ganancia por diferencia de cambio.",
    href: "/manuales/",
  },
  {
    id: 18,
    title: "Mantenimiento de Cuentas Ajuste Diferencia de Cambio FASB52",
    description:
      "En esta opción se configuran las cuentas que van a participar en el proceso de Ajuste Diferencia Cambio FASB 52 además del subdiario, las cuentas de pérdida y ganancia por diferencia de cambio y el código de moneda para ajuste.",
    href: "/manuales/",
  },
  {
    id: 19,
    title: "Mantenimiento de Tipos de Medio de Pago",
    description:
      "En esta opción se podrá ingresar todos los medios de pago utilizados para registrar las transacciones financieras.",
    href: "/manuales/",
  },
  {
    id: 20,
    title: "Comprobantes",
    description:
      "El módulo de comprobantes permite ingresar las operaciones del día a día en el sistema para lo cual deberá tener configuradas las bases de datos indicadas en el menú Archivos.",
    href: "/manuales/",
  },
  {
    id: 21,
    title: "Control de Registro Mensual",
    description:
      "Esta opción del sistema sirve para habilitar o bloquear los meses en los que se ingresan los comprobantes.",
    href: "/manuales/",
  },
  {
    id: 22,
    title: "Comprobante Estándar con Conversión",
    description:
      "Mediante esta opción se puede registrar en el sistema cualquier asiento de diario como son: Bancos, cajas, planillas, costos, canjes, cancelaciones de clientes y otros; exceptuando los registros por compras, ventas, honorarios y cheques.",
    href: "/manuales/",
  },
  {
    id: 23,
    title: "Comprobante Estándar sin Conversión",
    description:
      "Mediante esta opción se pueden registrar los asientos de apertura, cierre, diferencia de cambio y otros asientos en los cuales se requiere un tipo de cambio por cada cuenta o ingresar manualmente los importes en moneda nacional y/o dólares o una combinación de ambas opciones.",
    href: "/manuales/",
  },
  {
    id: 24,
    title: "Comprobante Compras",
    description:
      "Permite registrar los documentos de las operaciones de compras (sólo las provisiones).",
    href: "/manuales/",
  },
  {
    id: 25,
    title: "Comprobante Ventas",
    description:
      "Esta opción permite registrar los comprobantes de ventas en forma simplificada y automatizada.",
    href: "/manuales/",
  },
  {
    id: 26,
    title: "Comprobante Cheques",
    description:
      "Esta opción permite registrar los cheques girados en forma simplificada y automatizada.",
    href: "/manuales/",
  },
  {
    id: 27,
    title: "Comprobante de Honorarios",
    description:
      "Esta opción permite registrar los comprobantes de honorarios en forma simplificada y automatizada.",
    href: "/manuales/",
  },
  {
    id: 28,
    title: "Comprobante Bancos",
    description:
      "Esta opción permite registrar los comprobantes de bancos en forma simplificada y automatizada.",
    href: "/manuales/",
  },
  {
    id: 29,
    title: "Consulta situación comprobantes",
    description:
      "Esta opción sirve para consultar los comprobantes ingresados y verificar que todos se encuentren finalizados.",
    href: "/manuales/",
  },
  {
    id: 30,
    title: "¿Cómo eliminar Comprobantes en el CONCAR SQL? - Incluye Video",
    description:
      "Esta opción sirve para eliminar comprobantes en situación Pendiente (P) o Finalizados (F), individual o masivamente.",
    href: "/manuales/",
  },
  {
    id: 31,
    title: "Log eliminación comprobantes",
    description:
      "Muestra los comprobantes contables eliminados, indicando usuario y fecha de eliminación.",
    href: "/manuales/",
  },
  {
    id: 32,
    title: "Reportes Comprobantes",
    description:
      "Esta opción mostrará reportes de los comprobantes ingresados, así se encuentren en situación P (Pendiente) o F (Finalizado).",
    href: "/manuales/",
  },
  {
    id: 33,
    title: "Asientos Automáticos",
    description:
      "En este menú, se generan automáticamente los asientos de: Apertura, diferencia de cambio, FASB52, cierre y ajuste por inflación; estando este último en desuso por la coyuntura actual.",
    href: "/manuales/",
  },
  {
    id: 34,
    title: "Exporta Comprobantes a Excel",
    description:
      "Utilizando esta opción se puede exportar por subdiarios, los comprobantes registrados en CONCAR® SQL al Excel; asimismo, se puede incluir cuentas automáticas.",
    href: "/manuales/",
  },
  {
    id: 35,
    title: "Reportes",
    description:
      "Este módulo permite emitir los reportes de resultado en base a los datos ya ingresados en los asientos contables.",
    href: "/manuales/",
  },
  {
    id: 36,
    title: "Balances",
    description:
      "Incluye reportes generales y analíticos de Balance General y Balance de Comprobación.",
    href: "/manuales/",
  },
  {
    id: 37,
    title: "Ganancias y Pérdidas",
    description:
      "El sistema tiene diferentes presentaciones del Estado de Ganancias y Pérdidas.",
    href: "/manuales/",
  },
  {
    id: 38,
    title: "Costos",
    description:
      "Contiene reportes de costos y gastos por centro de costo y/o cuenta contable.",
    href: "/manuales/",
  },
  {
    id: 39,
    title: "Diarios",
    description:
      "Incluye reportes de Libros Diarios anteriores y no oficiales.",
    href: "/manuales/",
  },
  {
    id: 40,
    title: "Mayores",
    description:
      "Incluye reportes de Libros Mayores anteriores y no oficiales.",
    href: "/manuales/",
  },
  {
    id: 41,
    title: "Libro de Caja y Bancos",
    description:
      "Incluye reportes de Libros Caja y Bancos anteriores y no oficiales.",
    href: "/manuales/",
  },
  {
    id: 42,
    title: "Estado de Flujo de Efectivo",
    description:
      "El Estado de Flujo de Efectivo muestra el efecto de los cambios de efectivo y equivalentes de efectivo, en un tiempo determinado.",
    href: "/manuales/",
  },
  {
    id: 43,
    title: "Áreas",
    description:
      "Imprime reporte que muestra los totales de ingresos y egresos por cada área, así como también los totales generales.",
    href: "/manuales/",
  },
  {
    id: 44,
    title: "Bancos",
    description:
      "Este reporte muestra los ingresos, egresos y saldos de las cuentas corrientes.",
    href: "/manuales/",
  },
  {
    id: 45,
    title: "Reportes de Ingresos y Gastos",
    description:
      "Incluye los reportes de ingresos y gastos adicionales a los de Ganancias y Pérdidas (Resultados)",
    href: "/manuales/",
  },
  {
    id: 46,
    title: "Estado Cambio Patrimonio Neto",
    description:
      "El Estado de Cambios en el Patrimonio Neto muestra los cambios en el patrimonio de la empresa en un período de tiempo.",
    href: "/manuales/",
  },
  {
    id: 47,
    title: "Libro de Inventarios y Balances PCGR",
    description:
      "Incluye el formato de Libro de Inventarios y Balances antiguo.",
    href: "/manuales/",
  },
  {
    id: 48,
    title: "Ratios",
    description:
      "Son factores de análisis financieros que permiten establecer la posición financiera de la empresa por medio de fórmulas. Estas fórmulas se aplican a una serie de datos por los cuales se puede calcular la posición real de la empresa.",
    href: "/manuales/",
  },
  {
    id: 49,
    title: "Libros y Registros Oficiales - Parte 1",
    description:
      "Incluye los formatos oficiales SUNAT de Libro Contables desde el Libro de Caja y Bancos hasta el Libro Mayor.",
    href: "/manuales/",
  },
  {
    id: 50,
    title: "Libros y Registros Oficiales-Parte 2",
    description:
      "Incluye los formatos oficiales SUNAT de Libros Contables desde el Registro de Compras hasta Registro de Ventas (Genera Archivo Mensual Ventas)",
    href: "/manuales/",
  },
  {
    id: 51,
    title: "Libros y Registros Oficiales-Parte 3",
    description:
      "Incluye los formatos oficiales SUNAT de Libros Contables desde Mantenimiento Archivo Ventas hasta Otros Reportes de Ventas.",
    href: "/manuales/",
  },
  {
    id: 52,
    title: "Análisis cuenta",
    description:
      "Este módulo permite consultar y emitir reportes de saldos por cuenta y anexos, documentos pendientes en forma selectiva a cualquier fecha de saldo y estados de cuentas en línea y sin efectuar ningún proceso previo.",
    href: "/manuales/",
  },
  {
    id: 53,
    title: "Consultas",
    description:
      "Permite realizar consultas de saldos de balance, balance de comprobación y análisis de cuenta.",
    href: "/manuales/",
  },
  {
    id: 54,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 55,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 56,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 57,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 58,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 59,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 60,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 61,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 62,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 63,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 64,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 65,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 66,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 67,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 68,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 69,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 70,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 71,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 72,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 73,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 74,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 75,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 76,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 77,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 78,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 79,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 80,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 81,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 82,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 83,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 84,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 85,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 86,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 87,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 88,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 89,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 90,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 91,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 92,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 93,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 94,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 95,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 96,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 97,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 98,
    title: "",
    description: "",
    href: "/manuales/",
  },
  {
    id: 99,
    title: "",
    description: "",
    href: "/manuales/",
  },
];
