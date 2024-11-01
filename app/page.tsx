'use client'

import React from "react";

import Welcome from "@/components/welcome";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/login");
  };

  return (
    <section className="">
      <div className="container">
        <Welcome onContinue={onContinue} />
      </div>
    </section>
  );
}
