"use client";
import Layout from "../../../layouts/layoutLibrosElectronicos";
import LibroElectronicoRegistroCompra from "@/components/librosElectronicos/libroElectronicoRegistroCompras/LibroElectronicoRegistroCompras";

const LibroElectronicoRegistroCompraPage = () => {
  return (
    <Layout
      on
      anterior={true}
      anteriorHref="/tutoriales/libros-electronicos/libros-electronicos"
      siguiente={true}
      siguienteHref="/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras"
    >
      <LibroElectronicoRegistroCompra />
    </Layout>
  );
};

export default LibroElectronicoRegistroCompraPage;
