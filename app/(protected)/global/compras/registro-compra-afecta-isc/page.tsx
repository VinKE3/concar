import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como_registrar_una_compra_afecta_al_impuesto_selectivo_al_consumo_isc",
      href: "https://miconcar.com/uploads/documentos/776_776_CONCAR_CB_Registro_de_una_compra_afecta_al_impuesto_selectivo_al_consumo_isc1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>
        El mismo se puede realizar tanto para IGV 18% e IGV 10%. TEMA: ¿Cómo
        registrar una compra afecta al Impuesto Selectivo al Consumo (ISC)?
        ARCHIVOS Y ENLACES DETALLE DESCARGA
        como_registrar_una_compra_afecta_al_impuesto_selectivo_al_consumo_isc
        Descargar
      </p>
      <p>El mismo se puede realizar tanto para IGV 18% e IGV 10%.</p>
      <p>
        TEMA: ¿Cómo registrar una compra afecta al Impuesto Selectivo al Consumo
        (ISC)?
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
              src="https://www.youtube.com/embed/zC9A58x-qSY?autoplay=0&amp;mute=0&amp;controls=0&"
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
