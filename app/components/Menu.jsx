"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import Paalaeg from "@/app/components/Paalaeg";
import Brod from "@/app/components/Brod";
import Dressing from "@/app/components/Dressing";
import Dip from "@/app/components/Dip";
import Salat from "@/app/components/Salat";
import Varmret from "@/app/components/Varmret";

const weekDays = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag"]; 

export default function Menu({ menuData }) {
  // Determine the current day index
  const todayIndex = new Date().getDay() - 1; // Adjusting for 0 (Sunday) and limiting to Monday-Friday
  const initialDayIndex = todayIndex >= 0 && todayIndex < weekDays.length ? todayIndex : 0; 

  const [currentDayIndex, setCurrentDayIndex] = useState(initialDayIndex);

  const currentDay = weekDays[currentDayIndex];
  const currentData = menuData[currentDay]; // Direct access by key

  const handlePreviousDay = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex === 0 ? weekDays.length - 1 : prevIndex - 1
    );
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex === weekDays.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="m-4">
      <div className="flex justify-between w-11/12 bg-cream rounded-xl m-auto px-4 py-1">
        <FaChevronLeft size={40} onClick={handlePreviousDay} className="cursor-pointer" />
        <h3 className="font-bold self-center">{currentDay.toUpperCase()}</h3>
        <FaChevronRight size={40} onClick={handleNextDay} className="cursor-pointer" />
      </div>

      <section className="grid grid-cols-2 gap-3 gap-y-0 mt-4">
        {currentData ? (
          <>
            <Varmret data={{ Hovedret: currentData.hovedret, vegetar: currentData.vegetar }} />

            {/* Salat */}
            <div className="grid grid-cols-2 col-span-2 gap-3 mb-3">
              <h2 className="col-span-2 text-left">Salat</h2>
              {currentData.salad.map((salad, index) => (
                <Salat key={index} data={salad} />
              ))}
            </div>

            {/* Dressing and Dip */}
            <h2 className="col-span-1 text-left">Dressing</h2>
            <h2 className="grid-cols-2  text-left">Dip</h2>
            <div className="grid grid-cols-2 col-span-2 gap-3 mb-3">
              <Dressing data={currentData.dressing} />
              <Dip data={currentData.dip} />
            </div>

            {/* Brød */}
            <h2 className="text-left">brød</h2>
            <div className="col-span-2 mb-3">
              <Brod />
            </div>

            {/* Pålæg */}
            <h2 className="col-span-2 text-left">Pålæg</h2>
            <div className="grid grid-cols-2 col-span-2 gap-3 mb-3">
              
              {currentData.pålæg.map((paalaeg, index) => (
                <Paalaeg key={index} data={paalaeg} />
              ))}
            </div>
          </>
        ) : (
          <p>No data available for {currentDay}</p>
        )}
      </section>
    </section>
  );
}
