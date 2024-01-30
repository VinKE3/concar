import Heading from "@/components/Heading";
import Table from "@/components/Table";

const ErroresDetectadosLibroVentas = () => {
  const data = [
    {
      id: 1,
      title:
        "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
      href: "https://miconcar.com/uploads/documentos/858_CONCAR_CB_Validacion_de_libro_electronico_de_ventas_numero_de_documento_debe_ser_numerico_mayor_a_cero.pdf",
    },
  ];
  return (
    <>
      <Table items={data} />
    </>
  );
};

export default ErroresDetectadosLibroVentas;
