import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ComoCargarLibroVentas = () => {
  const data = [
    {
      id: 1,
      title: "Cómo Cargar el Libro Electrónico de Ventas al PLE-SUNAT",
      href: "https://miconcar.com/uploads/documentos/846_CONCAR_SQL_Como_cargar_el_libro_electronico_de_ventas_al_ple_sunat.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ComoCargarLibroVentas;
