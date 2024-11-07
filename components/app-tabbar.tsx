"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { Home, Sparkle, User } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

const paths = [
  { route: "home", icon: Home },
  { route: "survey", icon: Sparkle },
  { route: "profile", icon: User },
];

export default function AppTabbar() {
  const pathname = usePathname();

  return (
    <Card className="bg-glass backdrop-blur-md flex flex-row absolute bottom-9 w-11/12 justify-around border-none rounded-3xl">
      {paths.map(({ route, icon: Icon }) => (
        <Link
          key={route}
          href={`/app/${route}`}
          className="flex-1 flex p-4 text-center justify-center items-center"
        >
          <Icon
            size={24}
            color={pathname === `/app/${route}` ? "#024897" : undefined}
          />
        </Link>
      ))}
    </Card>
  );
}
