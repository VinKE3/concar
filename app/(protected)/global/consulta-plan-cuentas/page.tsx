import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">3.8 CONSULTA PLAN DE CUENTAS</h1>
      <p>
        Esta opción sirve para realizar consultas al Plan de Cuentas creado en
        el sistema CONCAR SQL.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_consulta_de_tabla_general_concar_1-.jpg"
        alt="tabla general concar"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CONSULTAR (Alt-T)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>BUSCAR (Alt-B)</h1>
      </div>
    </div>
  );
};

export default page;
