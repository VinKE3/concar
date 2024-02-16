import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Como restaurar una copia de seguridad o backup en el concar cb",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/02/141_Cod.0141_D00138_como_restaurar_una_copia_de_seguridad_o_backup_concarcb.pdf",
    },
    {
      id: 2,
      title: "PPT_Como_restaurar_backup_en_concarcb",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/02/141_COD141_D00138_Como_restaurar_backup_en_concarcb.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este proceso nos permite recuperar informacion cuando han formatedo los
        equipos por sucesos imprevistos o al manejar data en diferentes oficinas
        - remotamente.
      </p>
      <p>
        Con lo cual podran recuperar la informacion en sus equipos y
        visualizarlo de forma completa.
      </p>
      <p>
        Se adjunta el Manual con los pasos a detalle, por favor revisar el mismo
        previo al proceso de restauracion de backup.
      </p>

      <h1>
        TEMA: ¿Cómo restaurar una copia de Seguridad o Backup en el Concar CB?
      </h1>
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
              src="https://www.youtube.com/embed/BrOFui_mXO4?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default page;
