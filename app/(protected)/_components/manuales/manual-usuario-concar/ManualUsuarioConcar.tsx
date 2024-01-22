import Heading from "@/components/Heading";
import { dataManualUsuario } from "@/data/manuales.data";
import Indice from "@/components/Indice";

const ManualUsuarioConcar = () => {
  return (
    <>
      <Heading
        title=""
        button
        buttonTitle="Volver a Manuales"
        buttonHref="/manuales"
        className="mb-5"
      />
      <Heading title="índice" className="bg-gray-200 px-2" />
      <Indice items={dataManualUsuario} />
    </>
  );
};

export default ManualUsuarioConcar;
