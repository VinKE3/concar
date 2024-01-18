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
  MdEdit,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import Status from "@/components/Status";
import ActionBtn from "@/components/ActionBtn";
import Heading from "@/components/Heading";
import { deleteUser } from "@/actions/deleteUser";
import { toast } from "sonner";
import { changeRole } from "@/actions/changeRole";
import { changeEstado } from "@/actions/changeEstado";
import { Button } from "@/components/ui/button";

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
    { field: "name", headerName: "Nombre", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "estado",
      headerName: "Estado",
      width: 120,
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
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                handleUserEstado(params.id as string);
              }}
            />
            <ActionBtn
              icon={RiAdminFill}
              onClick={() => {
                handleUserRole(params.id as string);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.id as string);
              }}
            />
            <ActionBtn
              icon={MdEdit}
              onClick={() => {
                router.push(`/client/admin/editar-usuario/${params.id}`);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/client/admin/ver-usuario/${params.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleDelete = useCallback(async (id: string) => {
    const userId = users.find((user) => user.id === id)?.id;
    if (userId === id) {
      toast.error("No puedes eliminar tu propio usuario");
      return;
    }

    try {
      const result = await deleteUser(id);

      toast.promise(
        Promise.resolve(result), // Resolvemos la promesa con el resultado
        {
          loading: "Eliminando...",
          success: (data) => {
            if (data && data.success) {
              return data.success; // Mensaje de éxito específico
            } else {
              return "Usuario eliminado correctamente";
            }
          },
          error: (err) => {
            if (err && err.error) {
              return err.error; // Mensaje de error específico
            } else {
              return "Error al eliminar usuario";
            }
          },
        }
      );
    } catch (error) {
      console.error("Error en handleDelete:", error);
      toast.error("Error inesperado al eliminar usuario");
    }
  }, []);

  const handleUserRole = useCallback(async (id: string) => {
    toast.promise(changeRole(id), {
      loading: "Cambiando...",
      success: (data) => data.success,
      error: (err) => err.error || "Error al cambiar role",
    });
    router.refresh();
  }, []);

  const handleUserEstado = useCallback(async (id: string) => {
    toast.promise(changeEstado(id), {
      loading: "Cambiando...",
      success: (data) => data.success,
      error: (err) => err.error || "Error al cambiar estado",
    });
    router.refresh();
  }, []);

  return (
    <div className="md:max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Administrar Usuarios" center />
        <div className="w-48">
          <Button
            type="button"
            onClick={() => {
              router.push("/client/admin/crear-usuario");
            }}
          >
            Crear Usuario
          </Button>
        </div>
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
