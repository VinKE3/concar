import Heading from "@/components/Heading";
import Table from "@/components/Table";

const RectificacionRegistroCompras = () => {
  const data = [
    {
      id: 1,
      title:
        "Rectificación - Registros Adicionales en Registro de Compras Electrónico",
      href: "https://miconcar.com/uploads/documentos/868_CONCAR_CB_Rectificacion_registros_adicionales_en_registro_de_compras_electronico.pdf",
    },
    {
      id: 2,
      title: "Registros Adicionales en Registro de Compras.",
      href: "https://miconcar.com/uploads/documentos/868_concar_cb_sql_registros_adicionales_registro_de_compras_v13.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default RectificacionRegistroCompras;
