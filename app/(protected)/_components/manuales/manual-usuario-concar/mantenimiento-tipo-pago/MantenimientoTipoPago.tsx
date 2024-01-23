import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoTipoPago = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Tipo pago por programa",
      href: "https://miconcar.com/uploads/documentos/302_4.11._CONCAR_SQL_MantenimientoTipo_Pago_por_Programa_302-D00299.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se debe configurar los tipos de medio de pago que pueden ser utilizados
        para cada una de las opciones de generación de comprobantes contables.
        Este dato es requisito cuando se contabilizan operaciones de cobranzas o
        pagos.
      </p>
      <h1 className="font-bold">4.11 Mantenimiento Tipo pago por programa</h1>
      <p>
        Se debe configurar los tipos de medio de pago que pueden ser utilizados
        para cada una de las opciones de generación de comprobantes contables.
        Este dato es requisito cuando se contabilizan operaciones de cobranzas o
        pagos.
      </p>
      <p>
        Para que surtan cambios, bastará con la activación de los casilleros de
        la derecha en las opciones de Tipo de Medio de pago para las opciones de
        comprobantes; los cambios lo observarán cuando registre documentos
        contables y sólo tenga habilitado las opciones con check.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_11_mantenimiento_tipo_pago_por_programa_1_1.jpg"
        alt="Mantenimiento tipo pago"
        width={600}
        height={600}
      />
      <div className="flex items-center justify-start">
        <h1>Una vez configuradas las opciones, presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>A continuación un ejemplo de uso con la opción Comprobante Cheques:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_11_mantenimiento_tipo_pago_por_programa_3_.jpg"
        alt="Mantenimiento tipo pago"
        width={600}
        height={600}
      />
      <Table items={data} />
    </div>
  );
};

export default MantenimientoTipoPago;
