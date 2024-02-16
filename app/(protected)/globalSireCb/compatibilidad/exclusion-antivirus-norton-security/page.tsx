import Table from "@/components/Table";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "como realizar la exclusión a los sistemas de real systems en el antivirus norton security",
      href: "https://miconcar.com/uploads/documentos/1091_Cod.1091_D01078_c%C3%B3mo_realizar_la_exclusi%C3%B3n_a_los_sistemas_de_real_systems_en_el_antivirus_norton_security.pdf",
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="font-bold">¿Cuando debo utilizar este proceso?</h1>
      <p>
        El impase se origina cuando realiza una Instalación o una Actualizacion,
        ocasionalmente se puede presentar un mensaje el cual indica; que el
        archivo ctmenuw no fue encontrado o fue eliminado se genera por que los
        antivirus de sus equipos detectaron al sistema CONCAR como malicioso y
        lo llevan a cuarentena o en su defecto lo eliminan.
      </p>
      <p>
        Es por ello que a continuacion podra ubicar el procedimiento a realizar
        (Exclusion o Excepion) de acuerdo al antivirus que este usando en su
        equipo. Asimismo los que trabajen con el Windows 10, el sistema viene
        con el Windows Defender al cual tambien se tendra que excluir las
        carpetas y ejecutable del Concar.
      </p>
      <h1 className="font-bold">Tener en cuenta:</h1>
      <p>
        - En el proceso de actualización; no borra informacion, refresca los
        componentes internos y actualiza las tablas.
      </p>
      <p>
        - En el proceso de instalación, genera la Base de Datos limpia - nueva,
        borra toda la informacion que tuviera y observará solo las demos 001 y
        002 que entregamos. Debe leer las instrucciones a detalle.
      </p>
      <p>
        En ambos casos deben de ejecutar como usuario Administrador, para que
        tengan todos los permisos y controles sobre sus equipos.
      </p>
      <h1 className="font-bold"> Recordar:</h1>
      <p>
        CONCAR CB se actualiza sobre la carpeta es C/CONCAR80 y el nombre del
        ejecutable es CTMENUW.exe
      </p>
      <p>
        CONCAR SQL se actualiza sobre la carpeta es C/RSCONCAR y el nombre del
        ejecutable es RSCONCAR.exe
      </p>
      <Table items={data} />
    </div>
  );
};

export default page;
