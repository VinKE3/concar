import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Análisis Gráfico Estados Financieros",
      href: "https://miconcar.com/uploads/documentos/343_CONCAR_SQL_Analisis_grafico_estados_financieros.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">8.6 Análisis Gráfico Estados Financieros</h1>
      <p>
        El sistema permite realizar análisis gráficos del Balance General y del
        Estado de Ganancias y Pérdidas por Función o Naturaleza. Las gráficas
        que se pueden crear por el sistema son: Lineales, barras, circular, 2D y
        3D.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
