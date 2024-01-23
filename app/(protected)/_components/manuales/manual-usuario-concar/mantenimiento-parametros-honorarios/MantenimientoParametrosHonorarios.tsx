import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoParametrosHonorarios = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Parámetros Honorarios",
      href: "https://miconcar.com/uploads/documentos/301_4.10._CONCAR_SQL_Mantenimiento_Parametros_Honorarios_301-D00298.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        Este módulo del sistema permite registrar los parámetros que usará el
        programa de registro de comprobantes honorarios.
      </p>
      <p>
        Esta pantalla cuenta con 5 pestañas las cuales se detallan a
        continuación:
      </p>
      <h1 className="font-bold">PESTAÑA CUENTA HONORARIO</h1>
      <p>
        Registrar las cuentas contables en las cuales se provisionarán los
        Honorarios, los datos a ingresar son:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={450}
        height={450}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GRABAR (Alt-G)</h1>
      </div>
      <p>
        CUENTA: Ingresar la cuenta contable. Deberá existir en el Mantenimiento
        de Plan de cuentas
      </p>
      <p>
        DESCRIPCIÓN: Descripción de la cuenta. El sistema lo asigna de forma
        automática
      </p>
      <p>MONEDA: Unidad monetaria en que está registrada la cuenta</p>
      <h1 className="font-bold underline">PESTAÑA TIPO DOCUMENTO</h1>
      <p>
        Ingresar los documentos a utilizar en el registro de Honorarios, los
        datos a ingresar son:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_6_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={450}
        height={450}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GRABAR (Alt-G)</h1>
      </div>
      <p>TIPO DOCUMENTO: Ingresar RH Recibo por Honorarios.</p>
      <p>
        DESCRIPCIÓN: Nombre del documento. El sistema lo asigna de forma
        automática
      </p>
      <p>
        DEBE/HABER: Indicar si el documento se registra al Debe o Haber en el
        asiento contable.
      </p>
      <h1 className="font-bold">PESTAÑA SUBDIARIO</h1>
      <p>
        Ingresar el subdiario que se va a utilizar para registrar los recibos
        por honorarios.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_7_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={450}
        height={450}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GRABAR (Alt-G)</h1>
      </div>
      <p>SUBDIARIO: Código del subdiario</p>
      <p>
        DESCRIPCIÓN: Descripción del subdiario. El sistema lo asigna de forma
        automática
      </p>
      <h1 className="font-bold underline">PESTAÑA PARÁMETROS VARIOS</h1>
      <p>
        Considerar las cuentas contables para los tributos que afectan a los
        honorarios.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_8_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={450}
        height={450}
      />
      <p>En esta pantalla se podrá:</p>
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GRABAR (Alt-G)</h1>
      </div>
      <p>
        CUENTA PARA RETENCIÓN DE RENTA: Registrar la cuenta de retención de
        renta. Deberá existir en el Mantenimiento de Plan de cuentas
      </p>
      <p>CUENTA PARA RETENCIÓN DE SOLIDARIDAD: En desuso</p>
      <h1 className="font-bold underline">PESTAÑA CUENTAS GASTO</h1>
      <p>
        Incluir las cuentas de gastos necesarias para el registro de los recibos
        por honorarios.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_9_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={450}
        height={450}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_10_mantenimiento_parametros_honorarios_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GRABAR (Alt-G)</h1>
      </div>
      <p>
        CUENTA: Ingresar la cuenta contable. Deberá existir en el Mantenimiento
        de Plan de cuentas
      </p>
      <p>
        DESCRIPCIÓN: Descripción de la cuenta. El sistema lo asigna de forma
        automática
      </p>
      <Table items={data} />
    </div>
  );
};

export default MantenimientoParametrosHonorarios;
