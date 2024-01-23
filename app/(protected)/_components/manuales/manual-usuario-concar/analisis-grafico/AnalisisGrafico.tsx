import Table from "@/components/Table";
import React from "react";

const AnalisisGrafico = () => {
  const data = [
    {
      id: 1,
      title: "Análisis Gráfico Estados Financieros",
      href: "https://miconcar.com/uploads/documentos/343_CONCAR_SQL_Analisis_grafico_estados_financieros.pdf",
    },
  ];
  return (
    <div>
      <p>
        El sistema permite realizar análisis gráficos del Balance General y del
        Estado de Ganancias y Pérdidas por Función o Naturaleza.
      </p>
      <Table items={data} />
    </div>
  );
};

export default AnalisisGrafico;
