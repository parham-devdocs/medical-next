"use client";
import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function MyComponent({ stars }:{stars:number}) {
  const [rating, setRating] = useState<number>(0);

  // Catch Rating value
  useEffect(()=>{
if(stars){
  setRating(stars)
  return
    }
    setRating(0)
  },[])
 

  return (
    <div className=" w-56">
      <div className="flex gap-1 items-center ">
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;
          return (
            <button key={starValue} onClick={() => setRating(starValue)}>
              {starValue <= rating ? (
                <FaStar color="green" size={20} />
              ) : (
                <CiStar color="green" size={25} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
