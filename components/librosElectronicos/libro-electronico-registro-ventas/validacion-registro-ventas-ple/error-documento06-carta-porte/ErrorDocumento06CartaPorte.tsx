import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorDocumento06CartaPorte = () => {
  const data = [
    {
      id: 1,
      title: "Error en serie para tipo de documento 06 - Carta porte aéreo.",
      href: "https://miconcar.com/uploads/documentos/866_concar_cb_sql_c1_1_error_serie_carta_porte_aereo_v1_.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Ventas  - Error número de serie para el documento de tipo 06 Carta de Porte Aéreo"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      {/* <Table items={data} /> */}
    </>
  );
};

export default ErrorDocumento06CartaPorte;
