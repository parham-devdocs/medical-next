import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUserClock,
  FaPhone,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCalendarOutline } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";

import Rating from "../rating";

// Define personal info as an array of objects
const personalInfo = [
  {
    text: "MrJackson@gmail.com",
    icon: <CgMail size={17} />,
  },
  {
    text: "1992/4/8",
    icon: <FaBirthdayCake size={17} />,
  },
  {
    text: "iran,tehran,sadeqie sqare,mehran st",
    icon: <FaMapMarkerAlt size={20} />,
  },
  {
    text: "+98 912 468 70 22",
    icon: <FaPhone size={20} />,
  },
  {
    text: "McGill",
    icon: <FaGraduationCap size={20} />,
  },
  {
    text: "10+ years of experience",
    icon: <FaUserClock size={17} />,
  },
  {
    text: "Cardiologist",
    icon: <LuTarget size={17} />,
  },
  {
    text: "9PM to 4AM monday to friday",
    icon: <IoCalendarOutline size={17} />,
  },
  {
    text: "English , French",
    icon: <RiSpeakFill size={17} />,
  }
];

const PersonalInfo = () => {
  return (
    <div>
      <div className="p-4 min-h-full  bg-secondary rounded-sm">
        {/* Profile Image */}
        <Image
          src="/heroPic.png"
          alt="profile image"
          width={200}
          height={200}
          className="border-white rounded-full m-2 p-2 border-2"
        />

        {/* Rating Component */}
        <Rating stars={3} className="flex justify-center items-center" />

        {/* Doctor Name */}
        <h3 className="text-center text-md font-semibold mt-2">
          Janet Jackson
        </h3>

        {/* Dynamically Render Personal Info */}
        <ul className=" space-y-3">
          {personalInfo.map((info, index) => (
            <li key={index} className="flex gap-1 items-center">
              {info.icon} <span className="text-sm">{info.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo
