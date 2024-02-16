import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje de archivo no encontrado pba en el concar cb",
      href: "https://miconcar.com/uploads/documentos/1138_Cod.1138_D01125_como_superar_el_mensaje_de_archivo_no_encontrado_pba_en_el_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto indicamos como superar el mensaje{" "}
        {"Archivo no Encontrado PBA"} en el sistema
      </p>
      <p>
        TEMA: ¿Cómo superar el mensaje de Archivo No Encontrado – PBA en el
        Concar CB?
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
              src="https://www.youtube.com/embed/FLolv8kzP2s?autoplay=0&amp;mute=0&amp;controls=0&"
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
