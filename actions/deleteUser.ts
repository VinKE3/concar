"use server";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const deleteUser = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    return { error: "No Autorizado" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "No Autorizado" };
  }

  const updatedUser = await db.user.delete({
    where: { id: id },
  });

  console.log(updatedUser);

  return { success: "Usuario Eliminado!" };
};
