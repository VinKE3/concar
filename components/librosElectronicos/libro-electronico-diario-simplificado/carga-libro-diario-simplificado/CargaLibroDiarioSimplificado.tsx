"use client";
import Heading from "@/components/Heading";
import { data } from "@/data/libroElectronicoDiarioSimplificado.data";
import List from "@/components/List";

const CargaLibroDiarioSimplificado = () => {
  const datos = data[1].links;
  return (
    <>
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </>
  );
};

export default CargaLibroDiarioSimplificado;
