"use client";

import React, { useEffect } from "react";

import Welcome from "@/components/welcome";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/store";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [router, isAuthenticated]);

  return <Welcome />;
}
