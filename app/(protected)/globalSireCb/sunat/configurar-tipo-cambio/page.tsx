import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Configurar el Tipo de Cambio",
      href: "https://miconcar.com/uploads/documentos/1067_Cod.1067_D01054_c%C3%B3mo_configurar_el_tipo_de_cambio.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion se indica los procesos previos a verificar esten
        activados para realizar el registro del Tipo de Cambio de forma
        automatica:
      </p>
      <h1>TEMA: ¿Cómo Configurar el Tipo de Cambio?</h1>
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
              src="https://www.youtube.com/embed/34pC_DF6KEA?autoplay=0&amp;mute=0&amp;controls=0&"
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
