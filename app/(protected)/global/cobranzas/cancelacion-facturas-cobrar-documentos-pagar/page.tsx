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
      <p>
        Se tiene una factura por cobrar y por pagar pendientes por S/.1,180.00
        cuyo cliente y proveedor, respectivamente, es la misma empresa:
      </p>
      <p>Detalle del documento por cobrar:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_01__.png"
        alt="1"
        width={500}
        height={500}
      />
      <p>Detalle del documento por pagar:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_02__.png"
        alt="2"
        width={500}
        height={500}
      />
      <h1 className="font-bold">Solución</h1>
      <p>1. Ir a Comprobante Estandar con Conversión.</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_03__1.png"
        alt="2"
        width={200}
        height={200}
      />
      <h1>
        2. Ingresar los datos de cabecera del asiento, se puede utilizar o crear
        un subdiario específico. Luego, registrar el comprobante:
      </h1>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_05__.png"
        alt="2"
        width={500}
        height={500}
      />
      <h1>
        3. En el detalle del asiento: ingresar tantas secuencias con la 421x al
        debe, como documentos por pagar se deseen cancelar e ingresar tantas
        secuencias con la 121x al haber , como cuentas por cobrar se deseen
        aplicar y finalizar el comprobante:
      </h1>
      <p>A. Se debita o carga a la cuenta de proveedor:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_06__.png"
        alt="2"
        width={500}
        height={500}
      />
      <p>B. Se abona la cuenta de cliente:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_07__.png"
        alt="2"
        width={500}
        height={500}
      />
      <p>
        C. Se concluye la compensación de documentos del cliente que a la vez es
        proveedor y por último se finaliza el comprobante:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_compensacion_factura_por_cobrar_por_factura_por_pagar_1.0_08__.png"
        alt="2"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
