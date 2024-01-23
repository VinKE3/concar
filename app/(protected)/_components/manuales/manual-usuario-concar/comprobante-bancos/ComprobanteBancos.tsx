import Table from "@/components/Table";
import React from "react";

const ComprobanteBancos = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Bancos",
      href: "https://miconcar.com/uploads/documentos/315_5.08_CONCAR_SQL_Comprobante_bancos_315-D00312.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite registrar los comprobantes de bancos en forma
        simplificada y automatizada. Pueden mecanizarse operaciones tales como
        las cobranzas con transferencias en banco, depósitos, pagos a
        proveedores, leasing, gastos de letras, préstamos, etc.; para ello se
        tiene que definir las transacciones bancarias básicas de la empresa en
        la opción Mantenimiento Movimientos Bancos.
      </p>
      <Table items={data} />
    </div>
  );
};

export default ComprobanteBancos;
