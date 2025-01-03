import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white h-screen w-full">
      {children}
    </div>
  );
};

export default DashboardLayout;
