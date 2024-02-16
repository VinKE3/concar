import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como crear código Anexos",
      href: "https://miconcar.com/uploads/documentos/1061_Cod.1061_D01048_como_crear_codigo_anexos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion de adjunta el respectivo Manual y Video en el cual
        indicamos los pasos a realizar:
      </p>
      <Image
        alt="Como crear código Anexos"
        src="/crearCodigoAnexos.png"
        width={300}
        height={300}
      />
      <h1>TEMA: Cómo crear códigos de Anexos</h1>
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
              src="https://www.youtube.com/embed/N-TSKBz57FY?autoplay=0&amp;mute=0&amp;controls=0&"
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
