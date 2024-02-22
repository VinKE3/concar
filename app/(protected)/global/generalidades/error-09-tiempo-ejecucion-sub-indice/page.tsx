import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como superar el mensaje error 09 en tiempo de ejecución - el sub índice esta fuera del intervalo al generar registro de compras",
      href: "https://miconcar.com/uploads/documentos/1143_Cod.1143_D01130_como_superar_el_mensaje_error_09_en_tiempo_de_ejecuci%C3%B3n_el_sub_indice_esta_fuera_del_intervalo_al_generar_registro_de_compra.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunta detallamos los proceso para superar el mismo</p>
      <p>
        TEMA: ¿Cómo superar el mensaje “Error 09” en tiempo de ejecución – “El
        Sub Índice esta fuera del intervalo” al generar registro de compra?
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
              src="https://www.youtube.com/embed/_bBExfb4Y3Q?autoplay=0&amp;mute=0&amp;controls=0&"
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
