import TablaDocumentosRelacionados from "@/components/TablaDocumentosRelacionados";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobantes Compras Contado",
      description:
        "Se utiliza para registrar los documentos que sirven para sustentar la rendición de caja chica sin registrar por cada uno de ellos una cuenta 42XXXX o 43XXXX. En esta o...",
      href: "/globalSireCb/compras/comprobantes-compras-contado",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso 1</h1>
      <h1>
        Cómo registrar gastos de caja chica o fondo fijo, que se muestren en el
        Formato 8.1 Registro de Compras.
      </h1>
      <h1 className="font-bold">Solución</h1>
      <h1>
        Si desea que estos gastos se muestren en el registro de compras deberá
        ingresarlos por el botón RC de la opción Comprobante Compras Contado.
      </h1>
      <h1 className="font-bold">Caso 2</h1>
      <h1>
        Cómo registrar gastos de caja chica o fondo fijo, que NO se muestren en
        el Formato 8.1 Registro de Compras.
      </h1>
      <h1 className="font-bold">Solución</h1>
      <h1>
        1. Se pueden ingresar por la opción Comprobantes Compras Contado,
        ingresando la secuencia del gasto directamente en el detalle de
        comprobante, desde el campo Cuenta:
      </h1>
      <Image
        alt=""
        src="https://miconcar.com/uploads/documentos/concar_cb_compras_contado_no_va_registro_de_compras_1.0_01__1.png"
        width={600}
        height={600}
      />
      <p>
        2. Las gastos de caja chica o fondo fijo también se pueden ingresar por
        la opción Comprobante Estandar con ó sin Conversión.
      </p>
      <TablaDocumentosRelacionados items={data} />
    </div>
  );
};

export default page;
