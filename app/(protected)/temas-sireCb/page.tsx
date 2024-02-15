import TemaSeparado from "./TemaSeparado";

const page = () => {
  return (
    <div className="md:p-10 p-2">
      <h1 className="text-sky-800 font-bold text-lg">Informacion Global</h1>
      <h2 className="font-semibold">
        Esta pagina muestra la informacion global de todos los temas
        relacionados con el sistema CONCAR SIRE CB
      </h2>
      <div>
        <div className="md:p-2 p-0">
          <TemaSeparado />
        </div>
      </div>
    </div>
  );
};

export default page;
