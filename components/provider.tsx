"use client";

import { Provider } from "react-redux";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import store from "@/store/store";
import { useAppSelector } from "@/hooks/store";
import { useEffect, useState } from "react";

function SidebarCmProvider({ children }: React.PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SidebarProvider>
      {isMounted ? (
        <>
          <AppSidebar />
          <main className="flex flex-col w-full max-w-[480px] py-20 px-6 h-full min-h-screen">
            {isAuthenticated ? (
              <SidebarTrigger className="absolute top-[40px] z-[2]" />
            ) : null}
            {children}
          </main>
        </>
      ) : null}
    </SidebarProvider>
  );
}

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <Provider store={store}>
      <SidebarCmProvider>{children}</SidebarCmProvider>
    </Provider>
  );
}
