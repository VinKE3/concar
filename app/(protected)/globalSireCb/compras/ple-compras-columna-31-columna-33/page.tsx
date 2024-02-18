import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como solucionar el mensaje de inconsistencia al presentar ple-compras columna 31 y 33",
      href: "https://miconcar.com/uploads/documentos/1127_Cod.1127_D01114_como_solucionar_el_mensaje_de_inconsistencia_al_presentar_ple_compras_columna31_y_331.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Segun documento adjunto se indica como verificar la Configuracion
        Regional de sus equipos.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
