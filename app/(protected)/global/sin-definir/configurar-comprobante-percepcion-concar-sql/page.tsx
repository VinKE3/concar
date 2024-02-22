import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como se debe configurar el comprobante de percepcion - concar sql",
      href: "https://miconcar.com/uploads/documentos/1079_Cod.1079_D01066_c%C3%B3mo_se_debe_configurar_el_comprobante_de_percepci%C3%B3n_concarsql1.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun manual y video adjunto se indica los pasos a realizar para
        configurar su comprobante de percepcion, poder registrarlo y generar su
        liquidacion de impuestos en el modulo e Concar Net.
      </p>
      <h1>
        TEMA: ¿Cómo se debe Configurar el Comprobante de Percepción? – CONCAR
        SQL
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
              src="https://www.youtube.com/embed/Ri8JIKdRiw?autoplay=0&amp;mute=0&amp;controls=0&"
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
