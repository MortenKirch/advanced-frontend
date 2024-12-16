"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";

import Image from "next/image";

export default function MiddagCTA() {
  const [data, setData] = useState(""); // State for fetched data
  
  function getISOWeekNumber(date = new Date()) {
    const tempDate = new Date(date.getTime());
    tempDate.setUTCHours(0, 0, 0, 0);
    tempDate.setUTCDate(tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil(((tempDate - yearStart) / 86400000 + 1) / 7);
    return weekNumber;
  }
  const currentWeekNumber = getISOWeekNumber();

  // Get the current day of the week
  const getCurrentDayName = () => {
    const days = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
    const todayIndex = new Date().getDay(); // Returns 0 (Sunday) to 6 (Saturday)
    return days[todayIndex];
  };

  const currentDay = getCurrentDayName();

  useEffect(() => {
    // Fetch the data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/menu/uge${currentWeekNumber}.json`,{
          cache:"no-cache"
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result); // Save the data in state
      } catch (err) {
        setError(err.message); // Handle errors
      } 
    };

    fetchData();
  }, []);



  // If the current day is not part of the dataset, default to "fredag" or a fallback message
  const todayMenu =
    data[currentDay] ||
    (currentDay === "lørdag" || currentDay === "søndag" ? data["fredag"] : {});


  return (
    <div className="col-span-2 overflow-hidden rounded-large  drop-shadow-xl bg-cream">
      <h2 className="bg-gold p-4">Middagsmad</h2>
      <div className="flex  h-64 " >

        {todayMenu?.hovedret ? (
          <>

            <Image
              src={todayMenu.hovedret.image || "/placeholder.img"}
              width={200}
              height={200}
              alt={todayMenu.hovedret.name || "varmret"}
              className="self-end w-5/12 h-full object-cover"
            />
            <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="p-2 font-bold">{todayMenu.hovedret.name}</h3>
              <p className="pl-2">{todayMenu.hovedret.description}</p>
            </div>
            <div className="self-end ">
            <p>Se resten af menuen</p>
    <a  href="/pages/ugensMenu" className=" w-24 block justify-between  border-gold border-4 rounded-full h-10 self-end  m-2 mr-2 flex pl-4 p-1"> Her <HiArrowNarrowRight size={50} className=" flex self-center h-8 text-lg"/></a>

    </div>
    </div>
          </>

        ) : (
          <p className="pl-2">Ingen ret fundet for {currentDay}</p>
        )}
      </div>
    </div>
  );
}
