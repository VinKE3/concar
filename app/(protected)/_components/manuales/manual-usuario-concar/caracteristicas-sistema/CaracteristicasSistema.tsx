import React from "react";

const CaracteristicasSistema = () => {
  return (
    <div className="space-y-3">
      <ul className="px-5 list-disc">
        <li className="font-bold">
          Adaptado a las últimas normativas de la SUNAT
        </li>
        <p>
          El software CONCAR® SQL está adaptado a la normativa vigente y
          adicionalmente se adecúa a cualquier cambio posterior que se presente.
          Posee una interfaz para generar los Libros Electrónicos de Registro de
          Compras y Ventas, Diario y Mayor para ser cargados en el Programa de
          Libros Electrónicos (PLE) de la SUNAT.
        </p>
        <li className="font-bold">Flexibilidad</li>
        <p>
          El sistema otorga un alto grado de autonomía a los usuarios para
          adecuar el sistema a sus necesidades, ya que los parámetros son
          manejados por medio del Plan de cuenta y tablas complementarias, las
          cuentas contables soportan hasta 12 dígitos.
        </p>
        <p>
          El sistema puede aplicarse a empresas industriales, comerciales,
          servicios, financieras, navieras, constructoras y en general todos los
          giros de negocios. Con un solo Plan de Cuentas pueden trabajar
          múltiples compañías, uniformizando de esta manera la información de
          grupos empresariales.
        </p>
        <li className="font-bold">Reportes por centros de costos</li>
        <p>
          El uso de los centros de costos tiene múltiples aplicaciones, se
          pueden generar información por departamentos, unidades de negocio,
          proyectos, procesos productivos, etc. y son habilitadas para las
          cuentas de ingresos y egresos. El código de centro de costo puede
          tener 6 dígitos o letras.
        </p>
        <li className="font-bold">
          Presupuesto por centro de costo o proyecto
        </li>
        <p>Existen dos opciones para registrar el presupuesto:</p>
        <p>
          a. Por cada centro de costo, mes y cuenta, para que el sistema
          controle su ejecución en base a los movimientos contables
          automáticamente.
        </p>
        <p>
          b. Por proyecto, mes y partida presupuestal, para ello el sistema
          cuenta con un mantenimiento de proyectos y anexos que se configurar
          libremente por el usuario y son ejecutadas de acuerdos a los
          comprobantes registrados.
        </p>
        <li className="font-bold">Variedad de reportes complementarios</li>
        <p>
          EAdicionalmente a los reportes de los EEFF básicos, existen opciones
          de reportes configurables por el usuario tales como: Centro de Costos,
          Análisis de cuentas, Reporte de Ingresos y Gastos, Movimientos de
          áreas, entre otros; que le permitirán obtener la información acorde a
          sus necesidades.
        </p>
        <li className="font-bold">
          Estados Financieros y análisis de cuentas en soles y dólares
        </li>
        <p>
          CONCAR® SQL permite obtener los reportes y Estados Financieros: Estado
          de Situación Financiera (Balance General), Estado de Resultados
          (Estado de Ganancias y Pérdidas), Estado de Cambios en el Patrimonio y
          Estado de Flujos de Efectivo; así como reportes y análisis adicionales
          tales como estados de cuenta de clientes, proveedores socios,
          empleados y otros anexos.
        </p>
        <li className="font-bold">Conversión automática de asientos dólares</li>
        <p>
          Los comprobantes pueden ser ingresados en dólares, moneda nacional u
          otra moneda, según la moneda original de la operación y el sistema los
          convierten a moneda nacional y dólares de acuerdo a la Tabla de tipo
          de cambio diaria o según el tipo de cambio en particular que se desee.
          Opcionalmente se puede indicar al sistema que no efectúe la conversión
          de un comprobante.
        </p>
        <li className="font-bold">
          Documentos pendientes de clientes, proveedores y otros
        </li>
        <p>
          Existen consultas y reportes de los documentos pendientes de clientes,
          proveedores, socios, empleados y otros anexos que pueden crearse
          libremente de acuerdo a las necesidades. El usuario puede indicar en
          forma libre el nivel de análisis que requiere para consultar las
          cuentas.
        </p>
        <p>
          Los clientes, proveedores u otros pueden ser codificados por el RUC, o
          por un código interno de la empresa, y las opciones de búsqueda están
          en función al código o al nombre de la empresa.
        </p>
        <li className="font-bold">Emisión de cheque-voucher</li>
        <p>
          El software permite generar los comprobantes de cheques e imprimir el
          Cheque-Voucher en un formato pre-impreso del cliente o los vouchers de
          cheque manuales. Emite reportes de los cheques girados, todos con
          opción de seleccionar el rango de fechas.
        </p>
        <li className="font-bold">
          Carga de asientos automáticos desde otros sistemas
        </li>
        <p>
          Permite la carga de los asientos contables automáticos producidos por
          otros sistemas de terceros evitando así la doble digitación desde
          archivos DBF y tablas SQL.
        </p>
        <li className="font-bold">
          Regularización y ajuste automático de diferencias de cambio
        </li>
        <p>
          El sistema regulariza mediante un asiento los documentos en moneda
          nacional o dólares ya cancelados a los que no se les aplicó el ajuste
          por diferencia de cambio al momento de cancelarlos, simplificando el
          trabajo. También genera un asiento automático de las diferencias de
          cambio de acuerdo al FASB 52, ajustando los saldos al tipo de cambio
          cierre del mes y por las cuentas especificadas según el criterio que
          se le indique.
        </p>
        <li className="font-bold">Generación de cuentas automáticas</li>
        <p>
          El sistema regulariza mediante un asiento los documentos en moneda
          nacional o dólares ya cancelados a los que no se les aplicó el ajuste
          por diferencia de cambio al momento de cancelarlos, simplificando el
          trabajo. También genera un asiento automático de las diferencias de
          cambio de acuerdo al FASB 52, ajustando los saldos al tipo de cambio
          cierre del mes y por las cuentas especificadas según el criterio que
          se le indique.
        </p>
        <p>
          a. Indicando el cargo y abono automático por cada cuenta en el Plan de
          Cuentas para destinos fijos. Por ejemplo, el destino de la cuenta 60x
          a las cuentas del elemento 2 con abono a la 61.
        </p>
        <p>
          b. Por la Tabla de Transferencia de la 6 a la 9 con abono a 79 en base
          a los centros de costos, pudiéndose establecer distribuciones
          porcentuales.
        </p>
        <li className="font-bold">Conciliación bancaria automática</li>
        <p>
          El sistema realiza la conciliación de los documentos bancaria en forma
          automática según la moneda de la cuenta corriente. Los documentos que
          no concilian pueden regularizarse manualmente. Mediante el aplicativo
          CONCAR.Net es posible cargar los Estados de Cuenta bancarios
          proporcionados por las Entidades Financieras en archivos de Excel.
        </p>
        <li className="font-bold">Archivos para la SUNAT</li>
        <p>
          El sistema permite generar archivos automáticos para importar a los
          siguientes PDT de SUNAT:
        </p>
        <p>
          a. PDT Honorarios: Genera el archivo para poder transferir al PDT las
          retenciones a los recibos por honorarios pagados en el mes.
        </p>
        <p>
          b. PDT IGV Renta Mensual-Retención de clientes: El sistema genera el
          archivo del mes seleccionado con las retenciones realizadas por los
          clientes que son Agentes de Retención.
        </p>
        <p>
          c. PDT DAOT Compras – Ventas: Genera en forma automática el archivo
          para las Operaciones con terceros de Compras y Ventas, permitiendo
          filtrar las operaciones que excedan el tope especificado por SUNAT.
        </p>
        <p>
          d. PDT 3550-Resumen Ventas Anual: Muestra los totales vendidos a todos
          los clientes
        </p>
        <p>
          e. PDT – Percepciones: El sistema genera el archivo txt de los
          comprobantes de percepción.
        </p>
        <p>
          f. PDT 658-Casilla Estados Financieros: Genera el PDT informativo en
          la que se muestran las cuentas de Activo y Pasivo.
        </p>
        <p>
          g. PDT Renta Anual – Balance de Comprobación: Para aquellas empresas
          obligadas a presentar el Balance de Comprobación Anual según el plan
          de cuentas establecido por la SUNAT.
        </p>
        <p>
          h. PDB Exportadores: Herramienta indispensable para empresas
          exportadoras que soliciten el reintegro tributario, genera los
          archivos de texto de acuerdo a las compras y ventas efectuadas en el
          mes y de los tipos de cambio.
        </p>
        <li className="font-bold">Emisión Estados Financieros en línea</li>
        <p>
          Todos los Estados financieros, Libros oficiales, Estados de Cuenta se
          emiten bajo ningún proceso previo, ya que la versión CONCAR® SQL
          trabaja en línea actualizando el balance desde el ingreso de los
          vouchers finalizados.
        </p>
        <li className="font-bold">Transferencia de reportes a Excel</li>
        <p>
          El sistema permite exportar a Excel los principales reportes del
          sistema.
        </p>
        <li className="font-bold">Configuración del software por el usuario</li>
        <p>
          Al momento de la instalación, el software se encuentra preconfigurado
          de acuerdo a las necesidades de la empresa. Por ejemplo; puede
          modificar los niveles de análisis de información y características de
          cada cuenta contable, estructura de los Estados Financieros, centros
          de costos entre otros.
        </p>
        <li className="font-bold">
          Generación de asientos de cierre y apertura
        </li>
        <p>
          sistema permite generar en forma automática los asientos de cierre y
          apertura del ejercicio, mediante la configuración de una plantilla
          general
        </p>
        <li className="font-bold">Archivo histórico de reportes en disco</li>
        <p>
          Los reportes pueden ser archivados el disco para posteriormente emitir
          una copia o visualizarlo en pantalla permitiendo de esta manera
          disponer de información de meses anteriores para la Gerencia o
          Auditores, sin tener que reprocesar que demandan tiempo
        </p>
      </ul>
    </div>
  );
};

export default CaracteristicasSistema;
