"use client";

import React from "react";

import LoginForm from "@/components/login-form";

export default function Login() {


  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Ingresa con tus datos</h2>
      <p className="text-base mb-8">
        Se vienen cositas 👏🏼
      </p>
      <LoginForm />
    </div>
);
}
