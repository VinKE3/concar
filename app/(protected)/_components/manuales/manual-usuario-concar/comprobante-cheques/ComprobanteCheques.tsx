import Table from "@/components/Table";
import React from "react";

const ComprobanteCheques = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Cheques",
      href: "https://miconcar.com/uploads/documentos/313_5.07_CONCAR_SQL_Comprobante_cheques_313-D00310.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite registrar los cheques girados en forma simplificada
        y automatizada. El sistema genera el abono a la cuenta 10XXXX, debiendo
        el usuario ingresar las cuentas de contrapartida como por ejemplo la
        42XXXX o cualquier otra cuenta. Adicionalmente, puede emitirse su propio
        reporte de cheques; así como también permite la impresión del
        cheque-voucher.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ComprobanteCheques;
