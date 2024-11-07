"use client";

import React, { useState } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import RegisterForm from "@/components/register-form";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const onError = (message?: string) => {
    setErrorMessage(message);
  };

  return (
    <div>
      {errorMessage ? (
        <Alert variant="destructive" className="mb-3">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      ) : null}
      <h2 className="text-xl font-bold mb-4">Create la cuenta</h2>
      <p className="text-base mb-8">
        Asi puedes participar en las actividades del baby shower 😊
      </p>
      <RegisterForm onError={onError} />
    </div>
  );
}
