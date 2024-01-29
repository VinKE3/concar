import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como contabilizar compras no domiciliadas de servicios - invoice",
      href: "https://miconcar.com/uploads/documentos/703_Cod.0703_D00691_como_contabilizar_compras_no_domiciliadas_de_servicios.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjuntamos explicamos todo el circuito para el registro de
        una Compra No Domiciliada por Servicios
      </p>
      <Image
        alt="superar-mensaje-error-06"
        src="/comprasNoDomiciliadas.png"
        width={200}
        height={200}
      />
      <p>TEMA:¿Cómo contabilizar Compras No Domiciliadas de Servicios?</p>
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
              src="https://www.youtube.com/embed/1g3OuBKSc6Q?autoplay=0&amp;mute=0&amp;controls=0&"
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
