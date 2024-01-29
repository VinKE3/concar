import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como registrar una venta con ISC.",
      href: "https://miconcar.com/uploads/documentos/808_INSTRUCTIVO_MICONCAR_-_COMO_REGISTRAR_UNA_VENTA_CON_ISC.pdf",
    },
    {
      id: 2,
      title:
        "Registro_de_una_venta_afecta_al_impuesto_selectivo_al_consumo_isc_igv10",
      href: "https://miconcar.com/uploads/documentos/808_808_Registro_de_una_venta_afecta_al_impuesto_selectivo_al_consumo_isc_igv10.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El presente documento le mostrará el proceso paso a paso de la
        configuración y registro de un documento de venta que está afecto al
        Impuesto Selectivo al Consumo en Concar.
      </p>
      <p>Tanto para IGV 18% e IGV 10%</p>
      <p>
        TEMA: ¿Cómo registrar un documento de venta con Impuesto Selectivo al
        Consumo?
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
      <h1>2. TEMA: ¿Cómo Genera el comparativo propuesta compras?</h1>
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
      <h1>3. TEMA: ¿Cómo realizar el mantenimiento de Compras?</h1>
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
