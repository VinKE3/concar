import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  const pathname = usePathname();
  const path = pathname;

  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      {path === "/auth/login" && (
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🔐 Iniciar sesión
        </h1>
      )}
      {path === "/auth/register" && (
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🔐 Registrarse
        </h1>
      )}
      {path === "/auth/new-password" && (
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🔐 Nueva Contraseña
        </h1>
      )}
      {path === "/auth/new-verification" && (
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🔐 Nueva Verificacion
        </h1>
      )}
      {path === "/auth/reset" && (
        <h1
          className={cn("text-3xl text-center font-semibold", font.className)}
        >
          🔐 Reiniciar contraseña
        </h1>
      )}
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
