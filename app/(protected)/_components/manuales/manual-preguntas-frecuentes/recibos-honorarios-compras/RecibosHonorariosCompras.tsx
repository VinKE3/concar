import Image from "next/image";
import React from "react";

const RecibosHonorariosCompras = () => {
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <h1 className="font-bold">Descripción del problema</h1>
        <h2>
          Forma de mostrar los recibos por honorarios en el Registro de Compras.
        </h2>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold">Solución al problema</h1>
        <h2>
          Verificar en Reportes/ Libros y Registros Oficiales/ Registro Compras/
          Mantenimiento Parámetros Registro Compras lo siguiente:
        </h2>
      </div>
      <ul className="p-5 list-disc">
        <li>
          Pestaña Cuentas de Compra: Que estén las cuentas 424 de Honorarios por
          pagar y la cuenta 4017 de Retención de Cuarta Categoría.
        </li>
        <Image
          alt="RecibosHonorariosCompras1"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_mostrar_recibos_por_honorarios_en_registro_de_compras_.jpg"
          width={500}
          height={500}
        />
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Serie de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
        <Image
          alt="RecibosHonorariosCompras2"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_mostrar_recibos_por_honorarios_en_registro_de_compras_1_.jpg"
          width={500}
          height={500}
        />
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Número de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
        <Image
          alt="RecibosHonorariosCompras3"
          src="https://miconcar.com/uploads/documentos/concar_cb_preguntas_frecuentes_mostrar_recibos_por_honorarios_en_registro_de_compras_2_.jpg"
          width={500}
          height={500}
        />
      </ul>
      <p>
        Todos estos requisitos deben estar para lograr incluir los Recibos por
        Honorarios en el Registro de Compras.
      </p>
    </div>
  );
};

export default RecibosHonorariosCompras;
