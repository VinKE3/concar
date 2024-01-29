import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como se realiza la eliminación del avast free y bytefence?",
      href: "https://miconcar.com/uploads/documentos/1107_Cod.1107_D01094_como_se_realiza_la__eliminacion_del_avast_free_y_bytefence.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Los antivirus gratuitos que se presentan en algunos equipos, a pesar de
        pausarlos siguen restringiendo el funcionamiento del sistema por lo cual
        en estos casos por ser gratuito se procede con la eliminacion o
        desintalar el mismo, a continuacion detallamos los pasos a realizar.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
