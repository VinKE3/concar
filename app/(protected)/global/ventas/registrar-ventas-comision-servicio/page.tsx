import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Ventas con Comisión por Servicio",
      href: "https://miconcar.com/uploads/documentos/737_CONCAR_SQL_Registro_de_ventas_con_comision_por_servicio1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        Cómo registrar un comprobante de venta que incluye comisión por
        servicio. Para este caso 10%.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
