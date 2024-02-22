import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "obranzas Registro de Planilla de Cobranza",
      href: "https://miconcar.com/uploads/documentos/723_CONCAR_SQL_Cobranzas_registro_de_planilla_de_cobranza.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo contabilizar una planilla de cobranza.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Para registrar el canje de facturas por letras por cobrar, ir a
        Comprobante Estandar con Conversión.
      </p>
      <p>
        2. Ingresar los datos de cabecera del asiento y registrar el
        comprobante. Por ejemplo:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_canje_facturas_por_letra_1.0_02_.png"
        alt="1"
        width={500}
        height={500}
      />
      <p>
        3. En el detalle del asiento, se ingresa una secuencia con la 121x de la
        factura por cobrar y tantas secuencias como letras se desean canjear con
        la 123x y finalizar el asiento.
      </p>
      <p>
        Por ejemplo, se realizará el canje de la factura 001-400 previamente
        provisionada por tres letras por cobrar: 100,101 y 102.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_canje_facturas_por_letra_1.0_04_.png"
        alt="2"
        width={500}
        height={500}
      />
      <p>
        Nota.- Para la correcta emisión de los reportes de antigüedad de deuda,
        es indispensable registrar la fecha de vencimiento (campo Fec. Vmto.) de
        cada uno de los documentos, como se observa en el ejemplo para las
        letras, en el caso de la factura, ésta no podría ser incluida en el
        reporte de antigüedad por no contar con la fecha de vencimiento.{" "}
      </p>
    </div>
  );
};

export default page;
