import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como configurar si le genera el mensaje flag debe/haber errado",
      href: "https://miconcar.com/uploads/documentos/1103_Cod.1103_D01090_como_configurar_si_le_genera_el_mensaje__flag_debe_haber_errado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este mensaje se podria generar ocasionalmente en su sistema, por un tema
        de Configuracion Regional a continuacion detallamos los pasos a
        realizar.
      </p>
      <p>
        TEMA: ¿Cómo configurar si le genera el mensaje “Flag Debe/Haber errado”?
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
              src="https://www.youtube.com/embed/kRQKX9hUY_Y?autoplay=0&amp;mute=0&amp;controls=0&"
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
