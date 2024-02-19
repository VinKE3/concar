import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como superar el mensaje comprobante ya fue registrado",
      href: "https://miconcar.com/uploads/documentos/740_Cod.0740_D00727_como_superar_el_mensaje_comprobante_ya_fue_registrado1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunta detallamos paso a paso como superar el mismo</p>
      <p>TEMA:¿Cómo superar el mensaje comprobante ya fue registrado?</p>
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
              src="https://www.youtube.com/embed/yDoFK44k_sA?autoplay=0&amp;mute=0&amp;controls=0&"
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
