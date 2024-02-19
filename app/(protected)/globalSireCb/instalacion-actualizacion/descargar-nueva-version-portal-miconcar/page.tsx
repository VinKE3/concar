import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como descargar la nueva versión del portal miconcar",
      href: "https://miconcar.com/uploads/documentos/12_Cod.0012_D00012_como_descargar_la__nueva_version_del_portal_miconcar.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Al momento de ingresar a nuestro Portal miCONCAR® www.miconcar.com.</p>
      <p>
        Se ubicara en la seccion de descargas y podra acceder a nuestras
        actualizaciones, segun lo que indica el video y manual:
      </p>
      <p>TEMA: Cómo descargar la nueva versión del Portal miCONCAR</p>
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
              src="https://www.youtube.com/embed/cDVDmgdo1hA?autoplay=0&amp;mute=0&amp;controls=0&"
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
