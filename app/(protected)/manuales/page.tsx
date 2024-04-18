import React from "react";
import { dataManuales } from "@/data/manuales.data";
import Table2 from "@/components/Table2";
import Link from "next/link";

const ManualesPage = () => {
  return (
    <div className="md:p-10 p-2">
      <Link href="/inicio">
        <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 mt-4 rounded-md mb-2 md:mb-5">
          Volver
        </button>
      </Link>
      <h1 className="text-sky-800 font-bold">Manuales</h1>
      <div>
        <div className="md:p-2 p-0">
          <Table2 items={dataManuales} />
        </div>
      </div>
    </div>
  );
};

export default ManualesPage;
