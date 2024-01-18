import Link from "next/link";
import React from "react";
interface TableProps {
  items?: {
    id: number;
    title: string;
    href: string;
    codigo: string;
    description: string;
  }[];
}
const Table2 = ({ items }: TableProps) => {
  return (
    <div className="mt-5 mb-10 border border-t-2">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                Código
              </th>
              <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                Título
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items &&
              items.map(({ id, title, codigo, href, description }) => {
                return (
                  <tr key={id}>
                    <td className="px-6 py-4 whitespace-nowrap">{codigo}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        className="text-sky-500 hover:text-sky-800"
                        href={href}
                      >
                        <h1>{title}</h1>
                      </Link>
                      <p>{description}</p>
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

export default Table2;
