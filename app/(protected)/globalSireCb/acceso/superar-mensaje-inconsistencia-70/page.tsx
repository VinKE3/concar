import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_superar_el_mensaje_de_inconsistencia_error_70",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/08/795_Cod.0795_D00782_como_superar_el_mensaje_de_inconsistencia_error_70.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta el manual y video con los procesos a detalle para que lo
        puedan ejecutar:
      </p>
      <h1>
        TEMA: ¿Cómo superar el mensaje de inconsistencia Error 70 – Permiso
        Denegado?
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
              src="https://www.youtube.com/embed/2t8cjIXgQgc?autoplay=0&amp;mute=0&amp;controls=0&"
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
