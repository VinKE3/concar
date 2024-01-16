"use client";

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";

import { EmpresaSchema } from "@/schemas";
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
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { empresa } from "@/actions/empresa";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SettingsPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

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
  const { control } = form;
  const onSubmit = (values: z.infer<typeof EmpresaSchema>) => {
    startTransition(() => {
      empresa(values)
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
    });
  };

  return (
    <Card className="md:w-[600px] w-[400px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Mi Empresa</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-semibold text-sm mb-2"
                  htmlFor="fechaAniversario"
                >
                  Fecha de Aniversario
                </label>
                <Controller
                  control={control}
                  name="fechaAniversario"
                  render={({ field }) => (
                    <DatePicker
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
  );
};

export default SettingsPage;
