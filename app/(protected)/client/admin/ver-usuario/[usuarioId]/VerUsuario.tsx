import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import moment from "moment";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const VerUsuario = ({ user, label }: UserInfoProps) => {
  const empresa = user?.empresa;

  return (
    <>
      <Card className="w-[400px] md:w-[1000px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center text-gray-600">
            {label}: <span className="text-gray-700">{user?.name}</span>
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-2">
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
          </div>
          <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-2">
            {" "}
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
          </div>
          <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-3">
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
          </div>
          <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-2">
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
          </div>
        </CardContent>
      </Card>
      <Card className="w-[400px] md:w-[1000px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center text-gray-600">
            Empresa de: <span className="text-gray-700">{user?.name}</span>
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {empresa ? (
            <CardContent className="space-y-4">
              <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <p className="text-sm font-medium">Nombre Empresa</p>
                  <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                    {empresa?.empresa}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <p className="text-sm font-medium">Ruc</p>
                  <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                    {empresa?.ruc}
                  </p>
                </div>
              </div>
              <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <p className="text-sm font-medium">Nombres y Apellidos</p>
                  <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                    {empresa?.nombre}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <p className="text-sm font-medium">Teléfono</p>
                  <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                    {empresa?.telefono}
                  </p>
                </div>
              </div>
              <div className="grid space-y-4 md:space-y-0 md:space-x-4 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <p className="text-sm font-medium">Email</p>
                  <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                    {empresa?.email}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <p className="text-sm font-medium">Fecha Aniversario</p>
                  <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                    {moment(empresa?.fechaAniversario).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
            </CardContent>
          ) : (
            <div>
              <h1 className="text-center semi-bold text-gray-600">
                Sin Empresa
              </h1>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};
