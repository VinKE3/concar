import Heading from "@/components/Heading";
import Table from "@/components/Table";

const FechaDocumentoMayorDocumento07 = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
      href: "https://miconcar.com/uploads/documentos/867_concar_cb_sql_c1_1_fecha_de_documento_referencia_no_debe_ser_mayor_a_fecha_de_documento_v1_.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default FechaDocumentoMayorDocumento07;
