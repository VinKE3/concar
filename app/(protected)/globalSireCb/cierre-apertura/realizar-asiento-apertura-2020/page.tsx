import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo se realiza el asiento de apertura 2020 automático",
      href: "https://miconcar.com/uploads/documentos/1072_Cod.1072_D01059_c%C3%B3mo_se_realiza_el_asiento_de_apertura_2020_autom%C3%A1tico.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En el video y manual ejecutaremos los procesos para generar el asiento
        de apertura.
      </p>

      <h1>TEMA: Cómo se Realizar el Asiento de Apertura 2020 Automático</h1>
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
              src="https://www.youtube.com/embed/pIOxtfSQLsg?autoplay=0&amp;mute=0&amp;controls=0&"
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
