import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como se configura los códigos de establecimientos sunat para la facturación electrónica - archivos xml",
      href: "https://miconcar.com/uploads/documentos/1145_Cod.1145_D1132_como_se_configura_los__codigos_de_establecimientos1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual Adjunto se detalla como configurar los Codigos de
        Establecimiento Sunat
      </p>
      <p>
        ¿Cómo se configura los Códigos de Establecimientos Sunat para la
        Facturación Electrónica – archivos XML?
      </p>

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
              src="https://www.youtube.com/embed/kE1lQ1AM21Y?autoplay=0&amp;mute=0&amp;controls=0&"
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
