import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ValorIncorreceto = () => {
  const data = [
    {
      id: 1,
      title: "El valor es incorrecto.",
      href: "https://miconcar.com/uploads/documentos/896_concar_cb_sql_c1_1_El_valor_es_incorrecto_v1_.pdf",
    },
  ];
  return (
    <>
      <p>
        Al validar el libro electrónico de compras o ventas en el PLE-SUNAT, el
        programa detecta el error El valor es incorrecto en el reporte de
        información inconsistente.
      </p>
      <Table items={data} />
    </>
  );
};

export default ValorIncorreceto;
