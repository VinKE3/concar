import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ejecución Presupuestal por Función o Naturaleza",
      href: "https://miconcar.com/uploads/documentos/101_CONCAR_CB_Ejecucion_presupuestal_por_funcion_o_naturaleza.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Muestra un comparativo entre lo presupuestado y el Estado de Ganancias y
        Pérdidas por Función o Naturaleza.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
