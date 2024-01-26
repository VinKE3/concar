import React from "react";
import TemaSeparado from "./TemaSeparado";
interface DataItem {
  tema: string;
  // otras propiedades...
}
interface TemasProps {
  data: DataItem[];
}

const Temas = ({ data }: TemasProps) => {
  const temasUnicos = [...new Set(data.map((item: any) => item.tema))];
  const temasObjetos = temasUnicos.map((tema, index) => {
    const itemsDelMismoTema = data.filter((item) => item.tema === tema);
    const itemsObjeto = itemsDelMismoTema.map((item, itemIndex) => ({
      id: itemIndex + 1,
    }));

    return {
      id: index + 1,
      title: tema,
      total: itemsDelMismoTema.length,
      items: itemsObjeto,
    };
  });

  return (
    <div>
      <TemaSeparado />
    </div>
  );
};

export default Temas;
