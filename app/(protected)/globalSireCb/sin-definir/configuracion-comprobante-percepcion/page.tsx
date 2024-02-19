import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como se debe configurar el comprobante de percepción - Concar CB",
      href: "https://miconcar.com/uploads/documentos/1074_Cod.1074_D01061_c%C3%B3mo_se_debe_configurar_el_comprobante_de_percepci%C3%B3n1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el siguiente Manual se indica los proceso a realizar para un correcto
        registro de la Percepcion en el sistema.
      </p>
      <p>TEMA: Cómo se debe Configurar el Comprobante de Percepción</p>
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
              src="https://www.youtube.com/embed/Bhr8_WXHv-o?autoplay=0&amp;mute=0&amp;controls=0&"
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
