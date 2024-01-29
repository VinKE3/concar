import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Tips para el correcto cierre 2022 y apertura 2023_ConcarCB_1ro",
      href: "https://miconcar.com/uploads/documentos/1197_Tips_para_el_correcto_cierre_2022_y_apertura_2023_ConcarCB_1ro.pdf",
    },
    {
      id: 2,
      title: "Tips para el correcto cierre 2022 y apertura 2023_ConcarCB_2do",
      href: "https://miconcar.com/uploads/documentos/1197_Tips_para_el_correcto_cierre_2022_y_apertura_2023_ConcarCB_2do.pdf",
    },
    {
      id: 3,
      title: "Tips para el correcto cierre 2022 y apertura 2023_ConcarCB_3ro",
      href: "https://miconcar.com/uploads/documentos/1197_Tips_para_el_correcto_cierre_2022_y_apertura_2023_ConcarCB_3ro.pdf",
    },
    {
      id: 4,
      title: "Tips para el correcto cierre 2022 y apertura 2023_ConcarCB_4to",
      href: "https://miconcar.com/uploads/documentos/1197_Tips_para_el_correcto_cierre_2022_y_apertura_2023_ConcarCB_4to.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        1. En la parte inferior podra observar los ppt, manuales (videos) y
        temas relacionados con el proceso de cierre y apertura en el concar
      </p>
      <p>
        2. Tener presente que el proceso no ha cambiado, es el mismo para el
        2022 y 2023
      </p>
      <p>
        3. Las mismas recomendaciones se aplican para Concar CB y Concar SQL
      </p>
      <p>
        4. La principal diferencia es que en el Concar CB, inicializa, reindexa,
        consolida, genera archivo saldo documento mes a mes
      </p>
      <p>
        5.- En el Concar SQL, no es necesario realizar esos pasos, ya que
        ejecuta el RSFINA20 mes a mes
      </p>
      <p>
        TEMA: Tips - Recomendaciones para un correcto proceso de Cierre y
        Apertura
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
              src="https://www.youtube.com/embed/rcRy_lj7LL0?autoplay=0&amp;mute=0&amp;controls=0&"
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
