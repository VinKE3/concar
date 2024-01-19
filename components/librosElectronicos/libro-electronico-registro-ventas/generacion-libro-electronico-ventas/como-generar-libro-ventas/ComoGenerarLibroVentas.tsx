import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ComoGenerarLibroVentas = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Generar el Libro Electrónico de Ventas",
      href: "https://miconcar.com/uploads/documentos/842_COMO_GENERAR_LIBROS_ELECTRÓNICOS_DE_VENTAS.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="¿Cómo Generar el Libro Electrónico de Ventas?"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <h1>
          El presente documento detalla el procedimiento a realizar en el CONCAR
          para generar el libro electrónico de ventas.
        </h1>
        <Table items={data} />
      </div>
    </>
  );
};

export default ComoGenerarLibroVentas;
