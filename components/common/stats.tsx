"use client"
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Stats = () => {
    const patients = 500
    const doctors = 420
    const cases=1240
    const [doctorsNumber, setDoctorsNumber] = useState(0)
     const [patientsNumber, setPatientsNumber] = useState(0);
 const [casesNumber, setCasesNumber] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
          setPatientsNumber((prev) => (prev < patients ? prev + 1 : prev));
          setDoctorsNumber((prev) => (prev < doctors ? prev + 1 : prev))
          setCasesNumber((prev) => (prev < cases ? prev + 1 : prev));
      }, .1); // Adjust the interval time as needed

      return () => clearInterval(interval);
    }, []);

  return (
    <motion.div
      className=" flex flex-col md:flex-row  w-full gap-5"
     
    >
      <motion.div
        className="stat bg-white rounded-md "
         initial={{  scale: .5,opacity:0,y:100 }}
      animate={{  scale: 1,opacity:1,y:0 }}
      transition={{ duration: 2,delay:.5 }}
      >
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Doctors</div>
        <div className="stat-value">{doctorsNumber}</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </motion.div>

      <motion.div
        className="stat bg-white rounded-md"
 initial={{  scale: .5,opacity:0,y:100 }}
      animate={{  scale: 1,opacity:1,y:0 }}
      transition={{ duration: 2,delay:1 }}
>
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">patients</div>
        <div className="stat-value">{patientsNumber}</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </motion.div>

      <motion.div
        className="stat bg-white rounded-md"
 initial={{  scale: .5,opacity:0,y:100 }}
      animate={{  scale: 1,opacity:1,y:0 }}
      transition={{ duration: 2,delay:1.5 }}
>
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Cases Issued</div>
        <div className="stat-value">{casesNumber}</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
