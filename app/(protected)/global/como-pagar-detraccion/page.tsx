import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso</h1>
      <p>Cómo pagar la detracción.</p>
      <h1 className="font-bold">Solución</h1>
      <p>
        1. Entre a la opción Comprobantes Estándar con Conversión y seleccione
        el subdiario que considere conveniente:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_detracciones_1.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />

      <p>
        2. En el detalle del asiento, ingresar la cuenta de bancos desde la cual
        se retirará el dinero para el pago de la detracción. Puede ser una
        cuenta de efectivo o bancos, completar los campos correspondientes a la
        cuenta de efectivo o equivalente, consignando en Area{" "}
        {"050 PAGO A PROVEEDORES"}
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_detracciones_24.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />
      <p>
        3. Ingresar la cuenta de detracción, en el campo Tipo Dcmto. elija DR y
        en el campo Num. Dcmto. seleccione con Shift + F1 el comprobante de
        detracción:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_detracciones_31.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />
      <p>4. Finalizar el asiento.</p>
      <p>
        5. Adicionalmente, se puede comprobar un analítico de la cuenta para
        constatar la aplicación del depósito, entrando al menú Análisis de
        Cuenta, al submenú Reporte Estados de Cuenta, opción{" "}
        {"Por Cuenta-Anexo_CTDOCU04"}:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_detracciones_4.jpg"
        width={700}
        height={300}
        alt="Imagen 1"
      />
      <p>6. Verificar en el reporte como se aplica o cancela la detracción:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_detracciones_5.jpg"
        width={700}
        height={400}
        alt="Imagen 1"
      />
    </div>
  );
};

export default page;
