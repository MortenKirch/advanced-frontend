"use client";
import { useEffect, useState } from "react";
export default function GetDate(){
    
    
        const [currentDate, setCurrentDate] = useState("");
      
        useEffect(() => {
          const today = new Date().toISOString().split("T")[0];
          setCurrentDate(today); 
        }, []);
      
        
    return ( 
    <input type="Date" defaultValue={currentDate} min="2024-01-01" max="2099-12-31" className="w-1/2 border-black rounded-large border h-12 px-4 m-1" placeholder="Dato"/>
        );
      };


//

