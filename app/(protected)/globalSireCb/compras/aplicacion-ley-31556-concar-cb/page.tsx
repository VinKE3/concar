import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "como_registrar_factura_compra_con_igv10_compras_concarcb",
      href: "https://miconcar.com/uploads/documentos/1180_1180_Cod.1180_D01167_como_registrar_factura_compra_con_igv10_compras_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Base legal </h1>
      <p>Se adjunta Manual detallado para su visualizacion</p>
      <p>
        De acuerdo con la Ley 31556, que promulga la reducción del IGV al 10%
        para promover “medidas de reactivación económica de micro y pequeñas
        empresas de los rubros de restaurantes, hoteles y alojamientos
        turísticos”. La referida ley entra en vigencia el 01/09/2022 hasta el
        31/12/2024.
      </p>
      <p>Para entender los mencionados porcentajes, explicamos lo siguiente:</p>
      <p>El impuesto actual del IGV está compuesto por dos conceptos:</p>
      <p>IGV = 16%</p>
      <p>IPM = 2%</p>
      <p>TOTAL = 18%</p>
      <p>
        Desde el 01 de setiembre de 2022 se reducirá el IGV para los
        contribuyentes contemplados en la mencionada ley del 16% al 8%, quedando
        como resultado un 10%
      </p>
      <p>IGV = 8%</p>
      <p>IPM = 2%</p>
      <p>TOTAL = 10%</p>
      <p>*IPM=Impuesto de Promoción Municipal</p>
      <p>
        Real Systems, de acuerdo con lo referido en la norma anterior, le brinda
        la solución en el sistema CONCAR, para que se adapte a este cambio con
        la finalidad de ir avanzado con el registro correcto de los comprobantes
        de pago. Se adjunta el documento con los pasos a seguir para el correcto
        registro de la nueva tasa 10% en el libro de Compras Formato 8.1 impreso
        y electrónico.
      </p>
      <p>¿Cómo registrar una factura de compra con IGV 10% en CONCAR CB?</p>
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
              src="https://www.youtube.com/embed/Yae97Sfkt5Y?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <p>Proceso de Actualización al Concar CB versión 22.10</p>
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
              src="https://www.youtube.com/embed/DGEYvY2komc?autoplay=0&amp;mute=0&amp;controls=0&"
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
