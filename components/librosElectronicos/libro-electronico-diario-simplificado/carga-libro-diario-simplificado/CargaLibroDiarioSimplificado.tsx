"use client";
import Heading from "@/components/Heading";
import { data } from "@/data/libroElectronicoDiarioSimplificado.data";
import List from "@/components/List";

const CargaLibroDiarioSimplificado = () => {
  const datos = data[1].links;
  return (
    <>
      <Heading
        title="Carga de los Libros Electrónicos Diario, Diario Simplificado y Mayor al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </>
  );
};

export default CargaLibroDiarioSimplificado;
