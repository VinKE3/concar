import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Cierre de libros compras y ventas PLE",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/10/Cod.1174_D01161_Cierre_libros_Ventas_Compras_NoDomiciliado.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="text-sky-600">1.Supuestos</h1>
      <ul className="px-5 list-disc">
        <li>
          Si has decidido afiliarte voluntariamente al SIRE en el periodo
          Octubre 2023. No recomiendo afiliarse al SIRE, porque está con muchas
          fallas, así que sigue con tu presentación electrónica de forma normal.
        </li>
        <li>
          Si estás obligado a declarar SIRE desde el periodo de octubre 2023
          debes previamente cerrar tus registros electrónicos (compras y ventas)
          en el periodo Setiembre 2023, continua al punto 3.
        </li>
      </ul>
      <h1 className="text-sky-600">
        2. ¿Por qué debo cerrar los registros contables?
      </h1>
      <p>
        Porque es una formalidad para cambiar la forma de llevado de registros
        contables, adicionalmente, está tipificado en las resoluciones de
        superintendencia que regulan el SIRE.
      </p>
      <p>
        Revise el Inciso a) del artículo 5 de la Resolución de Superintendencia
        N° 112-2021
      </p>
      <p>
        a)La obligación de cerrar el Registro de Ventas e Ingresos y el Registro
        de Compras llevados en forma manual o en hojas sueltas o continuas,
        según la normativa respectiva, previa anotación de lo que corresponda
        hasta el periodo anterior a aquel en que se adquiere la obligación de
        llevar el RVIE y el RCE, o el periodo anterior a aquel por el cual
        generó estos a fin de afiliarse a su llevado.
      </p>
      <h1 className="text-sky-600">
        3.¿Cómo efectuó el cierre de los registros electrónicos PLE?
      </h1>
      <p>
        En este caso, debes proceder el cierre mediante el nombre del archivo.
        Para ser más precisos, debes ver la posición 30 (indicador de
        operaciones) del nombre del archivo txt:
      </p>
      <p>1 – Empresa o entidad operativa</p>
      <p>2 – Cierre del libro – no obligado a llevarlo</p>
      <p>0 – Cierre de operaciones – baja de inscripción en el RUC</p>
      <p>Nombre del Archivo: La clave está en la posición 30</p>
      <p className="font-bold">
        Mas información del proceso, descarga el documento lineas abajo, pincha
        el botón Descargar
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
