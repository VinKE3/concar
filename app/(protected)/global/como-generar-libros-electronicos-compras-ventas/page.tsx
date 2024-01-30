import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como generar los libros electrónicos del registro de compras y ventas",
      href: "https://miconcar.com/uploads/documentos/1117_Cod.1117_D01104_como_generar_los_libros_electrónicos_del_registro_de_compras_y_ventas1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        Adjuntamos el Manual con los pasos para emitir los respectivos Libros
        Electronicos 14.1 Ventas y 8.1 Compras
      </h1>
      <p>
        ¿Cómo generar los Libros Electrónicos del Registro de Compras y Ventas?
      </p>
      <div className="md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
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
              src="https://www.youtube.com/embed/kE1lQ1AM21Y?autoplay=0&amp;mute=0&amp;controls=0&"
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
