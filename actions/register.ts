"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Campos Invalidos!" };
  }

  const {
    email,
    password,
    name,
    cargo,
    ambiente,
    tipo,
    estado,
    role,
    telefono,
    fechaNacimiento,
    vencimiento,
  } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email en uso!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      cargo,
      ambiente,
      tipo,
      role,
      estado,
      telefono,
      fechaNacimiento,
      vencimiento,
    },
  });

  // const verificationToken = await generateVerificationToken(email);
  // await sendVerificationEmail(
  //   verificationToken.email,
  //   verificationToken.token,
  //   name
  // );

  return { success: "Uusuario Creado!" };
};
