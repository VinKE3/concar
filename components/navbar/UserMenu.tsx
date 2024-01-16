"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";
import BackDrop from "../BackDrop";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "next-auth";
import { UserRole } from "@prisma/client";
import { LogOut, User2 } from "lucide-react";

interface UserMenuProps {
  currentUser:
    | (User & {
        role: UserRole;
        isTwoFactorEnabled: boolean;
        isOAuth: boolean;
        cargo?: string;
      })
    | null
    | undefined;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   if (!currentUser) router.push("/");
  // }, [currentUser]);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
        p-2
        border-[1px]
        border-slate-400
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-slate-700
        "
        >
          <Avatar src={currentUser?.image} />
          <span>{currentUser?.name}</span>
          <AiFillCaretDown />
        </div>

        {isOpen && (
          <div
            className="
        absolute
        rounded-md
        shadow-md
        w-[170px]
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        flex
        flex-col
        cursor-pointer
        "
          >
            {currentUser ? (
              <div>
                <hr />
                <Link href="/client/datos">
                  <MenuItem onClick={toggleOpen}>
                    <User2 className="" />
                    Mi perfil
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={async () => {
                    toggleOpen();
                    await signOut();
                  }}
                >
                  <LogOut className="" />
                  Salir
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/auth/login">
                  <MenuItem onClick={toggleOpen}>Iniciar Sesión</MenuItem>
                </Link>
                <Link href="/auth/register">
                  <MenuItem onClick={toggleOpen}>Registrar</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
