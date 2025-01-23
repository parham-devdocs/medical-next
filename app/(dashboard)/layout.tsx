import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/dashboard/sidebar";
import Navbar from "@/components/common/navbar";
import { cookies } from "next/headers";
const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <div className=" h-screen w-screen">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar f />
        <main className=" w-[97vw]  ">
          <Navbar/>
          <hr/>
                  <div className="px-6">
                             {children}
   
</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
