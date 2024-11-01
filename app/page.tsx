import React from "react";

import Welcome from "@/components/welcome";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/login");
  };

  return (
    <section className="py-24">
      <div className="container max-w-3xl flex flex-col">
        <Welcome onContinue={onContinue} />
      </div>
    </section>
  );
}
