import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Que contiene la Tabla General",
      href: "https://miconcar.com/uploads/documentos/1062_Cod.1062_D01049_que_contiene_la_tabla_general.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo registrar ventas al contado.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Ir a Archivos {"->"} Plan de Cuenta {"->"} Mantenimiento de Plan de
        Cuentas y definir la cuenta de caja a usar para el cobro. Esta cuenta
        debe tener tipo de anexo C-CLIENTES obligatoriamente, para que dichos
        datos se muestren en el registro de ventas. El nivel de saldo de la
        cuenta puede mantenerse en nivel 1, es preferible crear una cuenta
        específica para éste caso; ejemplo: 101199 CAJA MOSTRADOR o CAJA VENTAS.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_contado_1.png"
        width={600}
        height={600}
      />
      <p>
        2. Ir a Reportes {"->"} Registro Ventas {"->"} Mantenimiento Parámetros
        Ventas y en la ceja “Cuentas por Cobrar” agregar la cuenta de caja
        configurada en el paso anterior.
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_contado_8.png"
        width={600}
        height={600}
      />
      <p>
        3. Ir a Comprobantes {"->"} Comprobantes Ventas y seleccionar la cuenta
        de caja que se listará en el campo {"Código Venta"}, por ejemplo:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_contado_2.png"
        width={600}
        height={600}
      />
      <p>4. Registrar el comprobante y finalizar el asiento:</p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_contado_3.png"
        width={600}
        height={600}
      />
      <p>5. Generar el archivo mensual de ventas del mes correspondiente.</p>
      <p>
        6. Emitir el libro oficial impreso Formato 14.1 Registro de Ventas e
        Ingresos y verificar:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_contado_2_v1.png"
        width={600}
        height={600}
      />
      <p>
        7. En caso se desee revisar un reporte de las ventas al contado por
        cliente entre otras alternativas se puede ir a Análisis Cuenta {"-> "}
        Reporte Estados de Cuenta {"->"} Por Cuenta - Anexo:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_contado_1_v1.png"
        width={600}
        height={600}
      />
    </div>
  );
};

export default page;
