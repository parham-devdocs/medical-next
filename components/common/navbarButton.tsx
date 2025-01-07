import React from "react";
import Link from "next/link";
import {NavbarButtonType  } from "@/types";
const NavbarButton = ({icon,text,href}:NavbarButtonType) => {
  
  return (
    <Link  href={href} className="bg-transparent border-2 border-primary flex items-center p-1 rounded-full gap-2 transition duration-200 ease-in-out hover:bg-primary hover:border-transparent hover:text-white hover:scale-105 cursor-pointer">
    
      <div className="rounded-full bg-primary p-1 transition duration-200 ease-in-out hover:scale-110">
        {icon}
      </div>
      <p className="transition duration-200 ease-in-out">{text}</p>
    </Link>
  );
};

export default NavbarButton;
