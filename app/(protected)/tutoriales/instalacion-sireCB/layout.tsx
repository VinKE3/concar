"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TriButtons from "@/components/TriButtons";
import Heading from "@/components/Heading";
import { usePathname } from "next/navigation";
import { instalacion } from "@/data/concarSireCb.data";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const flattenedData = instalacion.reduce((acc: any, item) => {
    return [...acc, item];
  }, []);

  const sortedData = flattenedData.sort((a: any, b: any) => a.id - b.id);
  // Encuentra el índice del objeto actual en dataManualUsuario
  const currentIndex = sortedData.findIndex(
    (item: any) => item.href === pathname
  );
  // Define anteriorHref y siguienteHref basandose en currentIndex
  let anteriorHref =
    currentIndex > 0 ? sortedData[currentIndex - 1].href : undefined;
  let siguienteHref =
    currentIndex < sortedData.length - 1
      ? sortedData[currentIndex + 1].href
      : undefined;
  // Define anterior y siguiente basandose en si anteriorHref y siguienteHref están definidos
  let anterior = anteriorHref !== undefined;
  let siguiente = siguienteHref !== undefined;
  // define el titulo de la página
  let titulo = sortedData[currentIndex].title;
  return (
    <Container>
      <Header
        title="Instalación y Actualización"
        href="/tutoriales/instalacion-sireCB-main"
        subtitle="Categoría: CONCAR® SIRE CB"
        text="Se explica procedimiento"
      />
      <TriButtons
        indice="/tutoriales/instalacion-sireCB-main"
        anterior={anterior}
        anteriorHref={anteriorHref}
        siguiente={siguiente}
        siguienteHref={siguienteHref}
      />
      <Heading
        title={titulo}
        subtitle="Productos CodeBase  CONCAR® CB #VIRTUAL Productos CodeBase  CONCAR® SIRE CB"
      />
      <div className="py-8">{children}</div>
    </Container>
  );
}
