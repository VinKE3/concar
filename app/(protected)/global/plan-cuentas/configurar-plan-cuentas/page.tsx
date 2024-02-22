import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como configurar el plan de cuentas",
      href: "https://miconcar.com/uploads/documentos/1119_Cod.1119_D01106_como_configurar_el_plan_de_cuentas1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        SSegun el Manual adjunto indicamos algunos tips y ejemplos a tener
        presente al momento de configurar su Plan de Cuentas. Tener presente que
        es el Contable quien revisa y configura su Plan de Cuentas de acuerdo a
        su realidad comercial para que refleje sus actividades lo mas
        objetivamente posible.
      </p>
      <p>TEMA: ¿Cómo debo Configurar el Plan de Cuentas?</p>
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
              src="https://www.youtube.com/embed/jB8zUMbzb8c?autoplay=0&amp;mute=0&amp;controls=0&"
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
