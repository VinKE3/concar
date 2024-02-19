import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo se debe Configurar el Comprobante de Retención - Concar CB",
      href: "https://miconcar.com/uploads/documentos/1075_Cod.1075_D01062_c%C3%B3mo_se_debe_configurar_el_comprobante_de_retenci%C3%B3n1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunto se indica los pasos previos para configurar su
        sistema y realizar el registro de un Comprobante de Retencion.
      </p>
      <p>TEMA: Cómo se debe Configurar el Comprobante de Retención</p>
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
              src="https://www.youtube.com/embed/e3NJCGFTV0I?autoplay=0&amp;mute=0&amp;controls=0&"
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
