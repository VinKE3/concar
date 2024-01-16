import { User } from "@prisma/client";
enum UserRole {
  ADMIN,
  USER,
}
export type SafeUser =
  | (Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
      createdAt: string;
      updatedAt: string;
      emailVerified: string | null;
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOAuth: boolean;
      name: string;
      email: string;
      cargo: string;
      telefono: string;
    })
  | null
  | undefined;
