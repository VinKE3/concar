import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje error 9 en tiempo de ejecución al generar registro de compras",
      href: "https://miconcar.com/uploads/documentos/1057_1057_Cod1057_D01044_error_9_en_tiempo_de_ejecucion.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el presente instructivo se detalla el procedimiento a realizar para
        superar el mensaje Error 9 en tiempo de ejecucion al momento de generar
        el registro de compra del mes:
      </p>
      <Image
        alt="superar-mensaje-error-06"
        src="/compras/error9compras.png"
        width={200}
        height={200}
      />
      <p>
        TEMA:Como superar el mensaje: Error 9 en tiempo de ejecución - al
        Generar Registro Compra
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
              src="https://www.youtube.com/embed/hBxvGgJq_c8?autoplay=0&amp;mute=0&amp;controls=0&"
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
