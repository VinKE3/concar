import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar el proceso de instalación del concar cb virtual monousuario",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1109_Cod_1109_D01096_como_realizar_el__proceso__de_instalacion_del_concar_cb__virtual_monousuario.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El Concar CB - Virtual; no trabaja con llave fisica, aqui le brindamos
        los pasos completos para realizar la instalacion, asimismo este proceso
        le permite instalar el modulo e Concar Pro automaticamente.
      </p>
      <p>
        El instalador, lo brindamos en el actualizador que descarga de nuestra
        biblioteca digital miCONCAR www.miconcar.com; la zona de {"descargas"}
      </p>
      <p>
        ¿Cómo realizar el Proceso de Instalación del CONCAR CB #Virtual
        Monousuario?
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
              src="https://www.youtube.com/embed/edQ9PtgdK0c?autoplay=0&amp;mute=0&amp;controls=0&"
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
