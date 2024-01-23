import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoDocumentosReferencia = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Documentos de Referencia",
      href: "https://miconcar.com/uploads/documentos/303_4.12._CONCAR_SQL_Mantenimiento_Documentos_de_Referencia_303-D00300.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        En esta opción se configuran los documentos que requieren que se active
        el campo de documento de referencia en el registro de compras y ventas.
        Los documentos que vienen pre-configurados son NA y NC para las Notas de
        Crédito y ND para Notas de Débito
      </p>
      <h1 className="font-bold">4.12 Mantenimiento Documentos de Referencia</h1>
      <p>
        En esta opción se configuran los documentos que requieren que se active
        el campo de documento de referencia en el registro de compras y ventas.
        Los documentos que vienen pre-configurados son NA y NC para las Notas de
        Crédito y ND para Notas de Débito.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_12_mantenimiento_documentos_referencia_1_.jpg"
        alt="Mantenimiento Documentos Referencia"
        width={600}
        height={600}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CREAR (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_3_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>MODIFICAR (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_8_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>ELIMINAR (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_12_mantenimiento_docuemntos_de_referencia_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GENERA HOJA DE CÁLCULO (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_12_mantenimiento_docuemntos_de_referencia_6_.jpg"
        alt="Mantenimiento Documentos Referencia"
        width={600}
        height={600}
      />
      <p>
        TIPO DOC: 2 caracteres previamente configurado en la Tabla General 06.
      </p>
      <p>DESCRIPCIÓN: Nombre del documento</p>
      <p>T.DOC. SUNAT: Código SUNAT del documento</p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_12_mantenimiento_docuemntos_de_referencia_7_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_12_mantenimiento_documentos_referencia_1_.jpg"
        alt="Mantenimiento Documentos Referencia"
        width={600}
        height={600}
      />
      <Table items={data} />
    </div>
  );
};

export default MantenimientoDocumentosReferencia;
