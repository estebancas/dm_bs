"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { register as registerApi } from "@/lib/api/user";
import { register } from "@/store/user";
import { useState } from "react";

const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Nombre debe tener al menos 2 caracteres",
  }),
  email: z
    .string()
    .email({ message: "El email es requerido y debe ser valido" }),
});

type Props = {
  onError: (message?: string) => void;
};

export default function RegisterForm({ onError }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setLoading(true);
    const response = await registerApi(values);

    if (response.data) {
      onError(undefined);
      router.push("/app/home");
      dispatch(register(response.data));
    } else {
      onError(response.error || "Ocurrio un error inesperado");
    }

    setLoading(false);
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full flex flex-col justify-center"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="w-full" type="submit">
            Listo, vamos!
          </Button>
          <Button
            disabled={loading}
            variant={"secondary"}
            className="w-full"
            onClick={() => router.push("/login")}
          >
            Ya tengo una cuenta
          </Button>
          <Button
            disabled={loading}
            variant={"ghost"}
            className=""
            onClick={handleBack}
          >
            Atras
          </Button>
        </form>
      </Form>
    </div>
  );
}
