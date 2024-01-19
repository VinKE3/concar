import Heading from "@/components/Heading";
import Table from "@/components/Table";

const FechaVencimientoDocumento14 = () => {
  const data = [
    {
      id: 1,
      title:
        "Fecha de vencimiento debe ser menor o igual al periodo del proceso.",
      href: "https://miconcar.com/uploads/documentos/857_concar_cb_sql_c1_1_fecha_vencimiento_debe_ser_menor_o_igual_periodo_de_proceso_v1_.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Compras - Fecha de vencimiento debe ser menor o igual al periodo de proceso para tipo de documento 14 Recibo de servicios públicos"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </>
  );
};

export default FechaVencimientoDocumento14;
