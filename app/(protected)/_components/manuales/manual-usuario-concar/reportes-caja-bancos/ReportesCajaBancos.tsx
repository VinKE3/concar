import Table from "@/components/Table";
import React from "react";

const ReportesCajaBancos = () => {
  const data = [
    {
      id: 1,
      title: "Libro de Caja y Bancos",
      href: "https://miconcar.com/uploads/documentos/329_CONCAR_SQL_Libro_de_caja_y_bancos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Incluye reportes de Libros Caja y Bancos anteriores y no oficiales. Para
        emitir estos reportes se tendrá presente que las cuentas de Caja y/o
        Bancos (10XXXX) deberán tener el mismo nivel de saldo 2 o 3 y activado
        el check de “Tipo medio de pago” en el Mantenimiento de Plan de Cuentas.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesCajaBancos;
