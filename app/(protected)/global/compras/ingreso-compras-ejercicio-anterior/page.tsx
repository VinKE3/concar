import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ingreso de Compras de un Ejercicio o Año Anterior",
      href: "https://miconcar.com/uploads/documentos/707_CONCAR_CB_Ingreso_de_compras_de_un_ejercio_o_a%C3%B1o_anterio.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        Cómo registrar compras de un ejercicio o año anterior. Para el ejemplo,
        el documento tiene los siguientes datos:
      </p>
      <ul className="px-5 list-disc">
        <li>Fecha de Emisión: 20/12/2013 </li>
        <li>Fecha de Vencimiento: 15/01/2014</li>
        <li>Fecha de Pago: 14/01/2014</li>
        <li>Concepto: Gasto de suministro eléctrico</li>
        <li>se Imponible: US$ 1,000.00. </li>
      </ul>
      <p>
        Nota: El crédito fiscal se utilizará en el ejercicio siguiente (año
        2014).
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
