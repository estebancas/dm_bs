"use client";

import React from "react";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Icon from "../public/images/dm-comment.png";
import { useAppSelector } from "@/hooks/store";
import Link from "next/link";

const agendaItems = [
  { time: "2:00 PM", event: "Bienvenida e introduccion" },
  { time: "2:30 PM", event: "Juegos y actividades 🎲" },
  { time: "3:00 PM", event: "Comida" },
  { time: "3:30 PM", event: "Más juegos" },
  { time: "4:30 PM", event: "Hora del yodo ☕️" },
  { time: "5:00 PM", event: "Regalos 🎁" },
  { time: "6:00 PM", event: "Muchas gracias y adios 👋🏼" },
];

export default function Agenda() {
  const user = useAppSelector((state) => state.user.userData);

  if (!user?.comment) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded border-[2px] border-primary mb-8"
        src={Icon}
        alt="icon"
        width={150}
        height={150}
      />
      <h2 className="text-xl text-center font-bold mb-2">Agenda</h2>
      <p className="text-base text-center mb-4">
        Estos son los eventos que tenemos preparados para ti hoy
      </p>
      <Card className="w-full">
        <CardHeader>
          <h2>Agenda para hoy</h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {agendaItems.map((item, i) => (
              <li key={`agenda-item-${i}`} className="mb-2">
                <strong>{item.time}</strong>: {item.event}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader><strong>Grupo de Whatsapp</strong></CardHeader>
        <CardContent>
          <div className="flex flex-col">
            Creamos un grupo de whats app para que puedas compartir las fotos
            del evento.
            <Link className="mt-2 underline text-primary" href={"https://chat.whatsapp.com/CPiZJnuG0s12WtLplAbSG3"}>
              Unete con este link
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
