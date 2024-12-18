"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ForsideCTA from "./components/ForsideCTA";
import MiddagCTA from "./components/MiddagCTA";
import EftermiddagCTA from "./components/EftermiddagCTA";
import { HiArrowNarrowRight } from "react-icons/hi";

// Function to determine which CTA to show
const getCurrentCTA = () => {
  const hour = new Date().getHours();
  if (hour >= 7 && hour < 11) {
    return <ForsideCTA />;
  } else if (hour >= 11 && hour < 14) {
    return <MiddagCTA />;
  } else {
    return <EftermiddagCTA />;
  }
};

export default function Page() {
  const [currentCTA, setCurrentCTA] = useState(getCurrentCTA());

  // Update the CTA every 15 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCTA(getCurrentCTA());
    }, 15 * 60 * 1000); // 15 minutes in milliseconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <>
    <h1 className="text-center font-morningbrew">Velkommen til Madkammeret</h1>

    <section className="grid grid-row-4 grid-cols-2 gap-3 m-4">
    {getCurrentCTA()}

      <div className="bg-teal row-span-2 col-span-1 w-full h-full rounded-large drop-shadow-xl overflow-hidden flex flex-col justify-between">
      <h2>Om os</h2>
      <p className="p-2">Vil du hører mere om os her i Madkammeret så gå et smudt ind på vores hjemmeside, hvor der står meget mere.</p>
      <div className="flex flex-row justify-between">
      <Image src="/jacob.png" width={100} height={100} alt="billede af Jacob, Ejer af madkammeret"  className=" h-auto w-32 min-w-20"/> 
      <a className=" block  border-white border-4 rounded-full h-10 self-end  text-white m-2 mr-2 "> <HiArrowNarrowRight size={50} className=" flex self-center h-8 text-lg"/></a>
      </div>
      </div>

      <div className="bg-white row-span-1 col-span-1 w-full h-full rounded-large drop-shadow-xl">
     
        <h2 className="bg-butter p-2 rounded-t-large ">Tilbud</h2>
      <div className="flex rounded-b-large flex-col" >
        <p className="p-2">se hvad vi har på tilbud idag</p>
        <a className=" block  border-butter border-4 rounded-full h-10 self-end  m-2 mr-2 "> <HiArrowNarrowRight size={50} className=" flex self-center h-8 text-lg"/></a>
        </div>
      </div>


      <div className="bg-blush row-span-1 col-span-1 w-full h-full rounded-large drop-shadow-xl ">
     
        <h2 className="p-2 rounded-t-large ">Klippekort</h2>
      <div className="flex rounded-b-large flex-col" >
        <p className="p-2">Spar penge med vores nye kippekort</p>
        <a className=" block  border-white border-4 rounded-full h-10 self-end  m-2 mr-2 "> <HiArrowNarrowRight size={50} className=" flex self-center h-8 text-lg"/></a>
       </div>
      </div>

        <div className="bg-white row-span-1 col-span-2 w-full h-full rounded-large drop-shadow-xl">   
        <h2 className="bg-primary p-2 rounded-t-large ">Stop madspild</h2>

        <p className="p-2">Kom ned i kantinen, om eftermiddagen, se hvad vi kan tilbyde jer til aftensmad eller køb noget med hjem som i kan smide i fryseren! </p>
      </div>
    </section>

    </>


  );
}
