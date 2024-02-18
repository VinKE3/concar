import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje de memory error al generar registro de compras",
      href: "https://miconcar.com/uploads/documentos/1135_Cod.1135_D01122_como_superar_el_mensaje_memory_error_al_generar_registro_de_compras1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta el Manual con los pasos a realizar</p>
      <p>
        TEMA: ¿Cómo superar el mensaje de Memory Error al generar registro de
        compras?
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
              src="https://www.youtube.com/embed/inppJfYPvc4?autoplay=0&amp;mute=0&amp;controls=0&"
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
