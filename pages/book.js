import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import "../app/globals.css"
import Calendar from 'react-calendar';


import 'react-calendar/dist/Calendar.css';
  
export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());
  
    const handleDateChange = (selectedDate) => {
      selectedDate.setHours(17, 0, 0, 0);
      onChange(selectedDate);
      localStorage.setItem('selectedDate', selectedDate.toISOString()); // Save the selected date to local storage
    };
    
    return (
        <main>
            <div className="flex sm:justify-center space-x-4 ">
  <Navigation/>
     </div>

       
     <div className="flex flex-col items-center">
  <h1 className="text-center  font-bold m-10">Book arrival</h1>
  <div className="flex ">
    <Calendar value={value} onChange={handleDateChange}/>
  </div>
</div>
    
    </main>
    )}
