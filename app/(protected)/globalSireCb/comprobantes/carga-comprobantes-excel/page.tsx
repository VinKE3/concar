import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como se realiza la carga de comprobantes desde Excel",
      href: "https://miconcar.com/uploads/documentos/804_Cod.0804_D00791_como_se_realiza_la_carga_de_comprobantes_desde_excel.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El presente documento contiene el proceso para la carga de comprobantes
        desde Excel desde un formato establecido y emitido por el mismo sistema
        para ser llenado con los asientos contables. El mismo formato se usa
        para operaciones de compras, ventas, cancelaciones, etc.
      </p>
      <Image
        alt="comprobante-automatico-existe"
        src="/comprobantesExcel.png"
        width={200}
        height={200}
      />
      <p>TEMA: Como se realiza la Carga de Comprobantes desde Excel</p>
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
              src="https://www.youtube.com/embed/hXhoAppBFtY?autoplay=0&amp;mute=0&amp;controls=0&"
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
