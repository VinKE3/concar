import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorDocumento10ReciboArrendamiento = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
      href: "https://miconcar.com/uploads/documentos/854_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_10_recibo_por_arrendamiento.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 10 Recibo por Arrendamiento"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </>
  );
};

export default ErrorDocumento10ReciboArrendamiento;
