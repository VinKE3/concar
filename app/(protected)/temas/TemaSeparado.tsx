"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { esES, DataGrid, GridColDef } from "@mui/x-data-grid";
import Heading from "@/components/Heading";
import { dataGlobal } from "@/data/global.data";
import Link from "next/link";
import { Select, MenuItem, Autocomplete, TextField } from "@mui/material";
import Button from "@/components/Button";

const TemaSeparado = () => {
  const router = useRouter();
  const tipos = [...new Set(dataGlobal.map((item) => item.tipo))];
  const temas = [...new Set(dataGlobal.map((item) => item.tema))];
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(
    null
  );
  const [selectedPalabraClave, setSelectedPalabraClave] = useState<
    string | null
  >(null);

  const categorias = [
    ...new Set(dataGlobal.flatMap((item) => item.categorias)),
  ];
  const palabrasClave = [
    ...new Set(dataGlobal.flatMap((item) => item.palabrasClave)),
  ];

  const filteredRows = dataGlobal.filter((item) => {
    if (selectedCategoria && !item.categorias.includes(selectedCategoria)) {
      return false;
    }

    if (
      selectedPalabraClave &&
      !item.palabrasClave?.includes(selectedPalabraClave)
    ) {
      return false;
    }

    return true;
  });

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
        palabrasClave: item.palabrasClave
          ? item.palabrasClave.map((item: any) => item)
          : [],
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
      <div className="w-32 py-5">
        <Button
          small
          label="Limpiar Filtros"
          onClick={() => {
            setSelectedCategoria("");
            setSelectedPalabraClave("");
          }}
        />
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
              width: 220,
              renderCell: () => {
                return (
                  <Select
                    value={selectedCategoria || ""}
                    onChange={(e) => setSelectedCategoria(e.target.value)}
                    className="w-full"
                  >
                    <MenuItem value="">Sin Categoria</MenuItem>
                    {categorias.map((item: any, index: any) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                );
              },
            },
            {
              field: "palabrasClave",
              headerName: "Palabras Clave",
              filterable: false,
              width: 250,
              renderCell: () => {
                return (
                  <Autocomplete
                    className="w-full"
                    value={
                      selectedPalabraClave
                        ? { label: selectedPalabraClave }
                        : null
                    }
                    onChange={(event, newValue) => {
                      setSelectedPalabraClave(newValue ? newValue.label : null);
                    }}
                    options={palabrasClave.map((option) => ({ label: option }))}
                    getOptionLabel={(option: any) => option.label}
                    renderInput={(params) => (
                      <TextField {...params} label="Palabras" />
                    )}
                  />
                  // <Autocomplete
                  //   className="w-full"
                  //   value={
                  //     selectedPalabraClave
                  //       ? { label: selectedPalabraClave }
                  //       : null
                  //   }
                  //   onChange={(event, newValue) => {
                  //     setSelectedPalabraClave(newValue ? newValue.label : "");
                  //   }}
                  //   options={palabrasClave.map((option) => ({ label: option }))}
                  //   getOptionLabel={(option: any) => option.label}
                  //   renderInput={(params) => (
                  //     <TextField {...params} label="Palabras" />
                  //   )}
                  // />
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
