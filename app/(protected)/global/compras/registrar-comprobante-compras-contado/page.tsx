import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como se registra el comprobante compras al contado",
      href: "https://miconcar.com/uploads/documentos/1100_Cod.1100_D01087V30_como_se_registra_el_comprobante_de_compras_al_contado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta el respectivo Manual y video tutorial en el cual podran
        visualizar a detalle la forma correcta de regitrar comprobantes de
        compras al contado.
      </p>
      <p>TEMA:Cómo se registra el Comprobante de Compras al Contado</p>
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
              src="https://www.youtube.com/embed/KcL8UkOX6DI?autoplay=0&amp;mute=0&amp;controls=0&"
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
