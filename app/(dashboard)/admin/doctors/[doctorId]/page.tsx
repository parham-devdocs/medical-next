import DatePicker from "@/components/common/datePicker";
import PersonalInfo from "@/components/common/doctorProfile/personalInfo"
import React from "react";

const SignleDoctorPage = () => {
  return (
    <div className="">
      <div className=" flex h-[600px] gap-5">
        <PersonalInfo />
        <DatePicker/>
      </div>{" "}
    </div>
  );
};

export default SignleDoctorPage;
