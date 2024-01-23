import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const RealKeyNoDetectada = () => {
  const data = [
    {
      id: 1,
      title: "Llave real key no detectada",
      href: "https://miconcar.com/uploads/documentos/539_539_D00530_llave_real_key_no_detectada_concar_cb_preguntas_frecuentes_(1).pdf",
    },
  ];
  return (
    <div className="space-y-4">
      <h1 className="font-bold">Caso</h1>
      <p>
        En caso el sistema no reconozca la llave electrónica Real Key, mostrará
        el siguiente mensaje:
      </p>
      <Image src="/llaveKeyNoDetectada.png" alt="1" width={500} height={500} />
      <Table items={data} />
    </div>
  );
};

export default RealKeyNoDetectada;
