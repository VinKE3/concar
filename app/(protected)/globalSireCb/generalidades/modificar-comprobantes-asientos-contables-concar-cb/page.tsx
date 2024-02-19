import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como modificar comprobantes o asientos contables en el concar cb",
      href: "https://miconcar.com/uploads/documentos/835_Cod.0835_D00822_como_modificar_comprobantes_o_asientos_contables_en_el_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El documento detalla el procedimiento para realizar la modificación de
        un comprobante o asiento contable del sistema CONCAR Codebase cuando
        éste ha sido registrado por alguna de las siguientes opciones:
      </p>
      <p>- Comprobante Estándar con Conversión</p>
      <p>- Comprobante de Compras</p>
      <p>- Comprobante Cheques</p>
      <p>- Comprobante de Ventas</p>
      <p>- Comprobante de Honorarios</p>

      <h1>
        TEMA: ¿Cómo modificar comprobantes o asientos contables en el Concar CB?
      </h1>
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
              src="https://www.youtube.com/embed/cQahb7G55WI?autoplay=0&amp;mute=0&amp;controls=0&"
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
