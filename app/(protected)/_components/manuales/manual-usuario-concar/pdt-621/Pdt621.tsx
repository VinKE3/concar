import Image from "next/image";
import React from "react";

const Pdt621 = () => {
  return (
    <div className="space-y-3">
      <p>
        En esta opción se genera el archivo plano de Percepciones para
        exportarlo al PDT 621.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_percepciones_del_igv_para_el_pdt621_ctpdtpi1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        MES DE GENERACIÓN: Ingresar el mes del que se desea generar el archivo
        plano.
      </p>
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_boton_factura_es_comp_percepcion_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={100}
          height={30}
        />
        <h1>COMPROBANTE DE PAGO ES EL COMPROBANTE DE PERCEPCIÓN (Alt-F)</h1>
      </div>
      <p>
        Tomará todos los comprobantes ingresados al mes de generación que tengan
        como subdiario los configurados en la Tabla 53 clave ZZSUBXX; y la
        cuenta que se encuentre configurada en la Tabla P1 clave CTAPCO
        (Percepción por Aplicar Contado)
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_tabla_53_parametros_para_comprobantes_de_creacion_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_tabla_p1_parametros_de_percepcion_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_boton_factura_es_comp_percepcion_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={100}
          height={30}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_generacion_de_archivo_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_10_boton_guardar_3.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={100}
          height={30}
        />
      </div>
      <p>Al abrir dicho archivo .txt</p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_bloc_de_notas_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_boton_comprobantes_percepcion_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={100}
          height={30}
        />
        <h1>COMPROBANTE DE PERCEPCIÓN (Alt-C)</h1>
      </div>
      <p>
        Tomará todos los comprobantes ingresados al mes de generación que tengan
        como subdiario los configurados en la Tabla P1 y que la clave tenga,
        como primeros 6 dígitos a la palabra SUBPCR; y la cuenta que se
        encuentre configurada en la Tabla P1 clave CTAPCR (Percepción por
        Aplicar Crédito)
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_tabla_p1_parametros_de_percepcion_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_boton_comprobantes_percepcion_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={100}
          height={30}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_generacion_de_archivo_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c12_10_boton_guardar_3.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={100}
          height={30}
        />
      </div>
      <p>Al abrir dicho archivo .txt</p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_concar_sql_c393_1_bloc_de_notas_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Pdt621;
