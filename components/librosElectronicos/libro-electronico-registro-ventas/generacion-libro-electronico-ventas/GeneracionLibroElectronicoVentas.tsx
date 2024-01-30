import Heading from "@/components/Heading";
import { data } from "@/data/libroElectronicoRegistroVentas.data";
import List from "@/components/List";

const GeneracionLibroElectronicoVentas = () => {
  const datos = data[0].links;
  return (
    <>
      <h1>Este tutorial contiene:</h1>
      <List items={datos} />
    </>
  );
};

export default GeneracionLibroElectronicoVentas;
