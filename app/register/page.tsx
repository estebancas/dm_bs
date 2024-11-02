"use client";

import React from "react";

import RegisterForm from "@/components/register-form";

export default function Login() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create la cuenta</h2>
      <p className="text-base mb-8">
        Asi puedes participar en las actividades del baby shower 😊
      </p>
      <RegisterForm />
    </div>
  );
}
