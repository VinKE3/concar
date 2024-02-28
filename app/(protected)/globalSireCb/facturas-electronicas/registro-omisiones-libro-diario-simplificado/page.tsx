import Heading from "@/components/Heading";
import Table from "@/components/Table";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Registro de Omisiones",
      href: "https://miconcar.com/uploads/documentos/870_concar_cb_registros_omisiones_libro_diario_y_mayor.pdf",
    },
  ];

  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        1. Las omisiones se podrán ingresar desde cualquiera de las dos opciones
      </h2>

      <Table items={data} />
    </>
  );
};

export default page;
