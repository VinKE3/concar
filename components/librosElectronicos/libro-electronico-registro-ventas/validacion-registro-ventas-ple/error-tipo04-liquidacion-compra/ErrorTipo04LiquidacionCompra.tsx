import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorTipo04LiquidacionCompra = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 04 Liquidación de Compra",
      href: "https://miconcar.com/uploads/documentos/865_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_error_en_el_numero_de_serie_para_el_documento_de_tipo_04_liquidacion_de_compra.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErrorTipo04LiquidacionCompra;
