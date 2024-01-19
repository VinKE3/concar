import Heading from "@/components/Heading";
import Table from "@/components/Table";

const DocumentoCodigo06Ruc = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Para código de documento SUNAT 01 Factura, documento de proveedor debe ser código 6 RUC",
      href: "https://miconcar.com/uploads/documentos/850_CONCAR_CB_Validacion_de_libro_electronico_de_compras_para_codigo_de_documento_sunat_01_factura_documento_de_proveedor_debe_ser_codigo_6_ruc.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación de Libro Electrónico de Compras - Para código de documento SUNAT 01 Factura, documento de proveedor debe ser código 6 RUC"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <Table items={data} />
    </>
  );
};

export default DocumentoCodigo06Ruc;
