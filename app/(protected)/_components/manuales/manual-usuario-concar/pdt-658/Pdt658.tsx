import Image from "next/image";
import React from "react";

const Pdt658 = () => {
  return (
    <div className="space-y-3">
      <p>
        Permite generar un archivo con la información detallada, de acuerdo al
        formato establecido por SUNAT, para que pueda ser importado desde el PDT
        Renta Anual en las casillas del Balance General que lo requieren.
      </p>
      <p>
        Las casillas de Estados Financieros que pueden detallarse en el activo
        son: 361, 362, 364, 365, 367, 380, 381, 382 y 383 y en el pasivo son las
        casillas 404, 405, 407 y 408
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c394_1_682_declaracion_pago_anual_impuesto_a_la_renta_2012_3ra_categoria_e_itf_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Configuración:</p>
      <p>
        Crear la Tabla General C1 en el Mantenimiento de Tabla General y agregar
        todos los conceptos que detalla SUNAT para su declaración.
      </p>
      <p>Por ejemplo:</p>
      <p>C1 CASILLAS DE ESTADOS FINANCIEROS</p>
      <p>----------------------------------</p>
      <p>361 CUENTAS POR COBRAR COMERCIALES-TERCEROS </p>
      <p>404 CUENTAS POR PAGAR COMERCIALES – TERCEROS</p>
      <p>
        Ingresar a la opción e ir asignando los conceptos a cada una de las
        cuentas contables:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c394_1_asignacion_de_casillas_de_estado_financiero_pdt_658_ctcasf01_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <h1 className="font-bold text-sky-700">
        10.7.2 Reporte Saldos por Casilla
      </h1>
      <p>
        El reporte de casilla de Estados Financieros muestra los saldos
        pendientes de pago al 31-12 del presente ejercicio; para la emisión del
        reporte deberá ingresar una casilla inicial y una casilla final.
      </p>
      <p>Nota:</p>
      <p>
        - Los saldos serán agrupados por código y número de documento, siempre
        que el monto sea superior a tres (3) UIT´s.
      </p>
      <p>
        - Si el saldo fuera menor a tres (3) UITs será asignado al código de
        documento 99 (Varios).
      </p>
      <p>
        El monto de la UIT será tomado de la Tabla 93, clave PUUIT el cual será
        multiplicado por tres.
      </p>
      <p>
        - Sólo se considerará los saldos de las cuentas que estén asignados a
        una casilla de EEFF.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c394_1_reporte_de_casillas_de_estado_financiero_ctcasf03_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        CASILLA INICIAL/FINAL: Presionar Shift+F1 y seleccionar los conceptos
        especificados para el PDT
      </p>
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c388_1_boton_excel_3.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={40}
          height={40}
        />
        <h1>GENERA HOJA DE CÁLCULO (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c14_1_boton_pdt_4.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={40}
          height={40}
        />
        <h1>GENERA ARCHIVO PARA PDT RENTA ANUAL (Alt-P)</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c388_1_boton_excel_3.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c394_1_reporte_de_casillas_de_estado_financiero_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c14_1_boton_pdt_4.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c394_1_generacion_de_archivo_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_10_boton_guardar_4.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
    </div>
  );
};

export default Pdt658;
