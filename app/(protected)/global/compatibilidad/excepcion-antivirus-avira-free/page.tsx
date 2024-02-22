import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como realizar la excepción a los sistemas de real systems en el antivirus avira free",
      href: "https://miconcar.com/uploads/documentos/1089_Cod.1089_D01076_c%C3%B3mo_realizar_la_excepci%C3%B3n_a_los_sistemas_de_real_systems_en_el_antivirus_avira_free.pdf",
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
