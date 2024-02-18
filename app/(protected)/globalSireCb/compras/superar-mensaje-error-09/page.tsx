import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como solucionar el mensaje de inconsistencia al presentar ple-compras columna 31 y 33",
      href: "https://miconcar.com/uploads/documentos/1127_Cod.1127_D01114_como_solucionar_el_mensaje_de_inconsistencia_al_presentar_ple_compras_columna31_y_331.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Se adjunta Manual detallado</p>
      <p>
        TEMA: ¿Cómo superar el mensaje Error 09 - No coinciden los tipos al
        generar archivo mensual compras y/o ventas en Concar SQL?
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
