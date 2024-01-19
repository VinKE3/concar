import Heading from "@/components/Heading";
import Table from "@/components/Table";

const RegistroOmisionesLibroDiarioSimplificado = () => {
  const data = [
    {
      id: 1,
      title:
        "Registro de Omisiones en los Libros Electrónicos Diario, Diario Simplificado y Mayor",
      href: "https://miconcar.com/uploads/documentos/871_CONCAR_SQL_Registro_de_omisiones_en_los_libros_electronicos_diario_diario_simplificado_y_mayor.pdf",
    },
  ];

  return (
    <>
      <Heading
        title="Registro de Omisiones en los Libros Electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        1. Las omisiones se podrán ingresar desde cualquiera de las dos opciones
        siguientes:
      </h2>
      <ul className="text-gray-700 list-disc list-inside px-5">
        <li>
          Reportes/Libros y registros oficiales/Libro Diario/ Libros
          Electrónicos/Registros Omisiones para Libros Diario y Mayor PLE.
        </li>
        <li>
          Reportes/Libros y registros oficiales/Libro Mayor/Libros
          Electrónicos/Registro Omisiones para Libros Diario y Mayor PLE.{" "}
        </li>
      </ul>

      <Table items={data} />
    </>
  );
};

export default RegistroOmisionesLibroDiarioSimplificado;
