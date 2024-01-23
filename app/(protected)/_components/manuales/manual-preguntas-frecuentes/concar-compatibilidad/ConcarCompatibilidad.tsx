import Table from "@/components/Table";
import React from "react";

const ConcarCompatibilidad = () => {
  const data = [
    {
      id: 1,
      title: "Compatibilidad - antivirus concar cb y sql",
      href: "https://miconcar.com/uploads/documentos/544_Cod.0544_D00535_compatibilidad_antivirus_cb_sql2.pdf",
    },
    {
      id: 2,
      title: "Compatibilidad - configuración del sistema operativo",
      href: "https://miconcar.com/uploads/documentos/544_Cod.0544_D00535_compatibilidad_configuracion_del_sistema_operativo.pdf",
    },
    {
      id: 3,
      title: "Compatibilidad - configuración regional",
      href: "https://miconcar.com/uploads/documentos/544_Cod.0544_D00535_compatibilidad_configuracion_regional.pdf",
    },
    {
      id: 4,
      title:
        "Compatibilidad -  Requisitos Técnicos Equipos, Versiones de Windows, Office y Servidores",
      href: "https://miconcar.com/uploads/documentos/Cod.0544_D00535_compatibilidad_y_requisitos_tecnicos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        Los procesos detallados a continuacion de deben aplicar tanto para
        sistemas de versiones Concar CB y Concar SQL.
      </h1>
      <p>
        Es impotante ya que el Concar se integra al sistema operativo del
        usuario y este debe figurar correctamente configurado.
      </p>
      <h2>Recordar</h2>
      <p>
        Concar CB: los elementos son carpeta C:/Concar80 y el ejecutable
        CTMenuw.exe
      </p>
      <p>
        Concar SQL: los elementos son carpeta C/RSCONCAR y el ejecutable
        RSConcar.exe
      </p>
      <p>
        Compatibilidad del CONCAR / Configuracion Regional - IPV6 - Framework -
        UAC
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
