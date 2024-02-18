import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "cComo se debe configurar la cuenta 1673 para el Registro de Compras",
      href: "https://miconcar.com/uploads/documentos/1076_Cod.1076_D01063_c%C3%B3mo_se_debe_configurar_la_cuenta_1673_para_el_registro_de_compra1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el Manual adjunto, indicamos como debe parametrizar la cuenta 16 en
        compras y como se realizara el registro del comprobante.
      </p>
      <p>
        TEMA: Cómo se debe Configurar la Cuenta 1673 para el Registro de Compras
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
              src="https://www.youtube.com/embed/zUVdp4Ly33s?autoplay=0&amp;mute=0&amp;controls=0&"
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
