import * as z from "zod";
import { UserRole, ambiente, estado, tipo } from "@prisma/client";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    cargo: z.optional(z.string().min(1)),
    telefono: z.optional(z.string().min(1)),
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
export const EmpresaSchema = z.object({
  empresa: z.string().min(1),
  ruc: z.optional(z.string()),
  nombre: z.optional(z.string()),
  documento: z.optional(z.string()),
  telefono: z.optional(z.string()),
  email: z.optional(z.string()),
  fechaAniversario: z.optional(z.date()),
});
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
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  ambiente: z.enum([ambiente.Administrador, ambiente.Cliente]),
  tipo: z.enum([tipo.Master, tipo.Plata]),
  estado: z.enum([estado.Vigente, estado.Inactivo]),
  vencimiento: z.date().optional(),
  fechaNacimiento: z.date().optional(),
  telefono: z.string().optional(),
});
