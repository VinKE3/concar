"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridLogicOperator,
} from "@mui/x-data-grid";
import Heading from "@/components/Heading";
import { dataGlobal } from "@/data/global.data";
import Link from "next/link";

const TemaSeparado = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  let rows: any = [];
  if (dataGlobal) {
    rows = dataGlobal.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        href: item.href,
        tipo: item.tipo,
        categorias: item.categorias,
        tema: item.tema,
      };
    });
  }

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nombre",
      width: 1000,
      renderCell: (params) => {
        return (
          <div className="flex flex-col">
            <Link href={params.row.href}>
              <h1 className="text-sky-600 hover:text-sky-700 font-semibold">
                {params.value}
              </h1>
            </Link>
            <div className="overflow-hidden overflow-wrap">
              <p>{params.row.description}</p>
            </div>
          </div>
        );
      },
    },
    { field: "tipo", headerName: "Tipo", width: 150 },
    { field: "tema", headerName: "Tema", width: 150 },
    { field: "categorias", headerName: "Categorias", width: 400 },
  ];
  const filterModel: GridFilterModel = {
    items: [{ id: 1, field: "tema", operator: "contains", value: "" }],
    logicOperator: GridLogicOperator.Or,
  };
  return (
    <div className="md:max-w-[1800px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Temas" center />
      </div>
      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          filterModel={filterModel}
          pageSizeOptions={[25, 50]}
        />
      </div>
    </div>
  );
};

export default TemaSeparado;
