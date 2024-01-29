import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ganancias y Pérdidas Del Mes y Acumulado",
      href: "https://miconcar.com/uploads/documentos/733_CONCAR_SQL_Ganancias_y_perdidas_del_mes_y_acumulado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Comparación entre el reporte de Ganancias y Pérdidas mensual y
        acumulado.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
