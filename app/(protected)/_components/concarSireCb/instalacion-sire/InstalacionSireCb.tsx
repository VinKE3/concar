import React from "react";
import { DataInstalacion } from "./instalacion.data";

import Table from "@/components/Table";

const InstalacionSireCb = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Compras",
      href: "https://miconcar.com/uploads/documentos/895_concar_cb_sql_c1_1_Llave_unica_es_incorrecta_v1_.pdf",
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
                src="https://www.youtube.com/embed/wlloU_eriUc?autoplay=0&amp;mute=0&amp;controls=0&"
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

export default InstalacionSireCb;
