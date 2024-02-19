import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como se configura una factura con Percepción en el Concar CB",
      href: "https://miconcar.com/uploads/documentos/1080_Cod.1080_D01067_c%C3%B3mo_se_debe_configurar_una_factura_con_percepci%C3%B3n_en_el_concar_cb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto encontrara los paso previos de configuracion para
        poder registrar Facturas con Percepcion en el ambiente del Concar CB y
        trabajar su Liquidacion de Impuestos en el e Concar Pro.
      </p>
      <p>TEMA: Cómo se Configura una Factura con Percepción en el Concar CB</p>
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
              src="https://www.youtube.com/embed/LGffLGNoGpQ?autoplay=0&amp;mute=0&amp;controls=0&"
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
