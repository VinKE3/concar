import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ventajas de contar con el Real Key",
      href: "https://miconcar.com/uploads/documentos/580_CONCAR_CB_Ventajas_de_contar_con_el_real_key.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este vídeo contiene conceptos básicos del CONCAR tales como subdiario,
        anexo, centro de costo, comprobante entre otros.
      </p>

      <p>Video no Encontrado</p>
    </div>
  );
};

export default page;
