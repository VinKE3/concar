import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Certificado Retención SPP",
      href: "https://miconcar.com/uploads/documentos/654_PLACAR_CB_Certificado_retencion_spp.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Descripción del problema</h1>
      <p>
        El momento de ejecutar el actualizador sale el siguiente mensaje: “El
        siguiente archivo no ha podido extraerse, puede ser que ya esté siendo
        utilizado por el sistema o se encuentre asegurado por otra aplicación.
        Será omitido C:\Concar80\PKUNZIP.EXE.”
      </p>
      <p>Da la opción de Aceptar o Cancelar.</p>
      <h1 className="font-bold">Solución al problema</h1>
      <p>Seleccionar Aceptar y continuar con la instalación.</p>
    </div>
  );
};

export default page;
