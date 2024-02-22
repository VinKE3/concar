import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como se contabiliza las notas de crédito por honorarios en el sistema",
      href: "https://miconcar.com/uploads/documentos/1148_Cod.01148_D001135_como_se_contabiliza_las_notas_de_cr%C3%A9dito_por_honorarios_en_el_sistema_concar.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun las ultimas modificaciones normadas por Sunat, permite generar
        Notas de Credito por Honorarios, el Manual adjunto detalla como es el
        tratamiento en el sistema Concar.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
