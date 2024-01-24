import Image from "next/image";
import React from "react";

const ParametrosGenerales = () => {
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite configurar los parámetros del sistema; los mismos
        que se guardan, en su mayoría, en el Mantenimiento de Tablas Generales -
        Tabla 93. Seleccionada la opción el sistema mostrará la siguiente
        pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_utilitarios_parametros_generales_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>En ella se pueden activar o desactivar las opciones siguientes:</p>
      <ul className="px-5 list-disc">
        <li>
          Activar/desactivar Adaptación de Presupuesto por Rubro de Centro de
          Costo: Al activar esta opción, el Reporte Ejecución presupuesto
          mostrará la información por rubro (Formato de Costos Tabla General 12)
          en lugar de hacerlo por Centro de Costo.
        </li>
        <p>
          También cambiará para solicitar si se desea quiebre por rubro en lugar
          de por Centro de Costos:
        </p>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_utilitarios_parametros_generales_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={500}
          height={500}
        />
        <li>
          Activar/desactivar Búsqueda por Contenido de Documento en Comprobante
          Estándar
        </li>
        <li>
          Activar/desactivar Detalle Glosa de Comprobante de Cheque con Nombre
          de Acreedor en Cheque.
        </li>
        <li>
          Activar/desactivar Agencia en Reporte de Movimiento de Ingresos y
          Gastos: Al activar esta opción, el sistema permitirá la selección de
          Agencia en el reporte de Movimiento de Ingresos y Gastos.
        </li>
        <li>
          Activar/desactivar invisibilidad a programas no seleccionados a
          usuarios operadores: Al activar esta opción, el sistema no mostrará
          las opciones de menú no seleccionadas en la opción Mantenimiento
          Usuarios-Programa.
        </li>
        <li>
          Activar/desactivar control de detracciones: Al activar esta opción, el
          sistema permitirá ingresar detracciones en los comprobantes de
          compras.
        </li>
        <li>
          Activar/desactivar control de retenciones: Al activar esta opción, el
          sistema controlará retenciones en compras. Este check sólo se activará
          si la compañía fuese AGENTE DE RETENCIÓN y tenga configurados los
          parámetros para retenciones en la Tabla General 57.
        </li>
        <li>
          Activar/desactivar Distribución por Centros de Costos en Asiento de
          Transferencia: Si se activa esta opción, el sistema activará el
          C.Costo a Distribuir en la Tabla de Transferencia al crear una
          distribución porcentual:
        </li>
      </ul>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_utilitarios_parametros_generales_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        El efecto que tendrá será que, después de finalizar el asiento contable;
        el sistema cambiará el centro de costo 900 utilizado en el comprobante
        por el centro de costo 200 tomando el 50% del total ingresado para este
        ejemplo.
      </p>
      <ul className="px-5 list-disc">
        <li>
          Activar/desactivar Actualización de Saldos de Balance para Subdiario
          98 y 99
        </li>
        <li>
          Activar/desactivar Recalcular Factor IGV Ventas en Emisión Registro
          Compras: Al activar esta opción, las opciones de Factor IGV y
          Recalcular Factor en la ventana de emisión del Registro de Compras
          Formato 8.1 aparecen:
        </li>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_utilitarios_parametros_generales_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={500}
          height={500}
        />
        <li>
          Definir Moneda para Presupuesto por Centro de Costos, viene
          configurada en US Dólares.
        </li>
        <li>Activar/desactivar Actualización de Saldos de Balance.</li>
        <li>ctivar/desactivar Actualización de Saldos Centros Costos.</li>
        <li>
          Activar/desactivar Flag de Centros de costos en Mantenimiento de Plan
          de Cuentas para todas las cuentas contables: Al activar esta opción,
          el sistema permitirá utilizar centros de costos en todas las cuentas
          del Plan de Cuentas.
        </li>
        <li>
          Activar/desactivar permitir Digitación Alfanumérica para Numeración de
          Comprobantes: Al activar esta opción, el sistema permitirá utilizar
          letras en la numeración de comprobantes.
        </li>
        <li>
          Definir conciliar con 4 o 6 caracteres de la derecha los números de
          cheques.
        </li>
        <li>
          Activar/desactivar Generación Archivo Mensual Ventas Inafectos y
          Exonerados: Si se activa esta opción, el sistema separa los ingresos
          por ventas inafectas de las exoneradas en el Registro de Ventas.
        </li>
        <li>
          Activar/desactivar nueva rutina para Generar Diferencia y Ajuste por
          Diferencia de cambio FASB52.
        </li>
        <li>
          Activa cambio de longitud máxima para Impresión de Importe en Letras
          para formato de Cheques: Permite cambiar la longitud que se indica,
          digitando el valor en la casilla de la derecha.
        </li>
        <li>
          Definir Tipo de Pago para cuentas 10 para los Asientos de Ajuste por
          Diferencia de Cambio Automáticos.
        </li>
        <li>
          Definir Tipo de Pago para cuentas 10 para el Asiento de Apertura
          Automático.
        </li>
        <li>
          Definir Tipo de Pago para cuentas 10 para los Asientos de Ajuste
          FASB52.
        </li>
        <li>
          Definir la Base de Datos del SOFTCOM existente en el Servidor SQL.
        </li>
      </ul>
      <div className="flex items-center justify-start">
        <h1>Una vez realizados los cambios presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/modulo_utilitarios_parametros_generales_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
    </div>
  );
};

export default ParametrosGenerales;
