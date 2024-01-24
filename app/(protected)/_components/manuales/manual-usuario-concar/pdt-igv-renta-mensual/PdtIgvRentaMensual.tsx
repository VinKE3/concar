import Image from "next/image";
import React from "react";

const PdtIgvRentaMensual = () => {
  return (
    <div className="space-y-3">
      <p>
        El sistema genera el archivo PDT del mes seleccionado con las
        retenciones (6%, realizadas por los clientes que son Agentes de
        Retención).{" "}
      </p>
      <p className="font-semibold">
        10.2 PDT IGV Renta Mensual-Retención de Clientes
      </p>
      <p>
        El sistema genera el archivo PDT del mes seleccionado con las
        retenciones (6%, realizadas por los clientes que son Agentes de
        Retención).
      </p>
      <p>
        Previamente, se debe configurar en la Tabla 93 las siguientes claves.
      </p>
      <p>SUBR1: Registrar el subdiario para contabilizar las retenciones.</p>
      <p>CTAR: Registrar la cuenta de IGV Retenciones</p>
      <p>
        Adicionalmente la cuenta correspondiente a IGV retenciones deberá estar
        configurada de la siguiente manera, en el Mantenimiento de Plan de
        Cuentas:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_cb_c10_2_pdt_igv_renta_mensual_retencion_de_clientes_.jpg"
        alt="1"
        width={500}
        height={500}
      />
      <p>
        Finalmente, en el Mantenimiento de Tabla General-Tabla 28 tendrá que
        crear la siguiente clave:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_10_2_retencion_clientes_1_.jpg"
        alt="2"
        width={500}
        height={500}
      />
      <p>Ingresar a la opción:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_10_2_retencion_clientes_2_.jpg"
        alt="3"
        width={500}
        height={500}
      />
      <p>MES DE PROCESO: Seleccionar el mes</p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_10_2_retencion_clientes_3_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_10_2_retencion_clientes_4_.jpg"
        alt="4"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_10_2_retencion_clientes_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={100}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_10_2_retencion_clientes_6_.jpg"
        alt="4"
        width={500}
        height={500}
      />
    </div>
  );
};

export default PdtIgvRentaMensual;
