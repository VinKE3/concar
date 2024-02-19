import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_superar_el_mensaje_de_error13_al_calcular_cts_en_el_placarcb",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/07/1186_Cod.1186_D01173_como_superar_el_mensaje_de_error13_al_calcular_cts_en_el_placarcb1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta manual detallando los pasos para superar el mensaje de
        inconsistencia
      </p>

      <h1>
        TEMA: ¿Cómo superar el mensaje de Error 13 al realizar el cálculo de CTS
        en el Placar CB?
      </h1>
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
              src="https://www.youtube.com/embed/qWAHZ7Pz6fA?autoplay=0&amp;mute=0&amp;controls=0&"
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
