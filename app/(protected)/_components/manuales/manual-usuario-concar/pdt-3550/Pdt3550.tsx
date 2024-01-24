import Image from "next/image";
import React from "react";

const Pdt3550 = () => {
  return (
    <div className="space-y-3">
      <p>
        Muestra los totales vendidos a todos los clientes en el año y genera el
        archivo de venta anual para la carga al PDT 3550 bajo el nombre:
      </p>
      <p>3550###########.txt</p>
      <p>Donde:</p>
      <p>3550: Nombre de la declaración y</p>
      <p>
        ###########: RUC de la compañía registrado en el Mantenimiento de
        Compañías
      </p>
      <div className="flex items-center justify-start">
        <h1>Seleccionada esta opción, pulsar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c391_1_boton_guardar_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <p>para generar el proceso.</p>
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c392_1_resumen_anual_de_ventas_ctpd3550_.jpg"
        alt="Movimiento Contable Banco"
        width={500}
        height={500}
      />
      <p>
        Inmediatamente, el sistema mostrará la relación de los meses en los que
        no se hubieran registrado comprobantes
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c392_1_contabilidad_concar_.jpg"
        alt="Movimiento Contable Banco"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c15_1_boton_si_3.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c392_1_contabilidad_concar_1_.jpg"
        alt="Movimiento Contable Banco"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c15_1_boton_si_3.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c392_1_resumen_anual_de_ventas_ctpd3550_1_.jpg"
        alt="Movimiento Contable Banco"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá</p>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c14_1_boton_pdt_3.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1> Generar el archivo para cargar PDT3550.</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_6_boton_consultar_4.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>
          Mostrar el detalle de las operaciones que han sido tomadas en el
          proceso.
        </h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_pantalla_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>Mostrar el reporte de Resumen Anual de Ventas.</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c388_1_boton_excel_2.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>Exportar el Resumen Anual de Ventas a Excel.</h1>
      </div>
    </div>
  );
};

export default Pdt3550;
