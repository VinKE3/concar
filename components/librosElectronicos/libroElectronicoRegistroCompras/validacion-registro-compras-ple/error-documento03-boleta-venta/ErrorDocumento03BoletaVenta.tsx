import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorDocumento03BoletaVenta = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 03 Boleta de Venta",
      href: "https://miconcar.com/uploads/documentos/852_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_03_boleta_de_venta.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErrorDocumento03BoletaVenta;
