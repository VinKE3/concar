import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de compras no muestra el número de serie de los tickets",
      href: "https://miconcar.com/uploads/documentos/812_INSTRUCTIVO_MICONCAR_-_REGISTRO_DE_COMPRAS_NO_MUESTRA_EL_NUMERO_DE_SERIE_DE_LOS_TICKETS.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Caso:</h1>
      <p>
        El presente documento contiene el procedimiento a realizar en el sistema
        para visualizar en el reporte de compras,el número de serie de la
        máquina registradora de los tickets que fueron registrados con una
        versión anterior a la 2015.01.
      </p>
      <p>
        Estos tickets muestran en blanco un dato que antes sí mostraban, ello es
        debido a la exigencia de considerar como serie del ticket el número de
        serie de la máquina registradora y no la serie del ticket, el proceso
        para mostrar éste dato en el campo correspondiente del reporte se
        detalla en el documento adjunto.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
