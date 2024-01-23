export const dataManuales = [
  {
    id: 1,
    codigo: "M00007",
    title: "Manual de Usuario CONCAR SQL",
    description:
      "Este es una guía que te ayudará a entender el funcionamiento del sistema de forma ordenada y concisa.",
    href: "/manuales/main-manual-usuario-concar",
  },
  {
    id: 2,
    codigo: "M00006",
    title: "Manual de Preguntas Frecuentes CONCAR SQL",
    description: "Preguntas Frecuentes",
    href: "/manuales/main-manual-preguntas-frecuentes",
  },
];

export const dataManualUsuario = [
  {
    id: 1,
    title: "Finalidad de este documento",
    description:
      "El presente Manual tiene por finalidad servir como guía en la administración y operación del Sistema de Contabilidad Contable-Financiero CONCAR SQL.",
    href: "/manuales/manual-usuario-concar/finalidad-documento",
  },
  {
    id: 2,
    title: "Finalidad y descripción general del sistema",
    description:
      "El Sistema Contable y Financiero CONCAR® SQL ha sido desarrollado para ser utilizado por el área de Contabilidad, en la elaboración de los Libros contables, Balances y Estados Financieros, posibilitando de esta manera mejorar la oportunidad y confiabilidad de los resultados para la toma de decisiones por la Alta Dirección.",
    href: "/manuales/manual-usuario-concar/finalidad-descripcion-sistema",
  },
  {
    id: 3,
    title: "Características del sistema",
    description:
      "Se detallan principales características del sistema CONCAR SQL.",
    href: "/manuales/manual-usuario-concar/caracteristicas-sistema",
  },
  {
    id: 4,
    title: "Archivos",
    description:
      "El módulo de Archivos permite efectuar el mantenimiento y consulta de las bases de datos del sistema.",
    href: "/manuales/manual-usuario-concar/archivos",
  },
  {
    id: 5,
    title: "Plan de Cuenta",
    description:
      "En este archivo o base de datos se registrarán, modificarán o visualizarán las cuentas contables que se definan para llevar la contabilidad de la empresa.",
    href: "/manuales/manual-usuario-concar/plan-cuenta",
  },
  {
    id: 6,
    title: "Códigos de Anexos",
    description:
      "En esta base de datos se registran los anexos, que son datos complementarios a las cuentas, los mismos que sirven para identificar diferentes tipos de entidades o datos que son necesarios para hacer un análisis más detallado de las cuentas.",
    href: "/manuales/manual-usuario-concar/codigos-anexos",
  },
  {
    id: 7,
    title: "Tabla General",
    description:
      "En esta opción están registradas todas las tablas creadas para el funcionamiento del sistema. El usuario no podrá crear nuevas tablas; salvo lo indicado en este manual o por un consultor.",
    href: "/manuales/manual-usuario-concar/tabla-general",
  },
  {
    id: 8,
    title: "Tipo de Cambio",
    description:
      "La tabla de Tipo de Cambio es aquella donde se definen las monedas con su equivalencia en moneda nacional de cada día. Esta tabla será usada por el sistema para convertir cada asiento contable a soles y dólares. Para registrar el tipo de cambio dólar, se debe usar el código US.",
    href: "/manuales/manual-usuario-concar/tipo-cambio",
  },
  {
    id: 9,
    title: "Tabla de Transferencia",
    description:
      "Esta tabla es usada cuando el Plan de cuentas está estructurado para trabajar los costos y gastos con las cuentas del elemento 6 y su uso es opcional.",
    href: "/manuales/manual-usuario-concar/tabla-transferencia",
  },
  {
    id: 10,
    title: "Numeración de Comprobantes",
    description:
      "En esta tabla se muestra el último número de comprobante generado en forma automática por cada subdiario y mes.",
    href: "/manuales/manual-usuario-concar/numeracion-comprobantes",
  },
  {
    id: 11,
    title: "CIERRE - Tabla de Cierre",
    description:
      "En esta tabla ya viene configurada con los asientos automáticos de cierre del ejercicio, son 17 asientos de cierre.",
    href: "/manuales/manual-usuario-concar/tabla-cierre",
  },
  {
    id: 12,
    title: "Mantenimiento Cuentas Bancos",
    description:
      "En este archivo o base de datos se deberán registrar todas las cuentas bancarias que tenga la empresa.",
    href: "/manuales/manual-usuario-concar/mantenimiento-cuentas-bancos",
  },
  {
    id: 13,
    title: "Mantenimiento Movimientos Bancos",
    description:
      "En esta opción se configuran los movimientos para el registro de Comprobante Bancos.",
    href: "/manuales/manual-usuario-concar/mantenimiento-movimientos-bancos",
  },
  {
    id: 14,
    title: "Mantenimiento Parámetros Honorarios",
    description:
      "Este módulo del sistema permite registrar los parámetros que usará el programa de registro de comprobantes honorarios.",
    href: "/manuales/manual-usuario-concar/mantenimiento-parametros-honorarios",
  },
  {
    id: 15,
    title: "Mantenimiento Tipo pago por programa",
    description:
      "Se debe configurar los tipos de medio de pago que pueden ser utilizados para cada una de las opciones de generación de comprobantes contables.",
    href: "/manuales/manual-usuario-concar/mantenimiento-tipo-pago",
  },
  {
    id: 16,
    title: "Mantenimiento Documentos de Referencia",
    description:
      "En esta opción se configuran los documentos que requieren que se active el campo de documento de referencia en el registro de compras y ventas.",
    href: "/manuales/manual-usuario-concar/mantenimiento-documentos-referencia",
  },
  {
    id: 17,
    title: "Mantenimiento de Cuentas Regularización Diferencia de Cambio",
    description:
      "En esta opción se configuran las cuentas que van a participar en el proceso de Regularización Diferencia de Cambio además del subdiario y las cuentas de pérdida y ganancia por diferencia de cambio.",
    href: "/manuales/manual-usuario-concar/mantenimiento-cuentas-regularizacion",
  },
  {
    id: 18,
    title: "Mantenimiento de Cuentas Ajuste Diferencia de Cambio FASB52",
    description:
      "En esta opción se configuran las cuentas que van a participar en el proceso de Ajuste Diferencia Cambio FASB 52 además del subdiario, las cuentas de pérdida y ganancia por diferencia de cambio y el código de moneda para ajuste.",
    href: "/manuales/manual-usuario-concar/mantenimiento-cuentas-ajuste",
  },
  {
    id: 19,
    title: "Mantenimiento de Tipos de Medio de Pago",
    description:
      "En esta opción se podrá ingresar todos los medios de pago utilizados para registrar las transacciones financieras.",
    href: "/manuales/manual-usuario-concar/mantenimiento-tipos-medio-pago",
  },
  {
    id: 20,
    title: "Comprobantes",
    description:
      "El módulo de comprobantes permite ingresar las operaciones del día a día en el sistema para lo cual deberá tener configuradas las bases de datos indicadas en el menú Archivos.",
    href: "/manuales/manual-usuario-concar/comprobantes",
  },
  {
    id: 21,
    title: "Control de Registro Mensual",
    description:
      "Esta opción del sistema sirve para habilitar o bloquear los meses en los que se ingresan los comprobantes.",
    href: "/manuales/manual-usuario-concar/control-registro-mensual",
  },
  {
    id: 22,
    title: "Comprobante Estándar con Conversión",
    description:
      "Mediante esta opción se puede registrar en el sistema cualquier asiento de diario como son: Bancos, cajas, planillas, costos, canjes, cancelaciones de clientes y otros; exceptuando los registros por compras, ventas, honorarios y cheques.",
    href: "/manuales/manual-usuario-concar/comprobante-estandar",
  },
  {
    id: 23,
    title: "Comprobante Estándar sin Conversión",
    description:
      "Mediante esta opción se pueden registrar los asientos de apertura, cierre, diferencia de cambio y otros asientos en los cuales se requiere un tipo de cambio por cada cuenta o ingresar manualmente los importes en moneda nacional y/o dólares o una combinación de ambas opciones.",
    href: "/manuales/manual-usuario-concar/comprobante-estandar-sin-conversion",
  },
  {
    id: 24,
    title: "Comprobante Compras",
    description:
      "Permite registrar los documentos de las operaciones de compras (sólo las provisiones).",
    href: "/manuales/manual-usuario-concar/comprobante-compras",
  },
  {
    id: 25,
    title: "Comprobante Ventas",
    description:
      "Esta opción permite registrar los comprobantes de ventas en forma simplificada y automatizada.",
    href: "/manuales/manual-usuario-concar/comprobante-ventas",
  },
  {
    id: 26,
    title: "Comprobante Cheques",
    description:
      "Esta opción permite registrar los cheques girados en forma simplificada y automatizada.",
    href: "/manuales/manual-usuario-concar/comprobante-cheques",
  },
  {
    id: 27,
    title: "Comprobante de Honorarios",
    description:
      "Esta opción permite registrar los comprobantes de honorarios en forma simplificada y automatizada.",
    href: "/manuales/manual-usuario-concar/comprobante-honorarios",
  },
  {
    id: 28,
    title: "Comprobante Bancos",
    description:
      "Esta opción permite registrar los comprobantes de bancos en forma simplificada y automatizada.",
    href: "/manuales/manual-usuario-concar/comprobante-bancos",
  },
  {
    id: 29,
    title: "Consulta situación comprobantes",
    description:
      "Esta opción sirve para consultar los comprobantes ingresados y verificar que todos se encuentren finalizados.",
    href: "/manuales/manual-usuario-concar/consulta-situacion-comprobantes",
  },
  {
    id: 30,
    title: "¿Cómo eliminar Comprobantes en el CONCAR SQL? - Incluye Video",
    description:
      "Esta opción sirve para eliminar comprobantes en situación Pendiente (P) o Finalizados (F), individual o masivamente.",
    href: "/manuales/manual-usuario-concar/como-eliminar-comprobantes",
  },
  {
    id: 31,
    title: "Log eliminación comprobantes",
    description:
      "Muestra los comprobantes contables eliminados, indicando usuario y fecha de eliminación.",
    href: "/manuales/manual-usuario-concar/eliminacion-comprobantes",
  },
  {
    id: 32,
    title: "Reportes Comprobantes",
    description:
      "Esta opción mostrará reportes de los comprobantes ingresados, así se encuentren en situación P (Pendiente) o F (Finalizado).",
    href: "/manuales/manual-usuario-concar/reporte-comprobantes",
  },
  {
    id: 33,
    title: "Asientos Automáticos",
    description:
      "En este menú, se generan automáticamente los asientos de: Apertura, diferencia de cambio, FASB52, cierre y ajuste por inflación; estando este último en desuso por la coyuntura actual.",
    href: "/manuales/manual-usuario-concar/asiestos-automaticos",
  },
  {
    id: 34,
    title: "Exporta Comprobantes a Excel",
    description:
      "Utilizando esta opción se puede exportar por subdiarios, los comprobantes registrados en CONCAR® SQL al Excel; asimismo, se puede incluir cuentas automáticas.",
    href: "/manuales/manual-usuario-concar/exporta-comprobantes-excel",
  },
  {
    id: 35,
    title: "Reportes",
    description:
      "Este módulo permite emitir los reportes de resultado en base a los datos ya ingresados en los asientos contables.",
    href: "/manuales/manual-usuario-concar/reportes",
  },
  {
    id: 36,
    title: "Balances",
    description:
      "Incluye reportes generales y analíticos de Balance General y Balance de Comprobación.",
    href: "/manuales/manual-usuario-concar/balances",
  },
  {
    id: 37,
    title: "Ganancias y Pérdidas",
    description:
      "El sistema tiene diferentes presentaciones del Estado de Ganancias y Pérdidas.",
    href: "/manuales/manual-usuario-concar/ganancias-perdidas",
  },
  {
    id: 38,
    title: "Costos",
    description:
      "Contiene reportes de costos y gastos por centro de costo y/o cuenta contable.",
    href: "/manuales/manual-usuario-concar/reportes-costos",
  },
  {
    id: 39,
    title: "Diarios",
    description:
      "Incluye reportes de Libros Diarios anteriores y no oficiales.",
    href: "/manuales/manual-usuario-concar/reportes-diarios",
  },
  {
    id: 40,
    title: "Mayores",
    description:
      "Incluye reportes de Libros Mayores anteriores y no oficiales.",
    href: "/manuales/manual-usuario-concar/reportes-mayores",
  },
  {
    id: 41,
    title: "Libro de Caja y Bancos",
    description:
      "Incluye reportes de Libros Caja y Bancos anteriores y no oficiales.",
    href: "/manuales/manual-usuario-concar/reportes-caja-bancos",
  },
  {
    id: 42,
    title: "Estado de Flujo de Efectivo",
    description:
      "El Estado de Flujo de Efectivo muestra el efecto de los cambios de efectivo y equivalentes de efectivo, en un tiempo determinado.",
    href: "/manuales/manual-usuario-concar/estado-flujo-efectivo",
  },
  {
    id: 43,
    title: "Áreas",
    description:
      "Imprime reporte que muestra los totales de ingresos y egresos por cada área, así como también los totales generales.",
    href: "/manuales/manual-usuario-concar/areas",
  },
  {
    id: 44,
    title: "Bancos",
    description:
      "Este reporte muestra los ingresos, egresos y saldos de las cuentas corrientes.",
    href: "/manuales/manual-usuario-concar/bancos",
  },
  {
    id: 45,
    title: "Reportes de Ingresos y Gastos",
    description:
      "Incluye los reportes de ingresos y gastos adicionales a los de Ganancias y Pérdidas (Resultados)",
    href: "/manuales/manual-usuario-concar/reportes-ingresos-gastos",
  },
  {
    id: 46,
    title: "Estado Cambio Patrimonio Neto",
    description:
      "El Estado de Cambios en el Patrimonio Neto muestra los cambios en el patrimonio de la empresa en un período de tiempo.",
    href: "/manuales/manual-usuario-concar/estado-cambio-patrimonio",
  },
  {
    id: 47,
    title: "Libro de Inventarios y Balances PCGR",
    description:
      "Incluye el formato de Libro de Inventarios y Balances antiguo.",
    href: "/manuales/manual-usuario-concar/libro-inventarios-balances",
  },
  {
    id: 48,
    title: "Ratios",
    description:
      "Son factores de análisis financieros que permiten establecer la posición financiera de la empresa por medio de fórmulas. Estas fórmulas se aplican a una serie de datos por los cuales se puede calcular la posición real de la empresa.",
    href: "/manuales/manual-usuario-concar/ratios",
  },
  {
    id: 49,
    title: "Libros y Registros Oficiales - Parte 1",
    description:
      "Incluye los formatos oficiales SUNAT de Libro Contables desde el Libro de Caja y Bancos hasta el Libro Mayor.",
    href: "/manuales/manual-usuario-concar/libros-registros-oficiales",
  },
  {
    id: 50,
    title: "Libros y Registros Oficiales-Parte 2",
    description:
      "Incluye los formatos oficiales SUNAT de Libros Contables desde el Registro de Compras hasta Registro de Ventas (Genera Archivo Mensual Ventas)",
    href: "/manuales/manual-usuario-concar/libros-registros-oficiales2",
  },
  {
    id: 51,
    title: "Libros y Registros Oficiales-Parte 3",
    description:
      "Incluye los formatos oficiales SUNAT de Libros Contables desde Mantenimiento Archivo Ventas hasta Otros Reportes de Ventas.",
    href: "/manuales/manual-usuario-concar/libros-registros-oficiales3",
  },
  {
    id: 52,
    title: "Análisis cuenta",
    description:
      "Este módulo permite consultar y emitir reportes de saldos por cuenta y anexos, documentos pendientes en forma selectiva a cualquier fecha de saldo y estados de cuentas en línea y sin efectuar ningún proceso previo.",
    href: "/manuales/manual-usuario-concar/analisis-cuenta",
  },
  {
    id: 53,
    title: "Consultas",
    description:
      "Permite realizar consultas de saldos de balance, balance de comprobación y análisis de cuenta.",
    href: "/manuales/manual-usuario-concar/consultas",
  },
  {
    id: 54,
    title: "Documentos Pendientes",
    description:
      "Permite emitir reportes de los saldos de las cuentas 12X hasta la 47X. Las cuentas que pueden ser analizadas en este proceso son aquellas que han sido definidas con nivel de saldo en el Mantenimiento de Plan de Cuentas.",
    href: "/manuales/manual-usuario-concar/documentos-pendientes",
  },
  {
    id: 55,
    title: "Reporte Estados de Cuenta",
    description:
      "Esta opción contiene reportes en los que se podrán apreciar los cargos, abonos y saldos de todas las cuentas contables a nivel analítico, sin importar el nivel de saldo que tenga la cuenta.",
    href: "/manuales/manual-usuario-concar/reportes-estados-cuenta",
  },
  {
    id: 56,
    title: "Reportes Anuales",
    description:
      "Incluye reportes con análisis de cuentas anuales con detalle mensual.",
    href: "/manuales/manual-usuario-concar/reportes-anuales",
  },
  {
    id: 57,
    title: "Análisis Gráfico Estados Financieros",
    description:
      "El sistema permite realizar análisis gráficos del Balance General y del Estado de Ganancias y Pérdidas por Función o Naturaleza.",
    href: "/manuales/manual-usuario-concar/analisis-grafico",
  },
  {
    id: 58,
    title: "Presupuesto",
    description:
      "Este módulo sirve para formular un presupuesto y compararlo con el movimiento contable.",
    href: "/manuales/manual-usuario-concar/presupuesto",
  },
  {
    id: 59,
    title: "Mantenimiento Presupuesto",
    description:
      "Proceso que registra en forma masiva los importes de la configuración de presupuesto para el ejercicio actual.",
    href: "/manuales/manual-usuario-concar/mantenimiento-presupuesto",
  },
  {
    id: 60,
    title: "Reporte de Presupuesto",
    description:
      "Imprime el reporte de lo presupuestado en el Mantenimiento de Presupuesto, pudiéndose generar en moneda nacional o extranjera.",
    href: "/manuales/manual-usuario-concar/reporte-presupuesto",
  },
  {
    id: 61,
    title: "Reporte Ejecución Presupuesto",
    description:
      "Este reporte se utiliza para comparar lo presupuestado por centro de costo/cuenta contra lo ejecutado y luego ver la variación en términos absolutos o porcentuales.",
    href: "/manuales/manual-usuario-concar/reporte-ejecucion-presupuesto",
  },
  {
    id: 62,
    title: "Ejecución Presupuestal por Función o Naturaleza",
    description:
      "Muestra un comparativo entre lo presupuestado y el Estado de Ganancias y Pérdidas por Función o Naturaleza. Funciona para la configuración de presupuesto sólo por cuenta contable.",
    href: "/manuales/manual-usuario-concar/ejecucion-presupuestal",
  },
  {
    id: 63,
    title: "Presupuesto Ordinario",
    description:
      "Emite un reporte de flujo de caja ejecutado, teniendo la posibilidad compararse 2 ejercicios.",
    href: "/manuales/manual-usuario-concar/presupuesto-ordinario",
  },
  {
    id: 64,
    title: "Ejecución Presupuestal x Centro Costo",
    description:
      "Este reporte nos permite comparar lo presupuestado por centro de costo contra lo ejecutado y luego ver la variación en términos absolutos o porcentuales.",
    href: "/manuales/manual-usuario-concar/ejecucion-presupuestal-centro-costo",
  },
  {
    id: 65,
    title: "Conciliación bancaria",
    description:
      "El módulo de Conciliación Bancaria permite realizar la conciliación de movimientos comparando lo registrado en los comprobantes contables de bancos y lo que reporta el banco vía el estado de cuenta bancario, a una fecha determinada.",
    href: "/manuales/manual-usuario-concar/conciliacion-bancaria",
  },
  {
    id: 66,
    title: "Registro Estados Cuenta",
    description:
      "Esta opción permite registrar y visualizar los movimientos bancarios reportados por el banco.",
    href: "/manuales/manual-usuario-concar/registrar-estados-cuenta",
  },
  {
    id: 67,
    title: "Proceso de Conciliación",
    description:
      "Esta opción permite realizar el proceso de conciliación bancaria.",
    href: "/manuales/manual-usuario-concar/proceso-conciliacion",
  },
  {
    id: 68,
    title: "Reportes Conciliación",
    description:
      "Esta opción permite imprimir los resultados del proceso de conciliación bancaria.",
    href: "/manuales/manual-usuario-concar/reportes-conciliacion",
  },
  {
    id: 69,
    title: "Movimiento Contable por Banco",
    description: "Muestra los movimientos contables registrados por banco.",
    href: "/manuales/manual-usuario-concar/movimiento-contable-banco",
  },
  {
    id: 70,
    title: "Consulta de Estados por Banco",
    description:
      "Muestra los movimientos bancarios registrados en los estados cuenta.",
    href: "/manuales/manual-usuario-concar/cosulta-estados-banco",
  },
  {
    id: 71,
    title: "Transfiere Pendientes Año Anterior",
    description:
      "Esta opción permite transferir documentos no conciliados de años anteriores. Se requiere haber realizado la conciliación bancaria definitiva de todos los meses del ejercicio anterior.",
    href: "/manuales/manual-usuario-concar/transfiere-pendientes",
  },
  {
    id: 72,
    title: "SUNAT",
    description:
      "Este módulo contiene las opciones para generar los archivos planos (archivos de texto) que se declaran en los programas de SUNAT.",
    href: "/manuales/manual-usuario-concar/sunat",
  },
  {
    id: 73,
    title: "PDT Honorarios",
    description:
      "Para presentar información a la SUNAT de los Honorarios se debe registrar primero todos los recibos de Honorarios “Comprobante de Registro de Honorarios”.",
    href: "/manuales/manual-usuario-concar/pdt-honorarios",
  },
  {
    id: 74,
    title: "PDT IGV Renta Mensual-Retención de Clientes",
    description:
      "El sistema genera el archivo PDT del mes seleccionado con las retenciones (6%, realizadas por los clientes que son Agentes de Retención).",
    href: "/manuales/manual-usuario-concar/pdt-igv-renta-mensual",
  },
  {
    id: 75,
    title: "DAOT-Compras",
    description:
      "El sistema muestra todas las operaciones afectas e inafectas al IGV con proveedores, es decir todos los documentos de compras emitidos en el ejercicio y registrados en el Registro de Compras.",
    href: "/manuales/manual-usuario-concar/daot-compras",
  },
  {
    id: 76,
    title: "DAOT- Ventas",
    description:
      "El sistema muestra todas las operaciones afectas e inafectas al IGV con clientes, es decir todos documentos de venta emitidos en el ejercicio y registrados en el Registro de Ventas.",
    href: "/manuales/manual-usuario-concar/daot-ventas",
  },
  {
    id: 77,
    title: "PDT 3550 – Resumen Ventas",
    description:
      "Muestra los totales vendidos a todos los clientes en el año y genera el archivo de venta anual para la carga al PDT 3550",
    href: "/manuales/manual-usuario-concar/pdt-3550",
  },
  {
    id: 78,
    title: "PDT 621 – Percepciones",
    description:
      "En esta opción se genera el archivo plano de Percepciones para exportarlo al PDT 621.",
    href: "/manuales/manual-usuario-concar/pdt-621",
  },
  {
    id: 79,
    title: "PDT 658 – Casilla Estados Financieros",
    description:
      "Permite generar un archivo con la información detallada, de acuerdo al formato establecido por SUNAT",
    href: "/manuales/manual-usuario-concar/pdt-658",
  },
  {
    id: 80,
    title:
      "¿Cómo se genera el PDT Renta Anual para el Concar SQL? - Incluye Video",
    description:
      "El sistema permite generar un archivo con el Balance de Comprobación, de acuerdo al formato establecido por SUNAT, para que pueda ser importado desde el PDT Renta Anual de cualquier ejercicio.",
    href: "/manuales/manual-usuario-concar/pdt-renta-anual",
  },
  {
    id: 81,
    title: "PDB Mensual Exportadores",
    description:
      "Este menú contiene las opciones para generar los archivos a cargar en el PDB SUNAT",
    href: "/manuales/manual-usuario-concar/pdb-mensual-exportadores",
  },
  {
    id: 82,
    title: "Administración Sistema",
    description:
      "El módulo de Administración del Sistema permite realizar procesos vinculados a la administración de usuarios y compañías.",
    href: "/manuales/manual-usuario-concar/administracion-sistema",
  },
  {
    id: 83,
    title: "Mantenimiento de Usuarios",
    description:
      "Esta opción permite la creación, modificación o eliminación de los usuarios del sistema, asignándoles un código, un password (clave secreta) y facultades de acceso",
    href: "/manuales/manual-usuario-concar/mantenimiento-usuarios",
  },
  {
    id: 84,
    title: "Mantenimiento Usuarios-Compañía",
    description:
      "Esta opción permite la asignación de una o más compañías a los usuarios creados en el Mantenimiento de Usuarios",
    href: "/manuales/manual-usuario-concar/mantenimiento-usuarios-compania",
  },
  {
    id: 85,
    title: "Mantenimiento Usuarios-Programa",
    description:
      "Esta opción permite la asignación o restricción de las opciones de menú a los usuarios que fueron creados como Operadores en el Mantenimiento de Usuarios",
    href: "/manuales/manual-usuario-concar/mantenimiento-usuarios-programa",
  },
  {
    id: 86,
    title: "Mantenimiento de Compañías",
    description:
      "Esta opción permite administrar las compañías que se van a trabajar en el sistema dada su característica de ser multiempresa.",
    href: "/manuales/manual-usuario-concar/mantenimiento-companias",
  },
  {
    id: 87,
    title: "Mantenimiento de Empresas",
    description:
      "Esta opción permite completar datos adicionales al mantenimiento de compañías necesarios para emitir el certificado de honorarios.",
    href: "/manuales/manual-usuario-concar/mantenimiento-empresas",
  },
  {
    id: 88,
    title: "Mantenimiento de Ejecutivos",
    description:
      "Esta opción permite registrar en el sistema los distintos ejecutivos de la empresa",
    href: "/manuales/manual-usuario-concar/mantenimiento-ejecutivos",
  },
  {
    id: 89,
    title: "Utilitarios",
    description:
      "El módulo de Utilitarios permite realizar procesos auxiliares como movimiento de datos, verificar comprobantes que generen descuadres naturaleza/destino.",
    href: "/manuales/manual-usuario-concar/utilitarios",
  },
  {
    id: 90,
    title: "Movimiento Datos",
    description:
      "Esta opción permite adicionar comprobantes contables al sistema originados ya sea por la opción de Transfiere Comprobantes del CONCAR® SQL, por archivos externos generados por una interfaz o desde Excel.",
    href: "/manuales/manual-usuario-concar/movimiento-datos",
  },
  {
    id: 91,
    title: "Histórico reportes discos",
    description:
      "Esta opción permite consultar e imprimir cualquier reporte que se haya guardado en disco.",
    href: "/manuales/manual-usuario-concar/historico-reportes",
  },
  {
    id: 92,
    title: "Verifica Comprobantes",
    description:
      "Permite visualizar a los comprobantes que probablemente estén generando un descuadre en los Estados Financieros.",
    href: "/manuales/manual-usuario-concar/verifica-comprobantes",
  },
  {
    id: 93,
    title: "Parámetros Generales",
    description: "Esta opción permite configurar los parámetros del sistema.",
    href: "/manuales/manual-usuario-concar/parametros-generales",
  },
  {
    id: 94,
    title: "Acerca de",
    description:
      "Incluye términos de licencia y opciones relacionadas con la llave Real Key.",
    href: "/manuales/manual-usuario-concar/acerca-de",
  },
  {
    id: 95,
    title: "Actualizar Real Key",
    description:
      "Mediante esta opción actualizará la licencia de su Real Key una vez vencido el plazo de contrato.",
    href: "/manuales/manual-usuario-concar/acutalizar-real-key",
  },
  {
    id: 96,
    title: "Información Real Key",
    description:
      "El sistema le mostrará las características (Número de serie, número de licencias y los días en los que se vence el convenio de soporte) de la Real Key (Llave electrónica) conectada al equipo.",
    href: "/manuales/manual-usuario-concar/informacion-real-key",
  },
  {
    id: 97,
    title: "Anexo I: Configurar favoritos",
    description:
      "Permite configurar atajos o accesos directos a las opciones que elija el usuario.",
    href: "/manuales/manual-usuario-concar/anexo-configurar-favoritos",
  },
  {
    id: 98,
    title: "Anexos II, III y IV: Carga de asientos desde otros sistemas",
    description:
      "Al momento de ingresar a esta opción el sistema verifica la existencia de las tablas de interface (Comprobantes y anexos). Estas tablas deben ser creadas en la base de datos del CONCAR® SQL.",
    href: "/manuales/manual-usuario-concar/anexo-carga-asientos",
  },
];

export const dataPreguntasFrecuentes = [
  {
    id: 1,
    title: "Presentación",
    description:
      "El presente manual ha sido desarrollado para asistir a los usuarios del sistema Contable y Financiero CONCAR® en SQL en las situaciones problemáticas que con más frecuencia hemos visto que se presentan y requieren una ayuda especial para ser superadas.",
    href: "/manuales/manual-preguntas-frecuentes/presentacion",
  },
  {
    id: 2,
    title: "Preguntas Frecuentes CONCAR SQL",
    description:
      "A continuación se detallan las preguntas frecuentes con sus soluciones.",
    href: "/manuales/manual-preguntas-frecuentes/preguntas-frecuentes",
  },
  {
    id: 3,
    title: "Descarga Versión desde miCONCAR®",
    description: "Forma de descargar Versión desde miCONCAR®.",
    href: "/manuales/manual-preguntas-frecuentes/descarga-version",
  },
  {
    id: 4,
    title:
      "Cómo separar Gastos No Gravados (inafectos o exonerados) en el Registro de Compras",
    description:
      "Procedimiento para que los Gastos No Gravados (inafectos o exonerados) incluidos en documentos que tienen parte Gravada salgan en la columna de Adquisiciones No Gravadas en el Registro de Compras del sistema CONCAR®.",
    href: "/manuales/manual-preguntas-frecuentes/separar-gastos",
  },
  {
    id: 5,
    title: "Como superar mensaje: “CC010.fecha fuera de rango”",
    description:
      "Procedimiento para superar mensaje al registrar comprobantes: “CC010.FECHA FUERA DE RANGO” en el sistema CONCAR®.",
    href: "/manuales/manual-preguntas-frecuentes/cc010-fecha-fuera-rango",
  },
  {
    id: 6,
    title: "CIERRE - Proceso de Cierre",
    description:
      "Procedimiento para poder realizar el proceso de Cierre Contable en el sistema CONCAR®.",
    href: "/manuales/manual-preguntas-frecuentes/proceso-cierre",
  },
  {
    id: 7,
    title:
      "Cómo generar los libros electrónicos de Compras,Ventas, Diario y Mayor",
    description:
      "Procedimiento para poder realizar el proceso de generación de los libros electrónicos de Compras, Ventas, Diario, Diario de Formato Simplificado y Mayor para SUNAT en el sistema CONCAR®.",
    href: "/manuales/manual-preguntas-frecuentes/generar-libros-electronicos",
  },
  {
    id: 8,
    title: "Error Apertura de tabla al ingresar al CONCAR",
    description: "Error Apertura de tabla impide ingresar al CONCAR.",
    href: "/manuales/manual-preguntas-frecuentes/tabla-ingresar-concar",
  },
  {
    id: 9,
    title:
      "No se encontró el elemento que corresponde al elemento u ordinal solicitado",
    description:
      "Error que indica que no se encontró el elemento que corresponde al elemento u ordinal solicitado.",
    href: "/manuales/manual-preguntas-frecuentes/elemento-ordinal-solicitado",
  },
  {
    id: 10,
    title: "Como obtener el RSFINA",
    description:
      "Se necesita saber la forma de obtener el utilitario RSFINA11 para consolidar los meses contables.",
    href: "/manuales/manual-preguntas-frecuentes/como-obtener-rsfina",
  },
  {
    id: 11,
    title:
      "Fecha de Vencimiento en Recibos de Servicios Públicos en el Registro de Compras Electrónico",
    description:
      "Al intentar generar el archivo electrónico de Registro de Compras sale error por no tener configurada y/o ingresada la fecha de vencimiento en los recibos de servicios públicos código de documento SUNAT 14.",
    href: "/manuales/manual-preguntas-frecuentes/fecha-vencimiento-recibos",
  },
  {
    id: 12,
    title: "Ingreso de Ventas Anuladas",
    description:
      "Forma de ingresar al sistema comprobantes de ventas anuladas.",
    href: "/manuales/manual-preguntas-frecuentes/ingreso-ventas-anuladas",
  },
  {
    id: 13,
    title: "Error No Coinciden los Tipos en Libro Electrónico de Ventas",
    description: "Error No Coinciden los Tipos en Libro Electrónico de Ventas.",
    href: "/manuales/manual-preguntas-frecuentes/error-no-coinciden-tipos",
  },
  {
    id: 14,
    title: "Ventas a No Domiciliados en Libro Electrónico de Ventas",
    description:
      "Configuración para que salgan en forma correcta las ventas a no domiciliados en el archivo para el PLE de Ventas.",
    href: "/manuales/manual-preguntas-frecuentes/ventas-no-domiciliados",
  },
  {
    id: 15,
    title:
      "Registro y visualización de Ventas a Inafectas y Exoneradas del IGV en el Registro de Ventas",
    description:
      "Configuración para que salgan en forma separada ventas inafectas y exoneradas del IGV en el Registro de Ventas.",
    href: "/manuales/manual-preguntas-frecuentes/registrar-ventas-inafectas",
  },
  {
    id: 16,
    title: "¿Bloqueo o cierre de periodos mensuales?",
    description:
      "Se desea cerrar (bloquear) periodos mensuales para que no se puedan registrar, modificar ni eliminar comprobantes.",
    href: "/manuales/manual-preguntas-frecuentes/cierre-periodos-mensuales",
  },
  {
    id: 17,
    title:
      "DETRACCION ¿Cómo habilitar los datos de “Detracción” en comprobantes de compras? - Concar SQL",
    description:
      "A continuación detallamos, como habilitar los campos de detracción en los comprobantes de compras.",
    href: "/manuales/manual-preguntas-frecuentes/detraccion-habilitar-datos",
  },
  {
    id: 18,
    title: "INTERFAZ - Carga de Asientos desde otros sistemas",
    description: "Como cargar asientos desde otros sistemas.",
    href: "/manuales/manual-preguntas-frecuentes/carga-asientos-otros-sistemas",
  },
  {
    id: 19,
    title:
      "Falta Doc. Referencia para Documento Tipo 07 y/o 08 en Libro Electrónico de Compras",
    description:
      "Falta Doc. Referencia para Documento Tipo 07 y/o 08 en Libro Electrónico de Compras.",
    href: "/manuales/manual-preguntas-frecuentes/doc-referencia-libro-compras",
  },
  {
    id: 20,
    title: "Mostrar los Recibos por Honorarios en el Registro de Compras",
    description:
      "Forma de mostrar los recibos por honorarios en el Registro de Compras.",
    href: "/manuales/manual-preguntas-frecuentes/recibos-honorarios-compras",
  },
  {
    id: 21,
    title: "Generación del Asiento de Apertura Automático",
    description: "Cómo generar el Asiento de Apertura en forma automática.",
    href: "/manuales/manual-preguntas-frecuentes/generacion-asiento-apertura",
  },
  {
    id: 22,
    title: "CONCAR no responde (se cuelga)",
    description:
      "Al darle doble clic al acceso del CONCAR no carga el sistema.",
    href: "/manuales/manual-preguntas-frecuentes/concar-no-responde",
  },
  {
    id: 23,
    title: "No realiza impresión en red",
    description: "No se logra imprimir en una impresora conectada a la red.",
    href: "/manuales/manual-preguntas-frecuentes/no-realiza-impresion",
  },
  {
    id: 24,
    title: "¿Cómo crear un nuevo ejercicio en el CONCAR SQL ? - Incluye Video",
    description: "Explicamos como crear un nuevo ejercicio en el Concar SQL.",
    href: "/manuales/manual-preguntas-frecuentes/ejercicio-concar-sql",
  },
  {
    id: 25,
    title: "Cómo cargar los rubros del Estado de Flujo de Efectivo",
    description: "Cómo cargar los rubros del Estado de Flujo de Efectivo",
    href: "/manuales/manual-preguntas-frecuentes/rubros-flujo-efectivo",
  },
  {
    id: 26,
    title: "Error 3265 al generar archivo mensual de compras",
    description: "Error ‘3265’ en tiempo de ejecución.",
    href: "/manuales/manual-preguntas-frecuentes/generar-archivo-compras",
  },
  {
    id: 27,
    title: "Asiento de Apertura Automático se genera descuadrado",
    description: "Asiento de Apertura automático se genera descuadrado.",
    href: "/manuales/manual-preguntas-frecuentes/apertura-automatico-descuadrado",
  },
  {
    id: 28,
    title: "Mensaje de licencia Real Key (RK)",
    description: "Mensaje de licencia por archivo .VPL no encontrado o dañado.",
    href: "/manuales/manual-preguntas-frecuentes/licencia-real-key",
  },
  {
    id: 29,
    title: "Llave Real Key no detectada",
    description: "Solución al mensaje Llave Real Key (RK) no detectada",
    href: "/manuales/manual-preguntas-frecuentes/real-key-no-detectada",
  },
  {
    id: 30,
    title:
      "Se duplican el total Ventas Netas y/o Total Costo de Ventas en Estado de Ganancias y Pérdidas por Función",
    description:
      "Se duplican el total Ventas Netas y/o el Total Costo de Ventas en el Estado de Ganancias y Pérdidas por Función.",
    href: "/manuales/manual-preguntas-frecuentes/duplican-ventas-netas",
  },
  {
    id: 31,
    title: "Compatibilidad del CONCAR - Incluye Video",
    description:
      "Se detallan los siguientes temas de Compatibilidad para las plataformas CODEBASE y SQL - Requisitos Técnicos Equipos, Versiones de Windows, Office y Servidores - Configuración Antivirus - Configuración Regional - Configuración Sistema Operativo /IPV6, UAC, FRAMEWORK.",
    href: "/manuales/manual-preguntas-frecuentes/concar-compatibilidad",
  },
];
