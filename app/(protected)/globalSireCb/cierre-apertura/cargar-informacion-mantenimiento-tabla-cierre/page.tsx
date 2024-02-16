import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como se cargan las tablas para el mantenimiento de tablas de cierre del concarcb",
      href: "https://miconcar.com/uploads/documentos/1144_Cod.1144_D01131_como_cargar_las_tabla_para_el_mantenimiento_de_cierre_del_concarcb1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunto detallamos el proceso a realizar</p>

      <h1>
        TEMA: ¿Cómo se cargan las Tablas para el Mantenimiento de Tabla de
        Cierre del Concar CB?
      </h1>
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
              src="https://www.youtube.com/embed/6QrBQxn6uSk?autoplay=0&amp;mute=0&amp;controls=0&"
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
