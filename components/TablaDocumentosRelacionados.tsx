import { Download, Paperclip, StickyNote } from "lucide-react";
import Link from "next/link";
import React from "react";
interface TableProps {
  items?: { id: number; title: string; description: string; href: string }[];
}
const TablaDocumentosRelacionados = ({ items }: TableProps) => {
  return (
    <div className="mt-5 mb-10">
      <div className="flex bg-gray-200 py-4 px-2 gap-2">
        <StickyNote size={24} />
        <h1 className="">Documentos Relacionados</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                Detalle
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items &&
              items.map(({ id, title, href, description }) => {
                return (
                  <tr key={id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 transition ease-out">
                        <Link href={href}>
                          <h1 className="py-2 font-medium text-sky-500 hover:text-sky-600 hover:underline">
                            {title}
                          </h1>
                          <p>{description}</p>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaDocumentosRelacionados;
