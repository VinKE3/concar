import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Falta Doc. Referencia para Documento",
      href: "https://miconcar.com/uploads/documentos/164_CONCAR_CB_Falta_doc_referencia_para_documento_tipo_07_08_en_le.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold">Descripción del problema</p>
      <p>Al generar el Archivo de texto para el PLE Compras salen mensajes:</p>
      <ul className="list-disc">
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Fecha de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Serie de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Número de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
      </ul>
      <p>Ejemplo:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_falta_fecha_documento_referencia_.jpg"
        alt="Falta de documento de referencia"
        width={550}
        height={550}
      />
      <Table items={data} />
    </div>
  );
};

export default page;
