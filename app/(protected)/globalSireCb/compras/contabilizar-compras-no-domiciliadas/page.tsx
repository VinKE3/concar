import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como contabilizar compras no domiciliadas de bienes",
      href: "https://miconcar.com/uploads/documentos/1112_Cod.1112_D01099_como_contabilizar_compras_no_domiciliadas_de_bienes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Se adjunta manual donde se detalla los pasos a realizar para el registro
        de Compras No Domiciliadas - Bienes
      </p>
      <Image
        alt="superar-mensaje-error-06"
        src="/compras/contabilizar.png"
        width={500}
        height={500}
      />
      <p>TEMA: ¿Cómo contabilizar Compras No Domiciliadas de Bienes?</p>
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
              src="https://www.youtube.com/embed/P4rxj86Zkvc?autoplay=0&amp;mute=0&amp;controls=0&"
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
