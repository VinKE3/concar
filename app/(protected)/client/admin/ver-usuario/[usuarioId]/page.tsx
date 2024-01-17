import NullData from "@/components/NullData";
import { getUserById } from "@/data/user";
import React from "react";
import { VerUsuario } from "./VerUsuario";
import { ExtendedUser } from "@/next-auth";

interface usuarioProps {
  usuarioId: string;
}
const UsuarioPage = async ({ params }: { params: usuarioProps }) => {
  const user = await getUserById(params.usuarioId);

  if (!user) {
    return <NullData title="Oops! Usuario no encontrado" />;
  }

  return <VerUsuario user={user as ExtendedUser} label="Usuario" />;
};

export default UsuarioPage;
