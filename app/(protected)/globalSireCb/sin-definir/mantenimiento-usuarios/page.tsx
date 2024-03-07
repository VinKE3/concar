import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">11.2. MANTENIMIENTO DE USUARIOS</h1>
      <p>
        En esta opción se tendrá que crear los usuarios que tendrán acceso al
        sistema. Cada usuario que haga uso del sistema; deberá estar registrado.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c285_1_mantenimiento_de_usuarios_ut1030_1.jpg"
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
          src="https://miconcar.com/uploads/documentos/manual_concar_cb_c13_1_boton_ordenar_a_z_8.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>ORDENAR UN USUARIO (Alt-B)</h1>
      </div>
      <div className="flex items-center justify-start gap-1">
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          alt="Mantenimiento Cuentas Bancos"
          width={35}
          height={30}
        />
        <h1>GUARDAR</h1>
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
        CÓDIGO USUARIO: Código alfanumérico de 5 dígitos que será la clave de
        usuario para acceder al sistema.
      </p>
      <p>NOMBRE: Es la descripción o nombre del usuario.</p>
      <p>
        TIPO DE USUARIO: El sistema establece 3 tipos de usuarios que tendrán
        acceso al sistema:
      </p>
      <ul className="px-5 list-disc">
        <li>
          M - Master: Es el usuario máximo del sistema y que tendrá acceso a
          todos los niveles del sistema.
        </li>
        <li>
          O - Operador: Este tipo de usuario se crea sin acceso a ninguna opción
          del sistema. Luego un usuario Master deberá asignarle las opciones que
          va a utilizar por la opción Mantenimiento Usuarios-Programa.
        </li>
        <li>
          S - Supervisor: Este tipo de usuario tiene los mismos alcances que el
          usuario Master
        </li>
      </ul>
      <p>
        PASSWORD: Clave de acceso privada de cada usuario. Puede ser de hasta 8
        dígitos.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/manual_sispag_sql_c285_1_modificar_usuario_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Presionar</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/sispag_sql_boton_guardar_1.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/sispag_sql_11_2_mantenimiento_de_usuarios_1_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
