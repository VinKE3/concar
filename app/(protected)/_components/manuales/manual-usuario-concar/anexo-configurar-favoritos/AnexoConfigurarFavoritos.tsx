import Image from "next/image";
import React from "react";

const AnexoConfigurarFavoritos = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">ANEXO I: CONFIGURAR FAVORITOS</h1>
      <p>
        Al hacer click derecho en la pantalla principal del CONCAR® SQL, se
        activará la opción
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_2_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={200}
        height={100}
      />
      <p>
        la misma que sirve como atajo para ingresar a las opciones de manera
        rápida.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_1_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={700}
        height={500}
      />
      <p>
        Al ingresar a dicha opción, el sistema mostrará la siguiente pantalla:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_3_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={700}
        height={500}
      />
      <p>En esta pantalla se podrá:</p>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_4_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>
          AGREGAR A FAVORITOS LAS OPCIONES MARCADAS EN EL MENÚ DE LA IZQUIERDA.
        </h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_5_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>ELIMINAR LAS OPCIONES MARCADAS EN LA LISTA DE FAVORITOS.</h1>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_6_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>GUARDAR FAVORITOS Y SALIR.</h1>
      </div>
      <p>
        En la izquierda se muestran los menús del sistema; se configuran
        haciendo clic en el signo “+”
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_7_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <p>
        Seleccionar las opciones deseadas activando los casilleros de la
        izquierda:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_8_1.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>A continuación, presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_9_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
        <h1>Nótese que lo seleccionada se copió en la parte derecha:</h1>
      </div>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_10_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-start">
        <h1>Finalmente, presionar el botón</h1>
        <Image
          src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_11_.jpg"
          alt="Mantenimiento Movimientos Bancos"
          width={35}
          height={40}
        />
      </div>
      <p>
        Para verificar que las opciones seleccionadas se hubieran configurado de
        forma correcta, nuevamente hacer click derecho en la pantalla principal
        del CONCAR® SQL.
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/concar_sql_anexo_1_configurar_favoritos_12_.jpg"
        alt="Mantenimiento Movimientos Bancos"
        width={650}
        height={500}
      />
      <p>
        Seleccione cualquiera de las opciones configuradas en sus “Favoritos” e
        ingresará de forma automática.
      </p>
    </div>
  );
};

export default AnexoConfigurarFavoritos;
