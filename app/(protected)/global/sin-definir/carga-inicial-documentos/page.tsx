import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">5.20. CARGA INICIAL DOCUMENTOS</h1>
      <p>
        Esta opción permite hacer la carga inicial en el sistema de los
        documentos pendientes a una fecha determinada. Esta opción sirve para
        cargar documentos por pagar a la cartera sin que genere comprobante
        contable al CONCAR SQL.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_1_1.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={600}
        height={600}
      />
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_2_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CREAR UN DOCUMENTO (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_8_mantenimiento_cuentas_bancos_3_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>MODIFICAR UN DOCUMENTO (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_4_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>ELIMINAR UN DOCUMENTO (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_4_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CONSULTAR UN DOCUMENTO (Alt-T)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_6_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>BUSCAR UN DOCUMENTO (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_7_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>BÚSQUEDA BLANDA (Alt-U)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_8_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CREA COMPROBANTES (Alt-R)</h1>
      </div>
      <h1 className="font-bold">OPCIONES DE IMPRESIÓN:</h1>

      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_9_2.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>IMPRIMIR (Alt-I)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_10_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>VER REPORTE EN PANTALLA (Alt-P)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_11_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>GUARDAR COMO TEXTO (Alt-G)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_12_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_13_1.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={600}
        height={600}
      />
      <p>Ingresar:</p>
      <p>TIPO ACREEDOR: Desplegar el menú y seleccionar el tipo de acreedor.</p>
      <p>CÓDIGO: Presionar Shift + F1 y seleccionar el código del acreedor.</p>
      <p>TIPO: Desplegar el menú y seleccionar el tipo de documento.</p>
      <p>NRO. DOCUMENTO: Número de documento.</p>
      <p>FECHA DOC.: Fecha del documento.</p>
      <p>FECHA VCMTO.: Fecha de vencimiento del documento.</p>
      <p>
        FEC. CONTABLE: Fecha contable en el que se está ingresando el documento.
      </p>
      <p>
        MONEDA: Desplegar el menú y seleccionar la unidad monetaria en la que se
        encuentra el documento.
      </p>
      <p>
        TIPO CAMBIO: Desplegar el menú y seleccionar el tipo de cambio que se va
        a utilizar.
      </p>
      <p>IGV: Monto del IGV.</p>
      <p>IMPORTE: Importe del documento.</p>
      <p>
        CUENTA: Presionar Shift + F1 y seleccionar la cuenta contable a
        utilizar.
      </p>
      <p>
        DESCRIPCIÓN: Descripción/glosa para el documento que se está ingresando.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_14_1.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={600}
        height={600}
      />
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_16_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
      </div>
      <p>
        Para verificar si es el documento ha sido registrado, ingresar a la
        opción Consulta kardex por acreedor.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_17_.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={600}
        height={600}
      />
      <div className="flex items-center justify-start gap-1">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_18_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_carga_inicial_documentos_19_.jpg"
        alt="Mantenimiento Cuentas Bancos"
        width={600}
        height={600}
      />
    </div>
  );
};

export default page;
