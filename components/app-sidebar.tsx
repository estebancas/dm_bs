import { Home, MessageCircle, SquareMenu, Sparkles, ListCheck } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/store/user";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useAppSelector } from "@/hooks/store";
import Link from "next/link";

export function AppSidebar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  const items = useMemo(() => {
    return [
      {
        title: "Home",
        url: "/home",
        icon: Home,
      },
      {
        title: "Encuesta de deseo",
        url: "/survey",
        icon: Sparkles,
      },
      ...(user.userData?.comment
        ? [
            {
              title: "Comentario",
              url: "/comment",
              icon: MessageCircle,
            },
          ]
        : []),
      ...(false
        ? [
            {
              title: "Reporte de encuesta",
              url: "/report",
              icon: ListCheck,
            },
          ]
        : []),
    ];
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <Sidebar aria-describedby="side-nav">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applicacion</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <Button onClick={handleLogout} variant={"ghost"}>
            Cerrar sesion
          </Button>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
