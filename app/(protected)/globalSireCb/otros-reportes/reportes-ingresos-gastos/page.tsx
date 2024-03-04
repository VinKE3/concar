import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Reportes de Ingresos y Gastos",
      href: "https://miconcar.com/uploads/documentos/84_CONCAR_CB_Reportes_de_ingresos_y_gastos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Reportes de Ingresos y Gastos</h1>
      <p>Consideraciones previas:</p>
      <ul className="list-disc px-5">
        <li>Configurar la Tabla 71 Reporte de Ingresos y Gastos</li>
        <li>
          Actualizar las cuentas contables correspondientes (Ingresar al
          Mantenimiento de Plan de Cuentas/Pestaña Formatos/Alternos/Ingresos y
          gastos) con los rubros generados en la Tabla 71.
        </li>
      </ul>
      <Table items={data} />
    </div>
  );
};

export default page;
