import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cuales son y como se generan los asientos automáticos.",
      href: "https://miconcar.com/uploads/documentos/1063_Cod.1063_D01050_cuales_son_y_c%C3%B3mo_se_generan_los_asientos_autom%C3%A1ticos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion podra observar un Manual, en el cual se detallaran los
        asientos automaticos.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="/generalidades/asientosAuto.png"
        width={300}
        height={300}
      />
      <h1>TEMA: Cuáles son y Cómo se generan los asientos automáticos</h1>
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
              src="https://www.youtube.com/embed/5XgbpfVnfgY?autoplay=0&amp;mute=0&amp;controls=0&"
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
