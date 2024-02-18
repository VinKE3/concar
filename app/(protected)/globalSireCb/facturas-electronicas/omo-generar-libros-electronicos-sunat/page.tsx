import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo generar los libros electrónicos SUNAT de Libro Diario, Libro Diario de Formato Simplificado y Mayor",
      href: "https://miconcar.com/uploads/documentos/1066_Cod.1066_Cod01053_c%C3%B3mo_generar_los_libros_electr%C3%B3nicos_sunat_de_libro_diario_libro_diario_de_formato_simplificado_y__mayor.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion indicamos los pasos a realizar para la correcta emision
        de sus Libros Electronicos Libro Diario - Diario Simplificado y Mayor,
        adjuntamos el respectivo Manual para la emision.
      </p>

      <h1>
        TEMA: Cómo generar los libros electrónicos SUNAT de Libro Diario, Libro
        Diario de Formato Simplificado y Mayor
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
              src="https://www.youtube.com/embed/H5HyRmUXCuM?autoplay=0&amp;mute=0&amp;controls=0&"
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
