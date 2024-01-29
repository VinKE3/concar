import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Eliminación Masiva de Comprobantes",
      href: "https://miconcar.com/uploads/documentos/1215_5.11_CONCAR_SQL_Eliminacion_masiva_de_comprobantes.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción sirve para eliminar comprobantes en situación Pendiente (P)
        o Finalizados (F). Puede eliminar comprobantes específicos o
        masivamente.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
