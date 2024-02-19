import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "6.3 Consulta Consolidación",
      href: "https://miconcar.com/uploads/documentos/69_manual_concar_cb_menu_consolidacion_6.3_consulta_consolidacion__.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción se utiliza para consultar si el mes se encuentra abierto (P)
        o cerrado (D).
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c6_2_consulta_consolidacion.jpg"
        width={500}
        height={500}
      />
      <p>MES: Mes (2 dígitos) a consultar en el reporte</p>
      <p>FECHA: Fecha de la última consolidación.</p>
      <p>HORA: Hora de la última consolidación.</p>
      <p>USUARIO: Usuario que realizó la consolidación.</p>
      <p>TIPO: PREVIO, el mes está abierto (se consolidó en Previo).</p>
      <p>DEFINITIVO, el mes está cerrado (se consolidó en Definitivo).</p>
      <p>Presionar el boton</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c6_2_consulta_consolidacion_1.jpg"
        width={70}
        height={70}
      />
      <p>para ver el detalle de la consolidación.</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_c6_2_consulta_consolidacion_2.jpg"
        width={550}
        height={550}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
