import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como configurar el icbper para comprar y ventas en el sistema concar",
      href: "https://miconcar.com/uploads/documentos/1123_Cod.1123_D01110_como_configurar_el_icbper_para_compras_y_ventas_en_el_sistema_concar.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1>
        Se adjunta el Manual detallando paso a paso como configurar el ICBPER.
      </h1>
      <p>
        ¿Cómo configurar el ICBPER para Compras y Ventas en el Sistema CONCAR?
      </p>
      <div className="md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
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
              src="https://www.youtube.com/embed/lXR1V0gMBNI?autoplay=0&amp;mute=0&amp;controls=0&"
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
