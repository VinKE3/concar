"use client";
import Container from "../Container";
import UserMenu from "./UserMenu";
import Image from "next/image";
import Link from "next/link";
import { User } from "next-auth";
import { UserRole } from "@prisma/client";
import moment from "moment";
import { useEffect } from "react";
import { toast } from "sonner";

interface NavBarProps {
  currentUser:
    | (User & { role: UserRole; vencimiento: Date; estado: string })
    | null
    | undefined;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  console.log(currentUser?.estado);
  function getDaysRemaining({ vencimiento }: { vencimiento: Date }) {
    const now = moment();
    const vencimientoMoment = moment(vencimiento);
    const daysRemaining = vencimientoMoment.diff(now, "days");

    return daysRemaining;
  }
  const daysRemaining = currentUser?.vencimiento
    ? getDaysRemaining({ vencimiento: currentUser.vencimiento })
    : undefined;

  const shouldShowToast =
    currentUser?.estado === "Vigente" &&
    daysRemaining !== undefined &&
    daysRemaining <= 7;

  useEffect(() => {
    if (shouldShowToast)
      toast.warning("Vencimiento", {
        description: `Tu membresía expira en ${daysRemaining} días. ¡Renueva ahora!`,
        duration: 5000,
        position: "bottom-right",
      });
  }, [currentUser, shouldShowToast]);

  return (
    <div
      className="
    sticky
    w-full
    bg-slate-200
    z-30
    shadow-sm
    top-0
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href={currentUser ? "/inicio" : "/"}>
              <Image
                src="/logos/miconcar-logo.png"
                alt="logo"
                width={200}
                height={50}
                className="cursor-pointer"
              />
            </Link>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="hidden md:block">
                <Image
                  src="/logos/logo-real-systems.png"
                  alt="logo"
                  width={200}
                  height={50}
                  className="cursor-pointer"
                />
              </div>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
