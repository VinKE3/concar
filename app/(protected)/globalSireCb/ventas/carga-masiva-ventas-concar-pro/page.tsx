import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Caso Practico - Carga masiva de ventas para el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1040_C1040_D01027.1_caso_practico_carga_masiva_ventas_en_el__econcar_pro_v2020.04.pdf",
    },
    {
      id: 2,
      title: "Como se realizar la carga masiva de Ventas en el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1040_Cod.1040_D01027_como_se_realiza_la_carga_masiva_de_ventas_en_el__econcar_pro.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El Modulo e-CONCAR PRO, permite realizar la carga masiva de ventas,
        previamente validando y parametrizando su mantenimiento de ventas y
        Tabla 56 del CONCAR CB de la siguiente manera:
      </p>
      <Image
        alt="Carga masiva de ventas"
        src="/cargaMasivaVentas.png"
        width={300}
        height={300}
      />
      <p>
        Para conocer el funcionamiento te invito que revises el documeno adjunto
        lineas abajo
      </p>
      <h1>
        TEMA: ¿Cómo se realiza la carga masiva de ventas en el e-Concar Pro?
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
              src="https://www.youtube.com/embed/4_NxigJeGMw?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <h1>TEMA: Caso Practico – Carga de Ventas en el e-Concar Pro</h1>
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
              src="https://www.youtube.com/embed/6pIy_xUA20U?autoplay=0&amp;mute=0&amp;controls=0&"
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
