import Image from "next/image";
import React from "react";

const MantenimientoUsuarios = () => {
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite la creación, modificación o eliminación de los
        usuarios del sistema, asignándoles un código, un password (clave
        secreta) y facultades de acceso. Seleccionada la opción el sistema
        mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_1_.jpg"
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
        <h1>CREAR UN USUARIO (Alt-C)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_3_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>MODIFICAR UN USUARIO (Alt-M)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_4_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>ELIMINAR UN USUARIO (Alt-E)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_5_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CONSULTAR UN USUARIO (Alt- T)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_6_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>BUSCAR UN USUARIO (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_7_.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>CAMBIAR EL PASSWORD</h1>
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
        src="https://miconcar.com/uploads/documentos/concar_sql_11_1mantenimiento_de_usuarios_8_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>Ingresar:</p>
      <p>
        CÓDIGO USUARIO: Identificación de usuario, puede tener hasta 5 letras o
        números.
      </p>
      <p>NOMBRE: Nombre de usuario, hasta 40 caracteres.</p>
      <p>
        TIPO DE USUARIO: Elegir entre Master, Supervisor y Operador. Las
        facultades de los tipos de usuarios son:
      </p>
      <ul className="px-5 list-disc">
        <li>
          Master y Supervisor: Tendrán acceso sin restricción a todas las
          opciones del Sistema
        </li>
        <li>
          Operador: Sólo tendrá acceso a las opciones que un usuario Master o
          Supervisor le haya habilitado previamente en la opción Mantenimiento
          Usuarios/Programas.
        </li>
      </ul>
      <p>
        PASSWORD: Clave secreta del usuario de hasta 8 letras o números. Dato no
        visible.
      </p>
    </div>
  );
};

export default MantenimientoUsuarios;
