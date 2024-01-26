"use client";
import Container from "@/components/Container";
import { dataGlobal } from "@/data/global.data";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  let tipo = dataGlobal.filter((item) => item.href === pathname)[0].tipo;
  let tema = dataGlobal.filter((item) => item.href === pathname)[0].tema;
  let categorias = dataGlobal.filter((item) => item.href === pathname)[0]
    .categorias;
  let palabrasClave = dataGlobal.filter((item) => item.href === pathname)[0];
  return (
    <Container>
      <div className="flex ">
        <h1>
          <span className="text-sky-600 font-semibold">Tipo: </span>
          {tipo}
        </h1>
        <h1>
          <span className="text-sky-600 font-semibold">Tema: </span>
          {tema}
        </h1>
        <h1>
          <span className="text-sky-600 font-semibold">Categorias: </span>
          {categorias}
        </h1>
        <h1>
          <span className="text-sky-600 font-semibold">Palabras Clave: </span>
        </h1>
      </div>
      <div className="py-8">{children}</div>
    </Container>
  );
}
