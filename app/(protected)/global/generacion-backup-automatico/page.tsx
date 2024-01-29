import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "cual es el procedimiento para la generación del backup automático en el sistema concarsql",
      href: "https://miconcar.com/uploads/documentos/1149_Cod.01149_D01136_cual_es_el_procedimiento_para_la_generacion_del_backup_automatico_en_el_sistema_concarsql1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto se detalla los pasos a realizar para generar el
        Backup Automatico en el Concar SQL, lo cual es recomendable que su
        Personal de TI lo ejecute.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
