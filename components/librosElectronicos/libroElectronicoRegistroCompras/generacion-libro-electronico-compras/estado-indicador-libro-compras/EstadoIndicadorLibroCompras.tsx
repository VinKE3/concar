import Heading from "@/components/Heading";
import Table from "@/components/Table";

const EstadoIndicadorLibroCompras = () => {
  const data = [
    {
      id: 1,
      title: "Estados en Registro de Compras Electrónico.",
      href: "https://miconcar.com/uploads/documentos/876_concar_cb_sql_estados_registro_de_compras.pdf",
    },
  ];
  return (
    <>
      <p>
        El CONCAR® genera automáticamente los estados 0, 1, 6 y 7 de acuerdo a
        como se registró el comprobante de compra en el sistema. Los
        comprobantes de compras a informar con estado 9 se deberán ingresar por
        la opción …/Registro de Compras/Libros Electrónicos/Mantenimiento de
        Registro de Compras Adicionales PLE.
      </p>
      <Table items={data} />
    </>
  );
};

export default EstadoIndicadorLibroCompras;
