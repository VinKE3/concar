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
      <p>Cómo registrar un consolidado de boletas de venta.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Ir a Comprobante Ventas y llenar el campo {"Num. Dcmto"} comenzando
        con la serie de la boleta, seguidamente un guión, el número de boleta
        inicial, diagonal y número de boleta final. Por ejemplo:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_boletas_consolidadas_11.jpg"
        width={600}
        height={600}
      />
      <p>
        Nota.- No se pueden ingresar boletas de ventas con distinta serie en un
        mismo registro.
      </p>
      <p>2. Generar el archivo mensual de ventas del mes correspondiente.</p>
      <p>
        3. Emitir el libro impreso oficial Formato 14.1 Registro de Ventas y
        verificar:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_consolidado_1_v11.png"
        width={400}
        height={400}
      />
      <p>
        4. También se puede emitir el libro electrónico en Excel desde el
        sistema y verificar:
      </p>
      <Image
        alt="Que contiene la Tabla General"
        src="https://miconcar.com/uploads/documentos/concar_cb_ventas_consolidado_2_v11.png"
        width={400}
        height={400}
      />
    </div>
  );
};

export default page;
