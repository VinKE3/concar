import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorTipo08NotaDebito = () => {
  const data = [
    {
      id: 1,
      title:
        "Falta documento de referencia para tipo de documento 08 - Nota de débito",
      href: "https://miconcar.com/uploads/documentos/862_FALTA_DOCUMENTO_DE_REFERENCIA_PARA_DOCUMENTO_TIPO_08.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Ventas - Falta documento de referencia para el documento tipo 08 Nota de Débito"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </>
  );
};

export default ErrorTipo08NotaDebito;
