import Heading from "@/components/Heading";
import Table from "@/components/Table";

const NumeroSerieObligatoria = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
      href: "https://miconcar.com/uploads/documentos/851_CONCAR_CB_Validacion_de_libro_electronico_de_compras_numero_de_serie_es_obligatoria.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default NumeroSerieObligatoria;
