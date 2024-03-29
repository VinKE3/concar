import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorTipo55TransporteFerroviario = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros",
      href: "https://miconcar.com/uploads/documentos/874_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_55_bvme_para_transporte_ferroviario.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErrorTipo55TransporteFerroviario;
