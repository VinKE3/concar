import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como_superar-_el_mensaje_cabecera_sin_detalle_o_detalle_sin_cabecera_al_realizar_consolidación_del_mes",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/05/1142_1142_Cod.1142_D01129_como_superar-_el_mensaje_cabecera_sin_detalle_o_detalle_sin_cabecera_al_realizar_consolidacion_del_mes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta Manual que detalla el proceso</p>
      <p>
        TEMA: ¿Cómo superar el mensaje “Cabecera sin Detalle o Detalle sin
        Cabecera” al realizar Consolidación del mes?
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
              src="https://www.youtube.com/embed/Md5LFwwygHQ?autoplay=0&amp;mute=0&amp;controls=0&"
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
