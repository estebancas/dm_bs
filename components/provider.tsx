"use client";

import { PropsWithChildren } from "react";

import { Provider } from "react-redux";

import store from "@/store/store";
import { Toaster } from "./ui/sonner";

function ToasterProvider() {
  return <Toaster position="top-right" />;
}

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      {children}
      <ToasterProvider />
    </Provider>
  );
}
