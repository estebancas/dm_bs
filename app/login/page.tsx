"use client";

import React, { useState } from "react";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LoginForm from "@/components/login-form";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const onError = (message?: string) => {
    setErrorMessage(message);
  };

  return (
    <div className="w-full">
      {errorMessage ? (
        <Alert variant="destructive" className="mb-3">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      ) : null}
      <h2 className="text-xl font-bold mb-4">Ingresa con tus datos</h2>
      <p className="text-base mb-8">Se vienen cositas 👏🏼</p>
      <LoginForm onError={onError} />
    </div>
  );
}
