import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ValidarLibroElectronicoCompras from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validar-libro-electronico-compras/ValidarLibroElectronicoCompras";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/carga-libro-compras-ple/como-subsanar-inconsistencias"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validar-libro-electronico-compras/documento-identidad-incorrecto"
    >
      <ValidarLibroElectronicoCompras />
    </Layout>
  );
};

export default page;
