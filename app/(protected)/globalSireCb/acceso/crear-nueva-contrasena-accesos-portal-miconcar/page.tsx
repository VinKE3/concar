import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como generar nueva contraseña y accesos para el portal miCONCAR",
      href: "https://miconcar.com/uploads/documentos/1128_Cod.1128_D01115_como_generar_nueva_contrase%C3%B1a_para_ingresar_al_portal_miconcar1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunto detallamos los pasos a realizar</p>

      <h1>
        TEMA: ¿Cómo generar nueva contraseña y accesos para el Portal miCONCAR?
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
              src="https://www.youtube.com/embed/jJkT3YlzpkU?autoplay=0&amp;mute=0&amp;controls=0&"
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
