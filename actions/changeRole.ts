"use server";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export const changeRole = async (id: string) => {
  const dbUser = await db.user.findUnique({ where: { id } });

  if (!dbUser) {
    return { error: "Usuario no encontrado" };
  }

  let newRole: UserRole;
  if (dbUser.role === UserRole.ADMIN) {
    newRole = UserRole.USER;
  } else if (dbUser.role === UserRole.USER) {
    newRole = UserRole.ADMIN;
  } else {
    return { error: "Rol no reconocido" };
  }

  try {
    const updatedUser = await db.user.update({
      where: { id: id },
      data: {
        role: newRole,
      },
    });

    if (!updatedUser) {
      return { error: "Error al actualizar el rol" };
    }

    return { success: "Rol Actualizado!" };
  } catch (error) {
    return { error: "Error al actualizar el rol" };
  }
};
