import Table from "@/components/Table";
import React from "react";

const ConcarCompatibilidad = () => {
  const data = [
    {
      id: 1,
      title: "Como registro comisiones por venta de servicios realizadas",
      href: "https://miconcar.com/uploads/documentos/789_Cod.0789_D00776_como_registro_comisiones_por_ventas_de_servicios_realizadas.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        Segun Manual adjunto se detalla el proceso para registrar Ventas con
        comisiones, mediante el cual el usuario podra configurar operaciones
        iguales o similares
      </h1>
      <p>TEMA: ¿Cómo registro Comisiones por Venta de Servicios realizadas?</p>

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

export default ConcarCompatibilidad;
