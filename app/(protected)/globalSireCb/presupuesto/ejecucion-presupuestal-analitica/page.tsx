import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ejecución Presupuestal Analítica",
      href: "https://miconcar.com/uploads/documentos/102_CONCAR_CB_Ejecucion_presupuestal_analitica.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este reporte nos muestra una comparación entre lo presupuestado y lo
        ejecutado seleccionando un rango de cuentas contables y permitiendo
        quiebres a 2, 3 y 4 dígitos. Funciona para la configuración de
        presupuesto por centro de costo como por cuenta contable.
      </p>
      <Image
        alt="Ejecución Presupuestal Analítica"
        src="https://miconcar.com/uploads/documentos/concar_cb_C9_7_menu_ejecucion_presupuestal_analitica_.jpg"
        width={500}
        height={500}
      />

      <Table items={data} />
    </div>
  );
};

export default page;
