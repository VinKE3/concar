import { dataGlobal } from "@/data/global.data";
import Temas from "./Temas";

const page = () => {
  const temasUnicos = [...new Set(dataGlobal.map((item) => item.tema))];

  const temasObjetos = temasUnicos.map((tema, index) => ({
    id: index + 1,
    title: tema,
    href: `/global/${tema.replace(/ /g, "").toLowerCase()}`,
  }));

  return (
    <div className="md:p-10 p-2">
      <h1 className="text-sky-800 font-bold text-lg">Temas</h1>
      <h2 className="font-semibold">Temas tratados en los documentos</h2>
      <div>
        <div className="md:p-2 p-0">
          <Temas data={dataGlobal} />
        </div>
      </div>
    </div>
  );
};

export default page;
