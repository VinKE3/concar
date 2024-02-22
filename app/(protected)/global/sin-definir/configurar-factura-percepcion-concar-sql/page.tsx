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
        Segun Manual adjunto se indica paso a paso como realizar la
        configuracion para poder registrar una Factura con Percepcion, asimismo
        se indica un caso.
      </p>
      <h1>
        TEMA: ¿Cómo se Configura una Factura con Percepción en el Concar SQL?
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
