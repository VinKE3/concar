"use client";

import { ArrowLeft, ArrowRight, List } from "lucide-react";
import Link from "next/link";
import { dataSubLibros } from "@/app/(protected)/tutoriales/libros-electronicos/librosElectronicos.data";

interface TriButtonsProps {
  indice?: string;
  anterior?: boolean;
  anteriorHref?: string;
  siguiente?: boolean;
  siguienteHref?: string;
}

const TriButtons: React.FC<TriButtonsProps> = ({
  indice,
  anterior,
  anteriorHref,
  siguiente,
  siguienteHref,
}) => {
  // const flattenData = dataSubLibros.reduce<{ id: number; href: string }[]>(
  //   (acc, subLibro) => {
  //     acc.push({ id: subLibro.id, href: subLibro.href });

  //     if (subLibro.subtitle2) {
  //       subLibro.subtitle2.forEach((item) => {
  //         acc.push({ id: item.id, href: item.href });

  //         if (item.subtitle3) {
  //           item.subtitle3.forEach((subItem) => {
  //             acc.push({ id: subItem.id, href: subItem.href });
  //           });
  //         }
  //       });
  //     }

  //     return acc;
  //   },
  //   []
  // );

  // const sortedData = flattenData.sort((a, b) => a.id - b.id);

  // console.log(sortedData);

  return (
    <div className="">
      <div className="flex py-4 gap-2 justify-center md:justify-start">
        <Link href={indice || ""}>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-500  py-2 px-4 rounded flex gap-2">
            <List size={24} />
            Índice
          </button>
        </Link>
        {anterior && (
          <Link href={anteriorHref || ""}>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-500  py-2 px-4 rounded flex gap-2">
              <ArrowLeft size={24} />
              Anterior
            </button>
          </Link>
        )}
        {siguiente && (
          <Link href={siguienteHref || ""}>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-500  py-2 px-4 rounded flex gap-2">
              Siguiente
              <ArrowRight size={24} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TriButtons;
