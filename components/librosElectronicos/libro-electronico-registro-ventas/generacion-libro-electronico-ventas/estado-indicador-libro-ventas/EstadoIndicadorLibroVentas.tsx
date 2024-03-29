import Heading from "@/components/Heading";
import Table from "@/components/Table";

const EstadoIndicadorLibroVentas = () => {
  const data = [
    {
      id: 1,
      title:
        "Estado o Indicador de la Operación en el Libro Electrónico de Ventas",
      href: "https://miconcar.com/uploads/documentos/877_CONCAR_SQL_Estado_o_indicador_de_la_operacion_en_el_libro_electronico_de_ventas.pdf",
    },
  ];
  return (
    <>
      <p>
        El CONCAR® genera automáticamente los estados 0, 1, 2, 8 y 9 de acuerdo
        a como se registró el comprobante de ventas en el sistema. Los
        comprobantes de ventas a informar con estado 8 o 9 se deberán ingresar
        por la opción …/Registro de Ventas/Libros Electrónicos/Mantenimiento
        Archivo Registro Ventas PLE Adicionales.
      </p>
      <Table items={data} />
    </>
  );
};

export default EstadoIndicadorLibroVentas;
