import NullData from "@/components/NullData";
import { getUserById } from "@/data/user";
import React from "react";
import { EditUser } from "./EditUser";
import { ExtendedUser } from "@/next-auth";
import EditEmpresa from "./EditEmpresa";
interface usuarioProps {
  usuarioId: string;
}
const page = async ({ params }: { params: usuarioProps }) => {
  const user = await getUserById(params.usuarioId);

  if (!user) {
    return <NullData title="Oops! Usuario no encontrado" />;
  }

  return (
    <>
      <EditUser user={user as ExtendedUser} />
      <EditEmpresa user={user as ExtendedUser} />
    </>
  );
};

export default page;
