import Table from "@/components/Table";
import React from "react";

const ComoEliminarComprobantes = () => {
  const data = [
    {
      id: 1,
      title: "Como eliminar comprobantes en el concar sql",
      href: "https://miconcar.com/uploads/documentos/318_Cod.0318_D00315_como_eliminar_comprobantes_en_el_concarsql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Esta opción sirve para eliminar comprobantes en situación Pendiente (P)
        o Finalizados (F).{" "}
      </p>
      <p>Permite eliminar masivamente de 15 en 15 comprobantes.</p>
      <p>Nota: Una vez eliminado un comprobante, no podrá ser recuperado.</p>
      <p>TEMA: ¿Cómo eliminar comprobantes en el CONCAR SQL?</p>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yarMe6DFBLo?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default ComoEliminarComprobantes;
