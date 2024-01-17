"use server";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { estado } from "@prisma/client";

export const changeEstado = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    return { error: "No Autorizado" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "No Autorizado" };
  }

  let newEstado: estado;
  if (dbUser.estado === estado.Vigente) {
    newEstado = estado.Inactivo;
  } else if (dbUser.estado === estado.Inactivo) {
    newEstado = estado.Vigente;
  } else {
    return { error: "Estado no reconocido" };
  }

  const updatedUser = await db.user.update({
    where: { id: id },
    data: {
      estado: newEstado,
    },
  });

  if (!updatedUser) {
    return { error: "Error al actualizar el estado" };
  }

  return { success: "Estado Actualizado!" };
};
