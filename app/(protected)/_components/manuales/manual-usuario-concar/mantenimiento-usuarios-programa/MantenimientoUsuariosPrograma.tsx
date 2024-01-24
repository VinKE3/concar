import Image from "next/image";
import React from "react";

const MantenimientoUsuariosPrograma = () => {
  return (
    <div className="space-y-3">
      <p>
        Esta opción permite la asignación o restricción de las opciones de menú
        a los usuarios que fueron creados como Operadores en el Mantenimiento de
        Usuarios. Seleccionada la opción el sistema mostrará la siguiente
        pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_3_mantenimiento_usuarios_programa_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Seleccionar al usuario operador al que se le van a asignar opciones.
      </p>
      <div className="flex items-center justify-start">
        <h1>Presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_3_mantenimiento_usuarios_programa_2_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_11_3_mantenimiento_usuarios_programa_3_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>
          Seleccionar las opciones dándole un clic al recuadro de la izquierda
          para activar el check y presionar el botón{" "}
        </h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_11_3_mantenimiento_usuarios_programa_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default MantenimientoUsuariosPrograma;
