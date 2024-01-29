import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Comprobante Compras no Domiciliados",
      href: "https://miconcar.com/uploads/documentos/1214_5.05_CONCAR_SQL_Comprobante_compras_no_domiciliados_1214-D01201.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo actualizar las tasas de detracción.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Ir a Mantenimiento Parámetros Registro Compras, a la pestaña
        Parámetro Detracción:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/PARAM_DETRACION.jpg"
        alt="1"
        width={500}
        height={500}
      />
      <p>2. Elegir una tasa a actualizar y seleccionar modificar:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/PARAM_DETRACION2.jpg"
        alt="2"
        width={500}
        height={500}
      />
      <p>3. Modificar el porcentaje y grabar:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/PARAM_DETRACION4.jpg"
        alt="2"
        width={500}
        height={500}
      />
      <p>
        4. En caso se tenga que ingresar documentos de compra con fecha de
        emisión anterior al 01/07/2014 y ya se actualizó la tasa de detracción
        (paso anterior), la tasa deberá ser digitada en la ventana de ingreso,
        en el campo Tasa.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_detraccion_compras_1.0_05__.png"
        alt="2"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
