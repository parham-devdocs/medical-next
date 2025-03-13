import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/dashboard/sidebar";
import Navbar from "@/components/common/navbar";
import { cookies } from "next/headers";
import { Link } from "@/types";
const sideBarItems:Link[]=[
  {title:"doctors",url:"/admin/dosctorsList",icon:"stethoscope"},
  {title:"patients",url:"/admin/patientsList",icon:"user-round-cog"},
  {title:"statistics",url:"/admin/statistics",icon:"chart-pie"}
]
const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <div className=" h-screen w-screen">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar items={sideBarItems}  />
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
