import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Conectar a la Base Datos_cbysql",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/1173_Cod.1173_D01160_Mensaje_Conectar_a_la_Base_Datos_cbysql.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Origen del impase: Al momento de ingresar al sistema CONCAR SIRE,
        aparece mensaje “Conectar Directorio” porque no reconoce o está buscando
        la base de datos:
      </p>
      <p>
        Solución: Seleccionar la ruta de la base de datos correcta, dar clic en
        el botón “Continuar” y luego “Examinar” para seleccionar la base de
        datos correcta según detalle:
      </p>
      <ul className="px-5 list-disc">
        <li>
          Para la plataforma CONCAR CB Licencia MONO, se guarda la ruta de la
          base de datos es C:/CONCAR80
        </li>
        <li>
          Para la plataforma CONCAR CB Licencia RED, se guarda la ruta de la
          base de datos es R:/REAL/CONCAR80
        </li>
        <li>
          Para la plataforma CONCAR SQL Licencia RED, se guarda la ruta de la
          base de datos es C:/RSCONCAR
        </li>
      </ul>
      <p>
        Si por error se equivocó, elimine el siguiente archivo ConcarSire.INI
        para que vuelva habilitarse el mismo mensaje de conectar a la base de
        datos.
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
