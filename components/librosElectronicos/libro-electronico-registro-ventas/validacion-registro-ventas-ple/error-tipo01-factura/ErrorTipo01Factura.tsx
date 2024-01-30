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
      <Table items={data} />
    </>
  );
};
export default ErrorTipo01Factura;
