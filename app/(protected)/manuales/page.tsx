import React from "react";
import { dataManuales } from "./manuales.data";
import Table2 from "@/components/Table2";

const ManualesPage = () => {
  return (
    <div className="md:p-10 p-2">
      <h1 className="text-sky-800 font-bold">Tutoriales</h1>
      <div>
        <div className="md:p-2 p-0">
          <Table2 items={dataManuales} />
        </div>
      </div>
    </div>
  );
};

export default ManualesPage;
