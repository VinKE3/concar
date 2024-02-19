import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como realizar el proceso de instalación del concar cb virtual en redes",
      href: "https://miconcar.com/uploads/documentos/1111_Cod.1112_D01098_como_realizar_el_proceso_de_instalaci%C3%B3n_del_concar_cb_virtual_en_redes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para realizar el proceso de instalacion del Concar CB Virtual en Redes
        se ha elaborado un Manual detallado adjunto, donde se indica paso a
        paso.
      </p>
      <p>
        Asimismo recuerde que este proceso le generara su Base de Datos en su
        equipo servidor y la instalacion del modulo e Concar Pro
        automaticamente. La base de datos, unicamente debe figurar en su equipo
        servidor.
      </p>
      <p>
        Si no cuenta con el INSTALADOR en REDES, debera solicitarlo por correo a
        licencias@realsystems.com.pe, colocando su razon social / ruc, datos de
        la persona de contacto
      </p>
      <p>
        ¿Cómo realizar el Proceso de Instalación del CONCAR CB - Virtual en
        Redes?
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
              src="https://www.youtube.com/embed/0IlJbnjw8f8?autoplay=0&amp;mute=0&amp;controls=0&"
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
