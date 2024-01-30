"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TriButtons from "@/components/TriButtons";
import Heading from "@/components/Heading";
import { usePathname } from "next/navigation";
import { dataCierreAperturaContable } from "@/data/cierre.data";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const flattenedData = dataCierreAperturaContable.reduce((acc: any, item) => {
    return [...acc, item, ...item.items2];
  }, []);

  const sortedData = flattenedData.sort((a: any, b: any) => a.id - b.id);
  console.log(sortedData);
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
        title="Cierre y apertura contable"
        href="/tutoriales/cierre-apertura-contable"
        subtitle="Categoría: CONCAR® SIRE SQL"
        text="Proceso de Cierre y Apertura contable."
      />
      <TriButtons
        indice="/tutoriales/cierre-apertura-contable-main"
        anterior={anterior}
        anteriorHref={anteriorHref}
        siguiente={siguiente}
        siguienteHref={siguienteHref}
      />
      <Heading
        title={titulo}
        subtitle="Productos SQL - NET  CONCAR® SQL Productos SQL - NET  CONCAR® SQL #YOMEQUEDOENCASA"
      />
      <div className="py-8">{children}</div>
    </Container>
  );
}
