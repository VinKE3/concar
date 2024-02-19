import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como ubicar la carpeta donde se encuentra instalado el sistema concar cb monousuario",
      href: "https://miconcar.com/uploads/documentos/801_Cod.0801_D00788__como__ubicar_la_carpeta_donde_se_encuentra_instalado_el_sistema_concar_cb_monousuario.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta el Manual para verificar la Carpeta de Instalacion - Base de
        Datos
      </p>
      <p>
        TEMA: ¿Cómo ubicar la carpeta donde se encuentra instalado el sistema
        CONCAR CB Monousuario?
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
              src="https://www.youtube.com/embed/1AkcjJ7x01w?autoplay=0&amp;mute=0&amp;controls=0&"
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
