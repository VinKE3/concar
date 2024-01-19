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
    title: "Documentos Pendientes",
    description:
      "Permite emitir reportes de los saldos de las cuentas 12X hasta la 47X. Las cuentas que pueden ser analizadas en este proceso son aquellas que han sido definidas con nivel de saldo en el Mantenimiento de Plan de Cuentas.",
    href: "/manuales/",
  },
  {
    id: 55,
    title: "Reporte Estados de Cuenta",
    description:
      "Esta opción contiene reportes en los que se podrán apreciar los cargos, abonos y saldos de todas las cuentas contables a nivel analítico, sin importar el nivel de saldo que tenga la cuenta.",
    href: "/manuales/",
  },
  {
    id: 56,
    title: "Reportes Anuales",
    description:
      "Incluye reportes con análisis de cuentas anuales con detalle mensual.",
    href: "/manuales/",
  },
  {
    id: 57,
    title: "Análisis Gráfico Estados Financieros",
    description:
      "El sistema permite realizar análisis gráficos del Balance General y del Estado de Ganancias y Pérdidas por Función o Naturaleza.",
    href: "/manuales/",
  },
  {
    id: 58,
    title: "Presupuesto",
    description:
      "Este módulo sirve para formular un presupuesto y compararlo con el movimiento contable.",
    href: "/manuales/",
  },
  {
    id: 59,
    title: "Mantenimiento Presupuesto",
    description:
      "Proceso que registra en forma masiva los importes de la configuración de presupuesto para el ejercicio actual.",
    href: "/manuales/",
  },
  {
    id: 60,
    title: "Reporte de Presupuesto",
    description:
      "Imprime el reporte de lo presupuestado en el Mantenimiento de Presupuesto, pudiéndose generar en moneda nacional o extranjera.",
    href: "/manuales/",
  },
  {
    id: 61,
    title: "Reporte Ejecución Presupuesto",
    description:
      "Este reporte se utiliza para comparar lo presupuestado por centro de costo/cuenta contra lo ejecutado y luego ver la variación en términos absolutos o porcentuales.",
    href: "/manuales/",
  },
  {
    id: 62,
    title: "Ejecución Presupuestal por Función o Naturaleza",
    description:
      "Muestra un comparativo entre lo presupuestado y el Estado de Ganancias y Pérdidas por Función o Naturaleza. Funciona para la configuración de presupuesto sólo por cuenta contable.",
    href: "/manuales/",
  },
  {
    id: 63,
    title: "Presupuesto Ordinario",
    description:
      "Emite un reporte de flujo de caja ejecutado, teniendo la posibilidad compararse 2 ejercicios.",
    href: "/manuales/",
  },
  {
    id: 64,
    title: "Ejecución Presupuestal x Centro Costo",
    description:
      "Este reporte nos permite comparar lo presupuestado por centro de costo contra lo ejecutado y luego ver la variación en términos absolutos o porcentuales.",
    href: "/manuales/",
  },
  {
    id: 65,
    title: "Conciliación bancaria",
    description:
      "El módulo de Conciliación Bancaria permite realizar la conciliación de movimientos comparando lo registrado en los comprobantes contables de bancos y lo que reporta el banco vía el estado de cuenta bancario, a una fecha determinada.",
    href: "/manuales/",
  },
  {
    id: 66,
    title: "Registro Estados Cuenta",
    description:
      "Esta opción permite registrar y visualizar los movimientos bancarios reportados por el banco.",
    href: "/manuales/",
  },
  {
    id: 67,
    title: "Proceso de Conciliación",
    description:
      "Esta opción permite realizar el proceso de conciliación bancaria.",
    href: "/manuales/",
  },
  {
    id: 68,
    title: "Reportes Conciliación",
    description:
      "Esta opción permite imprimir los resultados del proceso de conciliación bancaria.",
    href: "/manuales/",
  },
  {
    id: 69,
    title: "Movimiento Contable por Banco",
    description: "Muestra los movimientos contables registrados por banco.",
    href: "/manuales/",
  },
  {
    id: 70,
    title: "Consulta de Estados por Banco",
    description:
      "Muestra los movimientos bancarios registrados en los estados cuenta.",
    href: "/manuales/",
  },
  {
    id: 71,
    title: "Transfiere Pendientes Año Anterior",
    description:
      "Esta opción permite transferir documentos no conciliados de años anteriores. Se requiere haber realizado la conciliación bancaria definitiva de todos los meses del ejercicio anterior.",
    href: "/manuales/",
  },
  {
    id: 72,
    title: "SUNAT",
    description:
      "Este módulo contiene las opciones para generar los archivos planos (archivos de texto) que se declaran en los programas de SUNAT.",
    href: "/manuales/",
  },
  {
    id: 73,
    title: "PDT Honorarios",
    description:
      "Para presentar información a la SUNAT de los Honorarios se debe registrar primero todos los recibos de Honorarios “Comprobante de Registro de Honorarios”.",
    href: "/manuales/",
  },
  {
    id: 74,
    title: "PDT IGV Renta Mensual-Retención de Clientes",
    description:
      "El sistema genera el archivo PDT del mes seleccionado con las retenciones (6%, realizadas por los clientes que son Agentes de Retención).",
    href: "/manuales/",
  },
  {
    id: 75,
    title: "DAOT-Compras",
    description:
      "El sistema muestra todas las operaciones afectas e inafectas al IGV con proveedores, es decir todos los documentos de compras emitidos en el ejercicio y registrados en el Registro de Compras.",
    href: "/manuales/",
  },
  {
    id: 76,
    title: "DAOT- Ventas",
    description:
      "El sistema muestra todas las operaciones afectas e inafectas al IGV con clientes, es decir todos documentos de venta emitidos en el ejercicio y registrados en el Registro de Ventas.",
    href: "/manuales/",
  },
  {
    id: 77,
    title: "PDT 3550 – Resumen Ventas",
    description:
      "Muestra los totales vendidos a todos los clientes en el año y genera el archivo de venta anual para la carga al PDT 3550",
    href: "/manuales/",
  },
  {
    id: 78,
    title: "PDT 621 – Percepciones",
    description:
      "En esta opción se genera el archivo plano de Percepciones para exportarlo al PDT 621.",
    href: "/manuales/",
  },
  {
    id: 79,
    title: "PDT 658 – Casilla Estados Financieros",
    description:
      "Permite generar un archivo con la información detallada, de acuerdo al formato establecido por SUNAT",
    href: "/manuales/",
  },
  {
    id: 80,
    title:
      "¿Cómo se genera el PDT Renta Anual para el Concar SQL? - Incluye Video",
    description:
      "El sistema permite generar un archivo con el Balance de Comprobación, de acuerdo al formato establecido por SUNAT, para que pueda ser importado desde el PDT Renta Anual de cualquier ejercicio.",
    href: "/manuales/",
  },
  {
    id: 81,
    title: "PDB Mensual Exportadores",
    description:
      "Este menú contiene las opciones para generar los archivos a cargar en el PDB SUNAT",
    href: "/manuales/",
  },
  {
    id: 82,
    title: "Administración Sistema",
    description:
      "El módulo de Administración del Sistema permite realizar procesos vinculados a la administración de usuarios y compañías.",
    href: "/manuales/",
  },
  {
    id: 83,
    title: "Mantenimiento de Usuarios",
    description:
      "Esta opción permite la creación, modificación o eliminación de los usuarios del sistema, asignándoles un código, un password (clave secreta) y facultades de acceso",
    href: "/manuales/",
  },
  {
    id: 84,
    title: "Mantenimiento Usuarios-Compañía",
    description:
      "Esta opción permite la asignación de una o más compañías a los usuarios creados en el Mantenimiento de Usuarios",
    href: "/manuales/",
  },
  {
    id: 85,
    title: "Mantenimiento Usuarios-Programa",
    description:
      "Esta opción permite la asignación o restricción de las opciones de menú a los usuarios que fueron creados como Operadores en el Mantenimiento de Usuarios",
    href: "/manuales/",
  },
  {
    id: 86,
    title: "Mantenimiento de Compañías",
    description:
      "Esta opción permite administrar las compañías que se van a trabajar en el sistema dada su característica de ser multiempresa.",
    href: "/manuales/",
  },
  {
    id: 87,
    title: "Mantenimiento de Empresas",
    description:
      "Esta opción permite completar datos adicionales al mantenimiento de compañías necesarios para emitir el certificado de honorarios.",
    href: "/manuales/",
  },
  {
    id: 88,
    title: "Mantenimiento de Ejecutivos",
    description:
      "Esta opción permite registrar en el sistema los distintos ejecutivos de la empresa",
    href: "/manuales/",
  },
  {
    id: 89,
    title: "Utilitarios",
    description:
      "El módulo de Utilitarios permite realizar procesos auxiliares como movimiento de datos, verificar comprobantes que generen descuadres naturaleza/destino.",
    href: "/manuales/",
  },
  {
    id: 90,
    title: "Movimiento Datos",
    description:
      "Esta opción permite adicionar comprobantes contables al sistema originados ya sea por la opción de Transfiere Comprobantes del CONCAR® SQL, por archivos externos generados por una interfaz o desde Excel.",
    href: "/manuales/",
  },
  {
    id: 91,
    title: "Histórico reportes discos",
    description:
      "Esta opción permite consultar e imprimir cualquier reporte que se haya guardado en disco.",
    href: "/manuales/",
  },
  {
    id: 92,
    title: "Verifica Comprobantes",
    description:
      "Permite visualizar a los comprobantes que probablemente estén generando un descuadre en los Estados Financieros.",
    href: "/manuales/",
  },
  {
    id: 93,
    title: "Parámetros Generales",
    description: "Esta opción permite configurar los parámetros del sistema.",
    href: "/manuales/",
  },
  {
    id: 94,
    title: "Acerca de",
    description:
      "Incluye términos de licencia y opciones relacionadas con la llave Real Key.",
    href: "/manuales/",
  },
  {
    id: 95,
    title: "Actualizar Real Key",
    description:
      "Mediante esta opción actualizará la licencia de su Real Key una vez vencido el plazo de contrato.",
    href: "/manuales/",
  },
  {
    id: 96,
    title: "Información Real Key",
    description:
      "El sistema le mostrará las características (Número de serie, número de licencias y los días en los que se vence el convenio de soporte) de la Real Key (Llave electrónica) conectada al equipo.",
    href: "/manuales/",
  },
  {
    id: 97,
    title: "Anexo I: Configurar favoritos",
    description:
      "Permite configurar atajos o accesos directos a las opciones que elija el usuario.",
    href: "/manuales/",
  },
  {
    id: 98,
    title: "Anexos II, III y IV: Carga de asientos desde otros sistemas",
    description:
      "Al momento de ingresar a esta opción el sistema verifica la existencia de las tablas de interface (Comprobantes y anexos). Estas tablas deben ser creadas en la base de datos del CONCAR® SQL.",
    href: "/manuales/",
  },
];
