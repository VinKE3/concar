import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como configurar el modulo comercial electronico para cumplir con el plazo de declaracion de 1 dia",
      href: "https://miconcar.com/uploads/documentos/1172_Cod.1172_D01159_como_configurar_el_modulo_comercial_electronico_para_cumplir_con_el_plazo_de_declaraci%C3%B3n_de_1_d%C3%ADa1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>A continuacion se adjunta el Manual detallado.</p>
      <p>
        TEMA: ¿Cómo configurar el módulo comercial electrónico para cumplir con
        el plazo de declaración de 1 día?
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

export default page;
