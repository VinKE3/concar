import Heading from "@/components/Heading";
import Table from "@/components/Table";

const FaltaDocumento57NotaCredito = () => {
  const data = [
    {
      id: 1,
      title:
        "Fecha de documento de referencia no debe ser mayor a fecha de documento para el tipo de documento 07 - Nota de crédito.",
      href: "https://miconcar.com/uploads/documentos/867_concar_cb_sql_c1_1_fecha_de_documento_referencia_no_debe_ser_mayor_a_fecha_de_documento_v1_.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default FaltaDocumento57NotaCredito;
