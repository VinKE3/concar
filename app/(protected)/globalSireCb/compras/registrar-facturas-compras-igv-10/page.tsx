import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_registrar_facturas_de_compras_ravadas_y_no_gravadas_inafectas_con_igv10_concarcb",
      href: "https://miconcar.com/uploads/documentos/1183_Cod.1183_D01170_como_registrar_factura_compra_gravadas_y_no_gravadas_igv10.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta Manual detallado para su visualizacion</p>
      <p>
        TEMA: 1. ¿Cómo registrar facturas de compras gravadas y no gravadas
        (inafecto) con IGV 10% en CONCAR CB?
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
              src="https://www.youtube.com/embed/3QbyZ0RjX04?autoplay=0&amp;mute=0&amp;controls=0&"
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
