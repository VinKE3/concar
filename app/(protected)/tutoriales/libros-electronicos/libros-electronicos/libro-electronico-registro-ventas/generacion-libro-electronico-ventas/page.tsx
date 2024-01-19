import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import GeneracionLibroElectronicoVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/GeneracionLibroElectronicoVentas";

const page = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/generacion-libro-electronico-ventas/como-generar-libro-ventas"
    >
      <GeneracionLibroElectronicoVentas />
    </Layout>
  );
};

export default page;
