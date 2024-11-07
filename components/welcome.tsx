'use client'

import React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "./ui/button";
import Icon from "../public/images/dylan-mateo-baby-shower-icon.png";

export default function Welcome() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/login");
  };

  const onRegister = () => {
    router.push("/register");
  };

  return (
    <div className="max-w-3xl justify-between items-center flex flex-col flex-1 pt-24 px-4 pb-16 min-h-screen">
      <div className="text-center flex flex-col items-center">
        <Image src={Icon} alt="icon" width={300} height={300} />
        <h2 className="text-2xl mb-7 font-bold">Hola!</h2>
        <p>Bienvenidos al Baby Shower de Dylan Mateo</p>
      </div>
      <div className="bottom-10 w-full flex flex-row">
        <Button
          variant="secondary"
          className="mr-4 flex-1"
          onClick={onContinue}
        >
          Ya tengo una cuenta
        </Button>
        <Button className="flex-1" onClick={onRegister}>
          Ingresar
        </Button>
      </div>
    </div>
  );
}
