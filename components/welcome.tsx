import React from "react";
import { Button } from "./ui/button";

type Props = {
  onContinue: () => void;
};

export default function Welcome({ onContinue }: Props) {
  return (
    <section className="py-24">
      <div className="container max-w-3xl flex flex-col">
        <h2>Hola!</h2>
        <p>Bienvenidos al Baby Shower de dylan mateo</p>
        <Button onClick={onContinue} className="mt-20">
          Continuar
        </Button>
      </div>
    </section>
  );
}
