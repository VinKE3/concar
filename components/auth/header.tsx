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
      {path === "/auth/login" ? (
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🔐 Iniciar sesión
        </h1>
      ) : (
        <>
          <h1 className={cn("text-3xl font-semibold", font.className)}>
            🔐 Registrarse
          </h1>
        </>
      )}
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
