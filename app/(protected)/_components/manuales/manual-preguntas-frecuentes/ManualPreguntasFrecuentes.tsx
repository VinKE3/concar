import Heading from "@/components/Heading";
import Indice from "@/components/Indice";
import { dataPreguntasFrecuentes } from "@/data/manuales.data";

const ManualPreguntasFrecuentes = () => {
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
      <Indice items={dataPreguntasFrecuentes} />
    </>
  );
};

export default ManualPreguntasFrecuentes;
