import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ComoGenerarMesMovimiento = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo generar el libro electrónico de ventas de un mes sin movimiento",
      href: "https://miconcar.com/uploads/documentos/900_concar_cb_sql_c1_1_Libro_electronico_de_ventas_sin_movimiento_v1_.pdf",
    },
  ];
  return (
    <>
      <h1>
        Procedimiento para la generación del archivo TXT del libro electrónico
        de compras de un mes sin movimiento.
      </h1>
      <Table items={data} />
    </>
  );
};

export default ComoGenerarMesMovimiento;
