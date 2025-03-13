"use client";
import { LogOut, Stethoscope, UserRoundCog, ChartPie } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Image from "next/image";
import { Link } from "@/types";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function AppSidebar({ items }: { items: Link[] }) {
  const pathname=usePathname()
  
  const { setOpen, open } = useSidebar();
  const iconMap: Record<string, React.ComponentType> = {
    "chart-pie": ChartPie,
    "user-round-cog": UserRoundCog,
    stethoscope: Stethoscope,
  };

  return (
    <Sidebar
      className=" bg-background"
      collapsible="icon"
      onMouseOver={() => setOpen(true)} // Open on mouse over
      onMouseLeave={() => setOpen(false)} // Close on mouse leave
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className={open ? "mx-12" : ""}>
                <Image
                  src={"/unknownUser.jpg"} // Use empty string if no image
                  alt="profile image" // Use name as alt text
                  width="200"
                  height="200"
                  className=" rounded-full border-2 border-primary mb-2"
                />
              </SidebarMenuItem>
              {items.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <SidebarMenuItem key={item.title} className={ clsx( item.url===pathname ? "bg-primary rounded-lg":"" , "mt-1")}>
                    <SidebarMenuButton asChild >
                      <a href={item.url}>
                        {IconComponent && <IconComponent />}{" "}
                        {/* Render the icon */} <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button>
                    <LogOut />
                    <span>log out</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
