import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";

import ComoSubsanarInconsistencias from "@/components/librosElectronicos/libroElectronicoRegistroCompras/carga-libro-compras-ple/como-subsanar-inconsistencias/ComoSubsanarInconsistencias";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/como-cargar-libro-ventas"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-ventas/validar-libro-electronico-ventas"
    >
      <ComoSubsanarInconsistencias />
    </Layout>
  );
};

export default page;
