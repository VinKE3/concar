import Heading from "@/components/Heading";

const ValidacionLibroDiarioSimplificado = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Compras",
      href: "https://miconcar.com/uploads/documentos/841_CONCAR_SQL_Como_generar_el_libro_electronico_de_compras.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación en PLE-SUNAT de los libros electrónicos Diario, Diario Simplificado y Mayor"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
    </>
  );
};

export default ValidacionLibroDiarioSimplificado;
