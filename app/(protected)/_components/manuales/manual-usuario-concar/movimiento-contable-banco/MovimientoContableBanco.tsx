import Image from "next/image";
import React from "react";

const MovimientoContableBanco = () => {
  return (
    <div className="space-y-3">
      <p>
        Muestra los movimientos contables registrados por banco. En la columna
        situación aparecerá Pendiente cuando el movimiento está pendiente de
        conciliar y C cuando el movimiento está conciliado.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_9_4_movimiento_contable_por_banco_1_.jpg"
        alt="Movimiento Contable Banco"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_4_consultas_2_3.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>CONSULTAR UN MOVIMIENTO (Alt- T)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_cb_c10_4_consultas_3_2.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
        <h1>BUSCAR UN MOVIMIENTO (Alt-B)</h1>
      </div>
    </div>
  );
};

export default MovimientoContableBanco;
