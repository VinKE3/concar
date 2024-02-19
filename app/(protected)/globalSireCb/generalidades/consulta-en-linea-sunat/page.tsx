import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Activar la Consulta en Linea de Sunat",
      href: "https://miconcar.com/uploads/documentos/838_Cod.0838_D00825_c%C3%B3mo_activar_la_consulta_en_linea_de_sunat1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para contar con la opción de consulta en línea de RUC y tipo de cambio
        desde la página de Sunat.
      </p>
      <h1>TEMA: Cómo Activar la Consulta en Línea de Sunat</h1>
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
              src="https://www.youtube.com/embed/uRu5okh9reM?autoplay=0&amp;mute=0&amp;controls=0&"
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
