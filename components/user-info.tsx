import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import moment from "moment";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[400px] md:w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Codigo Cliente</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Nombre y Apellido</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Cargo</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.cargo}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Ambiente</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.ambiente}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Tipo</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.tipo}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Estado</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.estado}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Telefono</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.telefono}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Vencimiento</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {moment(user?.vencimiento).format("DD/MM/YYYY")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
