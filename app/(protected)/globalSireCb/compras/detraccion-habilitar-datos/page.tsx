import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como habilitar los datos de detraccion, en comprobantes de compras - concar sql",
      href: "https://miconcar.com/uploads/documentos/192_Cod.0192_D00189_como_habilitar_los_datos_de_detracción_en_comprobantes_de_compras_concarsql1.pdf",
    },
  ];
  return (
    <div>
      <h1>
        Segun manual y video adjunto, detallamos como activar dichos campos,
        para que la constancia de detraccion se visualice correctamente en el
        registro de compras:
      </h1>
      <p className="py-5">
        TEMA: DETRACCION ¿Cómo habilitar los datos de “Detracción” en
        comprobantes de compras? - Concar SQL
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
              src="https://www.youtube.com/embed/kE1lQ1AM21Y?autoplay=0&amp;mute=0&amp;controls=0&"
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
