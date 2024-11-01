import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import laJose from "../public/images/laJose.png"

type Props = {
  onContinue: () => void;
};

const laJoseImage = laJose

export default function Welcome({ onContinue }: Props) {
  return (
    <>
    <div>
    <Image
        src={laJoseImage}
        alt="Jose y Merly en el Cine"
        height={350}
        width={400}
      />
    </div>
    <section className="py-4">
      
      <div className="container max-w-3xl justify-center items-center flex flex-col">
        <h2 className="text-lg mb-7 font-bold">Hola!</h2>
        <p>Bienvenidos al Baby Shower de Dylan Mateo</p>
        <Button onClick={onContinue} className="mt-20 w-full">
          Continuar
        </Button>
      </div>
    </section>
    </>
  );
}
