import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo se registran los Comprobantes de Compra Nacional Gravada",
      href: "https://miconcar.com/uploads/documentos/1073_Cod.1073_D01060_c%C3%B3mo_se_registran_los_comprobantes_de_compra_nacional_gravada.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el siguiente video y manual, se detalla el procedimiento para
        realizar el registro de compras gravadas en el sistema.
      </p>
      <p>TEMA: Cómo se registran los Comprobantes de Compra Nacional Gravada</p>
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
              src="https://www.youtube.com/embed/WMOCVbkhT0Q?autoplay=0&amp;mute=0&amp;controls=0&"
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
