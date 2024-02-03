"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Heading from "@/components/Heading";
import moment from "moment";
const MisUsuarios = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  console.log(currentUser);
  useEffect(() => {
    router.refresh();
  }, [router]);
  let rows: any = [];
  if (currentUser) {
    rows = [
      {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        tipo: currentUser.tipo,
        estado: currentUser.estado,
        ambiente: currentUser.ambiente,
        vencimiento: currentUser.vencimiento,
      },
    ];
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "CÓDIGO", width: 250 },
    { field: "name", headerName: "NOMBRE", width: 250 },
    { field: "email", headerName: "EMAIL", width: 250 },
    { field: "tipo", headerName: "TIPO", width: 250 },
    { field: "estado", headerName: "ESTADO", width: 250 },
    { field: "ambiente", headerName: "AMBIENTE", width: 250 },
    {
      field: "vencimiento",
      headerName: "VENCIMIENTO",
      width: 120,
      renderCell: (params) => {
        return <div>{moment(params.value).format("DD/MM/YYYY")}</div>;
      },
    },
  ];
  console.log(rows, "ROWS");
  return (
    <div className="md:max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Mis Usuarios" center />
      </div>
      <div style={{ height: 200, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MisUsuarios;
