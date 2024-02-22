import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como realizar el proceso de actualizacion del e-softcom sql y del e-softcom net",
      href: "https://miconcar.com/uploads/documentos/1157_Cod1157_D01144_como_realizar_el_proceso_de_actualizaci%C3%B3n_del_esoftcomsql_y_del_esoftcomnet.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Para realizar un correcto proceso de actualizacion a las versiones del
        e-Softcom SQL y del e-Softcom NET, adjuntamos un manual detallado paso a
        paso
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
