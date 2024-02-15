import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como realizar el proceso de actualización del concar cb virtual",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1110_Cod_1110_D01097_como_realizar_el_proceso_de_actualizacion_del_concar_cb_virtual.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        i ha la fecha viene trabajando con la version Real Key (usb, llave
        fisica) o la version yomequedoencasa (sin llave fisica); podra
        actualizar a la version Real Key - Virtual. De esta manera se manejara
        una sola version de aqui en adelante.
      </p>
      <p>
        Asimismo, si ya viene usando la llave virtual, puede actualizar la
        version, con los pasos compartidos en el manual adjunto.
      </p>
      <p>
        Recuerde, se realiza los mismos pasos en TODAS nuestras versiones, no
        presenta restricciones o limitaciones versiones anteriores.
      </p>
      <p>
        Recuerde, se realiza los mismos pasos en TODAS nuestras versiones, no
        presenta restricciones o limitaciones versiones anteriores.
      </p>
      <p>
        Si usa llave virtual, tener cuidado en descarga el actualizador correcto
        que diga: RKV
      </p>
      <h1>
        TEMA: ¿Cómo realizar el Proceso de Actualización del CONCAR CB -
        Virtual?
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
              src="https://www.youtube.com/embed/fHB5zsCP57s?autoplay=0&amp;mute=0&amp;controls=0&"
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
