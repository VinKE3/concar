"use server";

import * as z from "zod";

import { update } from "@/auth";
import { db } from "@/lib/db";
import { EmpresaSchema } from "@/schemas";
import { getUserById } from "@/data/user";

export const editEmpresa = async (
  id: string,
  values: z.infer<typeof EmpresaSchema>
) => {
  const dbUser = await getUserById(id);

  if (!dbUser) {
    return { error: "No Autorizado" };
  }

  const updatedEmpresa = await db.empresa.upsert({
    where: { id: dbUser.id },
    update: { ...values },
    create: { ...values, userId: dbUser.id },
  });
  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      empresa: {
        connect: {
          id: updatedEmpresa.id,
        },
      },
    },
  });

  update({
    user: updatedUser as any,
  });

  return { success: "Datos Actualizados!" };
};
