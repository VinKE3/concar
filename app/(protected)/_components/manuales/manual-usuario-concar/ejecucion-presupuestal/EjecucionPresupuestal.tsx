import Image from "next/image";
import React from "react";

const EjecucionPresupuestal = () => {
  return (
    <div className="space-y-3">
      <p>
        Muestra un comparativo entre lo presupuestado y el Estado de Ganancias y
        Pérdidas por Función o Naturaleza. Funciona para la configuración de
        presupuesto sólo por cuenta contable.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_8_4_ejecucion_presupuestal_por_funcion_o_naturaleza_1_1.jpg"
        alt="Ejecucion Presupuestal"
        width={500}
        height={500}
      />
      <p>MONEDA: Seleccionar la unidad monetaria</p>
      <p>MES: Mes (2 dígitos) a consultar en el reporte</p>
      <p>
        DÍA T. CAMBIO: Indicar el día para que el sistema tome el tipo de cambio
        de ese día.
      </p>
      <p>
        DETALLAR CUENTAS: Activar este casillero con check si se desea detallar
        las cuentas contables en el reporte
      </p>
      <p>
        GANANCIAS Y PÉRDIDAS POR: Seleccionar entre las 2 opciones para emitir
        el reporte de Ejecución Presupuestal
      </p>
      <p>
        FORMATO: Desplegar el menú y elegir el formato de Estándar o el Alterno.
      </p>
      <p>OPCIONES DE IMPRESIÓN: </p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_impresora_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>IMPRIMIR (Alt-I)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_pantalla_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1> VER REPORTE EN PANTALLA (Alt-P)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c7_15_libros_inventarios_y_balances_4_4.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>GUARDAR COMO TEXTO (Alt-G)</h1>
      </div>
    </div>
  );
};

export default EjecucionPresupuestal;
