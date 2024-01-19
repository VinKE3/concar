import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorTipo01Factura = () => {
  const data = [
    {
      id: 1,
      title: "Error en serie de tipo de documento 01 - Factura.",
      href: "https://miconcar.com/uploads/documentos/861_ERROR_SERIE_TIPO_DE_DOCUMENTO_FACTURA.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Ventas - Error en el número de serie para el documento de tipo 01 Factura"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </>
  );
};
export default ErrorTipo01Factura;
