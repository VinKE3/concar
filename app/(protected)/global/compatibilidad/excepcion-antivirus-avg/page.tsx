import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como realizar la excepción a los sistemas de real systems en el antivirus avg",
      href: "https://miconcar.com/uploads/documentos/1087_Cod.1087_D01074_como_realizar_la_excepcion_a_los_sistemas_de_real_systems_en_el_antivirus_avg.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunto se detallara los pasos a realizar</p>

      <Table items={data} />
    </div>
  );
};

export default page;
