import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ValidarLibroElectronicoVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/ValidarLibroElectronicoVentas";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/subsanar-inconsistencias"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas/documento-identidad-incorrecto"
    >
      <ValidarLibroElectronicoVentas />
    </Layout>
  );
};

export default page;
