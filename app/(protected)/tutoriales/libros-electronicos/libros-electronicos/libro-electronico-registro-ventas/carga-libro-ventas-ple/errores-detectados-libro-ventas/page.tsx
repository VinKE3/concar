import Layout from "@/app/(protected)/tutoriales/layouts/layoutLibrosElectronicos";
import ErroresDetectadosLibroVentas from "@/components/librosElectronicos/libro-electronico-registro-ventas/carga-libro-ventas-ple/errores-detectados-libro-ventas/ErroresDetectadosLibroVentas";

const page = () => {
  return (
    <>
      <ErroresDetectadosLibroVentas />
    </>
  );
};

export default page;
