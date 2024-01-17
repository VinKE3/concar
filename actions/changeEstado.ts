"use server";
import { db } from "@/lib/db";
import { estado } from "@prisma/client";

export const changeEstado = async (id: string) => {
  const dbUser = await db.user.findUnique({ where: { id } });

  if (!dbUser) {
    return { error: "Usuario no encontrado" };
  }

  let newEstado: estado;
  if (dbUser.estado === estado.Vigente) {
    newEstado = estado.Inactivo;
  } else if (dbUser.estado === estado.Inactivo) {
    newEstado = estado.Vigente;
  } else {
    return { error: "Estado no reconocido" };
  }
  try {
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
  } catch (error) {
    return { error: "Error al actualizar el estado" };
  }
};
