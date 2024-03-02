import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "PDT Renta Anual",
      href: "https://miconcar.com/uploads/documentos/115_CONCAR_CB_PDB_renta_anual.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">11.5 PDT Renta Anual</p>
      <p>
        El sistema permite generar un archivo con el Balance de Comprobación, de
        acuerdo al formato establecido por SUNAT, para que pueda ser importado
        desde el PDT Renta Anual de cualquier ejercicio, en la pestaña del
        Balance de Comprobación.
      </p>
      <p>TEMA: ¿Cómo se genera el PDT RENTA ANUAL en el Concar?</p>
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
              src="https://www.youtube.com/embed/IyQ2fm70tOw?autoplay=0&amp;mute=0&amp;controls=0&"
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
