import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import Admin from "./Admin";
import getUsers from "@/actions/getUsers";

const AdminPage = async () => {
  const users = await getUsers();

  return (
    <Card className="w-[400px] md:w-[1200px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Tenes permiso para ver este contenido" />
          <Admin users={users} />
        </RoleGate>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
