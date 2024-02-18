import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_registrar_factura_compra_no_gravadas_destinadas_a _operaciones_no_gravadas",
      href: "https://miconcar.com/uploads/documentos/55_Cod.0055_D00052_como_registrar_factura_compra_no_gravadas_destinadas_a__operaciones_no_gravadas.pdf",
    },
    {
      id: 2,
      title: "Compras con IGV sin derecho a crédito fiscal",
      href: "https://miconcar.com/uploads/documentos/55_CONCAR_CB_Compras_con_IGV_sin_derecho_a_credito_fiscal.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta manual detallando cada funcion del proceso y asimismo un caso
        practico puntual, el cual se puede realizar tanto para IGV 18% e IGV
        10%.
      </p>

      <p>
        TEMA: ¿Cómo registrar facturas de compras con IGV, sin derecho a crédito
        fiscal?
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
              src="https://www.youtube.com/embed/JTnj74ezUc?autoplay=0&amp;mute=0&amp;controls=0&"
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
