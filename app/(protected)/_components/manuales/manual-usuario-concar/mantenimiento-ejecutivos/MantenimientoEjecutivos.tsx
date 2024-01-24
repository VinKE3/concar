import Image from "next/image";
import React from "react";

const MantenimientoEjecutivos = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">11.6 Mantenimiento de Ejecutivos</h1>
      <p>
        Esta opción permite registrar en el sistema los distintos ejecutivos de
        la empresa. Previamente se debe ingresar los datos en el Mantenimiento
        de Empresas.
      </p>
      <p>Al ingresar a esta opción aparecerá una ventana como la siguiente:A</p>
      <p>Consideraciones Previas:</p>
      <p>Agregar datos necesarios para la emisión del certificado</p>
      <p>Configurar las siguientes Tablas Generales:</p>
      <p>Ir a Archivos\Tabla General\Mantenimiento Tabla General</p>
      <p>Ir a la tabla 00 y crear las tablas 68</p>
      <p>Luego ingresar los siguientes datos a esa tabla:</p>
      <p>Ejemplo:</p>
      <p>68 TIPO DE EJECUTIVO</p>
      <p>01 GERENTE</p>
      <p>Al ingresar a esta opción aparecerá una ventana como la siguiente:</p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_6_mantenimiento_de_ejecutivos_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
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
          src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>ELIMINAR (Alt-E)</h1>
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
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_4_9_mantenimiento_movimientos_bancos_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>BUSCAR (Alt-B)</h1>
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
        src="https://miconcar.com/uploads/documentos/concar_sql_11_6_mantenimiento_de_ejecutivos_7_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        CÓDIGO DE EMPRESA: Presionar Shift+F1 para seleccionar la empresa
        previamente creada en el Mantenimiento de Empresas.
      </p>
      <p>
        CÓDIGO DE EJECUTIVO: Ingresar código de ejecutivo hasta con 8
        caracteres.
      </p>
      <p>NOMBRE: Ingresar nombre del ejecutivo.</p>
      <p>
        TIPO: Seleccionar tipo de ejecutivo previamente creado en la Tabla
        General 68.
      </p>
      <p>CARGO: Ingresar cargo del ejecutivo.</p>
      <p>NACIONALIDAD: Ingresar nacionalidad del ejecutivo.</p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_5_mantenimiento_de_empresas_9_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default MantenimientoEjecutivos;
