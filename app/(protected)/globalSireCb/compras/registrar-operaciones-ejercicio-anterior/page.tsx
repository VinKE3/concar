import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como registro operaciones de un ejercicio anterior en el concar cb",
      href: "https://miconcar.com/uploads/documentos/811_Cod.0811_D00798_como_registro_operaciones_de_un_ejercicio_anterior_en_el_sistema_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el Manual adjunto se detalla el proceso a seguir para registrar
        documentos de ejercicio anteriores en el sistema
      </p>
      <p>
        TEMA: ¿Cómo registro operaciones de un ejercicio anterior en el Concar
        CB?
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
              src="https://www.youtube.com/embed/geeMOVP6Z0E?autoplay=0&amp;mute=0&amp;controls=0&"
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
