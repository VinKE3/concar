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
      <Heading
        title="Cómo Generar los Libros Electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <Table items={data} />
      </div>
    </>
  );
};

export default ComoGenerarLibroDiarioSimplificado;
