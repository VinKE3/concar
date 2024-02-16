import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_superar_el_mensaje_error230_recordlength_is_too_large_W",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/06/1184_Cod.1184_D01171_como_superar_el_mensaje_error230_recordlength_is_too_large_W.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Si al momento de ingresar al sistema concar, colocamos nuestra compañia,
        periodo y aparece el siguiente mensaje:
      </p>
      <h1>
        TEMA: 1. ¿Cómo superar el mensaje: Error 230 Record Length is too Large:
        \WXXXXXXX?
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
              src="https://www.youtube.com/embed/_Y5XS27wmDc?autoplay=0&amp;mute=0&amp;controls=0&"
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
