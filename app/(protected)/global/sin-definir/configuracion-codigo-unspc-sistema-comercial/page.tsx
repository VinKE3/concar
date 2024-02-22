import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar la configuración del código UNSPSC en el sistema comercial",
      href: "https://miconcar.com/uploads/documentos/1120_Cod.01120_D01107_como_realizar_la_configuraci%C3%B3n_del_c%C3%B3digo_unspsc_en_el_sistema_comercial.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto podra visualizar paso a paso como asignar el código
        de productos y servicios estándar de las Naciones Unidas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
