import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Que debo configurar si no aparece el igv en mi liquidación de impuestos de ventas de modulo e concar pro",
      href: "https://miconcar.com/uploads/documentos/1085_Cod.1085_D01072_qu%C3%A9_debo_configurar_si_no_aparece_el__igv_en_mi_liquidaci%C3%B3n_de_impuesto_de_ventas_del_m%C3%B3dulo_econcarpro1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se detalla el proceso en el Manual adjunto</p>
      <h1>
        TEMA: ¿Qué debo configurar si no aparece el IGV en mi Liquidación de
        Impuesto de Ventas del módulo e Concar pro?
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
              src="https://www.youtube.com/embed/IWlGa9h0jT4?autoplay=0&amp;mute=0&amp;controls=0&"
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
