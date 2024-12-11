"use client";

import { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";
export default function Varmret({ data }) {
    const [isVegan, setIsVegan] = useState(false);
  
    if (!data || (!data.Hovedret && !data.vegetar)) {
      return <p>Ingen data tilgængelig for varmret.</p>; // Fallback if no data is passed
    }
  
    const handleClick = () => {
      setIsVegan(!isVegan);
    };
  
    const currentOption = isVegan ? data.vegetar : data.Hovedret; // Switch between options
  
    return (
      <div className="col-span-2">
        <div className="flex justify-between">
          <h2>Varm ret</h2>
          <button
            className="underline text-xs self-end mr-2"
            onClick={handleClick}
          >
            {isVegan ? "Se kød muligheder her" : "Se vegetar muligheder her"}
          </button>
        </div>
        <div className="flex bg-butter overflow-hidden rounded-large">
          <Image
            src={"/placeholder-image.png"}
            width={200}
            height={200}
            alt={currentOption.name || "varmret"}
            className="self-end w-64"

          />
          <div>
            <h3 className="p-2 font-bold">{currentOption.name || currentOption.name}</h3>
            <p className="pl-2">{currentOption.description}</p>
          </div>
          <RiInformation2Line size={30} className="m-1 mr-2" />
        </div>
      </div>
    );
  }
  