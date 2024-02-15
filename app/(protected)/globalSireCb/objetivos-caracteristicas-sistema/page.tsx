import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Objetivos y características del sistema",
      href: "https://miconcar.com/uploads/documentos/426_PLACAR_CB_Objetivos_y_caracteristicas_del_sistema.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">
        El principal objetivo del sistema es realizar el cálculo automático de
        las planillas (sueldos, salarios), emitir los reportes oficiales
        (planilla, boletas), así como también aquellos necesarios para el
        control y trabajo diario.
      </h1>

      <Table items={data} />
    </div>
  );
};

export default page;
