import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar mensaje error 06 en tiempo de ejecución - desbordamiento en el concar",
      href: "https://miconcar.com/uploads/documentos/1139_Cod.1139_D01125_como_superar_mensaje_error_06_en_tiempo_de_ejecuci%C3%B3n_desbordamiento_en_el_concar.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta Manual detallado</p>
      <Image
        alt="superar-mensaje-error-06"
        src="/error09.png"
        width={500}
        height={500}
      />
      <p>
        TEMA: ¿Cómo superar el mensaje “Error 6” en Tiempo de Ejecución -
        Desbordamiento en el concar®?
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
              src="https://www.youtube.com/embed/btRBFmjMT8s?autoplay=0&amp;mute=0&amp;controls=0&"
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
