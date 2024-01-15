import Heading from "@/components/Heading";
import React from "react";
import { DataActualizacion } from "./actualizacion.data";
import Layout from "../../layouts/layoutInstalacionSire";
import Table from "@/components/Table";

const Instalacionpage = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo realizar el proceso de actualizacion de la version rk en el concar sql",
      href: "https://miconcar.com/uploads/documentos/828_Cod.0828_D00815_como_realizar_el_proceso_de_actualizacion_de_la_version_RK_en_el_concarsql.pdf",
    },
  ];
  return (
    <Layout indice="/tutoriales/instalacion-sire">
      <div className="">
        <Heading
          title="¿Cómo realizar el Proceso de Actualización de la Versión RK en el Concar SQL? - Incluye Video"
          subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SIRE SQL"
          className="py-6"
        />
        <h1 className="font-semibold">Consideraciones Generales</h1>
        <ul className="list-disc list-inside">
          {DataActualizacion.map(({ id, titulo }) => {
            return <li key={id}>{titulo}</li>;
          })}
        </ul>
      </div>
      <div className="mt-20 flex flex-col justify-start">
        <h1 className="font-semibold py-2">
          TEMA: ¿Cómo realizar el Proceso de Actualización de la Versión RK en
          el Concar SQL?
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
                src="https://www.youtube.com/embed/wBPYtIefHeo?autoplay=0&amp;mute=0&amp;controls=0&"
                id="widget2"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Table items={data} />
    </Layout>
  );
};

export default Instalacionpage;
