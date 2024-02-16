import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Que hacer cuando no me permite ingresar a una Compañía en el Sistema Concar CB - Archivo CEN",
      href: "https://miconcar.com/uploads/documentos/1077_Cod.1077_D01064_qu%C3%A9_hacer_cuando_no_me_permite_ingresar_a_una_compa%C3%B1%C3%ADa_en_el_sistema_concar_cb__archivo_cen.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        A continuacion se indicara los pasos a realizar para superar la lentitud
        y lograr ingresar a su compañia
      </p>
      <h1 className="font-bold underline">Consideraciones Previas</h1>
      <p>
        - Si trabaja en redes, debera verificar su conexion al servidor y si sus
        equipos estan debidamente compartidos, previamente.
      </p>
      <p>
        - Debera verificar si la empresa que presenta la lentitud comparte Plan
        de Cuentas
      </p>

      <h1>
        TEMA: Qué hacer cuando no me permite ingresar a una Compañía en el
        Sistema Concar CB – Archivo CEN
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
              src="https://www.youtube.com/embed/DPyYUpAtt3I?autoplay=0&amp;mute=0&amp;controls=0&"
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
