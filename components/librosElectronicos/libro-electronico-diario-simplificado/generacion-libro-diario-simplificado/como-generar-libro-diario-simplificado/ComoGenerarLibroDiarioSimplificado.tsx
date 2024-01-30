import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ComoGenerarLibroDiarioSimplificado = () => {
  const data = [
    {
      id: 1,
      title: "Cómo generar los libros electrónicos Diario y Mayor.",
      href: "https://miconcar.com/uploads/documentos/845_COMO_GENERAR_LIBROS_ELECTRÓNICOS_DE_DIARIO_Y_MAYOR_SQL.pdf",
    },
  ];
  return (
    <>
      <div>
        <Table items={data} />
      </div>
    </>
  );
};

export default ComoGenerarLibroDiarioSimplificado;
