import LibroElectronicoDiarioSimplificado from "@/components/librosElectronicos/libro-electronico-diario-simplificado/LibroElectronicoDiarioSimplificado";
import Layout from "../../../layouts/layoutLibrosElectronicos";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/consulta-libros-ventas/como-generar-mes-movimiento"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-diario-simplificado/generacion-libro-diario-simplificado"
    >
      <LibroElectronicoDiarioSimplificado />
    </Layout>
  );
};

export default page;
