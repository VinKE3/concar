import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <h1>En caso de pérdida o robo deberá:</h1>
      <ul className="px-5 list-disc">
        <li>Efectuar la denuncia policial.</li>
        <li>
          Dar baja la licencia, informando de inmediato a Real Systems el número
          de serie de REAL KEY®.
        </li>
      </ul>
      <h1 className="font-bold">
        Recuerde: sólo podrá solicitar la reposición si su cobertura post venta
        se encuentra vigente.
      </h1>
      <p>Precios de reposición por pérdida o robo:</p>
      <ul className="px-5 list-disc">
        <li>Solicite su cotización en el área Comercial.</li>
      </ul>
    </div>
  );
};

export default page;
