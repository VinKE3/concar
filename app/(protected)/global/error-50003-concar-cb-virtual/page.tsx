import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como proceder si se presenta el mensaje Error-50003 al momento de ingresar a Concar CB - Virtual",
      href: "https://miconcar.com/uploads/documentos/1114_Cod.1114_D01101_como_proceder_ante_el_mensaje_50003_concar_cb_virtual.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Debera verificar lo que se indica en el Manual adjunto por favor:</p>

      <Table items={data} />
    </div>
  );
};

export default page;
