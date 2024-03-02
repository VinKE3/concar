import Table from "@/components/Table";
import React from "react";

const ReportesCajaBancos = () => {
  const data = [
    {
      id: 1,
      title: "Libro de Caja y Bancos",
      href: "https://miconcar.com/uploads/documentos/79_CONCAR_CB_Libro_de_caja_bancos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">7.8 Libro de Caja/Bancos</h1>
      <p>
        Para emitir correctamente estos reportes se tendrá presente que las
        cuentas de bancos (10XXXX) deben tener el mismo nivel de saldo 2, tipo
        de anexo “0” Ctas Ctes Bancos y check de “Tipo medio de pago”. Asimismo,
        haber realizado el Proceso Consolidación.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ReportesCajaBancos;
