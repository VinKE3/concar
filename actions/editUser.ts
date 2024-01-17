"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { update } from "@/auth";
import { db } from "@/lib/db";
import { UpdateUser } from "@/schemas";
import { getUserById } from "@/data/user";

export const editUser = async (
  id: string,
  userValues: z.infer<typeof UpdateUser>
) => {
  const dbUser = await getUserById(id);

  if (!dbUser) {
    return { error: "Usuario no encontrado" };
  }

  if (userValues.password && userValues.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      userValues.password,
      dbUser.password
    );

    if (!passwordsMatch) {
      return { error: "Contraseña Incorrecta!" };
    }

    const hashedPassword = await bcrypt.hash(userValues.newPassword, 10);
    userValues.password = hashedPassword;
    userValues.newPassword = undefined;
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...userValues,
    },
  });

  update({
    user: updatedUser as any,
  });

  return { success: "Datos Actualizados!" };
};
