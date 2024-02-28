import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Honorarios",
      href: "https://miconcar.com/uploads/documentos/57_CONCAR_CB_Comprobante_honorarios.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite registrar los comprobantes de honorarios en forma
        simplificada y automatizada. El sistema genera en forma automática el
        abono a la cuenta 424XXX de Honorarios por pagar, 40XXXX por el Impuesto
        a la renta y el cargo a la 63XXXX por el gasto por Honorarios.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
