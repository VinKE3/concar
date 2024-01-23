import Table from "@/components/Table";
import React from "react";

const EjercicioConcarSql = () => {
  const data = [
    {
      id: 1,
      title: "Como_crear_el_ejercicio_2023_en_el_concarSQL",
      href: "https://miconcar.com/uploads/documentos/199_Cod.0199_D00169_como_crear_el_ejercicio_2023_en_el_concarSQL.pdf",
    },
  ];
  return (
    <div className="space-y-2">
      <h1 className="font-bold">Creación de un nuevo Ejercicio </h1>
      <ul className="p-5 list-decimal">
        <li>
          Opción que permite la creación de nuevos ejercicios; creando los
          archivos correspondientes que necesita el sistema para su uso. Para
          ello, sólo un usuario debe estar trabajando con el sistema CONCAR.
        </li>
        <li>
          Para la creación del nuevo ejercicio debe ingresar a CONCAR, en la
          Compañía que desea crear el nuevo ejercicio.
        </li>
        <li>
          Recuerde que es importante contar con los sistemas (versiones
          actualizadas), estas versiones lo pueden obtener directamente de la
          zona de Descargas.
        </li>
        <li>
          Si presenta algun percanse al momento de la descarga, archivos
          dañados, error en la conexion, mensaje similar etc por favor deberan
          verificar:
          <ul className="px-2 list-disc">
            <li>
              Trabajen con un cable de internet, para una señal estable. (NO
              WIFI)
            </li>
            <li>
              Si persiste, pueden solicitarnos el envio del actualizador por
              correo escribiendo a licencias@realsystems.com.pe, colocan su
              razon social, ruc e imagen del percanse que le aparece al
              descargar del portal, detallan que solicitan el actualizador de
              version del sistema.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        El proceso de creacion de periodo, es el mismo en TODOS los periodos de
        aqui en adelante
      </p>
      <p>Adjuntamos Manual</p>
      <div>
        <h1>TEMA: ¿Cómo crear un nuevo Ejercicio en el Concar SQL?</h1>
      </div>
      <div className="px-6 md:w-[45rem] h-96 lg:h-100%  mr-auto mb-10">
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wpvBc4Ky0lc?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
      <Table items={data} />
    </div>
  );
};

export default EjercicioConcarSql;
