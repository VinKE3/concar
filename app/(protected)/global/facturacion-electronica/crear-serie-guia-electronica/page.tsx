import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como_crear_la_serie_de_una_guia_electronica",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/05/1205_1205_Como_crear_la_serie_de_una_guia_electronica_v11.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>TEMA: ¿Cómo crear la serie de una Guía Electrónica?</p>

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
