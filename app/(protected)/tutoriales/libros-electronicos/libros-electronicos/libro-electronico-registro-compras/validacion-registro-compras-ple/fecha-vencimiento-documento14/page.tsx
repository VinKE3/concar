import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import FechaVencimientoDocumento14 from "@/components/librosElectronicos/libroElectronicoRegistroCompras/validacion-registro-compras-ple/fecha-vencimiento-documento14/FechaVencimientoDocumento14";

const page = () => {
  return (
    <Layout
      on
      anterior
      siguiente
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/falta-documento07-nota-credito"
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento52-dua-simplificada"
    >
      <FechaVencimientoDocumento14 />
    </Layout>
  );
};

export default page;
