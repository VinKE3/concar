import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Pasos previos para la configuracion del e concar pro",
      href: "https://miconcar.com/uploads/documentos/1044_C1044_D01031_pasos_previos_configuracion_econcar_pro_v2020.041.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El sistema contiene herramientas para analizar y visualizar los archivos
        XML de Facturas Electrónicas de SUNAT y tomar información para su
        contabilización.
      </p>
      <p>En qué casos puedes utilizar esta opción:</p>
      <ul className="list-disc px-5">
        <li>
          Cuando recibe facturas electrónicas de su proveedor y requiere cargar
          dichos comprobantes al módulo e-CONCAR PRO.
        </li>
        <li>
          Si eres contador es probable que tus clientes trabajen con proveedores
          que emitan facturación electrónica y sean en gran cantidad, esta
          opción facilita la validación de la factura y a su vez el registro de
          esta.
        </li>
        <p>
          Los archivos XML de Factura Electrónica Compras, serán registrados
          mediante el módulo e-CONCAR PRO y podrá ser visualizado en el Sistema
          CONCAR CB.
        </p>
        <p>
          Estas funcionalidades previamente se deben parametrizar ingresando a:
        </p>
        <p>Ir a Comprobantes / Parámetros Consultas SUNAT</p>
        <p>
          Esta opción nos ayuda a realizar la parametrización para poder validar
          las Factura Electrónica:
        </p>
      </ul>
      <Image
        alt="Que contiene la Tabla General"
        src="/generalidades/configPreviaEConcar.png"
        width={300}
        height={300}
      />
      <p>
        Esta opción nos ayuda a visualizar, validar y registrar el Comprobante
        XML o PDF en el Sistema e-Concar Pro
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
