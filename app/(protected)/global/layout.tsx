"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { dataGlobal } from "@/data/global.data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  let tipo = dataGlobal.filter((item) => item.href === pathname)[0].tipo;
  let tema = dataGlobal.filter((item) => item.href === pathname)[0].tema;
  let categorias = dataGlobal
    .filter((item) => item.href === pathname)[0]
    .categorias.join(", ");
  let palabrasClave = dataGlobal
    .filter((item) => item.href === pathname)[0]
    .palabrasClave?.join(", ");
  let titulo = dataGlobal.filter((item) => item.href === pathname)[0].name;
  return (
    <Container>
      <div className="mt-5">
        <Heading title={titulo} />
      </div>
      <div className="flex gap-4 mt-2">
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
          {palabrasClave}
        </h1>
      </div>
      <div className="mt-1">
        <Link href="/temas">
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 mt-4 rounded-md">
            Volver
          </button>
        </Link>
      </div>
      <div className="mt-10 mb-10">{children}</div>
    </Container>
  );
}
