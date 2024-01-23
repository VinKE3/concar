"use client";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Table from "@/components/Table";

const CargaAsientosOtrosSistemas = () => {
  const items = [
    {
      id: 1,
      title: "Archivo DBF",
      href: "https://miconcar.com/uploads/documentos/193_RSConcarSQL_EstructuraArchivos_Carga_Asientos_ArchivosDBF_CTMOVI321.pdf",
    },
    {
      id: 2,
      title: "Tablas SQL",
      href: "https://miconcar.com/uploads/documentos/193_RsConcarSQL_Formatos_Archivos_Carga_Asientos_Tablas_SQL.pdf",
    },
  ];
  const data = [
    {
      id: 1,
      subsidario: "04",
      comprobante: "010001",
      mes: "ENERO",
    },
    {
      id: 2,
      subsidario: "04",
      comprobante: "010002",
      mes: "ENERO",
    },
    {
      id: 3,
      subsidario: "04",
      comprobante: "020001",
      mes: "FEBRERO",
    },
    {
      id: 4,
      subsidario: "05",
      comprobante: "010001",
      mes: "ENERO",
    },
    {
      id: 5,
      subsidario: "05",
      comprobante: "010002",
      mes: "ENERO",
    },
    {
      id: 6,
      subsidario: "05",
      comprobante: "020001",
      mes: "FEBRERO",
    },
  ];
  let rows: any = [];
  if (data) {
    rows = data.map((user) => {
      return {
        id: user.id,
        subsidario: user.subsidario,
        comprobante: user.comprobante,
        mes: user.mes,
      };
    });
  }
  const columns: GridColDef[] = [
    { field: "subsidario", headerName: "SUBDIARIO", width: 250 },
    { field: "comprobante", headerName: "COMPROBANTE", width: 250 },
    { field: "mes", headerName: "MES A QUE CORRESPONDE", width: 250 },
  ];
  const dataComprobantes = [
    {
      id: 1,
      nombre: "CSUBDIA",
      descripcion: "SUBDIARIO (TABLA 02)",
      tipo: "C",
      longitud: "4",
      decimales: "0",
    },
    {
      id: 2,
      nombre: "CCOMPRO",
      descripcion:
        "NUMERO DE COMPROBANTE  (MMNNNN) Los dos primeros dígitos son el mes contable y los 4 siguientes el numero correlativo",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 3,
      nombre: "CFECCOM",
      descripcion: "FECHA DE COMPROBANTE   (AAMMDD)",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 4,
      nombre: "CCODMON",
      descripcion: "CÓDIGO DE MONEDA  US = Dólares , MN=Soles",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 5,
      nombre: "CSITUA",
      descripcion: "SITUACION DEL COMPROBANTE (P = Pendiente , F = Finalizado)",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
    {
      id: 6,
      nombre: "CTIPCAM",
      descripcion: "TIPO DE CAMBIO (solo debe ingresarse para CTIPO = C )",
      tipo: "N",
      longitud: "10",
      decimales: "4",
    },
    {
      id: 7,
      nombre: "CGLOSA",
      descripcion: "GLOSA DEL COMPROBANTE",
      tipo: "C",
      longitud: "40",
      decimales: "0",
    },
    {
      id: 8,
      nombre: "CTOTAL",
      descripcion: "IMPORTE TOTAL DEL COMPROBANTE",
      tipo: "N",
      longitud: "14",
      decimales: "2",
    },
    {
      id: 9,
      nombre: "CTIPO",
      descripcion:
        "TIPO DE CONVERSION C=Especial, M=Compra, V=Venta y F=De acuerdo a fecha",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
    {
      id: 10,
      nombre: "CFLAG",
      descripcion:
        "FLAG DE CONVERSION DE MONEDA S= Comp. Con Conversión, N= Comp. Sin Conversión",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
    {
      id: 11,
      nombre: "CDATE",
      descripcion: "FECHA DE ACTUALIZACION (DATE) *",
      tipo: "D",
      longitud: "8",
      decimales: "0",
    },
    {
      id: 12,
      nombre: "CHORA",
      descripcion: "HORA DE ACTUALIZACION *",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 13,
      nombre: "CFECCAM",
      descripcion: "FECHA DE TIPO DE CAMBIO (Solo completar cuando CTIPO=F)",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 14,
      nombre: "CUSER",
      descripcion: "USUARIO ACTUALIZADOR *",
      tipo: "C",
      longitud: "5",
      decimales: "0",
    },
    {
      id: 15,
      nombre: "CORIG",
      descripcion: "SISTEMA DE ORIGEN **",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 16,
      nombre: "CFORM",
      descripcion:
        "MANUAL / AUTOMATICO Completar siempre con M=Manual, si se coloca A, el sistema bloqueará el comprobante y no podrá ser modificado por el usuario",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
    {
      id: 17,
      nombre: "CTIPCOM",
      descripcion: "TIPO COMPROBANTE **",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 18,
      nombre: "CEXTOR",
      descripcion: "COMPROBANTE EXTORNADO **",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
  ];
  let rowsComprobantes: any = [];
  if (dataComprobantes) {
    rowsComprobantes = dataComprobantes.map((comprobantes) => {
      return {
        id: comprobantes.id,
        nombre: comprobantes.nombre,
        descripcion: comprobantes.descripcion,
        tipo: comprobantes.tipo,
        longitud: comprobantes.longitud,
        decimales: comprobantes.decimales,
      };
    });
  }
  const columnsComprobantes: GridColDef[] = [
    { field: "nombre", headerName: "Nombre Campo", width: 150 },
    { field: "descripcion", headerName: "Descripción", width: 850 },
    { field: "tipo", headerName: "Tipo Dato", width: 80 },
    { field: "longitud", headerName: "Long", width: 50 },
    { field: "decimales", headerName: "Cant.Dec", width: 70 },
  ];

  const dataDetalles = [
    {
      id: 1,
      nombre: "DSUBDIA",
      descripcion: "CODIGO DE SUBDIARIO Según Tabla General 02 de Concar",
      tipo: "C",
      longitud: "4",
      decimales: "0",
    },
    {
      id: 2,
      nombre: "DCOMPRO",
      descripcion: "NUMERO DE COMPROBANTE",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 3,
      nombre: "DSECUE",
      descripcion: "SECUENCIA Correlativo iniciar en 0001 en cada comprobante",
      tipo: "C",
      longitud: "4",
      decimales: "0",
    },
    {
      id: 4,
      nombre: "DFECCOM",
      descripcion:
        "FECHA DE COMPROBANTE Define el mes contable, Formato: YYmmDD",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 5,
      nombre: "DCUENTA",
      descripcion:
        "CUENTA CONTABLE Código debe existir en Mantenimiento de Plan de Cuentas",
      tipo: "C",
      longitud: "12",
      decimales: "0",
    },
    {
      id: 6,
      nombre: "DCODANE",
      descripcion:
        "CÓDIGO DE ANEXO Código debe existir en Mantenimiento de Anexos, validar Tipo y código.",
      tipo: "N",
      longitud: "18",
      decimales: "0",
    },
    {
      id: 7,
      nombre: "DCENCOS",
      descripcion: "CENTRO DE COSTOS Según Tabla General 05 de Concar",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 8,
      nombre: "DCODMON",
      descripcion: "CÓDIGO DE MONEDA US = Dólares , MN=Soles",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 9,
      nombre: "DDH",
      descripcion: "DEBE / HABER D=Debe, H=Haber)",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
    {
      id: 10,
      nombre: "DIMPORT",
      descripcion: "IMPORTE Debe considerarse en la moneda definida en CODMON",
      tipo: "N",
      longitud: "14",
      decimales: "2",
    },
    {
      id: 11,
      nombre: "DTIPDOC",
      descripcion:
        "TIPO DE DOCUMENTO Código de Tipo de documento según la Tabla General 06 de Concar (FT=Factura)",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 12,
      nombre: "DNUMDOC",
      descripcion: "NUMERO DE DOCUMENTO Incluye serie y número (sss-nnnnnnn)",
      tipo: "C",
      longitud: "20",
      decimales: "0",
    },
    {
      id: 13,
      nombre: "DFECDOC",
      descripcion: "FECHA DE DOCUMENTO Fecha de emisión del documento (YYmmDD)",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 14,
      nombre: "DFECVEN",
      descripcion: "FECHA DE VENCIMIENTO Fecha de Vcto. del documento (YYmmDD)",
      tipo: "C",
      longitud: "6",
      decimales: "0",
    },
    {
      id: 15,
      nombre: "DAREA",
      descripcion: "CÓDIGO DE AREA Código según la Tabla General 26 de Concar",
      tipo: "C",
      longitud: "3",
      decimales: "0",
    },
    {
      id: 16,
      nombre: "DFLAG",
      descripcion:
        "FLAG DE CONVERSION DE MONEDA S= Comp. Con Conversión N= Comp. Sin Conversión",
      tipo: "C",
      longitud: "1",
      decimales: "0",
    },
    {
      id: 17,
      nombre: "DXGLOSA",
      descripcion: "GLOSA DEL MOVIMIENTO Puede ser diferente en cada línea",
      tipo: "C",
      longitud: "30",
      decimales: "0",
    },
    {
      id: 18,
      nombre: "DDATE",
      descripcion: "FECHA DE ACTUALIZACION *",
      tipo: "D",
      longitud: "8",
      decimales: "0",
    },
    {
      id: 19,
      nombre: "DCODANE2",
      descripcion: "CODIGO DE ANEXO AUXILAR",
      tipo: "C",
      longitud: "18",
      decimales: "0",
    },
    {
      id: 20,
      nombre: "DUSIMPOR",
      descripcion:
        "IMPORTE EN DOLARES Solo se llena en los comprobantes SIN Conversión (FLAG=N)",
      tipo: "N",
      longitud: "14",
      decimales: "2",
    },
    {
      id: 21,
      nombre: "DMNIMPOR",
      descripcion:
        "IMPORTE EN SOLES Solo se llena en los comprobantes SIN Conversión (FLAG=N",
      tipo: "N",
      longitud: "14",
      decimales: "2",
    },
    {
      id: 22,
      nombre: "DCODARC",
      descripcion: "TIPO COMPROBANTE **",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 23,
      nombre: "DCODANE2",
      descripcion: "CODIGO DE ANEXO AUXILAR",
      tipo: "C",
      longitud: "18",
      decimales: "0",
    },
    {
      id: 24,
      nombre: "DMEDPAG",
      descripcion: "MEDIO DE PAGO",
      tipo: "C",
      longitud: "8",
      decimales: "0",
    },
    {
      id: 25,
      nombre: "DTIDREF",
      descripcion:
        "TIPO DOCUMENTOREFERENCIA Código de Tipo de documento según la Tabla General 06 de Concar (FT=Factura)",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 26,
      nombre: "DNDOREF",
      descripcion: "NUMERO DOCUMENTO REFERENCIA (Incluye serie y número)",
      tipo: "C",
      longitud: "2",
      decimales: "0",
    },
    {
      id: 27,
      nombre: "DFECREF",
      descripcion: "FECHA DOCUMENTO REFERENCIA",
      tipo: "D",
      longitud: "8",
      decimales: "0",
    },
    {
      id: 28,
      nombre: "DBIMREF",
      descripcion: "BASE IMPONIBLE DOCUMENTO PROVISION",
      tipo: "N",
      longitud: "14",
      decimales: "2",
    },
    {
      id: 29,
      nombre: "DIGVREF",
      descripcion: "IGV DOCUMENTO PROVISION",
      tipo: "N",
      longitud: "14",
      decimales: "0",
    },
    {
      id: 30,
      nombre: "DMAQREF",
      descripcion:
        "Nro. de la Máquina Registradora para los documentos  de referencia (DTIPREF) “TK”",
      tipo: "C",
      longitud: "20",
      decimales: "0",
    },
    {
      id: 31,
      nombre: "DIGVCOM",
      descripcion:
        "IMPORTE DE IGV, para comprobantes de Compras con IGV sin derecho a crédito fiscal",
      tipo: "N",
      longitud: "14",
      decimales: "2",
    },
  ];
  let rowsDetalles: any = [];
  if (dataDetalles) {
    rowsDetalles = dataDetalles.map((detalles) => {
      return {
        id: detalles.id,
        nombre2: detalles.nombre,
        descripcion2: detalles.descripcion,
        tipo2: detalles.tipo,
        longitud2: detalles.longitud,
        decimales2: detalles.decimales,
      };
    });
  }
  const columnsDetalles: GridColDef[] = [
    { field: "nombre2", headerName: "Nombre Campo", width: 150 },
    { field: "descripcion2", headerName: "Descripción", width: 850 },
    { field: "tipo2", headerName: "Tipo Dato", width: 80 },
    { field: "longitud2", headerName: "Long", width: 50 },
    { field: "decimales2", headerName: "Cant.Dec", width: 70 },
  ];
  return (
    <>
      <div className="">
        <h1 className="font-bold">Descripción:</h1>
        <p>Como cargar asientos desde otros sistemas.</p>
      </div>
      <div className="py-5">
        <h1 className="font-bold">Procedimiento:</h1>
        <p>Como cargar asientos desde otros sistemas.</p>
      </div>
      <div>
        <h1 className="py-2">
          1.- CARGA DE ASIENTOS DESDE OTROS SISTEMAS - GENERALIDADES{" "}
        </h1>
        <p>
          El sistema de Contabilidad permite incluir asientos contables
          producidos en forma automática desde otros sistemas del usuario. Por
          ejemplo si se dispone de un Sistema de Facturación, el usuario puede
          preparar un programa para producir el asiento contable y grabarlo en
          un archivo en una memoria o disco duro y luego cargar este asiento en
          el sistema de Contabilidad, evitándose la digitación. Estos asientos
          pueden producirse en forma diaria, semanal, mensual y la afectación
          contable y numeración de comprobantes deben ser definidas por el
          usuario contable. Para esto se debe producir dos archivos los cuales
          deben contener los asientos que se van a agregar cuya estructura
          revisaremos más adelante.{" "}
        </p>
        <h1 className="py-2">
          2.- NUMERACIÓN DE ASIENTOS GENERADOS DESDE OTROS SISTEMAS
        </h1>
        <p>
          Los comprobantes deben ser numerados correlativamente por subdiario y
          mes contable. El usuario debe decidir si mantendrá un archivo de
          control de numeración de comprobantes para cada sistema que origina el
          comprobante, o si desea puede utilizar el archivo de control de
          numeración CTXXXXNUMEAA.DBF (Donde XXXX = Compañía y AA = Ejercicio)
          para obtener dicha numeración. Se recomienda que cada sistema que
          genera comprobantes tenga asignado un número de subdiario exclusivo
          para tener un mejor control de la numeración. La numeración de los
          comprobantes es por cada Subdiario y mes contable con la siguiente
          estructura (EJEMPLO) :
        </p>
      </div>
      <div className="py-5" style={{ height: 440, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
      </div>
      <div>
        <h1>
          Los dos primeros dígitos del comprobante indican el mes contable y
          debe coincidir con la fecha del comprobante.{" "}
        </h1>
        <p>Los dos archivos son los siguientes :</p>
        <h2 className="space-x-4 py-2">
          <span>CCXXXXYY </span>
          <span>- Comprobantes Cabeceras</span> <span>Ejemplo CC000112</span>
        </h2>
        <h2 className="space-x-4">
          <span>CDXXXXYY </span>
          <span>- Comprobantes Detalles</span> <span>Ejemplo CC000112</span>
        </h2>
        <p>
          En donde XXXX es el código de la compañía (0001) y YY el año del
          ejercicio contable (2012).
        </p>
        <p>
          En el archivo de Cabeceras debe existir un registro por cada
          comprobante, y el archivo de detalles deben existir varios registros
          por comprobante. Los campos de relación son los campos SUBDIA y
          COMPRO.
        </p>
        <Image src="/dic1.jpg" alt="1" width={500} height={300} />
      </div>
      <div className="space-y-2">
        <h1>NOTAS</h1>
        <p>
          - Existe un archivo CTXXXXNUMEAA.DBF por cada ejercicio contable y
          Compañía. Ejemplo CT0001NUME13.DBF: Corresponde a la compañía 0001 y
          al ejercicio 2013.
        </p>
        <p>
          - El archivo CTXXXXNUMEAA.DBF es usado por los programas de registro
          de comprobantes por lo que si se desea actualizar deben usarse las
          convenciones para manejo de red.
        </p>
        <p>
          - Para actualizar un registro del CTXXXXNUMEAA.DBF, debe buscarse
          dicho registro por los campos indicados en el índice, si no existe el
          registro debe crearse y luego incrementar el campo CTNUMER en 1,
          regrabándose inmediatamente.
        </p>
      </div>
      <div className="space-y-2">
        <h1>
          3.- ARCHIVOS DE CABECERA Y DETALLE DE ASIENTOS GENERADOS DESDE OTROS
          SISTEMAS
        </h1>
        <p>
          Los dos archivos que contienen la información de los comprobantes a
          cargar son los siguientes:
        </p>
        <p>CCXXXXAA.dbf - Comprobantes Cabeceras Ejemplo CC000113 </p>
        <p>CDXXXXAA.dbf - Comprobantes Detalles Ejemplo CD000113 </p>
        <p>
          En donde XXXX es el código de la compañía y AA el año del ejercicio
          contable.
        </p>
        <p>
          En el archivo de Cabeceras debe existir un registro por cada
          comprobante, y el archivo de detalles deben existir varios registros
          por comprobante. Los campos de relación son los campos SUBDIA y
          COMPRO.
        </p>
      </div>
      <div className="py-5" style={{ height: 600, width: "75%" }}>
        <DataGrid
          rows={rowsComprobantes}
          columns={columnsComprobantes}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
        />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">
          *Estos datos se actualizan automáticamente al cargar los comprobantes,
          en el programa de interface, deben dejarse VACIOS.
        </h1>
        <h1 className="font-bold">
          **Estos campos deben existir, pero dejarse VACIOS, son de uso interno
          de Real Systems.
        </h1>
      </div>
      <div className="py-5 text-xl">
        <h1 className="font-bold">
          Estructura de la Tabla CDXXXXAA – Comprobantes Detalle
        </h1>
      </div>
      <div className="py-5" style={{ height: 600, width: "75%" }}>
        <DataGrid
          rows={rowsDetalles}
          columns={columnsDetalles}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
        />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">
          *Estos datos se actualizan automáticamente al cargar los comprobantes,
          en el programa de interface, deben dejarse VACIOS.
        </h1>
        <h1 className="font-bold">
          **Estos campos deben existir, pero dejarse VACIOS, son de uso interno
          de Real Systems.
        </h1>
      </div>
      <div>
        <h1>IMPORTANTE: </h1>
        <p>
          Todos los campos deben ser completados o dejados vacíos dependiendo de
          la configuración en el Mantenimiento del Plan de Cuentas de cada una
          de las cuentas utilizadas en los asientos. Ejemplo: Si la cuenta 70x
          está configurada para pedir Centro de Costos, en esa secuencia debe
          consignarse un dato en el campo DCENCOS y lo mismo para todos los
          demás campos.
        </p>
      </div>
      <div>
        <Table items={items} />
      </div>
    </>
  );
};

export default CargaAsientosOtrosSistemas;
