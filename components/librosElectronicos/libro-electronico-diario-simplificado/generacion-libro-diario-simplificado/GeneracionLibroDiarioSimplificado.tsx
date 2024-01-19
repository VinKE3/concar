"use client";
import Heading from "@/components/Heading";
import { data } from "@/data/libroElectronicoDiarioSimplificado.data";
import List from "@/components/List";

const GeneracionLibroDiarioSimplificado = () => {
  const datos = data[0].links;
  return (
    <>
      <Heading
        title="Generación de los Libros Electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </>
  );
};

export default GeneracionLibroDiarioSimplificado;
