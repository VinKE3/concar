import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Calcular la variación en el proceso de cálculo de Retención de 5ta. Categoría cuando el trabajador percibe una remuneración adicional (externa) de otros empleadores.",
      href: "https://miconcar.com/uploads/documentos/995_Placar_CB_Calculo_de_retencion_de_quinta_con_remuneracion_externa.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Calcular la variación en el proceso de cálculo de Retención de 5ta.
        Categoría cuando el trabajador percibe una remuneración adicional
        (externa) de otros empleadores.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
