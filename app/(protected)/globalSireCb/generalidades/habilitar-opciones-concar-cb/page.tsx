import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "En el Ejercicio 2020 Como habilitar las Opciones del Concar CB",
      href: "https://miconcar.com/uploads/documentos/1058_Cod.1058_D01045_en_el_ejercicio_2020_c%C3%B3mo_habilitar_las_opciones_del_men%C3%BA_del_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Al crear su Compañia o Ejercicio del 2020 e ingresar al sistema
        observara las opciones deshabilitadas.Debera efectuar lo detallado en el
        siguiente Manual
      </p>
      <h1>
        TEMA: Como Habilito las Opciones del CONCAR CB - Proceso de Homologación
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
              src="https://www.youtube.com/embed/u_qOsFoO2dM?autoplay=0&amp;mute=0&amp;controls=0&"
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
