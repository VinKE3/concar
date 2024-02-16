import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como se realiza la copia de seguridad o backup",
      href: "https://miconcar.com/uploads/documentos/140_Cod.0140_D00137_como_se_realiza_la_copia_de_seguridad_o_backup2.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion detallamos en el Manual adjunto los procesos para
        realizar una Copia de Seguridad correctamente en el sistema CONCAR.
      </p>
      <h1>TEMA: ¿Cómo se realiza la copia de Seguridad o Backup?</h1>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WORaBM-AD9U?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default page;
