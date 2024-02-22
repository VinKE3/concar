import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como se realiza el proceso de mayusculizacion en el sistema concarsql",
      href: "https://miconcar.com/uploads/documentos/1150_Cod.01150_D01137_como_realizar_el_proceso_de_mayusculizar_en_el_sistema_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun Manual adjunta detallamos el {"query"} a realizar en la base de
        datos - server sql. Cabe destacar que el mismo se recomienda realizarlo
        su personal de TI - Sistema de sus oficinas.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
