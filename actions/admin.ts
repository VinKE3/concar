"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { getRoleByUserId } from "@/lib/auth";

export const admin = async (userId: string | undefined) => {
  if (!userId) {
    return { error: "No se proporcionó un ID de usuario!" };
  }

  const role = await getRoleByUserId(userId);

  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
