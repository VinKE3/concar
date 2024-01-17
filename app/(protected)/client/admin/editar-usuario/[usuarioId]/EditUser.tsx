"use client";
import { ExtendedUser } from "@/next-auth";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import { ambiente, tipo, estado, UserRole } from "@prisma/client";
import { EmpresaSchema } from "@/schemas";
import { UpdateUser } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { editEmpresa } from "@/actions/editEmpresa";
import { editUser } from "@/actions/editUser";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface UserInfoProps {
  user?: ExtendedUser;
}

export const EditUser = ({ user }: UserInfoProps) => {
  const EmpresaExiste = user?.empresa?.nombre;
  console.log(user);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const formUser = useForm<z.infer<typeof UpdateUser>>({
    resolver: zodResolver(UpdateUser),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      cargo: user?.cargo || "",
      ambiente:
        user?.ambiente === "Administrador" || user?.ambiente === "Cliente"
          ? user?.ambiente
          : undefined,
      tipo:
        user?.tipo === "Master" || user?.tipo === "Plata"
          ? user?.tipo
          : undefined,
      estado:
        user?.estado === "Vigente" || user?.estado === "Inactivo"
          ? user?.estado
          : undefined,
      vencimiento: user?.vencimiento || new Date(moment().format("YYYY-MM-DD")),
      fechaNacimiento:
        user?.fechaNacimiento || new Date(moment().format("YYYY-MM-DD")),
      telefono: user?.telefono || "",
      role: user?.role || undefined,
    },
  });

  const { control } = formUser;

  const form = useForm<z.infer<typeof EmpresaSchema>>({
    resolver: zodResolver(EmpresaSchema),
    defaultValues: {
      empresa: user?.empresa?.empresa || "",
      ruc: user?.empresa?.ruc || "",
      nombre: user?.empresa?.nombre || "",
      documento: user?.empresa?.documento || "",
      telefono: user?.empresa?.telefono || "",
      email: user?.empresa?.email || "",
      fechaAniversario:
        user?.empresa?.fechaAniversario ||
        new Date(moment().format("YYYY-MM-DD")),
    },
  });

  const { control: controlEmpresa } = form;
  const onSubmitEmpresa = (values: z.infer<typeof EmpresaSchema>) => {
    if (user?.id) {
      editEmpresa(user?.id, values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Algo salio mal!"));
    }
  };

  const onSubmit = (values: z.infer<typeof UpdateUser>) => {
    startTransition(() => {
      if (user?.id) {
        editUser(user?.id, values)
          .then((data) => {
            if (data.error) {
              setError(data.error);
            }

            if (data.success) {
              update();
              setSuccess(data.success);
            }
          })
          .catch(() => setError("Algo salio mal!"));
      } else {
        setError("ID de usuario no encontrado!");
      }
    });
  };

  return (
    <>
      <Card className="md:w-[1000px] w-[400px]">
        <CardHeader>
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl font-semibold text-gray-500">
              Editar Usuario:
            </p>
            <span className="text-2xl font-bold text-gray-700">
              {user?.name}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...formUser}>
            <form
              className="space-y-6"
              onSubmit={formUser.handleSubmit(onSubmit)}
            >
              <div className="space-y-4">
                <div className="grid grid-cols1 md:grid-cols-2 md:space-x-2">
                  <FormField
                    control={formUser.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre y Apellido</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Doe"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUser.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Email@rmail.com"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols1 md:grid-cols-2 md:space-x-2">
                  <FormField
                    control={formUser.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="987654321"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUser.control}
                    name="cargo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cargo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Contador"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols1 md:grid-cols-4 md:space-x-2">
                  <FormField
                    control={formUser.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={UserRole.ADMIN}>
                              Admin
                            </SelectItem>
                            <SelectItem value={UserRole.USER}>User</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUser.control}
                    name="ambiente"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ambiente</FormLabel>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar Ambiente" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={ambiente.Cliente}>
                              Cliente
                            </SelectItem>
                            <SelectItem value={ambiente.Administrador}>
                              Administrador
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUser.control}
                    name="tipo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo</FormLabel>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar Tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={tipo.Master}>Master</SelectItem>
                            <SelectItem value={tipo.Plata}>Plata</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUser.control}
                    name="estado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar Estado" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={estado.Vigente}>
                              Vigente
                            </SelectItem>
                            <SelectItem value={estado.Inactivo}>
                              Inactivo
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols1 md:grid-cols-2 md:space-x-2">
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 font-semibold text-sm mb-2"
                      htmlFor="vencimiento"
                    >
                      Vencimiento
                    </label>
                    <Controller
                      control={control}
                      name="vencimiento"
                      render={({ field }) => (
                        <DatePicker
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="cursor-pointer border border-gray-300 p-2 rounded-md w-full"
                        />
                      )}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 font-semibold text-sm mb-2"
                      htmlFor="fechaNacimiento"
                    >
                      Fecha Nacimiento
                    </label>
                    <Controller
                      control={control}
                      name="fechaNacimiento"
                      render={({ field }) => (
                        <DatePicker
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="cursor-pointer border border-gray-300 p-2 rounded-md w-full"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit">
                Guardar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="md:w-[1000px] w-[400px] mb-10">
        <CardHeader>
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl font-semibold text-gray-500">
              Editar Empresa de Usuario:
            </p>
            <span className="text-2xl font-bold text-gray-700">
              {user?.name}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="space-y-6"
              onSubmit={form.handleSubmit(onSubmitEmpresa)}
            >
              <div className="space-y-4">
                <div className="grid grid-cols1 md:grid-cols-2 md:space-x-2">
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Empresa S.A.C"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ruc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ruc</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="12345678901"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols1 md:grid-cols-2 md:space-x-2">
                  {" "}
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre y Apellido</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Doe"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="documento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Documento</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="12345678"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols1 md:grid-cols-2 md:space-x-2">
                  {" "}
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="987654321"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="email@email.com"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-600 font-semibold text-sm mb-2"
                    htmlFor="fechaAniversario"
                  >
                    Fecha de Aniversario
                  </label>
                  <Controller
                    control={controlEmpresa}
                    name="fechaAniversario"
                    render={({ field }) => (
                      <DatePicker
                        disabled={EmpresaExiste ? true : false}
                        onChange={(date) => field.onChange(date)}
                        selected={
                          field.value && !isNaN(new Date(field.value).getTime())
                            ? new Date(field.value)
                            : null
                        }
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        className="cursor-pointer border border-gray-300 p-2 rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit">
                Guardar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
