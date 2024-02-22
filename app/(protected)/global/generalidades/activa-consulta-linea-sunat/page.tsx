import Image from "next/image";

const page = () => {
  return (
    <div className="space-y-3">
      <p>
        Para contar con la opción de consulta en línea de RUC y tipo de cambio
        desde la página de Sunat, es necesario que cumpla con los siguientes
        requisitos:
      </p>
      <ul className="px-5 list-decimal">
        <li>
          Instalar la versión de Concar SQL 13.32 correctamente, para ello vea
          el instructivo Actualizacion
        </li>
        <li>Contar con servicio de internet activo.</li>
        <li>Activar el check de consulta en línea Sunat.</li>
      </ul>
      <p>
        Habiendo cumplido con los requisitos 1 y 2, entre al sistema de
        contabilidad CONCAR® a la opción Utilitarios/Parametros Generales, en
        ésta opción active el check según se muestra en la imagen siguiente:
      </p>
      <Image
        src="https://miconcar.com/uploads/documentos/nueva_version_13_32_concar_sql_activa_consulta_1.png"
        alt="Activación de consulta en línea Sunat"
        width={500}
        height={500}
      />
      <p>
        Haga clic en Grabar y habrá activado la consulta en línea desde el
        portal de Sunat para RUC y Tipo de cambio.
      </p>
      <p>
        Al utilizar las opciones habilitadas en el sistema, encontrará la nueva
        forma de registro de:
      </p>
      <ul className="px-5 list-decimal">
        <li>
          Tipo de Cambio (devolverá el tipo de cambio compra y venta desde Sunat
          al crear cada registro nuevo)
        </li>
        <li>
          Creación y Modificación de Anexos (devolverá los datos de cada RUC que
          se encuentre registrado en el portal de Sunat).
        </li>
      </ul>
    </div>
  );
};

export default page;
