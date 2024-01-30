import Heading from "@/components/Heading";
import Table from "@/components/Table";

const NumeroNumericoMayorCero = () => {
  const data = [
    {
      id: 1,
      title: "Número de documento debe ser numérico mayor a cero.",
      href: "https://miconcar.com/uploads/documentos/859_concar_cb_sql_c1_1_numero_de_documento_debe_ser_numerico_mayor_a_cero_v1_.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default NumeroNumericoMayorCero;
