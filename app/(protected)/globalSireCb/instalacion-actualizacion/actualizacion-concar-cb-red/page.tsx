import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Como realizar el proceso de actualizacion de concar cb y e_concar pro en redes",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/826_Cod.0826_D00813_como_realizar_el_proceso_de_actualizacion_de_concarcb_y_e_concar_pro_en_red.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Alcance:</h1>
      <p>Forma de descargar la nueva versión desde miCONCAR®.</p>
      <p>1.- Ingresa a nuestra Biblioteca digital miCONCAR www.miconcar.com</p>
      <p>2.- Ingresa a la zona de {"descargas"}</p>
      <p>
        3.- Encontrara el actualizador de la ultima version; tiene que tener
        cuidado
      </p>
      <p>- Si usa llave es fisica dira: RK</p>
      <p>- Si usa llave es virtual dira: RKV</p>
      <p>Los pasos detallados figuran en el manual adjunto.</p>
      <Table items={data} />
    </div>
  );
};

export default page;
