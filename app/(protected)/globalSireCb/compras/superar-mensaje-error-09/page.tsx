import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como superar el mensaje error 9 - no coinciden los tipos al generar archivo mensual compras y/o ventas en concar sql",
      href: "https://miconcar.com/uploads/documentos/1137_Cod.1137_D01124_como_superar-_el_mensaje_error_09_no_coinciden_los_tipos_al_generar_archivo_mensual_compras_y_ventas_en_concarsql.pdf",
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
