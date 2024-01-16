import * as z from "zod";
import { UserRole, ambiente, estado, tipo } from "@prisma/client";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    cargo: z.optional(z.string().min(1)),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "Nueva contraseña es requerida!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Contraseña actual es requerida!",
      path: ["password"],
    }
  );

export const ChangePasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "Minimo 6 caracteres requeridos",
    }),
    newPassword: z.string().min(6, {
      message: "Minimo 6 caracteres requeridos",
    }),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "Nueva contraseña es requerida!",
      path: ["newPassword"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimo 6 caracteres requeridos",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email es requerido",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email es requerido",
  }),
  password: z.string().min(1, {
    message: "Contraseña es requerida",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Nombre es requerido",
  }),
  email: z.string().email({
    message: "Email es requerido",
  }),
  password: z.string().min(6, {
    message: "Minimo 6 caracteres requeridos",
  }),
  cargo: z.string().min(1, {
    message: "Cargo es requerido",
  }),
  ambiente: z.enum([ambiente.Administrador, ambiente.Cliente]),
  tipo: z.enum([tipo.Master, tipo.Plata]),
  estado: z.enum([estado.Vigente, estado.Inactivo]),

  telefono: z.string().optional(),
});
