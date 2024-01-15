import Heading from "@/components/Heading";
import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import Image from "next/image";
import React from "react";

const ValidacionRegistroVentasPle = () => {
  return (
    <div>
      <Layout
        on
        siguiente
        anterior
        siguienteHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras/registro-compras-ple"
        anteriorHref="/tutoriales/libros-electronicos/libro-electronico-registro-compras/registro-compras-ple"
      >
        <Heading
          title="Validación de Registro de Ventas - PLE"
          subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
          className="py-6"
        />
        <p className="mb-5">
          Al generar el libro electrónico de ventas, ya sea en archivo de texto
          (para enviar a SUNAT) o en Excel, el sistema CONCAR® realiza una
          validación automática sobre los comprobantes de ventas registrados. Si
          el sistema encuentra alguna inconsistencia que impida la carga del
          registro de ventas electrónico al PLE-SUNAT emitirá un reporte de
          validación llamado Validación de Registro de Ventas - PLE
          especificando las observaciones detectadas. Por ejemplo:
        </p>
        <Image
          src="/validacionLibroVenta.png"
          alt="Validación del Registro de Ventas PLE"
          width={1000}
          height={1000}
          className="w-[843px] h-[180px]"
        />
      </Layout>
    </div>
  );
};

export default ValidacionRegistroVentasPle;
