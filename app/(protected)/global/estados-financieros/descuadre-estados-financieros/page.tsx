import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Descuadre de Estados Financieros después del Costo de Ventas",
      href: "https://miconcar.com/uploads/documentos/734_CONCAR_CB_Descuadre_de_estados_financieros_despues_del_costo_de_ventas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Solución cuando los estados de ganancias y pérdidas (o resultados) y el
        balance no cuadran, además en el reporte de verifica comprobantes no hay
        registros por revisar.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
