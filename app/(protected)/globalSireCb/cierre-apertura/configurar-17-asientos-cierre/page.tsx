import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como configurar la tabla de cierre",
      href: "https://miconcar.com/uploads/documentos/1068_Cod.1068_D01055_como_configurar_la_tabla_de_cierre.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion se indica como trabajar la Tabla de Cierre y cuales son
        sus procesos:
      </p>

      <h1>TEMA: Como Configurar la Tabla de Cierre</h1>
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
              src="https://www.youtube.com/embed/5LnU37S7qeE?autoplay=0&amp;mute=0&amp;controls=0&"
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
