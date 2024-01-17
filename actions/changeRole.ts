"use server";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const changeRole = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    return { error: "No Autorizado" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "No Autorizado" };
  }

  let newRole: UserRole;
  if (dbUser.role === UserRole.ADMIN) {
    newRole = UserRole.USER;
  } else if (dbUser.role === UserRole.USER) {
    newRole = UserRole.ADMIN;
  } else {
    return { error: "Rol no reconocido" };
  }

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
};
