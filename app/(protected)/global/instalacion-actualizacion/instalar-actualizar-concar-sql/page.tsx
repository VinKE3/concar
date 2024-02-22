import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como realizar el proceso de actualizacion de la version concar sql yomequedoencasa",
      href: "https://miconcar.com/uploads/documentos/1132_Cod.1132_D01119_como_realizar_el_proceso_de_actualizacion_de_la_version_qec_en_el_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Recordar que el actualizador lo pueden obtener de la zona de{" "}
        {"Descargas"}
        de nuestro portal o solicitarlo por correo a
        licencias@realsystems.com.pe, colocando su razon social + ruc + persona
        de contacto.
      </p>
      <p>
        Permite la instalación o actualización del CONCAR SQL en dos a más
        equipos en red, el límite de instalaciones está sujeto a la cantidad de
        licencias adquiridas. Junto con su licencia adquiere una llave
        electrónica Real Key®, indispensable para el funcionamiento del sistema.
      </p>
      <p className="font-bold">
        Procedimiento (este procedimiento se debe repetir en cada equipo):
      </p>
      <p>
        La primera instalación se puede realizar con el CD instalador que se
        adquiere por la compra del sistema. También es posible la instalación
        con el actualizador o última versión. Las actualizaciones de versión se
        pueden descargar desde el portal.
      </p>
      <p>
        Para una instalación exitosa le recomendamos cerrar otros programas y
        realizar los siguientes pasos (ver documento adjunto)
      </p>
      <p>
        ¿Cómo realizar el Proceso de Actualización de la Versión CONCAR SQL
        #yomequedoencasa?
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
              src="https://www.youtube.com/embed/TEFA-rXpbbk?autoplay=0&amp;mute=0&amp;controls=0&"
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
