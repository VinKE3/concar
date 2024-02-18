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
      <p className="font-bold">Caso</p>
      <p>
        Cómo registrar liquidaciones de compras (Documento tipo 04 en registro
        de compras).
      </p>
      <p className="font-bold">Solución</p>
      <p>
        Cómo registrar liquidaciones de compras (Documento tipo 04 en registro
        de compras).
      </p>
      <p>I. Pasos Previos</p>
      <p>
        1. El proveedor de la liquidación de compras, tiene similar tratamiento
        que el de cualquier proveedor que sea persona natural, el cual se debe
        configurar en el Mantenimiento de Anexos con los campos remarcados:
      </p>
      <p>a) Datos Principales</p>
      <Image
        src="https://miconcar.com/uploads/documentos/ANEXO.jpg"
        alt="Falta de documento de referencia"
        width={550}
        height={550}
      />
      <p>b) Datos Complementarios</p>
      <Image
        src="https://miconcar.com/uploads/documentos/ANEXO_COMPLEMENTARIOS.jpg"
        alt="Falta de documento de referencia"
        width={550}
        height={550}
      />
      <p>II. Ejemplo</p>
      <p>A manera de ejemplo, se ingresará el siguiente comprobante:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/COMP_COMPRAS_LIQ.jpg"
        alt="Falta de documento de referencia"
        width={550}
        height={550}
      />
      <p>
        1. En código de proveedor, se debe seleccionar el anexo previamente
        configurado en el Mantenimiento de Anexos.
      </p>
      <p>
        2. En el campo Documento, se debe seleccionar el tipo de documento LQ.
      </p>
      <p>
        3. Se registra el comprobante y en el detalle del asiento se agrega la
        cuenta de gasto (que puede estar configurada opcionalmente en el plan de
        cuentas para ingresar documento de referencia) para finalizar el
        asiento.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/COMP_COMPRAS_LIQ2.jpg"
        alt="Falta de documento de referencia"
        width={550}
        height={550}
      />
      <p>4. Se genera el archivo mensual de compras del mes correspondiente.</p>
      <p>5. Se emite el Formato 8.1 Registro de Compras.</p>
      <Image
        src="https://miconcar.com/uploads/documentos/REPORTE_COMP.jpg"
        alt="Falta de documento de referencia"
        width={550}
        height={550}
      />
    </div>
  );
};

export default page;
