import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorDocumento03BoletaVenta = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Ventas  - Error en número de serie para el documento de tipo 03 Boleta de Venta",
      href: "https://miconcar.com/uploads/documentos/860_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_error_en_el_numero_de_serie_para_el_documento_de_tipo_03_boleta_de_venta.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Ventas  - Error en número de serie para el documento de tipo 03 Boleta de Venta"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </>
  );
};

export default ErrorDocumento03BoletaVenta;
