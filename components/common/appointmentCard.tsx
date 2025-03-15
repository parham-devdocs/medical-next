import { Appointment } from "@/types";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";


function AppointmentCard({appointementData}:{appointementData:Appointment}) {
    return(
        <div className=" space-y-2">
<h2>{appointementData.with}</h2>
<h4><IoCalendarOutline/>{appointementData.date}</h4>
<h4><FaRegClock/>{appointementData.time}</h4>


        </div>
    )
}

export default AppointmentCard