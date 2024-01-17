"use client";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import Status from "@/components/Status";
import ActionBtn from "@/components/ActionBtn";
import Heading from "@/components/Heading";
import { deleteUser } from "@/actions/deleteUser";
import { toast } from "sonner";
import { changeRole } from "@/actions/changeRole";
import { changeEstado } from "@/actions/changeEstado";
interface AdminProps {
  users: User[];
}
const Admin = ({ users }: AdminProps) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  let rows: any = [];
  if (users) {
    rows = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        estado: user.estado,
      };
    });
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Nombre", width: 220 },
    { field: "email", headerName: "Email", width: 100 },
    {
      field: "estado",
      headerName: "Estado",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.value === "Vigente" ? (
              <Status
                text="Vigente"
                icon={MdDone}
                bg="bg-green-100"
                color="text-green-700"
              />
            ) : (
              <Status
                text="Inactivo"
                icon={MdClose}
                bg="bg-red-100"
                color="text-red-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.value === "ADMIN" ? (
              <Status
                text="Admin"
                icon={MdDone}
                bg="bg-green-100"
                color="text-green-700"
              />
            ) : (
              <Status
                text="User"
                icon={MdClose}
                bg="bg-red-100"
                color="text-red-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                console.log(params.id);
                handleUserRole(params.id as string);
              }}
            />
            <ActionBtn
              icon={RiAdminFill}
              onClick={() => {
                handleUserEstado(params.id as string);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.id as string);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleDelete = useCallback(async (id: string) => {
    deleteUser(id);
    toast.success("Usuario eliminado correctamente");
    router.refresh();
  }, []);

  const handleUserRole = useCallback(async (id: string) => {
    console.log(id);
    changeRole(id);
    toast.success("Role cambiado correctamente");
    router.refresh();
  }, []);

  const handleUserEstado = useCallback(async (id: string) => {
    console.log(id);
    changeEstado(id);
    toast.success("Estado cambiado correctamente");
    router.refresh();
  }, []);

  return (
    <div className="md:max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Manejar Usuarios" center />
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Admin;
