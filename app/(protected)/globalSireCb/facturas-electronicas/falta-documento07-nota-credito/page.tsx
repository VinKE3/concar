import Heading from "@/components/Heading";
import Table from "@/components/Table";

const page = () => {
  const data = [
    {
      id: 1,
      title:
        "Fecha de documento de referencia no debe ser mayor a fecha de documento para el tipo de documento 07 - Nota de crédito.",
      href: "https://miconcar.com/uploads/documentos/887_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_07_nota_de_credito.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default page;
