import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como superar el mensaje de archivo índice no encontrado o archivo no encontrado",
      href: "https://miconcar.com/uploads/documentos/905_Cod.0905_D00892_como_superar_el_mensaje_de_archivo_indice_no_encontrado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunto detallamos los pasos a seguir:</p>
      <p>
        TEMA: ¿Cómo superar el mensaje de Archivo Índice No Encontrado o Archivo
        No Encontrado?
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
              src="https://www.youtube.com/embed/ueNuy9YINto?autoplay=0&amp;mute=0&amp;controls=0&"
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
