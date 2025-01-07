"use client";
import React from "react";
import Stats from "../stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; // Make sure this import is correct

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[90vh] py-4 border-l-2 border-dashed border-primary mt-2 bg-background">
      <div className="flex-1 px-10 py-10">
        <motion.h1
          className="text-3xl xl:text-6xl font-bold md:font-extrabold text-primary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Instant online doctors around the world
        </motion.h1>
        <p className="text-md md:text-md lg:text-lg text-gray-700 mt-4">
          Effortless Medical Consultations for Tourists
        </p>

        <motion.p
          className="text-md md:text-md lg:text-lg text-gray-700 mt-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .5,delay:.5 }}
        >
          Traveling through Germany and in need of medical advice? Our online
          doctor services provide you with fast, accessible care. We offer 24/7
          video consultations from just €20, designed specifically for tourists.
          No registration required, just instant healthcare access.
        </motion.p>
        <Button
          className="hover:text-primary border-2 border-primary mt-8"
          size="lg"
        >
          See An Online Doctor Now!
        </Button>
        <div className="flex justify-center mx-auto w-full mt-20">
          <Stats />
        </div>
      </div>
      <div className="flex-1 flex items-start justify-center">
        <Image src="/heroPic.png" width={500} height={900} alt="hero picture" />
      </div>
    </div>
  );
};

export default Hero;
