import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar la transferencia del plan de cuentas y anexos en el concarcb",
      href: "https://miconcar.com/uploads/documentos/1133_Cod.1133_D01120_como_realizar_la_transferencia_del_plan_de_cuentas_y_anexos_en_el_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <Image
        alt="Transferencia Comprobantes"
        src="/transferenciaAnexos.png"
        width={300}
        height={300}
      />
      <p>
        ¿Cómo realizar la Transferencia del Plan de Cuentas y Anexos en el
        Concar CB?
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
              src="https://www.youtube.com/embed/1axofD_NdRo?autoplay=0&amp;mute=0&amp;controls=0&"
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
