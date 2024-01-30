import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorTipo05BoletoAereo = () => {
  const data = [
    {
      id: 1,
      title: "Error en serie para el documento de tipo 05 Boleto Aéreo.",
      href: "https://miconcar.com/uploads/documentos/863_concar_cb_sql_c1_1_error_serie_boleta_aereo_v1_2.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErrorTipo05BoletoAereo;
