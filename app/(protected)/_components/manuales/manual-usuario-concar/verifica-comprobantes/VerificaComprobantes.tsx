import Image from "next/image";
import React from "react";

const VerificaComprobantes = () => {
  return (
    <div className="space-y-3">
      <p>
        Permite visualizar a los comprobantes que probablemente estén generando
        un descuadre en los Estados Financieros. Seleccionada la opción el
        sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_utilitarios_verifica_comprobante_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>MONEDA: Seleccionar la unidad monetaria</p>
      <p>SUBDIARIO: Seleccionar el subdiario que se desea revisar</p>
      <p>MES: Mes (2 dígitos) a consultar en el reporte</p>
      <p>OPCIONES DE IMPRESIÓN:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_utilitarios_verifica_comprobante_2_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_utilitarios_verifica_comprobante_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        En este reporte se debe tomar en cuenta sólo aquellos comprobantes que
        tienen valor 0.00 en la columna HABER de OTRAS CUENTAS (última columna
        de la derecha) y que corresponden a subdiarios donde se registran
        cuentas de gasto o costo que generan asientos automáticos de destino.
      </p>
      <p>
        Consultar el asiento para visualizar la cuenta del elemento 6 o 9 que
        está generando el descuadre.
      </p>
      <p>
        En este caso, la cuenta 601101 genera su destino vía el Mantenimiento
        del Plan de Cuentas en los campos Cuenta Cargo y Cuenta Abono.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/modulo_utilitarios_verifica_comprobante_4_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        La otra alternativa sería que la cuenta que esté generando el descuadre
        genere su destino vía el centro de costo y no tenga registrado el mismo.
        Para superar este problema debe activarse el check de C.Costo en la
        cuenta en el Mantenimiento de Plan de Cuentas, corregir el asiento
        contable agregando el centro de costo en citada cuenta.
      </p>
    </div>
  );
};

export default VerificaComprobantes;
