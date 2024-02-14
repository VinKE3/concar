import Table from "@/components/Table";
import React from "react";

const SignificaLicenciaTemporalLlaveVirtual = () => {
  const data = [
    {
      id: 1,
      title: "llave_virtual_licencia_temporal",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/1161_Cod.1161_D01148_llave_virtual_licencia_temporal1.pdf",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">
        Existen dos formas de visualizar si la licencia esta activada o no.
      </h1>
      <ul className="px-5 list-decimal">
        <li>Ingresando al sistema se visualiza nombre de la licencia</li>
        <li>
          Ingresando al sistema también se visualiza, en la ruta Ir a: Acerca
          de\Información de RealKey
        </li>
        <li>
          Recuerde que la activación de la llave virtual es “Automático” y este
          se activará dentro de los 30 días calendarios contados desde su
          instalación. Ud. No debe realizar ningún proceso adicional. Si en el
          día 26 no se activa solo en ese caso se comunica con nuestra central
          telefónica 203-8300.
        </li>
      </ul>
      <Table items={data} />
    </div>
  );
};

export default SignificaLicenciaTemporalLlaveVirtual;
