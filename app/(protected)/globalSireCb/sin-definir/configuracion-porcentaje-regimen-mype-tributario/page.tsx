import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo realizar la configuración del porcentaje para el régimen mype tributario en su liquidación de impuesto del módulo e concar pro",
      href: "https://miconcar.com/uploads/documentos/1098_Cod.1098_D01085_c%C3%B3mo_realizar_la_configuraci%C3%B3n_del_porcentaje_para_el_r%C3%A9gimen_mype_tributario_en_su_liquidaci%C3%B3n_de_impuesto_del_m%C3%B3dulo_econcar_pro.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>Segun Manual adjunto se indicara los pasos a realizar</p>
      <p>
        TEMA: ¿Cómo realizar la configuración del porcentaje para el Régimen
        Mype Tributario en su Liquidación de Impuesto del módulo e Concar Pro?
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
              src="https://www.youtube.com/embed/BA183NbQQ3w?autoplay=0&amp;mute=0&amp;controls=0&"
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
