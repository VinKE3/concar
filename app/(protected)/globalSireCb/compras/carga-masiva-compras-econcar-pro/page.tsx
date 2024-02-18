import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Caso Practico - Carga masiva de compras e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1039_C1039_D01026.1_caso_practico_carga_masiva_compras_en_el__econcar_pro_v2020.04.pdf",
    },
    {
      id: 2,
      title: "Como se realiza la carga masiva de Compras por el e-CONCAR PRO",
      href: "https://miconcar.com/uploads/documentos/1039_Cod.1039_D01026_C%C3%B3mo_se_realiza_la_carga_masiva_de_compras_en_el_sistema_e-CONCAR_PRO.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El Modulo e-CONCAR PRO, permite realizar la carga masiva de compras,
        previamente validando y parametrizando su mantenimiento de compras y
        Tabla 53 del CONCAR CB de la siguiente manera:
      </p>
      <Image
        alt="Contabilizar Factura Electronica en e-CONCAR PRO"
        src="/caragaMasiva.png"
        width={400}
        height={400}
      />
      <p>
        Para conocer el funcionamiento te invito que revises el documento
        adjunto líneas abajo
      </p>
      <p>
        TEMA: ¿Cómo se realiza la carga masiva de compras en el e-Concar Pro?
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
              src="https://www.youtube.com/embed/Er5dfGohanY?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>TEMA: Caso Practico – Carga de Compras en el e-Concar Pro</p>
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
              src="https://www.youtube.com/embed/nFo0dqTVHsM?autoplay=0&amp;mute=0&amp;controls=0&"
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
