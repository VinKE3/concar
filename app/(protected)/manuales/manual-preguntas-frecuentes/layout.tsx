"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import TriButtons from "@/components/TriButtons";
import { dataPreguntasFrecuentes } from "@/data/manuales.data";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  // Encuentra el índice del objeto actual en dataManualUsuario
  const currentIndex = dataPreguntasFrecuentes.findIndex(
    (item) => item.href === pathname
  );
  // Define anteriorHref y siguienteHref basandose en currentIndex
  let anteriorHref =
    currentIndex > 0
      ? dataPreguntasFrecuentes[currentIndex - 1].href
      : undefined;
  let siguienteHref =
    currentIndex < dataPreguntasFrecuentes.length - 1
      ? dataPreguntasFrecuentes[currentIndex + 1].href
      : undefined;
  // Define anterior y siguiente basandose en si anteriorHref y siguienteHref están definidos
  let anterior = anteriorHref !== undefined;
  let siguiente = siguienteHref !== undefined;
  // define el titulo de la página
  let titulo = dataPreguntasFrecuentes[currentIndex].title;
  return (
    <Container>
      <Header
        title="Manual de Preguntas Frecuentes CONCAR SQL"
        href="/tutoriales/main-manual-preguntas-frecuentes"
        subtitle="Categoría: CONCAR® SQL"
        text="Preguntas Frecuentes."
      />
      <TriButtons
        indice="/manuales/main-manual-preguntas-frecuentes"
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
