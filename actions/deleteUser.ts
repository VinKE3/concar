"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const deleteUser = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    return { error: "No Autorizado" };
  }

  if (user.id === id) {
    return { error: "No puedes eliminarte a ti mismo" };
  }

  try {
    const existingUser = await db.user.findUnique({ where: { id: id } });

    if (!existingUser) {
      return { error: "Usuario no encontrado" };
    }

    const deletedUser = await db.user.delete({ where: { id: id } });

    if (!deletedUser) {
      return { error: "Error al eliminar el usuario" };
    }

    return { success: "Usuario Eliminado!" };
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    return { error: "Error al eliminar el usuario" };
  }
};
