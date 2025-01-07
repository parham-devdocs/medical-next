"use client";
import { Stethoscope, UserRoundCog, ChartPie, LogOut } from "lucide-react";
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
import { Button } from "../../ui/button";
import Image from "next/image";

const items = [
  {
    title: "doctors",
    url: "#",
    icon: Stethoscope,
  },
  {
    title: "patients",
    url: "#",
    icon: UserRoundCog,
  },
  {
    title: "Statistics",
    url: "#",
    icon: ChartPie,
  },
];

export function AppSidebar() {
  const { setOpen ,open} = useSidebar();

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
              <SidebarMenuItem className={open?"mx-12":""}>
                <Image
                  src={"/unknownUser.jpg"} // Use empty string if no image
                  alt="profile image" // Use name as alt text
                  width="200"
                  height="200"
                  className=" rounded-full border-2 border-primary"
                />
              </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
