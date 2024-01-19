import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ComoCargarLibroDiario = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación y Envío al PLE-SUNAT - Libros electrónicos Diario, Diario Simplificado y Mayor.",
      href: "https://miconcar.com/uploads/documentos/848_VALIDACION_DE_LIBRO_ELECTRONICO_DIARIO,_DIARIO_SIMPLIFICADO_Y_MAYOR_CONCAR_CB_SQL.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Cómo Cargar los Libros Electrónicos Diario, Diario Simplificado y Mayor al PLE-SUNAT"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <Table items={data} />
      </div>
    </>
  );
};

export default ComoCargarLibroDiario;
