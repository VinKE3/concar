"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { esES, DataGrid, GridColDef } from "@mui/x-data-grid";
import Heading from "@/components/Heading";
import { dataGlobal } from "@/data/global.data";
import Link from "next/link";
import { Select, MenuItem } from "@mui/material";

const TemaSeparado = () => {
  const router = useRouter();
  const tipos = [...new Set(dataGlobal.map((item) => item.tipo))];
  const temas = [...new Set(dataGlobal.map((item) => item.tema))];
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(
    null
  );

  const categorias = [
    ...new Set(dataGlobal.flatMap((item) => item.categorias)),
  ];

  const filteredRows = selectedCategoria
    ? dataGlobal.filter((item) => item.categorias.includes(selectedCategoria))
    : dataGlobal;
  console.log(selectedCategoria);
  console.log(filteredRows);

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
        categorias: item.categorias.map((item: any) => item),
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
    {
      field: "tipo",
      headerName: "Tipo",
      width: 150,
      type: "singleSelect",
      valueOptions: tipos,
      renderCell: (params) => {
        return (
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold">
              {params?.row?.tipo}
            </span>
          </div>
        );
      },
    },
    {
      field: "tema",
      headerName: "Tema",
      width: 150,
      type: "singleSelect",
      valueOptions: temas,
      renderCell: (params) => {
        return (
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold">
              {params?.row?.tema}
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="md:max-w-[1800px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Temas" center />
      </div>
      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={filteredRows}
          columns={[
            ...columns,
            {
              field: "categorias",
              headerName: "Categorias",
              filterable: false,
              width: 250,
              renderCell: () => {
                return (
                  // <div className="flex flex-col">
                  //   {params?.row?.categorias.map((item: any, index: any) => (
                  //     <span key={index} className="text-gray-600 font-semibold">
                  //       {item}
                  //     </span>
                  //   ))}
                  // </div>
                  <Select
                    value={selectedCategoria}
                    onChange={(e) => setSelectedCategoria(e.target.value)}
                    className="w-full"
                  >
                    {categorias.map((item: any, index: any) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                );
              },
            },
          ]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          pageSizeOptions={[25, 50]}
        />
      </div>
    </div>
  );
};

export default TemaSeparado;
