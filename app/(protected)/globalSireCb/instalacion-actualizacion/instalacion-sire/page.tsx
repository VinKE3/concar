import React from "react";
import { DataInstalacion } from "./instalacion.data";

import Table from "@/components/Table";
import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";

const Instalacionpage = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Compras",
      href: "https://miconcar.com/uploads/documentos/895_concar_cb_sql_c1_1_Llave_unica_es_incorrecta_v1_.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "¿Cómo cerrar mis Libros Electrónicos - SIRE SUNAT?",
      description:
        "Explicación y ejemplos de como cerrar los libros electrónicos Compras y Ventas periodo Setiembre 2023 SIRE SUNAT",
      href: "/globalSireCb/facturas-electronicas/como-cerrar-mis-libros-electronicos-sire-sunat",
    },
    {
      id: 2,
      title: "Cómo Generar el Libro Electrónico de Compras",
      description:
        "Aquí podrás conocer la funcionalidad del sistema CONCAR SIRE respecto al Registro de Ventas e Ingresos Electrónicos (RVIE) integrado con CONCAR CB y SQL.",
      href: "/globalSireCb/facturas-electronicas/como-generar-libro-compras",
    },
    {
      id: 3,
      title: "¿Qué significa “Licencia Temporal” con Llave Virtual?",
      description: "Activación de la licencia CONCAR SIRE es automático",
      href: "/globalSireCb/ventas/significa-licencia-temporal-llave-virtual",
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
          TEMA: ¿Cómo Instalar y/o Actualizar CONCAR SIRE CB?
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
      <TablaDocumentosRelacionados items={data2} />
    </>
  );
};

export default Instalacionpage;
