import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_registrar_factura_compra_no_gravadas_sin_igv",
      href: "https://miconcar.com/uploads/documentos/705_Cod.0705_D00693_como_registrar_factura_compra_no_gravadas_sin_igv.pdf",
    },
    {
      id: 2,
      title: "Registro de Compras Inafectas",
      href: "https://miconcar.com/uploads/documentos/705_CONCAR_CB_Registro_de_compras_inafectas_no_gravadas_o_sin_igv1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Caso</p>
      <p>
        Cómo registrar una factura de compra inafectas, no gravadas o sin IGV.
      </p>
      <p>TEMA: 1. Registro de Compras Inafectas, No Gravadas o Sin IGV</p>
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
              src="https://www.youtube.com/embed/pftavW7B0ok?autoplay=0&amp;mute=0&amp;controls=0&"
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
