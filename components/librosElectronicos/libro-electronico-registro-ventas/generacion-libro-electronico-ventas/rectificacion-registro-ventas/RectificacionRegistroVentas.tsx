import Heading from "@/components/Heading";
import Table from "@/components/Table";

const RectificacionRegistroVentas = () => {
  const data = [
    {
      id: 1,
      title: "Registros Adicionales en Registro de Ventas.",
      href: "https://miconcar.com/uploads/documentos/869_concar_cb_sql_registros_adicionales_registro_de_ventas_v12.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default RectificacionRegistroVentas;
