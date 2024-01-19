import Heading from "@/components/Heading";
import Table from "@/components/Table";

const CampoObligatorioLlaveIncorrecta = () => {
  const data = [
    {
      id: 1,
      title: "El campo es obligatorio / La llave única es incorrecta.",
      href: "https://miconcar.com/uploads/documentos/895_concar_cb_sql_c1_1_Llave_unica_es_incorrecta_v1_.pdf",
    },
  ];
  return (
    <>
      <Heading
        title="Validación en PLE-SUNAT: Campo obligatorio / La llave única es incorrecta"
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
        className="py-6"
      />
      <div>
        <h1>
          Al validar el libro electrónico diario en el PLE-SUNAT, el programa
          detecta los errores El valor es incorrecto y La llave única es
          incorrecta en el reporte de información inconsistente.
        </h1>
        <Table items={data} />
      </div>
    </>
  );
};

export default CampoObligatorioLlaveIncorrecta;
