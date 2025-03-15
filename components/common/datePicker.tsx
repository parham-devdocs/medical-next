"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import moment from "moment";
import { useRouter } from 'next/navigation';

function DatePicker() {
  const router=useRouter()
  const today=moment()
 const startDate= today.format().split("T")[0]; // March 14th 2025, 10:16:24 pm
 const endDate=today.add(3,"months").format().split("T")[0]



    return(
        <FullCalendar
        selectable={false}
     
    validRange={{start:startDate,end:endDate}}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: 'harry manson', date: '2025-03-18', display: 'block',id:"1" },
            { title: 'khjbhkh', date: '2025-03-25', display: 'block',id:"2" }
          ]}
          
        eventBackgroundColor="hsl(108, 25%, 72%)"
        eventTextColor='black'
        eventClick={(info) => {
          const eventId = info.event.id; // Access the event ID from the `info` object
          router.push(`/admin/patients/${eventId}`);
        }}        
      />
    )
}

export default DatePicker