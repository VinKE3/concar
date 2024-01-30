import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErrorDocumento52DuaSimplificada = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 52 DUA Simplificada",
      href: "https://miconcar.com/uploads/documentos/856_CONCAR_CB_Validacion_de_libro_electronico_de_compras_error_en_numero_de_serie_para_el_documento_de_tipo_52_dua_simplificada.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErrorDocumento52DuaSimplificada;
