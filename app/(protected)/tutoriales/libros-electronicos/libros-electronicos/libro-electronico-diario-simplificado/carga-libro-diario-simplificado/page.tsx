import Heading from "@/components/Heading";
import List from "@/components/List";
import Layout from "../../../../layouts/layoutLibrosElectronicos";
import CargaLibroDiarioSimplificado from "@/components/librosElectronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/CargaLibroDiarioSimplificado";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado/registro-omisiones-libro-diario-simplificado"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/carga-libro-diario-simplificado/como-cargar-libro-diario"
    >
      <CargaLibroDiarioSimplificado />
    </Layout>
  );
};

export default page;
