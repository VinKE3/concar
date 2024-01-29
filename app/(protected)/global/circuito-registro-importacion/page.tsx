import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Qué circuito seguir para el registro de una importación.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        Se sugiere el siguiente circuito, sin embargo el orden, las cuentas o el
        subdiario a escoger esta sujetos al criterio de su contador:
      </p>
      <h1 className="font-bold">I. En Comprobante Estandar con Conversión</h1>
      <p>
        1. Se ingresa la factura del exterior (Ver Importacion - Registro de
        Factura del Exterior (Invoice))
      </p>
      <p>
        2. Se ingresa la factura del servicio del exterior o no domiciliado (Ver
        Importacion - Registro de Factura Servicio del Exterior)
      </p>
      <p>
        3. Se provisiona el IGV (Ver Importacion - Provisión del IGV No
        Domiciliado)
      </p>
      <h1 className="font-bold">II. En Comprobante Compras</h1>
      <p>
        1. Se ingresa la DUA (Ver Importacion - DUA en el Registro de Compras)
      </p>
      <p>
        2. Se ingresa la factura del agente de Aduana (Ver Importacion - Ingreso
        de la Factura del Agente de Aduana)
      </p>
      <p>
        3. Se ingresa la aplicación del IGV por servicios prestados de no
        domiciliados (Ver Importacion - Aplicación del IGV por servicios
        prestados de no domiciliados)
      </p>
      <p>
        4. Se ingresan otros comprobantes de pago relacionados a la importación.
      </p>
      <p>
        5. De corresponder, después de haber generado el archivo mensual de
        compras, se registra el comprobante del servicio del exterior o no
        domiciliado (Ver Importacion - Constancia de Pago del IGV - Servicios de
        No Domiciliado)
      </p>
    </div>
  );
};

export default page;
