import GeneraCompraCargaRceConcarSire from "@/app/(protected)/_components/concarSireCb/genera-compara-carga-rce-concar-sire/GeneraCompraCargaRceConcarSire";
import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Generación_de_Registro_de_Ventas_e_Ingresos_Electrónicos (RVIE)_con_CONCAR SIRE",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/Cod.1170_D01157_Generacion_de_Registro_de_Ventas_e_Ingresos_Electronicos-RVIE_con_CONCAR_SIRE_cb_sql.pdf",
    },
  ];
  return <GeneraCompraCargaRceConcarSire />;
};

export default page;
