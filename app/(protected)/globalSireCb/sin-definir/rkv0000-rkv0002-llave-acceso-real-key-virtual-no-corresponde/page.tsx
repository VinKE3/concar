import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Mensaje ¿RKV0000 RKV0002- Llave de acceso Real Key Virtual no corresponde_cbysql",
      href: "https://miconcar-uploads.s3.amazonaws.com/documentos/2023/11/992_Cod0544_D00535_compatibilidad_y_requisitos_tecnicos.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Motivo de Origen del impase:</h1>
      <p>
        Está intentando utilizar su licencia CONCAR SIRE en otro equipo distinto
        al que fue activado al inicio, recuerde que por defecto todos cuentan
        con 1 licencia gratuita para 1 solo equipo.
      </p>
      <p>
        Esta licencia no puede ser transferible porque estaría siendo alterada,
        la licencia es única por equipo e intransferible.
      </p>
      <h1 className="font-bold">
        En el caso que desee cambiar de equipo para el uso de la licencia SIRE
        realizar lo siguiente:
      </h1>
      <p>
        <span className="font-bold">Solución 01: </span> Para solucionar en vivo
        hemos habilitado una SALA EXCLUSIVA de atención para consultas
        relacionadas a licencias como es el caso del mensaje. Para solicitar el
        acceso puede comunicarse a nuestra central telefónica 203-8300 o a los
        siguientes correos consultas@realsystems.com.pe y
        atencionalcliente@realsystems.com.pe
      </p>
      <p>
        <span className="font-bold">Solución 02:</span> Si no desea conectarse
        en vivo con el consultor, puede utilizar esta forma.
      </p>
      <p>
        Enviar una solicitud escrita membretada con la firma de su representante
        legal a los siguientes correos: licencias@realsystems.com.pe y
        planeamiento_1@realsystems.com.pe con copia a
        atencionalcliente@realsystems.com.pe en el asunto de correo indicar
        “MENCIONAR EL RUC - CAMBIO DE EQUIPO LICENCIA SIRE” dentro del detalle
        se debe sustentar y explicar el motivo por el cual está cambiando su
        licencia de un equipo a otro. En interno el área respectiva (Licencias)
        evaluará si procede el cambio y le confirmará los resultados. De ser
        afirmativo, se realizará la baja de licencia anterior para dar el alta
        de la nueva licencia en el nuevo equipo.
      </p>

      <Table items={data} />
    </div>
  );
};

export default page;
