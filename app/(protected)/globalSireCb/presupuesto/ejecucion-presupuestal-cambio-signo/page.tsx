import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ejecución Presupuestal con cambio signo",
      href: "https://miconcar.com/uploads/documentos/100_CONCAR_CB_Ejecucion_presupuestal_por_funcion_o_naturaleza.pdf",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "Reporte Ejecución Presupuesto",
      description:
        "Este reporte se utiliza para comparar lo presupuestado por centro de costo/cuenta contra lo ejecutado y luego ver la variación en términos absolutos o porcentuales.",
      href: "/globalSireCb/presupuesto/reporte-ejecucion-presupuesto",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Similar al Reporte Ejecución Presupuesto, con la diferencia que muestra
        el saldo por ejecutar (variación monetaria) con signo negativo y por
        ende también la variación porcentual.
      </p>
      <Image
        alt="Ejecución Presupuestal con cambio signo"
        src="https://miconcar.com/uploads/documentos/concar_cb_C9_5_menu_ejecucion_presupuestal_con_cambio_signo_.jpg"
        width={550}
        height={550}
      />

      <Table items={data} />
      <TablaDocumentosRelacionados items={data2} />
    </div>
  );
};

export default page;
