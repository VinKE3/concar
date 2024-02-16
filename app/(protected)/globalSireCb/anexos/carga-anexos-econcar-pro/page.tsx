import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "omo realizar la carga de anexos en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1038_Cod.1038_D01025_como_realizar_la_carga_de_anexos_en_el_econcar_pro.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este modulo e-CONCAR PRO, que trabaja de la mano con el CONCAR CB,
        permite realizar la Carga de Anexos.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="/cargaAnexosEconcar.png"
        width={300}
        height={300}
      />
      <p>
        Para conocer el funcionamiento te invito que revises el documento
        adjunto líneas abajo
      </p>
      <h1>TEMA: ¿Cómo realizar la carga de anexos en el e-CONCAR PRO?</h1>
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
              src="https://www.youtube.com/embed/zRCmKKUEAWk?autoplay=0&amp;mute=0&amp;controls=0&"
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
