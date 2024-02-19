import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "El sitio web al que vas a acceder es engañoso.",
      href: "https://miconcar.com/uploads/documentos/1023_D01010_CONCAR_CB_El_sitio_web_al_que_vas_a_acceder_es_enga%C3%B1oso1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Mensaje:”El sitio web al que vas a acceder es engañoso”.</p>
      <Image alt="" src="/enganoso.png" width={500} height={500} />
      <Table items={data} />
    </div>
  );
};

export default page;
