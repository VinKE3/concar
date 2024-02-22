import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo configurar parámetros de compras nacionales",
      href: "https://miconcar.com/uploads/documentos/1099_Cod.0690_D00678_c%C3%B3mo_se_registra_la__declaraci%C3%B3n_unica_de_aduana_(dua)_en_el_registro_de_compras.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion se brinda un video tutorial y el respectivo Manual que
        detalla las principales opciones del Mantenimiento de Parametros de
        Compras a tener presente previo al registro de sus operaciones.
      </p>
      <p>TEMA: Cómo configurar parámetros de Compras Nacionales</p>
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
              src="https://www.youtube.com/embed/RFU1B5EtLh4?autoplay=0&amp;mute=0&amp;controls=0&"
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
