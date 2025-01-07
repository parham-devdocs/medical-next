"use client";

import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { MonitorPlay, Newspaper, Headset, FileQuestion } from "lucide-react";
import NavbarButton from "./navbarButton";
import { NavbarButtonType } from "@/types";
import { motion } from "framer-motion";
const navbarItems: NavbarButtonType[] = [
  {
    icon: <MonitorPlay />, // Assuming Monitor is a React component
    text: "Videos", // Add appropriate text
    href: "/videos", // Provide a valid href
  },
  {
    icon: <Newspaper />, // Assuming Monitor is a React component
    text: "Blog", // Add appropriate text
    href: "/blogs", // Provide a valid href
  },
  {
    icon: <Headset />, // Assuming Monitor is a React component
    text: "Contact Us", // Add appropriate text
    href: "/contact", // Provide a valid href
  },
  {
    icon: <FileQuestion />, // Assuming Monitor is a React component
    text: "About Us", // Add appropriate text
    href: "/about", // Provide a valid href
  },
];

<MonitorPlay />;
const Navbar = () => {
  return (
    <motion.div
      className="w-full h-16 bg-transparent px-4 py-2 flex items-center justify-between "
      initial={{ opacity:0 }}
      animate={{opacity:1 }}
      transition={{ duration: 2 }}
    >
      <div>
        <Image
          src="/logo.png"
          width="200"
          height="10"
          alt="logo image"
          className=" w-36 h-12"
        />
      </div>
      <div className="flex-4 hidden gap-6 lg:flex">
        {navbarItems.map((i) => {
          return (
            <NavbarButton
              key={i.text}
              href={i.href}
              text={i.text}
              icon={i.icon}
            />
          );
        })}
      </div>
      {/* Changed to flex-4 to occupy 4/6 of the width */}
      <div className="flex items-center justify-between gap-5">
        <Avatar>
          <AvatarImage
            src={"https://github.com/shadcn.png"} // Use empty string if no image
            alt="profile image" // Use name as alt text
          />
        </Avatar>
        <div className=" flex flex-col justify-between">
          <p className="text-primary font-bold text-sm">parham pazargadi</p>
          <p className=" text-secondary text-xs">pazargadiparham@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
