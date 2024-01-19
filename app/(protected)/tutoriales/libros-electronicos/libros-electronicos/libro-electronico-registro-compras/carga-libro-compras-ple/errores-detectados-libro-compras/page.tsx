import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErroresDetectadosLibroCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/carga-libro-compras-ple/errores-detectados-libro-compras/ErroresDetectadosLibroCompras";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-subsanar-inconsistencias"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras"
    >
      <ErroresDetectadosLibroCompras />
    </Layout>
  );
};

export default page;
