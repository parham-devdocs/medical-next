import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/sidebar";
import Navbar from "@/components/common/navbar";
import { cookies } from "next/headers";
import { Link } from "@/types";

const sideBarItems: Link[] = [
  { title: "doctors", url: "/admin/doctors", icon: "stethoscope" },
  { title: "patients", url: "/admin/patient", icon: "user-round-cog" },
  { title: "statistics", url: "/admin/statistics", icon: "chart-pie" },
];

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <div className="min-h-screen w-screen flex flex-col" style={{ backgroundColor: 'your-color-value' }}>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar items={sideBarItems} />
        <main className="w-[97vw] flex-grow bg-background">
          <Navbar />
          <hr />
          <div className="p-6">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
  
};

export default DashboardLayout;