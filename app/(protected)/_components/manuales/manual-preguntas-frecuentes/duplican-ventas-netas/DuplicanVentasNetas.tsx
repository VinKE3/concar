import Table from "@/components/Table";
import React from "react";

const DuplicanVentasNetas = () => {
  const data = [
    {
      id: 1,
      title:
        "Se duplican el total Ventas Netas y/o Total Costo de Ventas en Estado de Ganancias y Pérdidas por Función",
      href: "https://miconcar.com/uploads/documentos/158_CONCAR_CB_Se_duplican_el_total_ventas_netas_y_o_total_costo_de_ventas_en_estado_de_ganancias_y_perdidas_por_funcion.pdf",
    },
  ];
  return (
    <div className="space-y-4">
      <h1>Descripción del problema</h1>
      <p>
        Se duplican el total Ventas Netas y/o el Total Costo de Ventas en el
        Estado de Ganancias y Pérdidas por Función.
      </p>
      <Table items={data} />
    </div>
  );
};

export default DuplicanVentasNetas;
