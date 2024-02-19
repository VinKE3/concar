import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Verifica Comprobantes",
      href: "https://miconcar.com/uploads/documentos/129_CONCAR_CB_Verifica_comprobantes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción nos permite visualizar aquellos comprobantes que
        probablemente estén generando un descuadre del resultado en los estados
        financieros. El paso previo para obtener este reporte es realizar el
        Proceso de Consolidación al mes correspondiente.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
