import Heading from "@/components/Heading";
import Table from "@/components/Table";

const DocumentoIdentidadIncorrecto = () => {
  const data = [
    {
      id: 1,
      title: "El número de documento de identidad es incorrecto.",
      href: "https://miconcar.com/uploads/documentos/847_VALIDACION_DE_LIBRO_ELECTRONICO_DE_COMPRAS_CONCAR_CB_SQL1.pdf",
    },
  ];
  return (
    <>
      <p>
        Al validar el libro electrónico de compras o ventas en el PLE-SUNAT, el
        programa detecta el error El número de documento de identidad es
        incorrecto en el reporte de información inconsistente.
      </p>
      <Table items={data} />
    </>
  );
};

export default DocumentoIdentidadIncorrecto;
