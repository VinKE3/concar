import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Costos",
      href: "https://miconcar.com/uploads/documentos/73_CONCAR_CB_Costos.pdf",
    },
    {
      id: 2,
      title: "Webinar Análisis de Información y Generación de Reportes",
      href: "https://miconcar.com/uploads/documentos/73_Webinar_An%C3%A1lisis_de_Informaci%C3%B3n_y_Generaci%C3%B3n_de_Reportes1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Contiene reportes de costos y gastos por centro de costo y/o cuenta
        contable. Así como los libros oficiales de Costos.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
