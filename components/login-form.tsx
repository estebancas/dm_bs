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
import {User} from '@/store/user/index'

type Props = {onLogin: (user: User) => void}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nombre debe tener al menos 2 caracteres",
  }),
  email: z.string().email({ message: "El email es requerido y debe ser valido" }),
});

export default function LoginForm({onLogin}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    onLogin(values);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Form {...form}>
        <h2 className="text-xl font-bold mb-4">Hola!</h2>
        <p className="text-base mb-8">Bienvenidos al Baby Shower de dylan mateo</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
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
          <Button className="w-full" type="submit">Ingresar</Button>
        </form>
      </Form>
    </div>
  );
}
