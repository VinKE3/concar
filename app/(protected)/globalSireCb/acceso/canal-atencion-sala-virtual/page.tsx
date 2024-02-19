import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Reglamento del uso de la Sala de atención Virtual",
      href: "https://miconcar.com/uploads/documentos/1101_Reglamento_del_uso_de_la_sala_de_atenci%C3%B3n_Virtual.pdf",
    },
    {
      id: 2,
      title: "Sala Virtual - Procedimiento de atencion",
      href: "https://miconcar.com/uploads/documentos/1101_Sala_Virtual.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Con la finalidad de brindar en vivo la solucion a muchas interrogantes,
        consultas, inquietudes de nuestros usuarios hemos aperturado nuestra
        Sala Virtual en la cual los atenderemos en Vivo sus consultas.
      </p>
      <p>
        A continuacion indicaremos los Lineamientos y procedimientos de Uso de
        la misma:
      </p>
      <Image
        alt="superar-mensaje-error-06"
        src="/acceso/canalAtencion.png"
        width={200}
        height={200}
      />
      <p>TEMA: Como funciona el Nuevo Canal de Atención – Sala Virtual</p>
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
              src="https://www.youtube.com/embed/xbPg2L0v1qE?autoplay=0&amp;mute=0&amp;controls=0&"
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
