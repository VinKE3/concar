import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo se registra la declaración única de aduanas (DUA) en el registro de compras",
      href: "https://miconcar.com/uploads/documentos/690_Cod.0690_D00678_c%C3%B3mo_se_registra_la__declaraci%C3%B3n_unica_de_aduana_(dua)_en_el_registro_de_compras.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion detallamos los pasos a realizar para registrar la DUA en
        el sistema CONCAR CB
      </p>

      <p>
        TEMA: Cómo se registra la Declaración Única de Aduanas (DUA) en el
        Registro de Compras
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
              src="https://www.youtube.com/embed/6nAKO8WCO9k?autoplay=0&amp;mute=0&amp;controls=0&"
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
