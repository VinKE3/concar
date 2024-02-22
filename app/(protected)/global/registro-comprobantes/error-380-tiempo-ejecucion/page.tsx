import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_superar_el_mensaje_error_380",
      href: "https://miconcar.com/uploads/documentos/1187_Cod.1187_D01174_como_superar_el_mensaje_error_380.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El motivo que genera dicho mensaje de inconsistencia {"Error 380"}, es
        por el uso de caracteres invalidos en los comprobantes o espacios en
        blanco que han generado al registrarlos.
      </p>
      <p>Para su superarlo lo detallamos en el siguiente manual.</p>

      <p>
        TEMA: 1. ¿Cómo superar el mensaje de Error 380 en tiempo de ejecución?
      </p>
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
              src="https://www.youtube.com/embed/zKnZXPQJWSk?autoplay=0&amp;mute=0&amp;controls=0&"
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
