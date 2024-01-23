import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const MantenimientoMovimientosBancos = () => {
  const data = [
    {
      id: 1,
      title: "Mantenimiento Movimientos Bancos",
      href: "https://miconcar.com/uploads/documentos/300_4.09._CONCAR_SQL_Mantenimiento_Movimientos_Bancos_300-D00297.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">4.9 Mantenimiento Movimientos Bancos</h1>
      <p>
        En esta opción se configuran los movimientos para el registro de
        Comprobante Bancos.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={650}
        height={500}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>BUSCAR (Alt-B)</h1>
      </div>
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
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_7_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={650}
        height={500}
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
        <h1>BUSCAR (Alt-B)</h1>
      </div>
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
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        TIPO DE MOVIMIENTO: Desplegar el menú y seleccionar entre E = ENTRADA o
        S = SALIDA
      </p>
      <h1>CÓDIGOS DE MOVIMIENTO:</h1>
      <ul className="list-disc px-4">
        <li>
          Para las ENTRADAS se podrían registrar, por ejemplo los siguientes
          movimientos:
        </li>
        <p>01 = INGRESOS POR INTERESES</p>
        <p>02 = PAGOS DE CLIENTES</p>
        <li>
          Para las SALIDAS se podrían registrar, por ejemplo los siguientes
          movimientos:
        </li>
        <p>01 = TRANSFERENCIA BANCARIA</p>
        <p>02 = PAGO A PROVEEDORES</p>
      </ul>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_10_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={650}
        height={500}
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
        <h1>BUSCAR (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CONSULTAR (Alt-T)</h1>
      </div>
      <p>
        TIPO DOCUMENTO: Seleccionar documento. Previamente configurado en el
        Mantenimiento Tabla General -Tabla General 15 Documentos Bancarios
      </p>
      <p>Presionar Enter</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_11_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={280}
        height={200}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_12_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={90}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_13_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={420}
        height={420}
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
        <h1>BUSCAR (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>CONSULTAR (Alt-T)</h1>
      </div>
      <div>
        <p>SECUENCIA: Correlativo a 01 dígito.</p>
        <p>
          DESCRIPCIÓN: Breve descripción de la cuenta. Campo alfanumérico a 10
          caracteres.
        </p>
        <p>
          CUENTA: Cuenta contable que carga o abona a la cuenta de Bancos, según
          sea entrada o salida.
        </p>
        <p>
          DEBE/HABER: Seleccionar H si fueran Entradas o D si fueran salidas.
        </p>
        <p>
          TIPO LÍNEA: Una línea para ingresar el detalle de la contracuenta de
          la 10XXXX. Si se elige esta opción, cuando se registre el detalle del
          comprobante; el sistema mostrará la siguiente pantalla:
        </p>
        <p>
          Si se ingresa a la opción Comprobante Bancos, se observa el tipo de
          movimiento configurado anteriormente
        </p>
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_14_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={650}
        height={500}
      />
      <Table items={data} />
    </div>
  );
};

export default MantenimientoMovimientosBancos;
