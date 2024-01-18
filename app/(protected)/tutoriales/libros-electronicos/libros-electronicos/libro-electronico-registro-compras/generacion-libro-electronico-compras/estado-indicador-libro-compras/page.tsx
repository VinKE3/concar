import Heading from "@/components/Heading";
import Table from "@/components/Table";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import React from "react";

const EstadoIndicadorLibroCompras = () => {
  const data = [
    {
      id: 1,
      title: "Estados en Registro de Compras Electrónico.",
      href: "https://miconcar.com/uploads/documentos/876_concar_cb_sql_estados_registro_de_compras.pdf",
    },
  ];
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/como-generar-libro-compras"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/rectificacion-registro-compras"
    >
      <Heading
        title="Estado o Indicador de la Operación en el Libro Electrónico de Compras"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <p>
        El CONCAR® genera automáticamente los estados 0, 1, 6 y 7 de acuerdo a
        como se registró el comprobante de compra en el sistema. Los
        comprobantes de compras a informar con estado 9 se deberán ingresar por
        la opción …/Registro de Compras/Libros Electrónicos/Mantenimiento de
        Registro de Compras Adicionales PLE.
      </p>
      <Table items={data} />
    </Layout>
  );
};

export default EstadoIndicadorLibroCompras;
