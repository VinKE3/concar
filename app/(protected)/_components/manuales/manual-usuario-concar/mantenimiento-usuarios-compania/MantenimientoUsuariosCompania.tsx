import Image from "next/image";
import React from "react";

const MantenimientoUsuariosCompania = () => {
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite la asignación de una o más compañías a los usuarios
        creados en el Mantenimiento de Usuarios tanto de tipo Master, Supervisor
        como Operador. Seleccionada la opción, el sistema mostrará la siguiente
        pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_2_mantenimiento_usuarios_compania_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>En esta pantalla se podrá</p>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_2_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CREAR UNA ASIGNACIÓN DE COMPAÑÍA (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_3_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>MODIFICAR UNA ASIGNACIÓN DE COMPAÑÍA (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_4_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>ELIMINAR UNA ASIGNACIÓN DE COMPAÑÍA (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_5_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CONSULTAR UNA ASIGNACIÓN DE COMPAÑÍA (Alt- T)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_6_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>BUSCAR UNA ASIGNACIÓN DE COMPAÑÍA (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_2_mantenimiento_usuarios_compania_7_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        USUARIO: Elegir con Shift+F1 el usuario al cual se le va a asignar una
        compañía.
      </p>
      <p>COMPAÑÍA: Elegir la compañía a asignar.</p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_2_mantenimiento_usuarios_compania_8_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <p>
        El usuario al que se le asignó la compañía sólo podrá ingresar a las
        compañías que se le asignen en esta opción.
      </p>
    </div>
  );
};

export default MantenimientoUsuariosCompania;
