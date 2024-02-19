import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje de memory error y permisos - acceso al sistema",
      href: "https://miconcar.com/uploads/documentos/151_Cod.151_D00148_como_superar_el_mensaje_de_memory_error_y_permisos_acceso_al_sistema1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Mensaje {"Memory Error"} al ingresar al sistema.</p>
      <Image
        alt="Que contiene la Tabla General"
        src="/acceso/mensajeMemory.png"
        width={300}
        height={300}
      />
      <h1>TEMA: Memory Error y Permisos</h1>
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
              src="https://www.youtube.com/embed/ViltGN7uA78?autoplay=0&amp;mute=0&amp;controls=0&"
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
