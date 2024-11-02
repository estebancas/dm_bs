"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login as loginApi } from "@/lib/api/user";
import { login } from "@/store/user";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nombre debe tener al menos 2 caracteres",
  }),
  email: z
    .string()
    .email({ message: "El email es requerido y debe ser valido" }),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await loginApi(values);

    if (result) {
      router.replace("/home");
      dispatch(login(result));
    }
  }

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
          <Button className="w-full" type="submit">
            Listo
          </Button>
          <Button
            variant={"secondary"}
            className="w-full"
            onClick={() => router.push("/register")}
          >
            Crearme una cuenta
          </Button>
          <Button variant={"ghost"} className="" onClick={() => router.back()}>
            Atras
          </Button>
        </form>
      </Form>
    </div>
  );
}
