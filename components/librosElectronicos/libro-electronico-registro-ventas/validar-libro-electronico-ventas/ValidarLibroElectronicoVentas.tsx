import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ValidarLibroElectronicoVentas = () => {
  const data = [
    {
      id: 1,
      title:
        "Errores detectados en el PLE-SUNAT al validar el libro electrónico de ventas",
      href: "https://miconcar.com/uploads/documentos/880_CONCAR_SQL_Errores_detectados_en_el_ple_sunat_al_validar_el_libro_electronico_ventas.pdf",
    },
  ];
  return (
    <>
      <p>
        El reporte de información inconsistente brinda un detalle de todos los
        errores detectados por el PLE-SUNAT durante la validación del libro
        electrónico, señalando la ubicación del error.
      </p>
      <Table items={data} />
    </>
  );
};

export default ValidarLibroElectronicoVentas;
