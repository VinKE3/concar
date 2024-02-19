import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como realizar el Proceso de Instalación en Redes",
      href: "https://miconcar.com/uploads/documentos/434_Cod.434_D0425_como_realizar_el_proceso_de_instalacion_de_redes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        A continuacion detallamos el proceso a realizar para efectuar una
        correcta instalacion del Concar en Redes.
      </h1>
      <p>
        Recuerde que el instalador en redes, creara la Base de Datos en el
        equipo servidor (principal). Adicional los ejecutables en cada equipo
        usuario.
      </p>
      <p className="font-bold">
        En caso no cuente con el instalador, lo podra solicitar por correo a
        licencias@realsystems.com.pe, colocando su razon social, ruc y datos del
        responsable.
      </p>
      <p>TEMA: Instalación Redes</p>
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
              src="https://www.youtube.com/embed/Po0PchC_p60?autoplay=0&amp;mute=0&amp;controls=0&"
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
