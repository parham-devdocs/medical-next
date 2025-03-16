import DatePicker from "@/components/common/datePicker";
import Blogs from "@/components/common/doctorProfile/blogs";
import PersonalInfo from "@/components/common/doctorProfile/personalInfo"
import { DatePickerEvent } from "@/types";
import React from "react";
const   events:DatePickerEvent[]=[
  { title: 'harry manson', date: '2025-03-18', display: 'block',id:"1" },
  { title: 'khjbhkh', date: '2025-03-25', display: 'block',id:"2" }
]
const SignleDoctorPage = () => {

  return (
    <div className="">
      <div className=" flex h-[600px] gap-5 flex-wrap items-center justify-center w-full">
        <PersonalInfo />
        <DatePicker events={events}/>
        <Blogs/>
      </div>{" "}
    </div>
  );
};

export default SignleDoctorPage;
