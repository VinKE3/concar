import React from "react";
import { dataPreguntasFrecuentes } from "@/data/manuales.data";
import List from "@/components/List";

const PreguntasFrecuentes = () => {
  const newData = dataPreguntasFrecuentes.slice(2);
  console.log(newData);
  return (
    <div>
      <p>
        A continuación se detallan las preguntas frecuentes con sus soluciones.
      </p>
      <List items={newData} />
    </div>
  );
};

export default PreguntasFrecuentes;
