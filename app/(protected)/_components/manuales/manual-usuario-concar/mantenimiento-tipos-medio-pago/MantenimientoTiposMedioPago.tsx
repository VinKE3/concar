import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoTiposMedioPago = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento de Tipos de Medio de Pago",
      href: "https://miconcar.com/uploads/documentos/306_4.15._CONCAR_SQL_Mantenimiento_Tipos_de_Medio_de_Pago_306-D00303.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta opción se podrá ingresar todos los medios de pago utilizados
        para registrar las transacciones financieras.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_15_mantenimiento_de_tipos_medio_de_pago_1_.jpg"
        alt="Mantenimiento Tipos Medio Pago"
        width={600}
        height={600}
      />
      <p>
        CÓDIGO: El sistema asume el correlativo, pero se tiene la opción de
        modificarlo
      </p>
      <p>DESCRIPCIÓN: Ingresar el concepto del tipo de medio de pago</p>
      <p>
        CONSIDERAR COMO “OTROS MEDIOS DE PAGO”: Activa este casillero con check
        si se crea un medio de pago no contemplado por la normatividad de SUNAT
        y se desea que sea considerado en los reportes oficiales con el código
        999 Otros Medios de Pago.
      </p>
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CREAR (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_3_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>MODIFICAR (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_8_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>ELIMINAR (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GUARDAR (Alt-G)</h1>
      </div>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoTiposMedioPago;
