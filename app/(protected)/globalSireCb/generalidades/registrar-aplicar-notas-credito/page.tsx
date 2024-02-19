import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como registrar y aplicar las notas de crédito o (nota de abono)",
      href: "https://miconcar.com/uploads/documentos/1113_Cod.1113_D01100_como_registrar_y_aplicar_las_notas_de_credito.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para realizar el registro y aplicacion de una Nota de Credito el manual
        adjunto indica paso a paso:
      </p>
      <p>
        TEMA:¿Cómo registrar y aplicar las Notas de Crédito o (Nota de Abono)?
      </p>
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
              src="https://www.youtube.com/embed/T8APqQ7YrIs?autoplay=0&amp;mute=0&amp;controls=0&"
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
