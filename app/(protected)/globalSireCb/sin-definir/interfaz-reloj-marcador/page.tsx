import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Interfaz_con_reloj_marcador",
      href: "https://miconcar.com/uploads/documentos/544_Cod.0544_D00535_compatibilidad_antivirus_cb_sql2.pdf",
    },
  ];
  return (
    <div className="py-5">
      <h1>
        Esta opción sirve para importar la información de un reloj marcador de
        acuerdo a la estructura de datos que recibe el sistema Placar.{" "}
      </h1>
      <Table items={data} />
    </div>
  );
};

export default page;
