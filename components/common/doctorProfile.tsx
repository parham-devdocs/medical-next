import Image from "next/image";
import React from "react";
import RatingComponent from "./rating";

const DoctorProfile = () => {
  return (
    <div className="h-full w-full flex gap-12 justify-center">
      <Image
        src="/heroPic.png"
        width={200}
        height={200}
        alt="profile image"
        className="border-primary border-2 p-2 rounded-full"
          />
      <div className="flex flex-col">
        <div className="flex gap-8  h-8 items-center mb-5">
        <h2 className="text-primary font-bold text-3xl">John Doe</h2>
          <RatingComponent stars={3}/>

        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600">Age</h2>
              <p>42</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600">Phone Number</h2>
              <p>42</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600">Address</h2>
              <p className="max-w-48 overflow-hidden whitespace-nowrap text-ellipsis">
                iran-tehran-pwdjlswejfclwkesf
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600">Specialization</h2>
              <p>oncology</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600">Education</h2>
              <p>Fellowship in Cardiology</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600">
                Hours of operation in week
              </h2>
              <p>21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
