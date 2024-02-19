import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cómo realizar el Proceso de Instalación de CONCAR CB Monousuario",
      href: "https://miconcar.com/uploads/documentos/435_Cod.00435_D00426_c%C3%B3mo_realizar_el_proceso_de_instalacion_de_concar_cb__monousuario.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        A continuacion podra visualizar el proceso de Instalacion del Sistema en
        la opcion Monousuario (un solo equipo)
      </h1>
      <p>Se recomienda previamente</p>
      <p>- Pausar todos sus antivirus, con licencia y libres</p>
      <p>- Pausar el Firewall del Equipo</p>
      <p>
        - Ejecutarlo como usuario: administrador del equipo, para que poseea
        todas los controles de configuracion.
      </p>
      <p className="font-bold">
        En caso no cuente con el INSTALADOR, puede solicitarlo por correo a
        licencias@realsystems.com.pe, colocando su razon social, ruc y datos del
        responsable.
      </p>
      <p>
        TEMA: Cómo realizar el Proceso de Instalación de CONCAR CB Monousuario
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
              src="https://www.youtube.com/embed/HfVxUvTs5U4?autoplay=0&amp;mute=0&amp;controls=0&"
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
