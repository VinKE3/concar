import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorDocumento02ReciboHonorarios = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error en número de serie para tipo de documento 02 Recibo por Honorarios",
      href: "https://miconcar.com/uploads/documentos/855_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_02_recibo_por_honorarios.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErrorDocumento02ReciboHonorarios;
