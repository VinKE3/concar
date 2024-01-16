"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const MisDatosPage = () => {
  const user = useCurrentUser();

  return <UserInfo label="Mis Datos" user={user} />;
};

export default MisDatosPage;
