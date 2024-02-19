import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_superar_el_mensaje_de_inconsistencia_error_76",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/08/916_Cod.0916_D00903_como_superar_el_mensaje_de_inconsistencia_error_761.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el documento adjunto detallamos el procedimiento para superar este
        mensaje en el sistema.
      </p>
      <p>
        TEMA: ¿Cómo superar el mensaje de inconsistencia Error 76 – No se ha
        encontrado la ruta de acceso?
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
              src="https://www.youtube.com/embed/yBVia0S5zVA?autoplay=0&amp;mute=0&amp;controls=0&"
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
