import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como proceder si se presenta el mensaje error.vbs en el concar",
      href: "https://miconcar.com/uploads/documentos/1115_Cod.1115_D01102_como_proceder_ante_el_mensaje_errorvbs.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion en el Manual adjunto detallamos el campo a desactivar
        para evitar el mensaje de inconsitencia.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
