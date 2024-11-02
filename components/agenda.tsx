import React from "react";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Icon from "../public/images/dm-comment.png";

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
      <Card>
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
    </div>
  );
}
