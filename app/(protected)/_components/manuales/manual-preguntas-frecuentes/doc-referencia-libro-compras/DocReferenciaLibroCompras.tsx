import React from "react";

const DocReferenciaLibroCompras = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold">Descripción del problema</h1>
      <h2>
        Al generar el Archivo de texto para el PLE Compras salen mensajes:
      </h2>
      <ul className="list-disc">
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Fecha de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Serie de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
        <li>
          Número Correlativo: XX-XXXXXX-XXXX Obs: Falta Número de documento de
          Referencia, para el documento Tipo 07, Serie XXXX, Número XXXXX
        </li>
      </ul>
    </div>
  );
};

export default DocReferenciaLibroCompras;
