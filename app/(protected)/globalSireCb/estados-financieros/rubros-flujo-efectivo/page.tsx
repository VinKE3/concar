import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cabecera de Flujo de Efectivo - CRFXX-dbf",
      href: "https://miconcar.com/uploads/documentos/171_CRFXX.DBF",
    },
    {
      id: 2,
      title: "Como cargar los rubros del estado de Flujo de Efectivo",
      href: "https://miconcar.com/uploads/documentos/171_Cod.0171_D00168_como_cargar_los_rubros_del_estado_de_flujo_de_efectivo.pdf",
    },
    {
      id: 3,
      title: "Detalle de Flujo de Efectivo - CAFXX.dbf",
      href: "https://miconcar.com/uploads/documentos/171_CAFXX.DBF",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El manual adjunta indicar los procesos a realizar para poder descargar
        los rubros y cargarlos al sistema CONCAR CB.
      </p>
      <Image
        alt="Flujo de Efectivo"
        src="/estadosFinancieros/flujoEfectivo.png"
        width={300}
        height={300}
      />
      <h1>TEMA: Cómo cargar los rubros del Estado de Flujo de Efectivo</h1>
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
              src="https://www.youtube.com/embed/LXYcj2UP0P8?autoplay=0&amp;mute=0&amp;controls=0&"
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
