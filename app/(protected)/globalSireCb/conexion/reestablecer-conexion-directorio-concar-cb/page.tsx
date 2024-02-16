import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_reestablecer_la_conexión_al_directorio_del_concarcb",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/02/13_Cod.00013_D00013_como_reestablecer_la_conexion_al_directorio_del_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Estos casos se presentan en clientes, que trabajen en redes, tengan el
        sistema Concar en varios equipos a la vez.
      </p>
      <p>
        A continuacion en el manual y video detallamos los pasos a realizar para
        recuperar dicha conexion.
      </p>
      <p>
        Si realizado todos los pasos persiste, el usuario debera verificar su
        configuracion en red con su personal de sistemas.
      </p>
      <h1 className="font-bold">Cuando se presente un mensaje similar:</h1>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_conectar_directorio_del_concar_.jpg"
        width={500}
        height={500}
      />
      <p>Deberan ejecutar los pasos del Manual y Videos adjuntos</p>
      <p>¿Cómo reestablecer la Conexión al Directorio del Concar CB?</p>
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
              src="https://www.youtube.com/embed/SnnAU1TWiXM?autoplay=0&amp;mute=0&amp;controls=0&"
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
