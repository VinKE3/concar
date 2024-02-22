import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como se configura una factura con percepcion en el concar sql",
      href: "https://miconcar.com/uploads/documentos/1081_Cod.1081_D01068_c%C3%B3mo_se_debe_configurar_una_factura_con_percepci%C3%B3n_en_el_concar_sql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun el Manual adjunto, encontrara los pasos previos para configurar su
        Comprobante de Retencion y genere su Liquidacion de Impuestos en el
        modulo e Concar Net
      </p>
      <h1>
        TEMA: ¿Cómo se debe Configurar el Comprobante de Retención? – CONCAR SQL
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
              src="https://www.youtube.com/embed/NkBwn8fNEOs?autoplay=0&amp;mute=0&amp;controls=0&"
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
