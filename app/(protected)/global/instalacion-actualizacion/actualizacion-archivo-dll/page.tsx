import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como realizar el proceso de actualización del archivo dll",
      href: "https://miconcar.com/uploads/documentos/1158_Cod1158_D01145_como_realizar_el_proceso_de_actualizaci%C3%B3n_del_archivo_dll.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para realizar el proceso de actualizacion al archivo dll, adjuntamos un
        manual detallado paso a paso.
      </p>
      <p>
        ¿Cómo instalar las librerías DDL en nuestros sistemas de facturación
        electrónica?
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
              src="https://www.youtube.com/embed/S5ERHxRK_s8?autoplay=0&amp;mute=0&amp;controls=0&"
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
