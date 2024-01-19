import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ComoGenerarMesMovimiento = () => {
  const data = [
    {
      id: 1,
      title:
        "Cómo generar el libro electrónico de ventas de un mes sin movimiento",
      href: "https://miconcar.com/uploads/documentos/907_CONCAR_SQL_Como_generar_el_libro_electronico_de_ventas_de_un_mes_sin_movimiento.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Cómo generar el libro electrónico de Ventas de un mes sin movimiento"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />

      <Table items={data} />
    </>
  );
};

export default ComoGenerarMesMovimiento;
