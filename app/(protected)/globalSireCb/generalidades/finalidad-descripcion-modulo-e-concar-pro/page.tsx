import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "¿Se pueden crear ejercicios anteriores en la misma compañía?",
      href: "https://miconcar.com/uploads/documentos/784_CONCAR_CB_Se_pueden_crear_ejercicios_anteriores_en_la_misma_compa%C3%B1ia.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <p>
        El presente manual tiene por finalidad servir como guía en la,
        parametrización y operatividad del Módulo Electrónico de Contabilidad
        General Contable e-CONCAR PRO.
      </p>
      <p>
        El Módulo Electrónico Contable e-CONCAR PRO ha sido desarrollado para
        ser utilizado de la mano con el Sistema de Contabilidad General
        Contable-Financiero CONCAR Visual Versión CodeBase® (CB), ya que migra
        su información a este ambiente.
      </p>
      <p>
        Permite la lectura y carga de archivos electrónicos de extensión XML,
        PDF Y ZIP; aportando agilidad y adaptabilidad en la carga de
        información, asimismo en la carga masiva desde excel de las compras y
        ventas para el ambiente del CONCAR CB así como la generación de una
        Preliquidación de Impuestos.
      </p>
      <p>
        Nuestra actualización y creación del Módulo e-CONCAR PRO, está orientado
        a que nuestros usuarios encuentren todas las herramientas necesarias
        para simplificar sus operaciones y actividades, obteniendo información
        de forma oportuna y objetiva
      </p>
      <p>Funcionalidades del Módulo e-CONCAR Pro</p>
      <ul className="list-disc px-5">
        <li>Nuevo Programa de Liquidación Previa de Impuestos</li>
        <li>Carga Fácil de Registro de Compras desde excel</li>
        <li>Carga Fácil de Registro de Ventas desde excel</li>
      </ul>
    </div>
  );
};

export default page;
