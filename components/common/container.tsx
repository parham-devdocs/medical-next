import React from "react";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="  px-4 lg:px-32 border-dashed border-l-2 border-primary py-8 lg:py-20 flex-col flex gap-16">
      {children}
    </div>
  );
};

export default Container;
