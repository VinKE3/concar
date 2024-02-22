import React from "react";
import { DataInstalacion } from "./instalacion.data";

import Table from "@/components/Table";

const Instalacionpage = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Instalar CONCAR SIRE CB",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/Cod.1169_D01156_Como_Instalar_CONCAR-SIRE-CB_cb.pdf",
    },
  ];
  return (
    <>
      <div className="">
        <h1 className="font-semibold">Consideraciones Generales</h1>
        <ul className="list-disc list-inside">
          {DataInstalacion.map(({ id, titulo }) => {
            return <li key={id}>{titulo}</li>;
          })}
        </ul>
      </div>
      <div className="mt-20 flex flex-col justify-start">
        <h1 className="font-semibold py-2">
          TEMA: ¿Cómo Instalar y/o Actualizar CONCAR SIRE SQL?
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
                src="https://www.youtube.com/embed/fP8TC-D73ac?autoplay=0&amp;mute=0&amp;controls=0&"
                id="widget2"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Table items={data} />
    </>
  );
};

export default Instalacionpage;
