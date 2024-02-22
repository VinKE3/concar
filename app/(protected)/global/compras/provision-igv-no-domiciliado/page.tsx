import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo provisionar el IGV No Domiciliado.</p>
      <h1 className="font-bold">Solución</h1>
      <h1 className="font-bold">I. Pasos Previos</h1>
      <p>
        1. Crear en el Plan de Cuentas, en caso no las hubiera, una cuenta para
        el IGV por aplicar y otra cuenta para el IGV por pagar, con la siguiente
        configuración:
      </p>
      <p>a) IGV No Domiciliado por Aplicar</p>
      <Image
        alt="igv-no-domiciliado-1"
        src="https://miconcar.com/uploads/documentos/concar_cb_no_domiciliado_1_.jpg"
        width={500}
        height={500}
      />
      <p>b) IGV No Domiciliado por Pagar</p>
      <Image
        alt="igv-no-domiciliado-1"
        src="https://miconcar.com/uploads/documentos/concar_cb_no_domiciliado_2_.jpg"
        width={500}
        height={500}
      />
      <p>
        2. En Mantenimiento Parámetros Compras debe estar la cuenta de IGV No
        domiciliado por aplicar:
      </p>
      <Image
        alt="igv-no-domiciliado-1"
        src="https://miconcar.com/uploads/documentos/concar_cb_no_domiciliado_3_.jpg"
        width={500}
        height={500}
      />
      <h1 className="font-bold">II. Provisión</h1>
      <p>
        1. Se registra el asiento por Comprobante Estandar con Conversión en un
        subdiario que no esté en Parámetros de Compras. Por ejemplo, se puede
        usar el subdiario 20 que tiene el sistema:
      </p>
      <Image
        alt="igv-no-domiciliado-1"
        src="https://miconcar.com/uploads/documentos/concar_cb_no_domiciliado_4_.jpg"
        width={500}
        height={500}
      />
      <p>
        2. En el detalle del asiento, se debe seleccionar el tipo de documento
        CN, como se ve en el ejemplo:
      </p>
      <Image
        alt="igv-no-domiciliado-1"
        src="https://miconcar.com/uploads/documentos/concar_cb_no_domiciliado_5_.jpg"
        width={500}
        height={500}
      />
      <p>3. Se finaliza el asiento.</p>
    </div>
  );
};

export default page;
